import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchSignalService } from '../../../core/signals/search-signal.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
  query = '';
  context: 'user' | 'repo' | 'issue' = 'user';
  private debounceTimer?: ReturnType<typeof setTimeout>;

  constructor(private searchSignal: SearchSignalService) {}

  ngOnInit(): void {
    this.query = this.searchSignal.searchTerm();
  }

  onInputChange(): void {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.searchSignal.updateSearch(this.query, this.context);
    }, 500);
  }

  onContextChange(): void {
    this.searchSignal.updateSearch(this.query, this.context);
  }

  clear(): void {
    this.query = '';
    this.searchSignal.clear();
  }
}