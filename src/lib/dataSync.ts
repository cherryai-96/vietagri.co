import { documents, leads as fallbackLeads, mediaItems, seoSettings, siteSettings as fallbackSiteSettings, users } from '../admin/data/mockData';
import type { DocumentItem, EditablePage, Lead, MediaItem, SeoPageSetting, AdminUser, SiteSettings } from '../admin/types';
import type { TranslationResources } from '../i18n';
import { getSupabaseBrowserClient } from './supabase/browser';
import { buildCmsPageRow, buildLeadInsertPayload, buildLeadUpdatePayload, buildSeoSettingRow, type ContactLeadInput } from './siteSeed';

type SiteResourceContent = {
  common?: Record<string, unknown>;
  adminSettings?: Record<string, unknown>;
};

async function postAdminUpdate<T>(path: string, payload: unknown): Promise<{ data: T | null; error: { message: string } | null }> {
  if (typeof window === 'undefined') {
    return { data: null, error: { message: 'Admin update API is only available in the browser.' } };
  }

  try {
    const supabase = getSupabaseBrowserClient();
    const session = supabase ? (await supabase.auth.getSession()).data.session : null;
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      return { data: null, error: { message: body.error ?? `Request failed with status ${response.status}` } };
    }

    const body = await response.json();
    return { data: (body.data ?? null) as T | null, error: null };
  } catch {
    return { data: null, error: { message: 'Admin update API is unavailable.' } };
  }
}

export async function loadSiteResources(): Promise<TranslationResources | null> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return null;

  const { data, error } = await supabase.from('site_resources').select('language, content');
  if (error || !data?.length) return null;

  const remote: TranslationResources = { en: {}, vi: {} };
  for (const row of data) {
    if (row.language === 'en' || row.language === 'vi') {
      remote[row.language] = row.content as TranslationResources['en'];
    }
  }

  return remote;
}

export async function loadEditablePages(fallbackPages: EditablePage[]): Promise<EditablePage[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return fallbackPages;

  const { data, error } = await supabase
    .from('cms_pages')
    .select('slug, title, description, status, missing_vietnamese, updated_at, sections')
    .order('slug');

  if (error || !data?.length) return fallbackPages;

  return data.map((row) => ({
    slug: row.slug,
    title: row.title,
    description: row.description,
    status: row.status,
    missingVietnamese: row.missing_vietnamese,
    updatedAt: row.updated_at,
    sections: Array.isArray(row.sections) ? row.sections : [],
  })) as EditablePage[];
}

export async function saveEditablePage(page: EditablePage) {
  const payload = buildCmsPageRow(page);
  const apiResult = await postAdminUpdate('/api/admin/pages', payload);
  if (!apiResult.error) {
    return apiResult;
  }

  const supabase = getSupabaseBrowserClient();
  if (!supabase) return { data: payload, error: apiResult.error };

  const { data, error } = await supabase
    .from('cms_pages')
    .update(payload)
    .eq('slug', page.slug)
    .select()
    .single();

  return { data, error };
}

export async function loadLeads(): Promise<Lead[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return fallbackLeads;

  const { data, error } = await supabase
    .from('leads')
    .select('id, date, name, company, email, phone, country, area, message, source_page, status, assigned_to, last_updated, notes')
    .order('date', { ascending: false });

  if (error || !data?.length) return fallbackLeads;

  return data.map((row) => ({
    id: row.id,
    date: row.date,
    name: row.name,
    company: row.company,
    email: row.email,
    phone: row.phone,
    country: row.country,
    area: row.area,
    message: row.message,
    sourcePage: row.source_page,
    status: row.status,
    assignedTo: row.assigned_to,
    lastUpdated: row.last_updated,
    notes: Array.isArray(row.notes) ? row.notes : [],
  })) as Lead[];
}

export async function updateLead(id: string, input: Pick<Lead, 'status' | 'assignedTo' | 'notes'>) {
  const payload = buildLeadUpdatePayload(input);
  const apiResult = await postAdminUpdate('/api/admin/leads', { id, ...payload });
  if (!apiResult.error) {
    return apiResult;
  }

  const supabase = getSupabaseBrowserClient();
  if (!supabase) return { data: { id, ...payload }, error: apiResult.error };

  const { data, error } = await supabase
    .from('leads')
    .update(payload)
    .eq('id', id)
    .select()
    .single();

  return { data, error };
}

export async function submitLead(input: ContactLeadInput) {
  const supabase = getSupabaseBrowserClient();
  const payload = buildLeadInsertPayload(input);

  if (!supabase) {
    return { data: payload, error: null };
  }

  const { data, error } = await supabase.from('leads').insert({
    date: payload.date,
    name: payload.name,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    country: payload.country,
    area: payload.area,
    message: payload.message,
    source_page: payload.sourcePage,
    status: payload.status,
    assigned_to: payload.assignedTo,
    last_updated: payload.lastUpdated,
    notes: payload.notes,
  }).select().single();

  return { data, error };
}

