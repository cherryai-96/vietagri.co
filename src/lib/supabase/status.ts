import { hasSupabaseBrowserEnv } from './browser';

export interface SupabaseSetupStatus {
  hasBrowserEnv: boolean;
  missingBrowserEnv: string[];
  hasServiceRoleEnv: boolean;
  recommendedNextStep: string;
}

export function getSupabaseSetupStatus(): SupabaseSetupStatus {
  const missingBrowserEnv: string[] = [];

  if (!import.meta.env.VITE_SUPABASE_URL) missingBrowserEnv.push('VITE_SUPABASE_URL');
  if (!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY) missingBrowserEnv.push('VITE_SUPABASE_PUBLISHABLE_KEY');

  const hasServiceRoleEnv = Boolean(import.meta.env.DEV && import.meta.env.VITE_SUPABASE_URL);

  return {
    hasBrowserEnv: hasSupabaseBrowserEnv(),
    missingBrowserEnv,
    hasServiceRoleEnv,
    recommendedNextStep: hasSupabaseBrowserEnv()
      ? 'Create an admin user in Supabase Auth, then sign in from /admin/login.'
      : 'Add Supabase environment variables to .env.local, run the schema SQL, then seed data.',
  };
}
