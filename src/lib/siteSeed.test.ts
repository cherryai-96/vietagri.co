import test from 'node:test';
import assert from 'node:assert/strict';
import { buildEditablePagesFromResources, buildLeadInsertPayload, buildCmsPageRow, buildSeoSettingRow, buildSiteSettingsRow, buildLeadUpdatePayload } from './siteSeed';
import { defaultResources } from '../i18n';
import { siteSettings } from '../admin/data/mockData';

test('buildEditablePagesFromResources derives key website pages from translation resources', () => {
  const pages = buildEditablePagesFromResources(defaultResources);
  const home = pages.find((page) => page.slug === 'home');
  const contact = pages.find((page) => page.slug === 'contact');

  assert.ok(home);
  assert.ok(contact);
  assert.equal(home?.sections[0]?.buttonLink, '/contact');
  assert.match(String(home?.sections[0]?.heading), /Vietnamese Agriculture|Nông Sản Việt/i);
  assert.match(String(contact?.sections[0]?.body), /Truong Dang Que|Trương Đăng Quế/i);
});

test('buildLeadInsertPayload maps contact form data into lead row shape', () => {
  const payload = buildLeadInsertPayload({
    fullName: 'Jane Doe',
    jobTitle: 'Buyer',
    companyName: 'Global Foods',
    email: 'jane@example.com',
    phone: '+1 555 1000',
    destination: 'United States',
    interests: ['Viet Wolffia', 'Export Logistics'],
    department: 'sourcing',
    projectDetails: 'Need specs and sample lead time.',
  });

  assert.equal(payload.name, 'Jane Doe');
  assert.equal(payload.company, 'Global Foods');
  assert.equal(payload.country, 'United States');
  assert.equal(payload.area, 'Viet Wolffia, Export Logistics');
  assert.equal(payload.status, 'New');
});

test('buildCmsPageRow maps admin page draft into database row shape', () => {
  const page = buildEditablePagesFromResources(defaultResources)[0];
  const row = buildCmsPageRow(page);

  assert.equal(row.slug, page.slug);
  assert.equal(row.missing_vietnamese, page.missingVietnamese);
  assert.deepEqual(row.sections, page.sections);
});

test('buildSeoSettingRow maps SEO draft into database row shape', () => {
  const row = buildSeoSettingRow({
    page: 'Home',
    title: 'VAC Home',
    description: 'Premium sourcing from Vietnam.',
    slug: '/',
    focusKeywords: 'Vietnam agriculture sourcing',
    indexed: true,
    sitemap: false,
  });

  assert.equal(row.page, 'Home');
  assert.equal(row.focus_keywords, 'Vietnam agriculture sourcing');
  assert.equal(row.sitemap, false);
});

test('buildSiteSettingsRow maps site settings draft into database row shape', () => {
  const row = buildSiteSettingsRow(siteSettings);

  assert.equal(row.company_name, 'Vietnam Agriculture Center (VAC)');
  assert.equal(row.default_language, 'English');
  assert.equal(row.maintenance_mode, false);
});

test('buildLeadUpdatePayload maps lead workflow changes into database row shape', () => {
  const row = buildLeadUpdatePayload({
    status: 'Qualified',
    assignedTo: 'Sales Manager',
    notes: ['Requested product specs'],
  });

  assert.equal(row.status, 'Qualified');
  assert.equal(row.assigned_to, 'Sales Manager');
  assert.deepEqual(row.notes, ['Requested product specs']);
  assert.match(String(row.last_updated), /^\d{4}-\d{2}-\d{2}$/);
});
