import { createClient } from '@supabase/supabase-js';
import { loadEnv } from 'vite';
import { defaultResources } from '../src/i18n';
import { documents, mediaItems, seoSettings, users } from '../src/admin/data/mockData';
import { buildEditablePagesFromResources, buildCmsPageRow, buildSeoSettingRow, buildSiteResourceRows } from '../src/lib/siteSeed';

const env = { ...process.env, ...loadEnv('production', process.cwd(), '') };
const url = env.VITE_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

async function main() {
  const pages = buildEditablePagesFromResources(defaultResources);

  const siteRows = buildSiteResourceRows(defaultResources);
  const cmsRows = pages.map((page) => buildCmsPageRow(page));
  const docRows = documents.map((document) => ({
    id: document.id,
    title: document.title,
    description: document.description,
    category: document.category,
    language: document.language,
    status: document.status,
    require_email: document.requireEmail,
    track_downloads: document.trackDownloads,
    downloads: document.downloads,
    updated_at: document.updatedAt,
  }));
  const mediaRows = mediaItems.map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    category: item.category,
    alt_text: item.altText,
    url: item.url,
    size: item.size,
    updated_at: item.updatedAt,
  }));
  const seoRows = seoSettings.map((setting) => buildSeoSettingRow(setting));
  const userRows = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    last_login: user.lastLogin,
    created_at: user.createdAt,
  }));

  for (const [table, rows] of [
    ['site_resources', siteRows],
    ['cms_pages', cmsRows],
    ['documents', docRows],
    ['media_assets', mediaRows],
    ['seo_settings', seoRows],
    ['admin_users', userRows],
  ] as const) {
    const { error } = await supabase.from(table).upsert(rows);
    if (error) throw error;
    console.log(`Synced ${rows.length} rows into ${table}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
