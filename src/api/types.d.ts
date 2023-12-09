export interface IMainResult {
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
  
  export interface ICategory {
    id: number;
    name: string;
    text: string;
    lang: string;
    created_at: string;
    updated_at: string;
  }
  