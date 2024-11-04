export default interface IRepo {
  id: number;
  name: string;
  full_name: string;

  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  watchers: number;
  score: number;
}
