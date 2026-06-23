import { Link } from 'react-router-dom';
import { Bot, Edit3, FileUp, Mail, SearchCheck, Settings, Upload } from 'lucide-react';
import { Button, DashboardCard, DataTable, PageHeader, StatusBadge, cardClass } from '../components/ui';
import { useAdminLanguage } from '../adminI18n';
import { useDocumentsData, useEditablePagesData, useLeadsData } from '../data/useAdminData';
import { LoadingState } from '../components/ui';

function MiniBarChart({ data }: { data: Array<{ label: string; value: number }> }) {
  const { t } = useAdminLanguage();
  const max = Math.max(...data.map((item) => item.value));
  return (
    <div className="grid gap-3">
      {data.map((item) => (
        <div key={item.label}>
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="font-semibold text-[#1D1D1D]">{t(item.label)}</span>
            <span className="text-[#6B7280]">{item.value}%</span>
          </div>
          <div className="h-2 rounded-full bg-[#F8F2E6]">
            <div className="h-2 rounded-full bg-[#104D2E]" style={{ width: `${(item.value / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AdminDashboard() {
  const { t } = useAdminLanguage();
  const { leads, loading: leadsLoading } = useLeadsData();
  const { documents, loading: documentsLoading } = useDocumentsData();
  const { pages, loading: pagesLoading } = useEditablePagesData();

  if (leadsLoading || documentsLoading || pagesLoading) return <LoadingState />;

  const now = new Date();
  const currentMonth = now.toISOString().slice(0, 7);
  const totalInquiries = leads.length;
  const newLeads = leads.filter((lead) => lead.status === 'New').length;
  const consultationRequests = leads.filter((lead) => lead.sourcePage === 'Request a Consultation').length;
  const wolffiaSampleRequests = leads.filter((lead) => lead.sourcePage === 'Request Wolffia Samples & Specs').length;
  const unreadMessages = newLeads;
  const thisMonthInquiries = leads.filter((lead) => lead.date.startsWith(currentMonth)).length;
  const hasLiveDownloadTracking = false;
  const hasLiveVisitTracking = false;
  const hasLiveConversionTracking = false;

  const dashboardMetrics = [
    { label: 'Total Inquiries', value: String(totalInquiries), change: `${thisMonthInquiries} this month`, tone: 'green' as const },
    { label: 'New Leads', value: String(newLeads), change: `${newLeads} unread`, tone: 'blue' as const },
    { label: 'Consultation Requests', value: consultationRequests > 0 ? String(consultationRequests) : '--', change: consultationRequests > 0 ? 'Form tracked' : 'No tracked consultation form yet', tone: 'gold' as const },
    { label: 'Wolffia Sample Requests', value: wolffiaSampleRequests > 0 ? String(wolffiaSampleRequests) : '--', change: wolffiaSampleRequests > 0 ? 'Form tracked' : 'No tracked sample form yet', tone: 'green' as const },
    { label: 'Corporate Profile Downloads', value: hasLiveDownloadTracking ? String(documents.reduce((sum, document) => sum + document.downloads, 0)) : '--', change: hasLiveDownloadTracking ? `${documents.length} live docs` : 'Download events not connected', tone: 'gray' as const },
    { label: 'Unread Messages', value: String(unreadMessages), change: 'Needs follow-up', tone: 'blue' as const },
    { label: 'This Month Website Visits', value: hasLiveVisitTracking ? '0' : '--', change: 'Analytics not connected', tone: 'gray' as const },
    { label: 'Conversion Rate', value: hasLiveConversionTracking ? '0%' : '--', change: 'Conversion tracking not connected', tone: 'gold' as const },
  ];

  const weeklyTrend = Array.from({ length: 6 }, (_, index) => {
    const start = new Date(now);
    start.setDate(now.getDate() - (5 - index) * 7);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    const value = leads.filter((lead) => {
      const leadDate = new Date(`${lead.date}T00:00:00`);
      return leadDate >= start && leadDate <= end;
    }).length;
    return { label: `W${index + 1}`, value };
  });

  const maxTrend = Math.max(...weeklyTrend.map((item) => item.value), 1);

  const interestTotals = new Map<string, number>();
  for (const lead of leads) {
    const key = lead.area.split(',')[0]?.trim() || 'Other';
    interestTotals.set(key, (interestTotals.get(key) ?? 0) + 1);
  }
  const interestLeadData = [...interestTotals.entries()]
    .map(([label, count]) => ({ label, value: Math.round((count / Math.max(totalInquiries, 1)) * 100) }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const countryTotals = new Map<string, number>();
  for (const lead of leads) {
    const key = lead.country || 'Unknown';
    countryTotals.set(key, (countryTotals.get(key) ?? 0) + 1);
  }
  const countryLeadData = [...countryTotals.entries()]
    .map(([label, count]) => ({ label, value: Math.round((count / Math.max(totalInquiries, 1)) * 100) }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const activityItems = [
    ...leads.slice(0, 3).map((lead) => `${lead.name} from ${lead.company} submitted ${lead.area}`),
    ...pages.slice(0, 2).map((page) => `${page.title} page record updated ${page.updatedAt}`),
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Business overview"
        title="Dashboard"
        description="A simple daily view of inquiries, downloads, website health, and content activity for Vietnam Agriculture Center."
        action={
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="secondary">
              <SearchCheck size={16} /> Review leads
            </Button>
            <Button>
              <Edit3 size={16} /> Edit website
            </Button>
          </div>
        }
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <DashboardCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[1.3fr_1fr]">
        <div className={`${cardClass} p-5`}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('Inquiry trend')}</h2>
              <p className="text-sm text-[#6B7280]">{t('Weekly activity across consultation, samples, and contact forms.')}</p>
            </div>
            <span className="rounded-full bg-[#F8F2E6] px-3 py-1 text-xs font-bold text-[#104D2E]">{t('Month')}</span>
          </div>
          <div className="mt-6 flex h-64 items-end gap-3">
            {weeklyTrend.map((item) => (
              <div key={item.label} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t bg-[#104D2E]" style={{ height: `${Math.max((item.value / maxTrend) * 100, item.value > 0 ? 10 : 2)}%` }} />
                <span className="text-[10px] font-semibold text-[#6B7280]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('Leads by interest')}</h2>
            <div className="mt-4">
              <MiniBarChart data={interestLeadData} />
            </div>
          </div>
          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('Target markets')}</h2>
            <div className="mt-4">
              <MiniBarChart data={countryLeadData} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <div className={`${cardClass} p-5`}>
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('Quick actions')}</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              { label: 'Edit Home Page', href: '/admin/pages/home', icon: Edit3 },
              { label: 'Open AI Agent', href: '/admin/ai-agent', icon: Bot },
              { label: 'View New Leads', href: '/admin/leads', icon: Mail },
              { label: 'Upload Corporate Profile', href: '/admin/documents', icon: FileUp },
              { label: 'Update Contact Info', href: '/admin/settings', icon: Settings },
              { label: 'Add Wolffia Document', href: '/admin/documents', icon: Upload },
              { label: 'Edit SEO', href: '/admin/seo', icon: SearchCheck },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  to={action.href}
                  className="flex items-center gap-3 rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 p-3 text-sm font-semibold text-[#104D2E] transition hover:border-[#D8AA6D] hover:bg-[#F8F2E6]"
                >
                  <Icon size={17} />
                  {t(action.label)}
                </Link>
              );
            })}
          </div>
        </div>

        <div className={`${cardClass} p-5`}>
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('Recent activity')}</h2>
          <div className="mt-4 grid gap-3">
            {activityItems.map((item) => (
              <div key={item} className="rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 px-3 py-2 text-sm text-[#1D1D1D]">
                {t(item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-serif text-2xl font-bold text-[#0B120C]">{t('Latest inquiries')}</h2>
        <DataTable
          data={leads.slice(0, 4)}
          columns={[
            { key: 'date', label: 'Date' },
            { key: 'name', label: 'Name' },
            { key: 'company', label: 'Company' },
            { key: 'country', label: 'Country' },
            { key: 'area', label: 'Interest' },
            { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
            {
              key: 'id',
              label: 'Action',
              render: (row) => (
                <Link className="font-semibold text-[#104D2E]" to={`/admin/leads/${row.id}`}>
                  {t('Open')}
                </Link>
              ),
            },
          ]}
        />
      </section>
    </div>
  );
}
