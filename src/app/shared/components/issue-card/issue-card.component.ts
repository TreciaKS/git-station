import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubIssue } from '../../../core/models';
import { truncateText, formatDate } from '../../../core/utils';

@Component({
  selector: 'app-issue-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-card.component.html',
})
export class IssueCardComponent {
  @Input() issue!: GithubIssue;
  truncateText = truncateText;
  formatDate = formatDate;
}