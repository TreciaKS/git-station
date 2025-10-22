import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GithubUser, GithubRepo, GithubIssue } from './models';

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`/api/github/user/${username}`);
  }

  getRepos(username: string, per_page = 50): Observable<GithubRepo[]> {
    const params = new HttpParams()
      .set('per_page', per_page)
      .set('sort', 'updated');
    return this.http.get<GithubRepo[]>(
      `https://api.github.com/users/${username}/repos`,
      {
        params,
      }
    );
  }

  searchRepos(params: HttpParams) {
    return this.http.get(`https://api.github.com/search/repositories`, {
      params,
    });
  }

  searchIssues(q: string, per_page = 30): Observable<{ items: GithubIssue[] }> {
    const params = new HttpParams().set('q', q).set('per_page', per_page);
    return this.http.get<{ items: GithubIssue[] }>(
      `https://api.github.com/search/issues`,
      { params }
    );
  }

  getGoodFirstIssues(language?: string, per_page = 30) {
    let q = 'is:issue label:"good first issue" state:open';

    if (language && language.trim()) {
      q += ` language:${language.trim()}`;
    }

    const params = new HttpParams()
      .set('q', q)
      .set('sort', 'created')
      .set('order', 'desc')
      .set('per_page', per_page);

    return this.http
      .get<{ items: GithubIssue[] }>(`https://api.github.com/search/issues`, {
        params,
      })
      .pipe(map((res) => res.items));
  }
}