import { createClient } from '@supabase/supabase-js';

declare const process: {
  env: Record<string, string | undefined>;
};

export function getAdminSupabaseClient() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  }

  return createClient(url, key, { auth: { persistSession: false } });
}

export async function requireAuthenticatedAdmin(request: Request) {
  const url = process.env.VITE_SUPABASE_URL;
  const publishableKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  const authorization = request.headers.get('authorization');
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : '';

  if (!url || !publishableKey || !token) {
    return { error: 'Missing admin session.' };
  }

  const supabase = createClient(url, publishableKey, { auth: { persistSession: false } });
  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return { error: 'Invalid admin session.' };
  }

  return { user: data.user, error: null };
}

export async function readJsonBody(request: Request) {
  return request.json();
}

export function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
}
