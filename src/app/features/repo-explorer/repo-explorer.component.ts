import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../core/github.service';
import { SearchSignalService } from '../../core/signals/search-signal.service';
import { RepoCardComponent } from '../../shared/components/repo-card/repo-card.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { GithubRepo } from '../../core/models';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-repo-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule, RepoCardComponent, LoaderComponent],
  templateUrl: './repo-explorer.component.html',
})
export class RepoExplorerComponent {
  repos: GithubRepo[] = [];
  loading = false;
  error = '';
  query = '';

  constructor(
    private gh: GithubService,
    private searchSignal: SearchSignalService
  ) {
    // React to global search updates
    effect(() => {
      const term = this.searchSignal.searchTerm();
      const context = this.searchSignal.searchContext();
      if (context === 'repo' && term) {
        this.query = term;
        this.searchRepos(term);
      }
    });
  }

  searchRepos(term: string): void {
    if (!term.trim()) return;
    this.loading = true;
    this.error = '';
    this.repos = [];

    const q = term.replace(/\s+/g, '+');
    const params = new HttpParams()
      .set('q', q)
      .set('sort', 'stars')
      .set('order', 'desc')
      .set('per_page', 20);

    this.gh.searchRepos(params).subscribe({
      next: (res: any) => {
        this.repos = res.items || [];
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch repositories (rate-limited?)';
        this.loading = false;
      },
    });
  }
}
