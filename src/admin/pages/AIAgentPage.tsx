import { Bot, CheckCircle2, Clock, FileText, Play, Plus, Send, ShieldCheck, Sparkles, Wand2 } from 'lucide-react';
import { Button, DataTable, FormField, PageHeader, SelectField, StatusBadge, TextareaField, ToggleSwitch, cardClass } from '../components/ui';
import { useAdminLanguage } from '../adminI18n';
import { useAdminAuth } from '../adminAuth';
import { getSupabaseSetupStatus } from '../../lib/supabase/status';

const automationRules = [
  {
    id: 'auto-001',
    name: 'New lead summary and priority score',
    trigger: 'New inquiry received',
    action: 'Summarize lead, detect intent, suggest next reply',
    owner: 'Sales Manager',
    status: 'Active',
  },
  {
    id: 'auto-002',
    name: 'Weekly SEO content audit',
    trigger: 'Every Monday 08:00',
    action: 'Check missing meta descriptions, alt text, and translation gaps',
    owner: 'Marketing Editor',
    status: 'Active',
  },
  {
    id: 'auto-003',
    name: 'Document download follow-up draft',
    trigger: 'Corporate profile downloaded',
    action: 'Draft follow-up email for review',
    owner: 'Sales Manager',
    status: 'Draft',
  },
  {
    id: 'auto-004',
    name: 'Media optimization reminder',
    trigger: 'Large image uploaded',
    action: 'Recommend WebP compression and mobile variant',
    owner: 'Content Editor',
    status: 'Active',
  },
];

const approvalQueue = [
  {
    id: 'approval-001',
    request: 'Draft reply to Seoul Natural Foods about Wolffia samples',
    type: 'Lead response',
    risk: 'Needs review',
    created: 'Today, 09:20',
    status: 'Draft',
  },
  {
    id: 'approval-002',
    request: 'Suggest Vietnamese translation for Core Services hero',
    type: 'Content update',
    risk: 'Low',
    created: 'Today, 08:45',
    status: 'Draft',
  },
  {
    id: 'approval-003',
    request: 'Flag Sustainability page certification wording',
    type: 'Compliance check',
    risk: 'Important',
    created: 'Yesterday, 16:10',
    status: 'New',
  },
];

const suggestedPrompts = [
  'Summarize new leads this week and tell me who needs follow-up first.',
  'Check the Home page and suggest clearer B2B copy for international buyers.',
  'Find SEO gaps across English and Vietnamese pages.',
  'Draft a polite reply to a buyer requesting Wolffia samples and technical specs.',
  'Review Sustainability wording and warn me about certification claims.',
];

