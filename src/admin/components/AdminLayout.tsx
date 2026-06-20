import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  Bell,
  Bot,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  FileText,
  Gauge,
  Globe,
  Image,
  Lock,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import vacLogo from '../../assets/vac-logo-6.png';
import type { SidebarItem } from '../types';
import { useAdminLanguage } from '../adminI18n';

const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: Gauge },
  {
    label: 'AI Agent & Automation',
    href: '/admin/ai-agent',
    icon: Bot,
    children: [
      { label: 'AI Assistant', href: '/admin/ai-agent' },
      { label: 'Automation Rules', href: '/admin/ai-agent' },
      { label: 'Approval Queue', href: '/admin/ai-agent' },
      { label: 'Agent Settings', href: '/admin/ai-agent' },
    ],
  },
  {
    label: 'Website Pages',
    href: '/admin/pages',
    icon: BookOpen,
    children: [
      { label: 'Home', href: '/admin/pages/home' },
      { label: 'About Us', href: '/admin/pages/about' },
      { label: 'Core Services', href: '/admin/pages/core-services' },
      { label: 'Viet Wolffia', href: '/admin/pages/viet-wolffia' },
      { label: 'Sustainability', href: '/admin/pages/sustainability' },
      { label: 'Contact Us', href: '/admin/pages/contact' },
      { label: 'Footer', href: '/admin/settings' },
      { label: 'Navigation Menu', href: '/admin/settings' },
    ],
  },
  {
    label: 'Leads & Inquiries',
    href: '/admin/leads',
    icon: BriefcaseBusiness,
    children: [
      { label: 'All Inquiries', href: '/admin/leads' },
      { label: 'New Leads', href: '/admin/leads?status=new' },
      { label: 'Sample Requests', href: '/admin/leads?type=samples' },
      { label: 'Profile Downloads', href: '/admin/documents' },
    ],
  },
  {
    label: 'Services',
    href: '/admin/pages/core-services',
    icon: Sparkles,
    children: [
      { label: 'Service Cards', href: '/admin/pages/core-services' },
      { label: 'Service Details', href: '/admin/pages/core-services' },
      { label: 'CTA Buttons', href: '/admin/settings' },
    ],
  },
  {
    label: 'Viet Wolffia',
    href: '/admin/pages/viet-wolffia',
    icon: ShieldCheck,
    children: [
      { label: 'Product Lines', href: '/admin/pages/viet-wolffia' },
      { label: 'Applications', href: '/admin/pages/viet-wolffia' },
      { label: 'Technical Documents', href: '/admin/documents' },
      { label: 'FAQ', href: '/admin/pages/viet-wolffia' },
      { label: 'Gallery', href: '/admin/media' },
    ],
  },
  {
    label: 'Media Library',
    href: '/admin/media',
    icon: Image,
    children: [
      { label: 'Images', href: '/admin/media' },
      { label: 'Videos', href: '/admin/media' },
      { label: 'Documents', href: '/admin/documents' },
      { label: 'Logo & Brand Assets', href: '/admin/media' },
    ],
  },
  {
    label: 'SEO & Marketing',
    href: '/admin/seo',
    icon: FileText,
    children: [
      { label: 'SEO Settings', href: '/admin/seo' },
      { label: 'Tracking Codes', href: '/admin/settings' },
      { label: 'Popups / Lead Magnets', href: '/admin/security' },
      { label: 'Newsletter Subscribers', href: '/admin/security' },
    ],
  },
  {
    label: 'Site Settings',
    href: '/admin/settings',
    icon: Settings,
    children: [
      { label: 'Company Information', href: '/admin/settings' },
      { label: 'Contact Information', href: '/admin/settings' },
      { label: 'Social Links', href: '/admin/settings' },
      { label: 'Language Settings', href: '/admin/settings' },
      { label: 'Form Settings', href: '/admin/settings' },
    ],
  },
  { label: 'Users & Roles', href: '/admin/users', icon: Users },
  { label: 'Security & Backup', href: '/admin/security', icon: Lock },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation();
  const { t } = useAdminLanguage();

  return (
    <div className="flex h-full flex-col bg-[#0B120C] text-white">
      <Link to="/admin/dashboard" onClick={onNavigate} className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
        <img src={vacLogo} alt="VAC logo" className="h-11 w-auto" />
        <div>
          <p className="font-serif text-lg font-bold leading-none">VAC Admin</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8AA6D]">{t('B2B Control Center')}</p>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {sidebarItems.map((item) => {
          const isActive = item.href ? pathname === item.href || pathname.startsWith(`${item.href}/`) : false;
          const Icon = item.icon;

          return (
            <div key={item.label} className="mb-1">
              <NavLink
                to={item.href ?? '#'}
                onClick={onNavigate}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition ${
                  isActive ? 'bg-[#D8AA6D] text-[#0B120C]' : 'text-white/78 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span className="flex-1">{t(item.label)}</span>
                {item.children && <ChevronDown size={14} />}
              </NavLink>
              {item.children && isActive && (
                <div className="ml-8 mt-1 grid gap-1 border-l border-white/10 pl-3">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.href}
                      onClick={onNavigate}
                      className="rounded px-2 py-1.5 text-xs font-medium text-white/62 hover:bg-white/10 hover:text-white"
                    >
                      {t(child.label)}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <p className="text-xs leading-5 text-white/62">{t('Role')}: {t('Super Admin')}</p>
        <p className="text-sm font-semibold">Vietnam Agriculture Center</p>
      </div>
    </div>
  );
}

export function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useAdminLanguage();
  const title = location.pathname
    .replace('/admin/', '')
    .replace('/admin', 'dashboard')
    .split('/')
    .map((part) => t(part.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())))
    .filter(Boolean)
    .join(' / ');

  return (
    <div className="min-h-screen bg-[#F8F2E6] font-sans text-[#1D1D1D]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 lg:block">
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="absolute inset-0 bg-[#0B120C]/60" onClick={() => setMobileOpen(false)} aria-label="Close menu" />
          <aside className="relative h-full w-[86vw] max-w-80">
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-[#E5E0D5] bg-white/90 backdrop-blur">
          <div className="flex min-h-16 items-center gap-3 px-4 lg:px-6">
            <button
              onClick={() => setMobileOpen((current) => !current)}
              className="rounded-md border border-[#E5E0D5] p-2 text-[#104D2E] lg:hidden"
              aria-label="Open admin menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8AA6D]">{t('Admin Workspace')}</p>
              <h1 className="truncate text-sm font-bold capitalize text-[#0B120C] md:text-base">{title || t('Dashboard')}</h1>
            </div>
            <label className="relative hidden w-full max-w-xs md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
              <input
                placeholder={t('Search leads, pages, files...')}
                className="w-full rounded-md border border-[#E5E0D5] bg-[#F8F2E6] py-2 pl-9 pr-3 text-sm outline-none focus:border-[#D8AA6D]"
              />
            </label>
            <button className="rounded-md border border-[#E5E0D5] p-2 text-[#104D2E]">
              <Bell size={18} />
            </button>
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 rounded-md border border-[#E5E0D5] bg-white px-3 py-2 text-xs font-bold text-[#104D2E] transition hover:border-[#D8AA6D]"
              aria-label="Change admin language"
            >
              <Globe size={16} />
              {language === 'en' ? 'VI' : 'EN'}
            </button>
            <div className="hidden items-center gap-3 rounded-md border border-[#E5E0D5] bg-[#F8F2E6] px-3 py-2 sm:flex">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[#104D2E] text-xs font-bold text-white">VA</div>
              <div>
                <p className="text-xs font-bold text-[#0B120C]">{t('VAC Owner')}</p>
                <p className="text-[11px] text-[#6B7280]">{t('Super Admin')}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 lg:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
