import { useState } from 'react';
import { Download, Plus, Save, ShieldCheck, Upload } from 'lucide-react';
import {
  Button,
  DataTable,
  FormField,
  PageHeader,
  SEOEditorPlaceholder,
  SelectField,
  StatusBadge,
  TextareaField,
  ToggleSwitch,
  ToastNotification,
  UploadField,
  cardClass,
  LoadingState,
} from '../components/ui';
import { useAdminLanguage } from '../adminI18n';
import { useAdminUsersData, useDocumentsData, useMediaItemsData, useSeoSettingsData } from '../data/useAdminData';

export function MediaPage() {
  const { mediaItems, loading } = useMediaItemsData();

  if (loading) return <LoadingState />;

  return (
    <div>
      <PageHeader
        eyebrow="Asset manager"
        title="Media Library"
        description="Upload, preview, rename, replace, and organize images, videos, PDFs, logos, icons, and brand assets."
        action={
          <Button>
            <Upload size={16} /> Upload File
          </Button>
        }
      />
      <div className="mb-4 grid gap-4 lg:grid-cols-[360px_1fr]">
        <UploadField type="image" />
        <div className="rounded-lg border border-[#D8AA6D]/40 bg-[#F8F2E6] p-4">
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Helpful image guidance</h2>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            Use optimized WebP images for better website speed. Use separate desktop and mobile images when possible.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {['Logo & Brand', 'Hero Images', 'Wolffia Farm', 'Services', 'Sustainability', 'Export & Logistics'].map((category) => (
              <span key={category} className="rounded-full bg-white px-3 py-2 text-center text-xs font-semibold text-[#104D2E]">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <DataTable
        data={mediaItems}
        columns={[
          { key: 'name', label: 'File name' },
          { key: 'type', label: 'Type' },
          { key: 'category', label: 'Category' },
          { key: 'altText', label: 'Alt text' },
          { key: 'size', label: 'Size' },
          { key: 'updatedAt', label: 'Updated' },
          {
            key: 'id',
            label: 'Actions',
            render: () => <span className="font-semibold text-[#104D2E]">Copy URL</span>,
          },
        ]}
      />
    </div>
  );
}

export function DocumentsPage() {
  const { documents, loading } = useDocumentsData();

  if (loading) return <LoadingState />;

  return (
    <div>
      <PageHeader
        eyebrow="Download manager"
        title="Documents"
        description="Manage corporate profiles, specification sheets, nutritional analysis, capability decks, and export documentation samples."
        action={
          <Button>
            <Plus size={16} /> Add Document
          </Button>
        }
      />
      <div className="mb-4 grid gap-4 xl:grid-cols-[360px_1fr]">
        <UploadField type="file" />
        <div className={`${cardClass} p-5`}>
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Download tracking</h2>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            Documents can require email before download and track buyer name, email, company, country, document, date, and source page.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <ToggleSwitch label="Require email before corporate profile download" checked />
            <ToggleSwitch label="Track all technical sheet downloads" checked />
          </div>
        </div>
      </div>
      <DataTable
        data={documents}
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'category', label: 'Category' },
          { key: 'language', label: 'Language' },
          { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
          { key: 'requireEmail', label: 'Email Gate', render: (row) => (row.requireEmail ? 'Yes' : 'No') },
          { key: 'downloads', label: 'Downloads' },
          { key: 'updatedAt', label: 'Updated' },
        ]}
      />
    </div>
  );
}

export function SeoPage() {
  const { seoSettings, loading } = useSeoSettingsData();

  if (loading) return <LoadingState />;

  return (
    <div>
      <PageHeader
        eyebrow="SEO & marketing"
        title="SEO Settings"
        description="Manage search titles, descriptions, social sharing images, indexing, sitemap inclusion, and focus keywords."
      />
      <div className="grid gap-4">
        {seoSettings.map((setting) => (
          <div key={setting.page} className={`${cardClass} p-5`}>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{setting.page}</h2>
                <p className="mt-1 text-sm text-[#6B7280]">{setting.slug}</p>
              </div>
              <div className="flex gap-2">
                <StatusBadge status={setting.indexed ? 'Published' : 'Draft'} />
                <StatusBadge status={setting.sitemap ? 'Active' : 'Disabled'} />
              </div>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <FormField label="SEO title" value={setting.title} help={`${setting.title.length} characters`} />
              <FormField label="URL slug" value={setting.slug} />
              <TextareaField label="Meta description" value={setting.description} help={`${setting.description.length} characters`} />
              <TextareaField label="Focus keywords" value={setting.focusKeywords} />
              <FormField label="Canonical URL" value="" help="Advanced SEO setting. Leave blank unless you know what this is." />
              <FormField label="Social Sharing Image" value="/images/export_quality.png" help="This image appears when the page is shared on LinkedIn, Facebook, or messaging apps." />
            </div>
          </div>
        ))}
        <SEOEditorPlaceholder pageTitle="New page template" />
      </div>
    </div>
  );
}

export function SettingsPage() {
  const [toast, setToast] = useState(false);

  return (
    <div>
      <PageHeader
        eyebrow="Global website settings"
        title="Site Settings"
        description="Update company information, contact details, brand assets, social links, tracking IDs, language, and form settings."
        action={
          <Button onClick={() => setToast(true)}>
            <Save size={16} /> Save Changes
          </Button>
        }
      />
      <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
        <section className="grid gap-4">
          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Company information</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <FormField label="Company name" value="Vietnam Agriculture Center (VAC)" required />
              <FormField label="Short name" value="VAC" />
              <FormField label="Tagline" value="Connecting local potential with global demand." />
              <FormField label="Email" value="inquiries@vietagri.com" />
              <FormField label="Phone / WhatsApp" value="+84 858741968" />
              <FormField label="Office hours" value="Monday - Friday, 8:00 AM - 5:00 PM Indochina Time / UTC+7" />
              <div className="lg:col-span-2">
                <TextareaField label="Headquarters address" value="No 59, Truong Dang Que Street, Hanh Thong Ward, Ho Chi Minh City, Vietnam, 71423" />
              </div>
            </div>
          </div>

          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Tracking and social links</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <FormField label="LinkedIn" value="" />
              <FormField label="Facebook" value="" />
              <FormField label="YouTube" value="" />
              <FormField label="Google Analytics ID" value="" />
              <FormField label="Google Tag Manager ID" value="" />
              <FormField label="LinkedIn Insight Tag ID" value="" />
            </div>
          </div>
        </section>

        <aside className="grid gap-4">
          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Brand assets</h2>
            <div className="mt-4 grid gap-4">
              <UploadField type="image" />
              <UploadField type="image" />
            </div>
          </div>
          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">General</h2>
            <div className="mt-4 grid gap-3">
              <ToggleSwitch label="Maintenance mode" checked={false} />
              <SelectField label="Default language" value="English" options={['English', 'Vietnamese']} />
              <SelectField label="Timezone" value="Asia/Ho_Chi_Minh" options={['Asia/Ho_Chi_Minh', 'UTC']} />
              <FormField label="Admin notification email" value="inquiries@vietagri.com" />
            </div>
          </div>
        </aside>
      </div>
      {toast && <ToastNotification message="Settings saved successfully." onClose={() => setToast(false)} />}
    </div>
  );
}

export function UsersPage() {
  const { t } = useAdminLanguage();
  const { users, loading } = useAdminUsersData();

  if (loading) return <LoadingState />;

  return (
    <div>
      <PageHeader
        eyebrow="Team access"
        title="Users & Roles"
        description="Manage admin users, roles, account status, last login, password resets, and read-only access."
        action={
          <Button>
            <Plus size={16} /> Add User
          </Button>
        }
      />
      <div className="mb-4 grid gap-3 md:grid-cols-5">
        {['Super Admin', 'Content Editor', 'Sales Manager', 'Marketing Editor', 'Viewer'].map((role) => (
          <div key={role} className="rounded-lg border border-[#E5E0D5] bg-white p-3">
            <p className="text-sm font-bold text-[#0B120C]">{t(role)}</p>
            <p className="mt-1 text-xs leading-5 text-[#6B7280]">
              {t(
                role === 'Super Admin'
                  ? 'Full access'
                  : role === 'Sales Manager'
                    ? 'Leads and inquiries'
                    : role === 'Content Editor'
                      ? 'Pages and media'
                      : role === 'Marketing Editor'
                        ? 'SEO, documents, CTA'
                        : 'Read-only access',
              )}
            </p>
          </div>
        ))}
      </div>
      <DataTable
        data={users}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
          { key: 'lastLogin', label: 'Last login' },
          { key: 'createdAt', label: 'Created date' },
          {
            key: 'id',
            label: 'Actions',
            render: () => <span className="font-semibold text-[#104D2E]">Edit role</span>,
          },
        ]}
      />
    </div>
  );
}

