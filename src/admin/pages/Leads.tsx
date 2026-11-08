import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Download, FileSpreadsheet, Mail, MessageCircle, Save, Table, Trash2 } from 'lucide-react';
import type { LeadStatus } from '../types';
import { useAdminUsersData, useLeadsData } from '../data/useAdminData';
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
import { updateLead } from '../../lib/dataSync';
import { downloadExcelCsv, copyForGoogleSheets } from '../utils/exportUtils';

const leadStatuses: LeadStatus[] = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'In Negotiation', 'Won', 'Lost', 'Spam'];

export function LeadsPage() {
  const { leads, loading } = useLeadsData();
  const [statusFilter, setStatusFilter] = useState('All statuses');
  const [toastMessage, setToastMessage] = useState('');

  const filteredLeads = useMemo(() => {
    if (statusFilter === 'All statuses') return leads;
    return leads.filter((item) => item.status === statusFilter);
  }, [leads, statusFilter]);

  const handleExportExcel = () => {
    if (filteredLeads.length === 0) {
      setToastMessage('Không có dữ liệu yêu cầu để xuất file.');
      return;
    }
    const headers = [
      'Ngày nhận',
      'Họ và tên',
      'Công ty',
      'Email',
      'Số điện thoại / WhatsApp',
      'Quốc gia / Thị trường',
      'Lĩnh vực / Sản phẩm quan tâm',
      'Nội dung yêu cầu / Báo giá',
      'Nguồn trang website',
      'Trạng thái',
      'Người phụ trách',
      'Cập nhật cuối',
      'Ghi chú nội bộ',
    ];
    const rows = filteredLeads.map((item) => [
      item.date,
      item.name,
      item.company,
      item.email,
      item.phone,
      item.country,
      item.area,
      item.message,
      item.sourcePage,
      item.status,
      item.assignedTo,
      item.lastUpdated,
      (item.notes || []).join('; '),
    ]);
    const today = new Date().toISOString().slice(0, 10);
    downloadExcelCsv(`VAC_Leads_Inquiries_${today}.csv`, headers, rows);
    setToastMessage('Đã tải xuống file Excel (.csv UTF-8 chuẩn).');
  };

  const handleCopyGoogleSheets = async () => {
    if (filteredLeads.length === 0) {
      setToastMessage('Không có dữ liệu yêu cầu để sao chép.');
      return;
    }
    const headers = [
      'Ngày nhận',
      'Họ và tên',
      'Công ty',
      'Email',
      'Số điện thoại / WhatsApp',
      'Quốc gia / Thị trường',
      'Lĩnh vực / Sản phẩm quan tâm',
      'Nội dung yêu cầu / Báo giá',
      'Nguồn trang website',
      'Trạng thái',
      'Người phụ trách',
      'Cập nhật cuối',
      'Ghi chú nội bộ',
    ];
    const rows = filteredLeads.map((item) => [
      item.date,
      item.name,
      item.company,
      item.email,
      item.phone,
      item.country,
      item.area,
      item.message,
      item.sourcePage,
      item.status,
      item.assignedTo,
      item.lastUpdated,
      (item.notes || []).join('; '),
    ]);
    const ok = await copyForGoogleSheets(headers, rows);
    if (ok) {
      setToastMessage('Đã sao chép dữ liệu! Hãy mở Google Sheets và nhấn Ctrl+V (hoặc Cmd+V) để dán.');
    }
  };

  if (loading) return <LoadingState />;

  return (
    <div>
      <PageHeader
        eyebrow="Sales pipeline"
        title="Leads & Inquiries"
        description="Quản lý toàn bộ yêu cầu báo giá B2B, đăng ký đào tạo và thông tin liên hệ từ khách hàng quốc tế trên website."
        action={
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary" onClick={handleExportExcel}>
              <FileSpreadsheet size={16} /> Xuất Excel (.csv)
            </Button>
            <Button variant="utility" onClick={handleCopyGoogleSheets}>
              <Table size={16} /> Copy cho Google Sheets
            </Button>
          </div>
        }
      />
      <div className="mb-4 grid gap-3 rounded-lg border border-[#E5E0D5] bg-white p-4 md:grid-cols-3">
        <SelectField
          label="Lọc theo trạng thái"
          value={statusFilter}
          options={['All statuses', ...leadStatuses]}
          onChange={setStatusFilter}
        />
        <div className="flex items-center text-xs text-[#6B7280] pt-6">
          <span>Tổng số yêu cầu: <strong className="text-[#0B120C] font-semibold">{filteredLeads.length}</strong></span>
        </div>
      </div>
      <DataTable
        data={filteredLeads}
        columns={[
          { key: 'date', label: 'Date' },
          {
            key: 'name',
            label: 'Name',
            render: (row) => (
              <Link className="font-semibold text-[#104D2E] hover:underline" to={`/admin/leads/${row.id}`}>
                {row.name}
              </Link>
            ),
          },
          { key: 'company', label: 'Company' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Phone / WhatsApp' },
          { key: 'country', label: 'Country' },
          { key: 'area', label: 'Area of Interest' },
          { key: 'sourcePage', label: 'Source Page' },
          { key: 'status', label: 'Lead Status', render: (row) => <StatusBadge status={row.status} /> },
          { key: 'assignedTo', label: 'Assigned To' },
          { key: 'lastUpdated', label: 'Last Updated' },
        ]}
      />
      {toastMessage && (
        <ToastNotification message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </div>
  );
}

export function LeadDetailPage() {
  const { id } = useParams();
  const { leads, loading } = useLeadsData();
  const lead = useMemo(() => leads.find((item) => item.id === id), [id, leads]);

  if (loading) return <LoadingState />;
  if (!lead) return <Navigate to="/admin/leads" replace />;

  return <LeadDetailEditor key={lead.id} lead={lead} />;
}

function LeadDetailEditor({ lead }: { lead: NonNullable<ReturnType<typeof useLeadsData>['leads'][number]> }) {
  const { users } = useAdminUsersData();
  const [toast, setToast] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [status, setStatus] = useState<LeadStatus>(lead.status);
  const [assignedTo, setAssignedTo] = useState(lead.assignedTo);
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<string[]>(lead.notes);
  const [saveError, setSaveError] = useState('');

  async function handleSave() {
    const nextNotes = newNote.trim() ? [...notes, newNote.trim()] : notes;
    setSaveError('');
    const { error } = await updateLead(lead.id, {
      status,
      assignedTo,
      notes: nextNotes,
    });
    if (error) {
      setSaveError(error.message);
      return;
    }
    setNotes(nextNotes);
    setNewNote('');
    setToast(true);
  }

  const handleExportLead = () => {
    const headers = ['Trường thông tin', 'Dữ liệu'];
    const rows = [
      ['Mã Lead', lead.id],
      ['Ngày nhận', lead.date],
      ['Họ và tên', lead.name],
      ['Công ty', lead.company],
      ['Email', lead.email],
      ['Số điện thoại / WhatsApp', lead.phone],
      ['Quốc gia / Thị trường', lead.country],
      ['Lĩnh vực / Sản phẩm quan tâm', lead.area],
      ['Nguồn trang gửi', lead.sourcePage],
      ['Nội dung yêu cầu / Báo giá', lead.message],
      ['Trạng thái hiện tại', status],
      ['Người phụ trách', assignedTo],
      ['Ngày cập nhật', lead.lastUpdated],
      ['Ghi chú nội bộ', notes.join('; ')],
    ];
    downloadExcelCsv(`VAC_Lead_${(lead.company || 'Inquiry').replace(/[^\w]/g, '_')}_${lead.date}.csv`, headers, rows);
    setToast(true);
  };

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

      {saveError && <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{saveError}</div>}

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
              {notes.map((note) => (
                <div key={note} className="rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 p-3 text-sm text-[#1D1D1D]">
                  {note}
                </div>
              ))}
              <TextareaField label="Add internal note" value={newNote} rows={4} help="Notes are visible only to admin users." onChange={setNewNote} />
              <div className="flex justify-end">
                <Button onClick={handleSave}>
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
              <SelectField label="Lead status" value={status} options={leadStatuses} onChange={(value) => setStatus(value as LeadStatus)} />
              <SelectField label="Assigned admin user" value={assignedTo} options={users.map((user) => user.name)} onChange={setAssignedTo} />
              <Button onClick={handleSave}>
                <Save size={16} /> Save Changes
              </Button>
              <Button variant="secondary" onClick={handleExportLead}>
                <Download size={16} /> Xuất Excel Lead
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
