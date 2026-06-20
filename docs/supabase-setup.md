# VAC Supabase setup

This project is prepared to sync the public website and admin dashboard through Supabase.

## 1. Create a Supabase project

Create a new project in the Supabase dashboard, then copy:

- Project URL
- Publishable key
- Secret key or legacy service role key

Reference:

- https://supabase.com/docs/guides/getting-started/tutorials/with-react

## 2. Create local environment variables

Create `.env.local` in the project root:

```bash
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
SUPABASE_SERVICE_ROLE_KEY=your-secret-or-service-role-key
```

## 3. Create database tables

Open Supabase SQL Editor and run:

- `supabase/schema.sql`

This creates:

- site resources
- CMS pages
- SEO settings
- documents
- media assets
- admin users
- leads

## 4. Seed the website and admin data

Run:

```bash
npm run sync:supabase
```

This pushes the current website and admin seed data into Supabase.

## 5. Create an admin login

Open Supabase Dashboard:

1. Go to Authentication
2. Create a user manually
3. Use that email and password at `/admin/login`

After this, the admin can read protected tables like:

- leads
- admin users
- draft CMS pages

## 6. Deploy environment variables to Vercel

Add the same values to the Vercel project:

```bash
npx vercel@latest env add VITE_SUPABASE_URL
npx vercel@latest env add VITE_SUPABASE_PUBLISHABLE_KEY
npx vercel@latest env add SUPABASE_SERVICE_ROLE_KEY
```

Then redeploy.

## 7. What is live after setup

Public website:

- page content can load from Supabase
- contact forms can submit leads to Supabase

Admin dashboard:

- login can use Supabase Auth
- leads page can read live leads
- pages, media, documents, SEO, and settings can read synced data

## Notes

- Do not expose `SUPABASE_SERVICE_ROLE_KEY` in frontend code.
- The browser only uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- The sync script uses the server-side secret key locally.
