export interface Project {
  id: number;
  name: string;
  type: 'hardware' | 'software';
  categoryName?: string;
  categoryId?: string;
  levelId?: string;
  level?: string;
  badge: string;
  borderColor?: string;
  overview: string;
  works?: string[];
  features?: string[];
  components?: string[];
  techStack?: string[];
  outcomes?: string[];
  apps?: string;
}

export interface Blog {
  id: number;
  title: string;
  category: string;
  summary: string;
  link: string;
}

export interface FAQItem {
  q: string;
  a: string;
}
