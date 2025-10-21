import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { map, Observable } from 'rxjs';
import { GithubUser, GithubRepo, GithubIssue } from './models';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private api = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  private get headers(): HttpHeaders {
    const headers = new HttpHeaders();
    if (environment.githubToken) {
      return headers.set('Authorization', `Bearer ${environment.githubToken}`);
    }
    return headers;
  }

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.api}/users/${username}`, {
      headers: this.headers,
    });
  }

  getRepos(username: string, per_page = 50): Observable<GithubRepo[]> {
    const params = new HttpParams()
      .set('per_page', per_page)
      .set('sort', 'updated');
    return this.http.get<GithubRepo[]>(`${this.api}/users/${username}/repos`, {
      headers: this.headers,
      params,
    });
  }

  searchRepos(params: HttpParams) {
    return this.http.get(`${this.api}/search/repositories`, {
      headers: this.headers,
      params,
    });
  }

  searchIssues(q: string, per_page = 30): Observable<{ items: GithubIssue[] }> {
    const params = new HttpParams().set('q', q).set('per_page', per_page);
    return this.http.get<{ items: GithubIssue[] }>(
      `${this.api}/search/issues`,
      { headers: this.headers, params }
    );
  }

  getGoodFirstIssues(
    language?: string,
    per_page = 30
  ): Observable<GithubIssue[]> {
    let q = 'label:"good first issue" state:open';
    if (language) q += ` language:${language}`;
    return this.searchIssues(q, per_page).pipe(map((res) => res.items));
  }
}