export function AIAgentPage() {
  const { t } = useAdminLanguage();
  const { mode, isAuthenticated } = useAdminAuth();
  const supabaseStatus = getSupabaseSetupStatus();

  return (
    <div>
      <PageHeader
        eyebrow="AI workspace"
        title="AI Agent & Automation"
        description="Use AI to help manage VAC content, leads, SEO, documents, translations, and recurring admin tasks while keeping owner approval in control."
        action={
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="secondary">
              <ShieldCheck size={16} /> Agent Settings
            </Button>
            <Button>
              <Plus size={16} /> New Automation
            </Button>
          </div>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className={`${cardClass} p-5`}>
          <div className="flex items-start gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#104D2E] text-white">
              <Bot size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('VAC AI Assistant')}</h2>
              <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                {t('Ask the agent to analyze leads, draft content, improve SEO, translate text, or prepare safe recommendations for your approval.')}
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            <TextareaField
              label="Ask AI Agent"
              value="Summarize new leads this week and recommend the top 3 follow-ups."
              rows={5}
              help="The agent should suggest actions. Publishing, deleting, emailing, and role changes should require approval."
            />
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button variant="secondary">
                <Wand2 size={16} /> Improve Prompt
              </Button>
              <Button>
                <Send size={16} /> Run Agent
              </Button>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/60 p-4">
            <h3 className="font-serif text-xl font-bold text-[#0B120C]">{t('Suggested tasks')}</h3>
            <div className="mt-3 grid gap-2">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="rounded-md border border-[#E5E0D5] bg-white px-3 py-2 text-left text-sm font-medium text-[#104D2E] transition hover:border-[#D8AA6D]"
                >
                  {t(prompt)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('Agent safety controls')}</h2>
            <div className="mt-4 grid gap-3">
              <ToggleSwitch label="Require approval before publishing content" checked />
              <ToggleSwitch label="Require approval before sending emails" checked />
              <ToggleSwitch label="Allow AI to create drafts automatically" checked />
              <ToggleSwitch label="Allow AI to delete records" checked={false} />
            </div>
          </div>

          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('Backend-ready connection')}</h2>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              {t('This MVP page is ready to connect to an AI provider, Supabase tables, file storage, and scheduled jobs later.')}
            </p>
            <div className="mt-4 grid gap-3">
              <FormField label="AI provider" value="OpenAI / configurable later" />
              <SelectField label="Default approval mode" value="Draft only" options={['Draft only', 'Auto-run low risk tasks', 'Manual only']} />
            </div>
          </div>

          <div className={`${cardClass} p-5`}>
            <h2 className="font-serif text-2xl font-bold text-[#0B120C]">Supabase sync status</h2>
            <div className="mt-4 grid gap-3 text-sm text-[#1D1D1D]">
              <div className="flex items-center justify-between gap-3 rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 px-3 py-2">
                <span>Browser environment</span>
                <StatusBadge status={supabaseStatus.hasBrowserEnv ? 'Active' : 'Draft'} />
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 px-3 py-2">
                <span>Admin authentication</span>
                <StatusBadge status={isAuthenticated ? 'Active' : 'Draft'} />
              </div>
              <div className="flex items-center justify-between gap-3 rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 px-3 py-2">
                <span>Current mode</span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#104D2E]">{mode}</span>
              </div>
            </div>

            {!supabaseStatus.hasBrowserEnv && (
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
                Missing: {supabaseStatus.missingBrowserEnv.join(', ')}
              </div>
            )}

            <div className="mt-4 rounded-lg border border-[#E5E0D5] bg-white px-4 py-3 text-xs leading-6 text-[#6B7280]">
              {supabaseStatus.recommendedNextStep}
            </div>

            <div className="mt-4 rounded-lg border border-[#0B120C] bg-[#0B120C] px-4 py-3 font-mono text-xs leading-6 text-[#F8F2E6]">
              npm run sync:supabase
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="mb-3 font-serif text-2xl font-bold text-[#0B120C]">{t('Automation Rules')}</h2>
          <DataTable
            data={automationRules}
            columns={[
              { key: 'name', label: 'Rule name' },
              { key: 'trigger', label: 'Trigger' },
              { key: 'action', label: 'AI action' },
              { key: 'owner', label: 'Owner' },
              { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
            ]}
          />
        </div>

        <div className={`${cardClass} p-5`}>
          <h2 className="font-serif text-2xl font-bold text-[#0B120C]">{t('Agent activity')}</h2>
          <div className="mt-4 grid gap-3">
            {[
              { icon: Sparkles, text: 'Generated lead priority summary for Sales Manager', time: '10 minutes ago' },
              { icon: FileText, text: 'Found 3 SEO descriptions that need Vietnamese review', time: '1 hour ago' },
              { icon: Clock, text: 'Scheduled weekly SEO audit for Monday morning', time: 'Yesterday' },
              { icon: CheckCircle2, text: 'Prepared Wolffia sample reply draft for approval', time: 'Yesterday' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex gap-3 rounded-lg border border-[#E5E0D5] bg-[#F8F2E6]/50 p-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#104D2E]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1D1D1D]">{t(item.text)}</p>
                    <p className="mt-1 text-xs text-[#6B7280]">{t(item.time)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-serif text-2xl font-bold text-[#0B120C]">{t('Approval Queue')}</h2>
        <DataTable
          data={approvalQueue}
          columns={[
            { key: 'request', label: 'Request' },
            { key: 'type', label: 'Type' },
            { key: 'risk', label: 'Risk' },
            { key: 'created', label: 'Created' },
            { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
            {
              key: 'id',
              label: 'Action',
              render: () => (
                <button className="inline-flex items-center gap-1 font-semibold text-[#104D2E]">
                  <Play size={14} /> {t('Review')}
                </button>
              ),
            },
          ]}
        />
      </section>
    </div>
  );
}
