import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../core/github.service';
import { GithubIssue } from '../../core/models';
import { IssueCardComponent } from '../../shared/components/issue-card/issue-card.component';
import { SearchSignalService } from '../../core/signals/search-signal.service';
import { LoaderComponent } from '../../shared/components/loader/loader.component'
import { AstroSideComponent } from "../../shared/components/astro-side/astro-side.component";
import { NotFoundComponent } from "../../shared/components/not-found/not-found.component";

@Component({
  selector: 'app-starter-finder',
  standalone: true,
  imports: [CommonModule, FormsModule, IssueCardComponent, LoaderComponent, AstroSideComponent, NotFoundComponent],
  templateUrl: './starter-finder.component.html',
})
export class StarterFinderComponent {
  language = '';
  issues: GithubIssue[] = [];
  loading = false;
  error = '';

  constructor(
    private gh: GithubService,
    private searchSignal: SearchSignalService
  ) {
    effect(() => {
      const term = this.searchSignal.searchTerm();
      const context = this.searchSignal.searchContext();
      if (context === 'issue' && term) {
        this.language = term;
        this.search();
      }
    });
  }

  search() {
    const query = this.language.trim() || '';
    this.loading = true;
    this.error = '';
    this.issues = [];

    this.gh.getGoodFirstIssues(query).subscribe({
      next: (items) => {
        this.issues = items;
        this.loading = false;
      },
      error: (err) => {
        this.error =
          err.status === 422
            ? 'Invalid search query — try a simpler term (e.g., "javascript").'
            : 'Search failed (rate-limited or offline)';
        this.loading = false;
      },
    });
  }
}
