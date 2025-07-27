import { ReactNode } from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Worry {
  text: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProfileDetailItem {
  label: string;
  value: React.ReactNode;
}

export interface ProfileHistoryItem {
    year: string;
    description: React.ReactNode;
}

export interface ProfileDetails {
    details: ProfileDetailItem[];
    history: ProfileHistoryItem[];
}

// Re-defined Service types for detailed content
export interface ServiceItem {
  title: string;
  content: ReactNode;
}

export interface ServiceCategory {
  categoryTitle: string;
  items: ServiceItem[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PriceTier {
  revenue: string;
  corporateFee: string;
  individualFee: string;
}

export interface OtherFee {
    title: string;
    content: ReactNode;
}

export interface PricingInfo {
    title: string;
    subtitle: string;
    notice: string[];
    annualFeeTitle: string;
    tiers: PriceTier[];
    annualFeeNotes: ReactNode;
    otherFeesTitle: string;
    otherFees: OtherFee[];
}

export interface Testimonial {
    text: string;
    author: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NewsItem {
    date: string;
    category: 'お知らせ' | '税務トピック' | 'コラム';
    title: string;
    link: string;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model' | 'system';
    content: string;
    isLoading?: boolean;
}

export interface ContentSection {
  title: string;
  content: ReactNode;
  icon?: ReactNode;
}

export interface ContentPage {
  id: string;
  mainIcon: ReactNode;
  title: string;
  subtitle: string;
  sections: ContentSection[];
  notice?: ReactNode;
}

export interface TaxTopicItem {
  title: string;
  link?: string;
  content?: React.ReactNode;
  subItems?: TaxTopicItem[];
}

export interface TaxTopicCategory {
  categoryTitle: string;
  items: TaxTopicItem[];
}

export interface TaxTopicsContent {
    title: string;
    subtitle: string;
    categories: TaxTopicCategory[];
    other: {
        title: string;
        subtitle:string;
        items: TaxTopicItem[];
    }
}

export interface PrivacyPolicyContent {
    title: string;
    content: ReactNode;
    contact: {
        line1: string;
        line2: string;
    };
}