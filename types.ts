export enum EventType {
  CORPORATE = 'CORPORATE',
  PRIVATE = 'PRIVATE',
  WEDDING = 'WEDDING',
  OTHER = 'OTHER'
}

export interface Review {
  id: string;
  text: string;
  author: string;
  location: string;
  role?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export interface ContentData {
  themeColor: string;
  heroTitle: string;
  heroSubtitle: string;
  heroLocations: string;
  quote: string;
  bannerTags: string[];
  reviews: Review[];
  whyChoose: {
    title: string;
    description: string;
    points: string[];
    summary: string;
  };
  faqs: FaqCategory[];
}