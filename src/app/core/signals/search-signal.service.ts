import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchSignalService {
  private _searchTerm = signal<string>('');
  private _searchContext = signal<'user' | 'repo' | 'issue'>('user');

  readonly searchTerm = computed(() => this._searchTerm());
  readonly searchContext = computed(() => this._searchContext());

  updateSearch(term: string, context: 'user' | 'repo' | 'issue'): void {
    this._searchTerm.set(term.trim());
    this._searchContext.set(context);
  }

  clear(): void {
    this._searchTerm.set('');
  }
}