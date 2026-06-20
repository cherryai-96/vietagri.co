import type { EditablePage, Lead, SeoPageSetting, SiteSettings } from '../admin/types';
import { editablePages as fallbackEditablePages, seoSettings as fallbackSeoSettings, siteSettings as fallbackSiteSettings } from '../admin/data/mockData';
import type { TranslationResources } from '../i18n';

export interface ContactLeadInput {
  fullName: string;
  jobTitle: string;
  companyName: string;
  email: string;
  phone: string;
  destination: string;
  interests: string[];
  department: string;
  projectDetails: string;
}

function stripHtml(value: string) {
  return value.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function getText(resources: TranslationResources, language: 'en' | 'vi', path: string) {
  const keys = path.split('.');
  let current: unknown = resources[language];

  for (const key of keys) {
    if (!current || typeof current !== 'object' || !(key in current)) {
      return path;
    }
    current = (current as Record<string, unknown>)[key];
  }

  return typeof current === 'string' ? current : path;
}

export function buildEditablePagesFromResources(resources: TranslationResources): EditablePage[] {
  const base = fallbackEditablePages;

  return [
    {
      ...base.find((page) => page.slug === 'home')!,
      sections: [
        {
          id: 'home-hero',
          label: 'Hero Section',
          heading: stripHtml(getText(resources, 'en', 'home.heroTitle')),
          subheading: stripHtml(getText(resources, 'en', 'home.heroSub')),
          body: stripHtml(getText(resources, 'en', 'home.advantageSub')),
          buttonText: getText(resources, 'en', 'common.partnerBtn'),
          buttonLink: '/contact',
          visible: true,
          order: 1,
        },
        {
          id: 'home-spotlight',
          label: 'Flagship Operation Spotlight',
          heading: stripHtml(getText(resources, 'en', 'home.spotlightTitle')),
          subheading: stripHtml(getText(resources, 'en', 'home.spotlightSub')),
          body: stripHtml(getText(resources, 'en', 'home.spotlightDesc1')),
          buttonText: getText(resources, 'en', 'common.wolffiaBtn'),
          buttonLink: '/viet-wolffia',
          visible: true,
          order: 2,
        },
      ],
    },
    {
      ...base.find((page) => page.slug === 'about')!,
      sections: [
        {
          id: 'about-hero',
          label: 'Hero Section',
          heading: stripHtml(getText(resources, 'en', 'about.heroTitle')),
          subheading: stripHtml(getText(resources, 'en', 'about.heroSub')),
          body: stripHtml(getText(resources, 'en', 'about.missionDesc')),
          buttonText: getText(resources, 'en', 'common.contactBtn'),
          buttonLink: '/contact',
          visible: true,
          order: 1,
        },
      ],
    },
    {
      ...base.find((page) => page.slug === 'core-services')!,
      sections: [
        {
          id: 'services-hero',
          label: 'Hero Section',
          heading: stripHtml(getText(resources, 'en', 'services.heroTitle')),
          subheading: stripHtml(getText(resources, 'en', 'services.heroSub')),
          body: stripHtml(getText(resources, 'en', 'services.introDesc')),
          buttonText: getText(resources, 'en', 'common.consultationBtn'),
          buttonLink: '/contact',
          visible: true,
          order: 1,
        },
      ],
    },
    {
      ...base.find((page) => page.slug === 'viet-wolffia')!,
      sections: [
        {
          id: 'wolffia-hero',
          label: 'Hero Section',
          heading: stripHtml(getText(resources, 'en', 'wolffia.heroTitle')),
          subheading: stripHtml(getText(resources, 'en', 'wolffia.heroSub')),
          body: stripHtml(getText(resources, 'en', 'wolffia.introText1')),
          buttonText: getText(resources, 'en', 'common.sampleBtn'),
          buttonLink: '/contact',
          visible: true,
          order: 1,
        },
      ],
    },
    {
      ...base.find((page) => page.slug === 'sustainability')!,
      sections: [
        {
          id: 'sustainability-hero',
          label: 'Hero Section',
          heading: stripHtml(getText(resources, 'en', 'sustainability.heroTitle')),
          subheading: stripHtml(getText(resources, 'en', 'sustainability.heroSub')),
          body: stripHtml(getText(resources, 'en', 'sustainability.introDesc1')),
          buttonText: getText(resources, 'en', 'common.inquireCertBtn'),
          buttonLink: '/contact',
          visible: true,
          order: 1,
        },
      ],
    },
    {
      ...base.find((page) => page.slug === 'contact')!,
      sections: [
        {
          id: 'contact-hero',
          label: 'Hero Section',
          heading: stripHtml(getText(resources, 'en', 'contact.heroTitle')),
          subheading: stripHtml(getText(resources, 'en', 'contact.heroSub')),
          body: 'No 59, Truong Dang Que Street, Hanh Thong Ward, Ho Chi Minh City, Vietnam, 71423',
          buttonText: getText(resources, 'en', 'common.sendInquiry'),
          buttonLink: '/contact',
          visible: true,
          order: 1,
        },
      ],
    },
  ];
}

export function buildSiteResourceRows(resources: TranslationResources) {
  return [
    { language: 'en', content: resources.en },
    { language: 'vi', content: resources.vi },
  ];
}

export function buildSeoSeed(): SeoPageSetting[] {
  return fallbackSeoSettings;
}

export function buildSiteSettingsSeed(): SiteSettings {
  return fallbackSiteSettings;
}

export function buildCmsPageRow(page: EditablePage) {
  return {
    slug: page.slug,
    title: page.title,
    description: page.description,
    status: page.status,
    missing_vietnamese: page.missingVietnamese,
    updated_at: page.updatedAt,
    sections: page.sections,
  };
}

export function buildSeoSettingRow(setting: SeoPageSetting) {
  return {
    page: setting.page,
    title: setting.title,
    description: setting.description,
    slug: setting.slug,
    focus_keywords: setting.focusKeywords,
    indexed: setting.indexed,
    sitemap: setting.sitemap,
  };
}

export function buildSiteSettingsRow(settings: SiteSettings) {
  return {
    id: 'primary',
    company_name: settings.companyName,
    short_name: settings.shortName,
    tagline: settings.tagline,
    email: settings.email,
    phone: settings.phone,
    office_hours: settings.officeHours,
    headquarters_address: settings.headquartersAddress,
    linkedin: settings.linkedIn,
    facebook: settings.facebook,
    youtube: settings.youTube,
    google_analytics_id: settings.googleAnalyticsId,
    google_tag_manager_id: settings.googleTagManagerId,
    linkedin_insight_tag_id: settings.linkedInInsightTagId,
    maintenance_mode: settings.maintenanceMode,
    default_language: settings.defaultLanguage,
    timezone: settings.timezone,
    admin_notification_email: settings.adminNotificationEmail,
  };
}

export function buildLeadInsertPayload(input: ContactLeadInput): Omit<Lead, 'id'> {
  const today = new Date().toISOString().slice(0, 10);

  return {
    date: today,
    name: input.fullName.trim(),
    company: input.companyName.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    country: input.destination.trim() || 'Unknown',
    area: input.interests.length > 0 ? input.interests.join(', ') : input.department,
    message: input.projectDetails.trim(),
    sourcePage: 'Contact Us',
    status: 'New',
    assignedTo: 'Sales Manager',
    lastUpdated: today,
    notes: input.jobTitle ? [`Job title: ${input.jobTitle}`] : [],
  };
}

export function buildLeadUpdatePayload(input: Pick<Lead, 'status' | 'assignedTo' | 'notes'>) {
  return {
    status: input.status,
    assigned_to: input.assignedTo,
    notes: input.notes,
    last_updated: new Date().toISOString().slice(0, 10),
  };
}