export function SecurityPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Phase 2 foundation"
        title="Security & Backup"
        description="Security, backup, popup, and newsletter tools are scaffolded here for phase 2 while the core MVP focuses on website content and leads."
      />
      <div className="grid gap-4 xl:grid-cols-2">
        <div className={`${cardClass} p-5`}>
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Security settings</h2>
          <div className="mt-4 grid gap-3">
            <ToggleSwitch label="Two-factor authentication" checked={false} help="Optional extra protection for admin accounts." />
            <ToggleSwitch label="Form spam protection" checked help="Connect reCAPTCHA or Cloudflare Turnstile during backend integration." />
            <FormField label="reCAPTCHA / Turnstile site key" value="" />
            <Button variant="secondary">
              <ShieldCheck size={16} /> Change password
            </Button>
          </div>
        </div>
        <div className={`${cardClass} p-5`}>
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Backup status</h2>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">Last backup: demo placeholder. Backend integration can schedule database and storage backups.</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Button>
              <Download size={16} /> Manual backup
            </Button>
            <Button variant="secondary">Restore backup</Button>
          </div>
        </div>
        <div className={`${cardClass} p-5 xl:col-span-2`}>
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Admin activity log</h2>
          <div className="mt-4 grid gap-2">
            {['Login', 'Page content update', 'Media upload', 'File deletion', 'Lead status change', 'User role change', 'Settings update'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 p-3 text-sm">
                <span className="font-semibold text-[#1D1D1D]">{item}</span>
                <span className="text-[#6B7280]">Tracked after backend integration</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`${cardClass} p-5 xl:col-span-2`}>
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Phase 2 marketing tools</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <ToggleSwitch label="Popup / lead magnet manager" checked={false} help="Download corporate profile, request Wolffia specs, talk to sourcing team." />
            <ToggleSwitch label="Newsletter subscriber manager" checked={false} help="Filter subscribers by interest and country, export CSV, delete records." />
          </div>
        </div>
      </div>
    </div>
  );
}
