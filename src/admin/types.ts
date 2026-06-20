import type { LucideIcon } from 'lucide-react';

export type AdminRole = 'Super Admin' | 'Content Editor' | 'Sales Manager' | 'Marketing Editor' | 'Viewer';

export type LeadStatus =
  | 'New'
  | 'Contacted'
  | 'Qualified'
  | 'Proposal Sent'
  | 'In Negotiation'
  | 'Won'
  | 'Lost'
  | 'Spam';

export type Language = 'English' | 'Tiếng Việt';

export type PageSlug = 'home' | 'about' | 'core-services' | 'viet-wolffia' | 'sustainability' | 'contact';

export interface SidebarItem {
  label: string;
  href?: string;
  icon: LucideIcon;
  children?: Array<{ label: string; href: string }>;
}

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  tone: 'green' | 'gold' | 'blue' | 'gray';
}

export interface Lead {
  id: string;
  date: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  area: string;
  message: string;
  sourcePage: string;
  status: LeadStatus;
  assignedTo: string;
  lastUpdated: string;
  notes: string[];
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  language: 'English' | 'Vietnamese' | 'Both';
  status: 'Published' | 'Draft';
  requireEmail: boolean;
  trackDownloads: boolean;
  downloads: number;
  updatedAt: string;
}

export interface MediaItem {
  id: string;
  name: string;
  type: 'Image' | 'Video' | 'PDF' | 'Logo' | 'Icon';
  category: string;
  altText: string;
  url: string;
  size: string;
  updatedAt: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  status: 'Active' | 'Disabled';
  lastLogin: string;
  createdAt: string;
}

export interface PageSection {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  body: string;
  buttonText: string;
  buttonLink: string;
  visible: boolean;
  order: number;
}

export interface EditablePage {
  slug: PageSlug;
  title: string;
  description: string;
  status: 'Published' | 'Draft';
  missingVietnamese: number;
  updatedAt: string;
  sections: PageSection[];
}

export interface SeoPageSetting {
  page: string;
  title: string;
  description: string;
  slug: string;
  focusKeywords: string;
  indexed: boolean;
  sitemap: boolean;
}

export interface SiteSettings {
  companyName: string;
  shortName: string;
  tagline: string;
  email: string;
  phone: string;
  officeHours: string;
  headquartersAddress: string;
  linkedIn: string;
  facebook: string;
  youTube: string;
  googleAnalyticsId: string;
  googleTagManagerId: string;
  linkedInInsightTagId: string;
  maintenanceMode: boolean;
  defaultLanguage: 'English' | 'Vietnamese';
  timezone: string;
  adminNotificationEmail: string;
}
