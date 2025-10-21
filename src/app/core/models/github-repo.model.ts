export interface GithubRepo {
  name: string;
  full_name: string;
  description?: string;
  html_url: string;
  language?: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
}