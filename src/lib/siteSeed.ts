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
        {
          id: 'home-intro-slider',
          label: 'Home Intro Slider Images',
          heading: 'Slider Images',
          subheading: 'Format: JSON array of objects with src and alt',
          body: JSON.stringify(resources['en']?.home?.introImages || []),
          buttonText: '',
          buttonLink: '',
          visible: true,
          order: 3,
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

function updateText(resources: TranslationResources, language: 'en' | 'vi', path: string, newValue: string) {
  const keys = path.split('.');
  let current: any = resources[language];

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  if (current) {
    current[keys[keys.length - 1]] = newValue;
  }
}

export function updateResourcesFromEditablePage(resources: TranslationResources, page: EditablePage): TranslationResources {
  const updated = JSON.parse(JSON.stringify(resources)) as TranslationResources;
  const lang = 'en'; // Assuming CMS currently only edits English sections

  for (const section of page.sections) {
    if (section.id === 'home-hero') {
      updateText(updated, lang, 'home.heroTitle', section.heading);
      updateText(updated, lang, 'home.heroSub', section.subheading);
      updateText(updated, lang, 'home.advantageSub', section.body);
      updateText(updated, lang, 'common.partnerBtn', section.buttonText);
    } else if (section.id === 'home-spotlight') {
      updateText(updated, lang, 'home.spotlightTitle', section.heading);
      updateText(updated, lang, 'home.spotlightSub', section.subheading);
      updateText(updated, lang, 'home.spotlightDesc1', section.body);
      updateText(updated, lang, 'common.wolffiaBtn', section.buttonText);
    } else if (section.id === 'home-intro-slider') {
      try {
        const images = JSON.parse(section.body);
        if (Array.isArray(images)) {
          updated[lang].home.introImages = images;
        }
      } catch (e) {
        // ignore invalid JSON for images
      }
    } else if (section.id === 'about-hero') {
      updateText(updated, lang, 'about.heroTitle', section.heading);
      updateText(updated, lang, 'about.heroSub', section.subheading);
      updateText(updated, lang, 'about.missionDesc', section.body);
      updateText(updated, lang, 'common.contactBtn', section.buttonText);
    } else if (section.id === 'services-hero') {
      updateText(updated, lang, 'services.heroTitle', section.heading);
      updateText(updated, lang, 'services.heroSub', section.subheading);
      updateText(updated, lang, 'services.introDesc', section.body);
      updateText(updated, lang, 'common.consultationBtn', section.buttonText);
    } else if (section.id === 'wolffia-hero') {
      updateText(updated, lang, 'wolffia.heroTitle', section.heading);
      updateText(updated, lang, 'wolffia.heroSub', section.subheading);
      updateText(updated, lang, 'wolffia.introText1', section.body);
      updateText(updated, lang, 'common.sampleBtn', section.buttonText);
    } else if (section.id === 'sustainability-hero') {
      updateText(updated, lang, 'sustainability.heroTitle', section.heading);
      updateText(updated, lang, 'sustainability.heroSub', section.subheading);
      updateText(updated, lang, 'sustainability.introDesc1', section.body);
      updateText(updated, lang, 'common.inquireCertBtn', section.buttonText);
    } else if (section.id === 'contact-hero') {
      updateText(updated, lang, 'contact.heroTitle', section.heading);
      updateText(updated, lang, 'contact.heroSub', section.subheading);
      updateText(updated, lang, 'common.sendInquiry', section.buttonText);
    }
  }

  return updated;
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
