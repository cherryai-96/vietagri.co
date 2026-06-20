import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Download, Mail, MessageCircle, Save, Trash2 } from 'lucide-react';
import { users } from '../data/mockData';
import type { LeadStatus } from '../types';
import { useLeadsData } from '../data/useAdminData';
import {
  Button,
  ConfirmModal,
  DataTable,
  FormField,
  PageHeader,
  SelectField,
  StatusBadge,
  TextareaField,
  ToastNotification,
  LoadingState,
  cardClass,
} from '../components/ui';

const leadStatuses: LeadStatus[] = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'In Negotiation', 'Won', 'Lost', 'Spam'];

export function LeadsPage() {
  const { leads, loading } = useLeadsData();

  if (loading) return <LoadingState />;

  return (
    <div>
      <PageHeader
        eyebrow="Sales pipeline"
        title="Leads & Inquiries"
        description="Track international B2B inquiries from contact forms, sample requests, corporate profile downloads, and consultation requests."
        action={
          <Button variant="utility">
            <Download size={16} /> Export CSV
          </Button>
        }
      />
      <div className="mb-4 grid gap-3 rounded-lg border border-[#E5E0D5] bg-white p-4 md:grid-cols-5">
        <SelectField label="Date range" value="Last 30 days" options={['Last 7 days', 'Last 30 days', 'This quarter', 'All time']} />
        <SelectField label="Status" value="All statuses" options={['All statuses', ...leadStatuses]} />
        <SelectField label="Area of interest" value="All interests" options={['All interests', 'Wolffia', 'Sourcing', 'Contract Farming', 'Certification', 'Logistics']} />
        <SelectField label="Country" value="All countries" options={['All countries', 'South Korea', 'Japan', 'Germany', 'United States', 'Singapore']} />
        <SelectField label="Assigned user" value="All team members" options={['All team members', ...users.map((user) => user.name)]} />
      </div>
      <DataTable
        data={leads}
        columns={[
          { key: 'date', label: 'Date' },
          {
            key: 'name',
            label: 'Name',
            render: (row) => (
              <Link className="font-semibold text-[#104D2E]" to={`/admin/leads/${row.id}`}>
                {row.name}
              </Link>
            ),
          },
          { key: 'company', label: 'Company' },
          { key: 'email', label: 'Email' },
          { key: 'country', label: 'Country' },
          { key: 'area', label: 'Area of Interest' },
          { key: 'sourcePage', label: 'Source Page' },
          { key: 'status', label: 'Lead Status', render: (row) => <StatusBadge status={row.status} /> },
          { key: 'assignedTo', label: 'Assigned To' },
          { key: 'lastUpdated', label: 'Last Updated' },
        ]}
      />
    </div>
  );
}

export function LeadDetailPage() {
  const { id } = useParams();
  const { leads, loading } = useLeadsData();
  const lead = useMemo(() => leads.find((item) => item.id === id), [id, leads]);
  const [toast, setToast] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  if (loading) return <LoadingState />;
  if (!lead) return <Navigate to="/admin/leads" replace />;

  return (
    <div>
      <PageHeader
        eyebrow="Lead detail"
        title={lead.company}
        description={`${lead.name} from ${lead.country} is interested in ${lead.area}.`}
        action={
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="secondary">
              <Mail size={16} /> Email
            </Button>
            <Button variant="utility">
              <MessageCircle size={16} /> WhatsApp
            </Button>
          </div>
        }
      />

      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <section className="grid gap-4">
          <div className={`${cardClass} p-5`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Full inquiry details</h2>
                <p className="mt-1 text-sm text-[#6B7280]">Received {lead.date} from {lead.sourcePage}</p>
              </div>
              <StatusBadge status={lead.status} />
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <FormField label="Name" value={lead.name} />
              <FormField label="Company" value={lead.company} />
              <FormField label="Email" value={lead.email} />
              <FormField label="Phone / WhatsApp" value={lead.phone} />
              <FormField label="Country / Target Market" value={lead.country} />
              <FormField label="Area of Interest" value={lead.area} />
              <div className="md:col-span-2">
                <TextareaField label="Message" value={lead.message} rows={5} />
              </div>
            </div>
          </div>

          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Internal notes</h2>
            <div className="mt-4 grid gap-3">
              {lead.notes.map((note) => (
                <div key={note} className="rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 p-3 text-sm text-[#1D1D1D]">
                  {note}
                </div>
              ))}
              <TextareaField label="Add internal note" value="" rows={4} help="Notes are visible only to admin users." />
              <div className="flex justify-end">
                <Button onClick={() => setToast(true)}>
                  <Save size={16} /> Save Note
                </Button>
              </div>
            </div>
          </div>
        </section>

        <aside className="grid gap-4">
          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Lead workflow</h2>
            <div className="mt-4 grid gap-4">
              <SelectField label="Lead status" value={lead.status} options={leadStatuses} />
              <SelectField label="Assigned admin user" value={lead.assignedTo} options={users.map((user) => user.name)} />
              <Button onClick={() => setToast(true)}>
                <Save size={16} /> Save Changes
              </Button>
              <Button variant="secondary">
                <Download size={16} /> Export Lead
              </Button>
              <Button variant="danger" onClick={() => setConfirmOpen(true)}>
                <Trash2 size={16} /> Delete Lead
              </Button>
            </div>
          </div>

          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Status history</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <p className="rounded-lg bg-[#F8F2E6] p-3">New inquiry received from {lead.sourcePage}</p>
              <p className="rounded-lg bg-[#F8F2E6] p-3">Assigned to {lead.assignedTo}</p>
              <p className="rounded-lg bg-[#F8F2E6] p-3">Last updated {lead.lastUpdated}</p>
            </div>
          </div>
        </aside>
      </div>

      <ConfirmModal
        open={confirmOpen}
        title="Delete this lead?"
        description="This action is permanent in a real backend. For the MVP demo, this closes the confirmation only."
        onClose={() => setConfirmOpen(false)}
      />
      {toast && <ToastNotification message="Lead updated successfully." onClose={() => setToast(false)} />}
    </div>
  );
}
