export type Page = 'home' | 'services' | 'blog' | 'contact' | 'about' | 'faq';

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
