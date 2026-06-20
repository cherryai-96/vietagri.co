import { getAdminSupabaseClient, json, readJsonBody, requireAuthenticatedAdmin } from './_shared.js';

type SiteResourceContent = {
  common?: Record<string, unknown>;
  adminSettings?: Record<string, unknown>;
  [key: string]: unknown;
};

type SiteSettingsInput = {
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
  defaultLanguage: string;
  timezone: string;
  adminNotificationEmail: string;
};

function mergeSettings(content: SiteResourceContent, language: 'en' | 'vi', input: SiteSettingsInput) {
  const next = structuredClone(content);
  next.common = next.common ?? {};
  next.adminSettings = {
    ...(next.adminSettings ?? {}),
    companyName: input.companyName,
    shortName: input.shortName,
    tagline: input.tagline,
    officeHours: input.officeHours,
    linkedIn: input.linkedIn,
    facebook: input.facebook,
    youTube: input.youTube,
    googleAnalyticsId: input.googleAnalyticsId,
    googleTagManagerId: input.googleTagManagerId,
    linkedInInsightTagId: input.linkedInInsightTagId,
    maintenanceMode: input.maintenanceMode,
    defaultLanguage: input.defaultLanguage,
    timezone: input.timezone,
    adminNotificationEmail: input.adminNotificationEmail,
  };

  next.common.email = input.email;
  next.common.address = language === 'vi' ? next.common.address : input.headquartersAddress;
  next.common.phone = input.phone;
  next.common.hours = input.officeHours;

  return next;
}

export async function POST(request: Request) {
  try {
    const auth = await requireAuthenticatedAdmin(request);
    if (auth.error) return json({ error: auth.error }, { status: 401 });

    const input = await readJsonBody(request) as SiteSettingsInput;
    const supabase = getAdminSupabaseClient();
    const { data: resources, error: loadError } = await supabase.from('site_resources').select('language, content');

    if (loadError || !resources?.length) {
      return json({ error: loadError?.message ?? 'Missing site resources.' }, { status: 400 });
    }

    const rows = resources.map((row) => ({
      language: row.language,
      content: mergeSettings((row.content ?? {}) as SiteResourceContent, row.language, input),
    }));

    const { data, error } = await supabase.from('site_resources').upsert(rows).select();

    if (error) return json({ error: error.message }, { status: 400 });
    return json({ data });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Unexpected error.' }, { status: 500 });
  }
}
