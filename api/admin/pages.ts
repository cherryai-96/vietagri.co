import { getAdminSupabaseClient, json, readJsonBody, requireAuthenticatedAdmin } from './_shared.js';

export async function POST(request: Request) {
  try {
    const auth = await requireAuthenticatedAdmin(request);
    if (auth.error) return json({ error: auth.error }, { status: 401 });

    const payload = await readJsonBody(request);
    const supabase = getAdminSupabaseClient();
    const { data, error } = await supabase.from('cms_pages').update(payload).eq('slug', payload.slug).select().single();

    if (error) return json({ error: error.message }, { status: 400 });
    return json({ data });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Unexpected error.' }, { status: 500 });
  }
}
