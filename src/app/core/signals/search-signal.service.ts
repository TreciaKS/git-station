import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchSignalService {
  // Holds the current search term
  private _searchTerm = signal<string>('');

  // To expose read/write access
  readonly searchTerm = computed(() => this._searchTerm());

  updateSearch(term: string): void {
    this._searchTerm.set(term.trim());
  }

  clear(): void {
    this._searchTerm.set('');
  }
}