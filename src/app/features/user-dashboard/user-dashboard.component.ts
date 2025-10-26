import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../core/github.service';
import { GithubUser, GithubRepo } from '../../core/models';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { RepoCardComponent } from '../../shared/components/repo-card/repo-card.component';
import { AstroSideComponent } from "../../shared/components/astro-side/astro-side.component";
import { truncateText } from '../../core/utils'

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NotFoundComponent,
    LoaderComponent,
    RepoCardComponent,
    AstroSideComponent,
  ],
  templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent {
  username = 'TreciaKS';
  user: GithubUser | null = null;
  repos: GithubRepo[] = [];
  loading = false;
  error = '';
  emptySearch = false;
  notFound = false;
  truncateText = truncateText;

  constructor(private gh: GithubService) {}

  loadUser(): void {
    const name = this.username.trim();

    if (!name) {
      this.emptySearch = true;
      this.user = null;
      this.repos = [];
      this.notFound = false;
      this.error = '';
      return;
    }

    this.emptySearch = false;
    this.notFound = false;
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
      error: (err) => {
        this.loading = false;
        if (err.status === 404) {
          this.notFound = true;
        } else {
          this.error = 'Unexpected error. Please try again later.';
        }
      },
    });
  }
}
