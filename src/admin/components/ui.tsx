import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  Check,
  ChevronDown,
  Download,
  FileUp,
  ImagePlus,
  Search,
  Upload,
  X,
} from 'lucide-react';
import type { LeadStatus } from '../types';
import { useAdminLanguage } from '../adminI18n';

export const cardClass = 'rounded-lg border border-[#E5E0D5] bg-white shadow-sm';
export const inputClass =
  'w-full rounded-md border border-[#E5E0D5] bg-white px-3 py-2.5 text-sm text-[#1D1D1D] outline-none transition focus:border-[#D8AA6D] focus:ring-2 focus:ring-[#D8AA6D]/20';

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  const { t } = useAdminLanguage();

  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8AA6D]">{t(eyebrow)}</p>}
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#0B120C] md:text-4xl">{t(title)}</h1>
        {description && <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6B7280]">{t(description)}</p>}
      </div>
      {action}
    </div>
  );
}

export function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'utility';
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
}) {
  const { t } = useAdminLanguage();
  const translatedChildren = React.Children.map(children, (child) => {
    if (typeof child !== 'string') return child;
    const trimmed = child.trim();
    return trimmed ? t(trimmed) : child;
  });

  const variants = {
    primary: 'bg-[#104D2E] text-white hover:bg-[#0B120C]',
    secondary: 'border border-[#E5E0D5] bg-white text-[#1D1D1D] hover:border-[#D8AA6D]',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    utility: 'border border-[#D8AA6D]/50 bg-[#F8F2E6] text-[#104D2E] hover:bg-[#EFE2C7]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {translatedChildren}
    </button>
  );
}

