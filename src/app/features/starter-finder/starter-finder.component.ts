import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../core/github.service';
import { GithubIssue } from '../../core/models';
import { IssueCardComponent } from '../../shared/components/issue-card/issue-card.component'

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

  constructor(private gh: GithubService) {}

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
