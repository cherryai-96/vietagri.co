import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Eye, Save } from 'lucide-react';
import { useEditablePagesData } from '../data/useAdminData';
import type { PageSection, PageSlug } from '../types';
import {
  Button,
  FormField,
  LanguageTabs,
  PageHeader,
  RichTextEditor,
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

function SectionEditor({ section }: { section: PageSection }) {
  const [body, setBody] = useState(section.body);

  return (
    <div className={`${cardClass} p-4`}>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8AA6D]">Section {section.order}</p>
          <h3 className="font-serif text-2xl font-bold text-[#0B120C]">{section.label}</h3>
        </div>
        <ToggleSwitch label="Show on website" checked={section.visible} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <FormField label="Section label" value={section.label} />
        <FormField label="Display order" value={String(section.order)} />
        <FormField label="Heading" value={section.heading} required />
        <FormField label="Sub-heading" value={section.subheading} />
        <FormField label="Button text" value={section.buttonText} />
        <FormField label="Button link" value={section.buttonLink} help="Use an internal page, external URL, form popup, or file download link." />
        <div className="lg:col-span-2">
          <p className="mb-1.5 text-sm font-semibold text-[#1D1D1D]">Body text</p>
          <RichTextEditor value={body} onChange={setBody} />
        </div>
      </div>
    </div>
  );
}

function PageSpecificPanel({ slug }: { slug: PageSlug }) {
  if (slug === 'home') {
    return (
      <div className={`${cardClass} p-4`}>
        <h3 className="font-serif text-2xl font-bold text-[#0B120C]">Home page spotlight fields</h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <FormField label="Hero eyebrow" value="Vietnam Agriculture Center" />
          <FormField label="Overlay darkness slider" value="42%" help="Adjust readability of text over the hero image." />
          <TextareaField label="Trust indicators" value="Export-ready supply • High-tech cultivation • B2B documentation • Viet Wolffia innovation" />
          <UploadField type="image" />
        </div>
      </div>
    );
  }

  if (slug === 'viet-wolffia') {
    return (
      <div className={`${cardClass} p-4`}>
        <h3 className="font-serif text-2xl font-bold text-[#0B120C]">Viet Wolffia product manager</h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {['Fresh Biomass', 'Dried Wolffia', 'Roasted Wolffia', 'Bio-Balance Animal Nutrition', 'Custom Bio-Feed Formulations'].map((product) => (
            <div key={product} className="rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 p-4">
              <FormField label="Product name" value={product} />
              <TextareaField label="Short description" value="Product description, application sectors, image, and technical document can be connected to backend records." rows={3} />
              <SelectField label="Visibility" value="Show" options={['Show', 'Hide']} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === 'sustainability') {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <div>
            <h3 className="font-semibold text-amber-900">Certification wording help</h3>
            <p className="mt-1 text-sm leading-6 text-amber-800">
              Only display official certifications if VAC has verified documentation. If not yet certified, use terms like "prepared for",
              "aligned with", or "certification pathway".
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'contact') {
    return (
      <div className={`${cardClass} p-4`}>
        <h3 className="font-serif text-2xl font-bold text-[#0B120C]">Official contact information</h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <FormField label="Company name" value="Vietnam Agriculture Center (VAC)" />
          <FormField label="Email" value="inquiries@vietagri.com" />
          <FormField label="Phone / WhatsApp" value="+84 858741968" />
          <FormField label="Office hours" value="Monday - Friday, 8:00 AM - 5:00 PM Indochina Time / UTC+7" />
          <div className="lg:col-span-2">
            <TextareaField label="Headquarters" value="No 59, Truong Dang Que Street, Hanh Thong Ward, Ho Chi Minh City, Vietnam, 71423" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export function PagesIndex() {
  const { pages, loading } = useEditablePagesData();

  if (loading) return <LoadingState />;

  return (
    <div>
      <PageHeader
        eyebrow="Website CMS"
        title="Website Pages"
        description="Edit the main VAC website pages in plain language. Each page supports English, Tiếng Việt, media, SEO, and preview."
      />
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {pages.map((page) => (
          <Link key={page.slug} to={`/admin/pages/${page.slug}`} className={`${cardClass} block p-5 transition hover:border-[#D8AA6D]`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{page.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{page.description}</p>
              </div>
              <StatusBadge status={page.status} />
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-[#6B7280]">
              <span>{page.missingVietnamese} missing translations</span>
              <span className="inline-flex items-center gap-1 font-semibold text-[#104D2E]">
                Edit <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PageEditor() {
  const { slug } = useParams();
  const { pages, loading } = useEditablePagesData();
  const page = useMemo(() => pages.find((item) => item.slug === slug), [pages, slug]);
  const [tab, setTab] = useState('English Content');
  const [language, setLanguage] = useState('English');
  const [toast, setToast] = useState(false);

  if (loading) return <LoadingState />;
  if (!page) return <Navigate to="/admin/pages" replace />;

  const tabs = ['English Content', 'Vietnamese Content', 'Images & Media', 'SEO', 'Preview'];

  return (
    <div>
      <PageHeader
        eyebrow="Page editor"
        title={page.title}
        description={page.description}
        action={
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="secondary">
              <Eye size={16} /> Preview
            </Button>
            <Button onClick={() => setToast(true)}>
              <Save size={16} /> Save Changes
            </Button>
          </div>
        }
      />

      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                tab === item ? 'bg-[#104D2E] text-white' : 'border border-[#E5E0D5] bg-white text-[#6B7280] hover:border-[#D8AA6D]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {(tab === 'English Content' || tab === 'Vietnamese Content') && <LanguageTabs active={language} onChange={setLanguage} />}
      </div>

      {page.missingVietnamese > 0 && (
        <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          {page.missingVietnamese} Vietnamese translation item{page.missingVietnamese > 1 ? 's are' : ' is'} missing. You can still publish, but review translations before launch.
        </div>
      )}

      <div className="grid gap-4">
        {(tab === 'English Content' || tab === 'Vietnamese Content') && (
          <>
            <PageSpecificPanel slug={page.slug} />
            {page.sections.map((section) => (
              <SectionEditor key={section.id} section={section} />
            ))}
            <div className="flex flex-col justify-end gap-2 sm:flex-row">
              <Button variant="secondary">Cancel</Button>
              <Button onClick={() => setToast(true)}>
                <Save size={16} /> Save Changes
              </Button>
            </div>
          </>
        )}

        {tab === 'Images & Media' && (
          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Images & Media</h2>
            <p className="mt-1 text-sm text-[#6B7280]">Use separate desktop and mobile images when possible.</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <UploadField type="image" />
              <UploadField type="file" />
            </div>
          </div>
        )}

        {tab === 'SEO' && <SEOEditorPlaceholder pageTitle={page.title} />}

        {tab === 'Preview' && (
          <div className={`${cardClass} p-5`}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8AA6D]">Preview</p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-[#0B120C]">{page.sections[0]?.heading}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6B7280]">{page.sections[0]?.body}</p>
            <Button className="mt-5">{page.sections[0]?.buttonText}</Button>
          </div>
        )}
      </div>

      {toast && <ToastNotification message="Saved successfully. Draft autosave updated." onClose={() => setToast(false)} />}
    </div>
  );
}
