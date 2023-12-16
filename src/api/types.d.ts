export interface IPagination {
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
  };
  links: {
    first_page_url: string | null;
    last_page_url: string | null;
    next_page_url: string | null;
    prev_page_url: string | null;
  };
}

export interface IWellcomeResult {
  hero: {
    name: string;
    title: string;
    text: string;
    "ask-button": string;
  };
  tech: {
    title: string;
  };
  services: {
    "small-title": string;
    title: string;
    text: string;
    "ask-button": string;
    items: {
      name: string;
      id: number;
      title: string;
      subtitle: string;
      lang: string;
    }[];
  };
  "working-process": {
    "small-title": string;
    title: string;
  };
}

export interface ICategoryResult {
  id: number;
  name: string;
  text: string;
  lang: string;
  created_at: string;
  updated_at: string;
}

interface ITag {
  id: number;
  name: string;
  text: string;
  category_id: number;
  visit: number;
  lang: string;
  created_at: null | string;
  updated_at: string | null;
  pivot: {
    article_id: number;
    tag_id: number;
  };
}

interface IArticle {
  id: number;
  name: string;
  author_id: number;
  title: string;
  subtext: string;
  text: string;
  category_id: number;
  visit: number;
  read_time: number;
  like: number;
  lang: string;
  published: number;
  created_at: null | string;
  updated_at: null | string;
  image_url: string;
}

interface IArticleShort {
  id: number;
  name: string;
  author_id: number;
  title: string;
  subtext: string;
  image_url: string;
  text: string;
  category_id: number;
  visit: number;
  read_time: number;
  like: number;
  lang: string;
  created_at?: string;
  updated_at?: string;
  author: Author;
  category: ICategoryResult;
  tags: ITag[];
}

interface Author {
  id: number;
  name: string;
  email: string;
  phone_number?: any;
  email_verified_at?: any;
  activation_token?: any;
  active: number;
  created_at: string;
  updated_at: string;
}

export interface IArticlesResult extends IPagination {
  data: IArticleShort[];
}

export interface IArticleParams {
  lang: string;
  page: number;
  count?: number;
  category?: number;
  popular?: boolean;
  tag?: number
}
