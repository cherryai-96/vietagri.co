/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { getSupabaseBrowserClient, hasSupabaseBrowserEnv } from '../lib/supabase/browser';

type AdminAuthMode = 'demo' | 'supabase';

interface AdminAuthContextValue {
  isLoading: boolean;
  isAuthenticated: boolean;
  mode: AdminAuthMode;
  session: Session | null;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
}

const DEMO_SESSION_KEY = 'vac-admin-demo-session';

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

function getDemoSession() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(DEMO_SESSION_KEY) === 'active';
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const mode: AdminAuthMode = hasSupabaseBrowserEnv() ? 'supabase' : 'demo';
  const [session, setSession] = useState<Session | null>(null);
  const [demoAuthenticated, setDemoAuthenticated] = useState(() => (mode === 'demo' ? getDemoSession() : false));
  const [isLoading, setIsLoading] = useState(mode === 'supabase');

  useEffect(() => {
    if (mode === 'demo') {
      return;
    }

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return;
    }

    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session ?? null);
      setIsLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!active) return;
      setSession(nextSession);
      setIsLoading(false);
    });

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, [mode]);

  const value = useMemo<AdminAuthContextValue>(() => ({
    isLoading,
    isAuthenticated: mode === 'supabase' ? Boolean(session) : demoAuthenticated,
    mode,
    session,
    async login(email: string, password: string) {
      if (mode === 'demo') {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(DEMO_SESSION_KEY, 'active');
        }
        setDemoAuthenticated(true);
        return { error: null };
      }

      const supabase = getSupabaseBrowserClient();
      if (!supabase) return { error: 'Supabase is not configured.' };

      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error: error?.message ?? null };
    },
    async logout() {
      if (mode === 'demo') {
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem(DEMO_SESSION_KEY);
        }
        setDemoAuthenticated(false);
        return;
      }

      const supabase = getSupabaseBrowserClient();
      if (!supabase) return;
      await supabase.auth.signOut();
    },
  }), [demoAuthenticated, isLoading, mode, session]);

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
}
