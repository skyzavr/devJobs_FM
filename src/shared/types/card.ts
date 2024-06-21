export type subContent = { content: string; items: string[] };
export type job = {
  id: string;
  logo: string;
  company: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: subContent;
  role: subContent;
};
export type init = {
  entities: job[];
  error: boolean;
  loading: boolean;
  errorMsg: string;
};