export async function loadDocuments(): Promise<DocumentItem[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return documents;
  const { data, error } = await supabase.from('documents').select('*').order('updated_at', { ascending: false });
  if (error || !data?.length) return documents;
  return data.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    category: row.category,
    language: row.language,
    status: row.status,
    requireEmail: row.require_email,
    trackDownloads: row.track_downloads,
    downloads: row.downloads,
    updatedAt: row.updated_at,
  })) as DocumentItem[];
}

export async function loadMediaItems(): Promise<MediaItem[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return mediaItems;
  const { data, error } = await supabase.from('media_assets').select('*').order('updated_at', { ascending: false });
  if (error || !data?.length) return mediaItems;
  return data.map((row) => ({
    id: row.id,
    name: row.name,
    type: row.type,
    category: row.category,
    altText: row.alt_text,
    url: row.url,
    size: row.size,
    updatedAt: row.updated_at,
  })) as MediaItem[];
}

export async function loadSeoSettings(): Promise<SeoPageSetting[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return seoSettings;
  const { data, error } = await supabase.from('seo_settings').select('*').order('page');
  if (error || !data?.length) return seoSettings;
  return data.map((row) => ({
    page: row.page,
    title: row.title,
    description: row.description,
    slug: row.slug,
    focusKeywords: row.focus_keywords,
    indexed: row.indexed,
    sitemap: row.sitemap,
  })) as SeoPageSetting[];
}

export async function saveSeoSetting(setting: SeoPageSetting) {
  const payload = buildSeoSettingRow(setting);
  const apiResult = await postAdminUpdate('/api/admin/seo', payload);
  if (!apiResult.error) {
    return apiResult;
  }

  const supabase = getSupabaseBrowserClient();
  if (!supabase) return { data: payload, error: apiResult.error };

  const { data, error } = await supabase
    .from('seo_settings')
    .update(payload)
    .eq('page', setting.page)
    .select()
    .single();

  return { data, error };
}

export async function loadSiteSettings(): Promise<SiteSettings> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return fallbackSiteSettings;

  const { data, error } = await supabase
    .from('site_resources')
    .select('language, content');

  if (error || !data?.length) return fallbackSiteSettings;

  const englishRow = data.find((row) => row.language === 'en');
  const englishContent = (englishRow?.content ?? {}) as SiteResourceContent;
  const common = (englishContent.common ?? {}) as Record<string, unknown>;
  const admin = (englishContent.adminSettings ?? {}) as Record<string, unknown>;

  return {
    companyName: admin.companyName ?? fallbackSiteSettings.companyName,
    shortName: admin.shortName ?? fallbackSiteSettings.shortName,
    tagline: admin.tagline ?? fallbackSiteSettings.tagline,
    email: common.email ?? fallbackSiteSettings.email,
    phone: common.phone ?? fallbackSiteSettings.phone,
    officeHours: admin.officeHours ?? fallbackSiteSettings.officeHours,
    headquartersAddress: common.address ?? fallbackSiteSettings.headquartersAddress,
    linkedIn: admin.linkedIn ?? fallbackSiteSettings.linkedIn,
    facebook: admin.facebook ?? fallbackSiteSettings.facebook,
    youTube: admin.youTube ?? fallbackSiteSettings.youTube,
    googleAnalyticsId: admin.googleAnalyticsId ?? fallbackSiteSettings.googleAnalyticsId,
    googleTagManagerId: admin.googleTagManagerId ?? fallbackSiteSettings.googleTagManagerId,
    linkedInInsightTagId: admin.linkedInInsightTagId ?? fallbackSiteSettings.linkedInInsightTagId,
    maintenanceMode: admin.maintenanceMode ?? fallbackSiteSettings.maintenanceMode,
    defaultLanguage: admin.defaultLanguage ?? fallbackSiteSettings.defaultLanguage,
    timezone: admin.timezone ?? fallbackSiteSettings.timezone,
    adminNotificationEmail: admin.adminNotificationEmail ?? fallbackSiteSettings.adminNotificationEmail,
  } as SiteSettings;
}

export async function saveSiteSettings(settings: SiteSettings) {
  return postAdminUpdate('/api/admin/settings', settings);
}

export async function loadAdminUsers(): Promise<AdminUser[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return users;
  const { data, error } = await supabase.from('admin_users').select('*').order('created_at');
  if (error || !data?.length) return users;
  return data.map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    status: row.status,
    lastLogin: row.last_login,
    createdAt: row.created_at,
  })) as AdminUser[];
}
