import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../core/github.service';
import { SearchSignalService } from '../../core/signals/search-signal.service';
import { GithubUser, GithubRepo } from '../../core/models';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent {
  username = '';
  user: GithubUser | null = null;
  repos: GithubRepo[] = [];
  loading = false;
  error = '';

  constructor(
    private gh: GithubService,
    private searchSignal: SearchSignalService
  ) {
    // React to global search updates
    effect(() => {
      const query = this.searchSignal.searchTerm();
      if (query && query !== this.username) {
        this.username = query;
        this.loadUser();
      }
    });
  }

  loadUser(): void {
    const name = this.username.trim();
    if (!name) return;
    this.loading = true;
    this.error = '';
    this.user = null;
    this.repos = [];

    this.gh.getUser(name).subscribe({
      next: (u: GithubUser) => {
        this.user = u;
        this.gh.getRepos(name).subscribe({
          next: (r: GithubRepo[]) => {
            this.repos = r;
            this.loading = false;
          },
          error: () => {
            this.error = 'Failed to load repos';
            this.loading = false;
          },
        });
      },
      error: () => {
        this.error = 'User not found or rate-limited';
        this.loading = false;
      },
    });
  }
}