export function DashboardCard({ label, value, change }: { label: string; value: string; change: string }) {
  const { t } = useAdminLanguage();

  return (
    <div className={`${cardClass} p-4`}>
      <p className="text-sm font-medium text-[#6B7280]">{t(label)}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="text-3xl font-bold text-[#104D2E]">{value}</p>
        <span className="rounded-full bg-[#F8F2E6] px-2.5 py-1 text-xs font-semibold text-[#104D2E]">{t(change)}</span>
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: LeadStatus | string }) {
  const { t } = useAdminLanguage();
  const styles: Record<string, string> = {
    New: 'bg-blue-50 text-blue-700 border-blue-100',
    Contacted: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    Qualified: 'bg-green-50 text-green-700 border-green-100',
    'Proposal Sent': 'bg-amber-50 text-amber-700 border-amber-100',
    'In Negotiation': 'bg-[#F8F2E6] text-[#104D2E] border-[#E5E0D5]',
    Won: 'bg-[#104D2E] text-white border-[#104D2E]',
    Lost: 'bg-gray-100 text-gray-600 border-gray-200',
    Spam: 'bg-red-50 text-red-700 border-red-100',
    Published: 'bg-[#104D2E] text-white border-[#104D2E]',
    Draft: 'bg-gray-100 text-gray-600 border-gray-200',
    Active: 'bg-green-50 text-green-700 border-green-100',
    Disabled: 'bg-gray-100 text-gray-600 border-gray-200',
  };

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[status] ?? styles.Draft}`}>
      {t(status)}
    </span>
  );
}

export function DataTable<T extends { id: string }>({
  data,
  columns,
  searchable = true,
  emptyLabel = 'No records found.',
}: {
  data: T[];
  columns: Array<{ key: keyof T | string; label: string; render?: (row: T) => React.ReactNode }>;
  searchable?: boolean;
  emptyLabel?: string;
}) {
  const { t } = useAdminLanguage();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (!query) return data;
    return data.filter((item) => JSON.stringify(item).toLowerCase().includes(query.toLowerCase()));
  }, [data, query]);

  const toggleAll = () => setSelected(selected.length === filtered.length ? [] : filtered.map((row) => row.id));

  return (
    <div className={cardClass}>
      <div className="flex flex-col gap-3 border-b border-[#E5E0D5] p-4 md:flex-row md:items-center md:justify-between">
        {searchable && (
          <label className="relative block w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('Search records...')}
              className={`${inputClass} pl-9`}
            />
          </label>
        )}
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary">
            <ChevronDown size={16} /> {t('Filter')}
          </Button>
          <Button variant="utility">
            <Download size={16} /> {t('Export CSV')}
          </Button>
        </div>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F8F2E6] text-xs uppercase tracking-wide text-[#6B7280]">
            <tr>
              <th className="w-12 px-4 py-3">
                <input type="checkbox" checked={filtered.length > 0 && selected.length === filtered.length} onChange={toggleAll} />
              </th>
              {columns.map((column) => (
                <th key={String(column.key)} className="px-4 py-3 font-bold">
                  {t(column.label)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E0D5]">
            {filtered.map((row) => (
              <tr key={row.id} className="hover:bg-[#F8F2E6]/60">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() =>
                      setSelected((current) => (current.includes(row.id) ? current.filter((id) => id !== row.id) : [...current, row.id]))
                    }
                  />
                </td>
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-4 py-3 align-top">
                    {column.render ? column.render(row) : String(row[column.key as keyof T] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 p-4 md:hidden">
        {filtered.map((row) => (
          <div key={row.id} className="rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 p-4">
            {columns.slice(0, 5).map((column) => (
              <div key={String(column.key)} className="mb-2">
                <p className="text-xs font-bold uppercase tracking-wide text-[#6B7280]">{t(column.label)}</p>
                <div className="mt-1 text-sm text-[#1D1D1D]">{column.render ? column.render(row) : String(row[column.key as keyof T] ?? '')}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {filtered.length === 0 && <EmptyState title={emptyLabel} description="Try changing the search or filters." />}
      <div className="flex items-center justify-between border-t border-[#E5E0D5] px-4 py-3 text-xs text-[#6B7280]">
        <span>{selected.length} {t('selected')}</span>
        <span>{t('Showing')} {filtered.length} {t('of')} {data.length}</span>
      </div>
    </div>
  );
}

export function FormField({
  label,
  value,
  required,
  placeholder,
  help,
  onChange,
}: {
  label: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  help?: string;
  onChange?: (value: string) => void;
}) {
  const { t } = useAdminLanguage();

  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#1D1D1D]">
        {t(label)} {required && <span className="text-red-600">*</span>}
      </span>
      <input value={value} onChange={(event) => onChange?.(event.target.value)} placeholder={placeholder ? t(placeholder) : undefined} className={`${inputClass} mt-1.5`} />
      {help && <span className="mt-1.5 block text-xs leading-5 text-[#6B7280]">{t(help)}</span>}
    </label>
  );
}

export function TextareaField({
  label,
  value,
  rows = 5,
  help,
  onChange,
}: {
  label: string;
  value: string;
  rows?: number;
  help?: string;
  onChange?: (value: string) => void;
}) {
  const { t } = useAdminLanguage();

  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#1D1D1D]">{t(label)}</span>
      <textarea value={value} rows={rows} onChange={(event) => onChange?.(event.target.value)} className={`${inputClass} mt-1.5 resize-y`} />
      {help && <span className="mt-1.5 block text-xs leading-5 text-[#6B7280]">{t(help)}</span>}
    </label>
  );
}

export function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange?: (value: string) => void;
}) {
  const { t } = useAdminLanguage();

  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#1D1D1D]">{t(label)}</span>
      <select value={value} onChange={(event) => onChange?.(event.target.value)} className={`${inputClass} mt-1.5`}>
        {options.map((option) => (
          <option key={option}>{t(option)}</option>
        ))}
      </select>
    </label>
  );
}

export function ToggleSwitch({ label, checked, help }: { label: string; checked: boolean; help?: string }) {
  const { t } = useAdminLanguage();

  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-[#E5E0D5] bg-white p-4">
      <div>
        <p className="text-sm font-semibold text-[#1D1D1D]">{t(label)}</p>
        {help && <p className="mt-1 text-xs leading-5 text-[#6B7280]">{t(help)}</p>}
      </div>
      <button className={`h-6 w-11 rounded-full p-1 transition ${checked ? 'bg-[#104D2E]' : 'bg-gray-300'}`}>
        <span className={`block h-4 w-4 rounded-full bg-white transition ${checked ? 'translate-x-5' : ''}`} />
      </button>
    </div>
  );
}

export function LanguageTabs({ active, onChange }: { active: string; onChange: (value: string) => void }) {
  const { t } = useAdminLanguage();

  return (
    <div className="inline-flex rounded-lg border border-[#E5E0D5] bg-white p-1">
      {['English', 'Tiếng Việt'].map((language) => (
        <button
          key={language}
          onClick={() => onChange(language)}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
            active === language ? 'bg-[#104D2E] text-white' : 'text-[#6B7280] hover:bg-[#F8F2E6]'
          }`}
        >
          {t(language)}
        </button>
      ))}
    </div>
  );
}

