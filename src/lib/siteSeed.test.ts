import test from 'node:test';
import assert from 'node:assert/strict';
import { buildEditablePagesFromResources, buildLeadInsertPayload } from './siteSeed';
import { defaultResources } from '../i18n';

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
