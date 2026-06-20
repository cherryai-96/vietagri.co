import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Eye, Lock, Mail } from 'lucide-react';
import vacLogo from '../../assets/vac-logo-6.png';
import { Button } from '../components/ui';
import { useAdminLanguage } from '../adminI18n';
import { useAdminAuth } from '../adminAuth';

export function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('owner@vietagri.com');
  const [password, setPassword] = useState('vac-admin-demo');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, toggleLanguage, t } = useAdminLanguage();
  const { login, mode } = useAdminAuth();

  const redirectTo = (location.state as { from?: string } | null)?.from ?? '/admin/dashboard';

  return (
    <div className="grid min-h-screen place-items-center bg-[#F8F2E6] px-4 py-10 font-sans">
      <div className="w-full max-w-md rounded-lg border border-[#E5E0D5] bg-white p-6 shadow-xl">
        <div className="text-center">
          <img src={vacLogo} alt="VAC logo" className="mx-auto h-20 w-auto" />
          <h1 className="mt-4 font-serif text-4xl font-bold text-[#0B120C]">{t('Admin Dashboard')}</h1>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            {t('Manage Vietnam Agriculture Center website content and inquiries.')}
          </p>
          <button
            type="button"
            onClick={toggleLanguage}
            className="mt-4 rounded-full border border-[#E5E0D5] px-4 py-2 text-xs font-bold text-[#104D2E] hover:border-[#D8AA6D]"
          >
            {language === 'en' ? 'Tiếng Việt' : 'English'}
          </button>
        </div>

        <form
          className="mt-7 grid gap-4"
          onSubmit={async (event) => {
            event.preventDefault();
            setIsSubmitting(true);
            setErrorMessage('');

            const { error } = await login(email, password);

            if (error) {
              setErrorMessage(error);
              setIsSubmitting(false);
              return;
            }

            navigate(redirectTo, { replace: true });
          }}
        >
          <label className="block">
            <span className="text-sm font-semibold text-[#1D1D1D]">{t('Email')}</span>
            <span className="relative mt-1.5 block">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="w-full rounded-md border border-[#E5E0D5] px-9 py-3 text-sm outline-none focus:border-[#D8AA6D] focus:ring-2 focus:ring-[#D8AA6D]/20"
              />
            </span>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#1D1D1D]">{t('Password')}</span>
            <span className="relative mt-1.5 block">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="w-full rounded-md border border-[#E5E0D5] px-9 py-3 text-sm outline-none focus:border-[#D8AA6D] focus:ring-2 focus:ring-[#D8AA6D]/20"
              />
              <Eye className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
            </span>
          </label>

          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-[#6B7280]">
              <input type="checkbox" defaultChecked />
              {t('Remember me')}
            </label>
            <Link to="#" className="font-semibold text-[#104D2E] hover:text-[#0B120C]">
              {t('Forgot password?')}
            </Link>
          </div>

          <div className="rounded-md border border-[#E5E0D5] bg-[#F8F2E6]/70 px-4 py-3 text-xs leading-5 text-[#6B7280]">
            {mode === 'supabase'
              ? t('Use your Supabase admin account to access live leads and synced website data.')
              : t('Supabase is not configured yet. Demo mode is active for the admin interface.')}
          </div>

          {errorMessage && (
            <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <Button type="submit" className="w-full">
            {isSubmitting ? 'Signing in...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
}
