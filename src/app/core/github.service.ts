import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GithubUser, GithubRepo, GithubIssue } from './models';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private baseUrl = 'https://api.github.com';
  private headers = new HttpHeaders({
    'User-Agent': 'AngularApp',
    Accept: 'application/vnd.github.v3+json',
  });

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.baseUrl}/users/${username}`, {
      headers: this.headers,
    });
  }

  getRepos(username: string, per_page = 50): Observable<GithubRepo[]> {
    const params = new HttpParams()
      .set('per_page', per_page)
      .set('sort', 'updated');
    return this.http.get<GithubRepo[]>(
      `${this.baseUrl}/users/${username}/repos`,
      {
        headers: this.headers,
        params,
      }
    );
  }

  searchRepos(params: HttpParams) {
    return this.http.get(`${this.baseUrl}/search/repositories`, {
      headers: this.headers,
      params,
    });
  }

  searchIssues(q: string, per_page = 30): Observable<{ items: GithubIssue[] }> {
    const params = new HttpParams().set('q', q).set('per_page', per_page);
    return this.http.get<{ items: GithubIssue[] }>(
      `${this.baseUrl}/search/issues`,
      {
        headers: this.headers,
        params,
      }
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
      .get<{ items: GithubIssue[] }>(`${this.baseUrl}/search/issues`, {
        headers: this.headers,
        params,
      })
      .pipe(map((res) => res.items));
  }
}