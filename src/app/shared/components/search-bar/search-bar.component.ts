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

  constructor(private searchSignal: SearchSignalService) {}

  ngOnInit(): void {
    // Sync if signal already has a value
    this.query = this.searchSignal.searchTerm();
  }

  onSearch(): void {
    this.searchSignal.updateSearch(this.query);
  }

  clear(): void {
    this.query = '';
    this.searchSignal.clear();
  }
}