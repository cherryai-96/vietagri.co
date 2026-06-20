import { documents, leads as fallbackLeads, mediaItems, seoSettings, users } from '../admin/data/mockData';
import type { DocumentItem, EditablePage, Lead, MediaItem, SeoPageSetting, AdminUser } from '../admin/types';
import type { TranslationResources } from '../i18n';
import { getSupabaseBrowserClient } from './supabase/browser';
import { buildLeadInsertPayload, type ContactLeadInput } from './siteSeed';

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