export function RichTextEditor({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const { t } = useAdminLanguage();

  return (
    <div className="rounded-lg border border-[#E5E0D5] bg-white">
      <div className="flex flex-wrap gap-2 border-b border-[#E5E0D5] p-2">
        {['Bold', 'Italic', 'Bullets', 'Numbers', 'Link', 'Heading'].map((tool) => (
          <button key={tool} className="rounded border border-[#E5E0D5] px-2.5 py-1.5 text-xs font-semibold text-[#1D1D1D] hover:border-[#D8AA6D]">
            {t(tool)}
          </button>
        ))}
      </div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={8}
        className="w-full resize-y rounded-b-lg border-0 bg-white p-3 text-sm leading-6 text-[#1D1D1D] outline-none"
      />
    </div>
  );
}

export function UploadField({ type = 'image' }: { type?: 'image' | 'file' }) {
  const { t } = useAdminLanguage();
  const Icon = type === 'image' ? ImagePlus : FileUp;
  return (
    <div className="rounded-lg border border-dashed border-[#D8AA6D] bg-[#F8F2E6]/60 p-5 text-center">
      <Icon className="mx-auto h-8 w-8 text-[#104D2E]" />
      <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">{type === 'image' ? t('Upload or choose image') : t('Upload document file')}</p>
      <p className="mt-1 text-xs text-[#6B7280]">
        {type === 'image' ? t('Use optimized WebP images for better website speed.') : t('PDF files can require email and track downloads.')}
      </p>
      <Button variant="utility" className="mt-4">
        <Upload size={16} /> {t('Choose file')}
      </Button>
    </div>
  );
}

export function SEOEditorPlaceholder({ pageTitle }: { pageTitle: string }) {
  const { t } = useAdminLanguage();

  return (
    <div className={`${cardClass} p-5`}>
      <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t(pageTitle)} {t('SEO settings')}</h2>
      <p className="mt-1 text-sm text-[#6B7280]">{t('Simple SEO fields with helpful length checks and plain-language help text.')}</p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <FormField label="SEO title" value={`${pageTitle} | Vietnam Agriculture Center`} help="Recommended length: 50-60 characters." />
        <FormField label="URL slug" value={pageTitle === 'Home' ? '/' : `/${pageTitle.toLowerCase().replace(/\s+/g, '-')}`} />
        <TextareaField label="Meta description" value="Premium B2B agriculture sourcing, contract farming, export quality assurance, logistics, and Viet Wolffia innovation from Vietnam." help="Recommended length: 140-160 characters." />
        <FormField label="Focus keywords" value="Vietnam agriculture sourcing, Wolffia superfood, contract farming Vietnam" />
        <UploadField type="image" />
        <div className="grid gap-3">
          <ToggleSwitch label="Allow search engines to index this page" checked />
          <ToggleSwitch label="Include in sitemap" checked />
        </div>
      </div>
    </div>
  );
}

export function ConfirmModal({
  open,
  title,
  description,
  onClose,
}: {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
}) {
  const { t } = useAdminLanguage();

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#0B120C]/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-xl">
        <AlertCircle className="h-8 w-8 text-red-600" />
        <h2 className="mt-3 font-serif text-2xl font-bold text-[#0B120C]">{t(title)}</h2>
        <p className="mt-2 text-sm leading-6 text-[#6B7280]">{t(description)}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onClose}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ToastNotification({ message, onClose }: { message: string; onClose: () => void }) {
  const { t } = useAdminLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-sm items-center gap-3 rounded-lg bg-[#104D2E] px-4 py-3 text-sm font-semibold text-white shadow-xl">
      <Check size={18} />
      <span>{t(message)}</span>
      <button onClick={onClose} className="ml-2 rounded p-1 hover:bg-white/10">
        <X size={16} />
      </button>
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  const { t } = useAdminLanguage();

  return (
    <div className="p-8 text-center">
      <p className="font-serif text-2xl font-bold text-[#0B120C]">{t(title)}</p>
      <p className="mt-2 text-sm text-[#6B7280]">{t(description)}</p>
    </div>
  );
}

export function LoadingState() {
  const { t } = useAdminLanguage();

  return (
    <div className="grid min-h-[320px] place-items-center text-sm font-semibold text-[#104D2E]">
      {t('Loading admin workspace...')}
    </div>
  );
}
