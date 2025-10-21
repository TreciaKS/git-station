export interface GithubIssue {
  title: string;
  html_url: string;
  state: 'open' | 'closed';
  body?: string;
  repository_url: string;
  created_at: string;
  updated_at: string;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}