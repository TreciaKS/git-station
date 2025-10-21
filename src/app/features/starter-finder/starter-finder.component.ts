import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../core/github.service';
import { GithubIssue } from '../../core/models';
import { IssueCardComponent } from '../../shared/components/issue-card/issue-card.component';
import { SearchSignalService } from '../../core/signals/search-signal.service';

@Component({
  selector: 'app-starter-finder',
  standalone: true,
  imports: [CommonModule, FormsModule, IssueCardComponent],
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

  search(): void {
    this.loading = true;
    this.error = '';
    this.issues = [];

    this.gh.getGoodFirstIssues(this.language.trim()).subscribe({
      next: (items: GithubIssue[]) => {
        this.issues = items;
        this.loading = false;
      },
      error: () => {
        this.error = 'Search failed (rate-limited?)';
        this.loading = false;
      },
    });
  }
}
