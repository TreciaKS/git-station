import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepo } from '../../../core/models';
import { formatDate } from '../../../core/utils';

@Component({
  selector: 'app-repo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo-card.component.html',
})
export class RepoCardComponent {
  @Input() repo!: GithubRepo;

  formatDate = formatDate;
}