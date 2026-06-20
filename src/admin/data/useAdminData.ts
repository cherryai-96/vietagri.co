import { startTransition, useEffect, useState } from 'react';
import {
  documents as fallbackDocuments,
  leads as fallbackLeads,
  mediaItems as fallbackMediaItems,
  seoSettings as fallbackSeoSettings,
  users as fallbackUsers,
} from './mockData';
import type { AdminUser, DocumentItem, EditablePage, Lead, MediaItem, SeoPageSetting } from '../types';
import { loadAdminUsers, loadDocuments, loadEditablePages, loadLeads, loadMediaItems, loadSeoSettings } from '../../lib/dataSync';
import { buildEditablePagesFromResources } from '../../lib/siteSeed';
import { defaultResources } from '../../i18n';

const derivedFallbackPages = buildEditablePagesFromResources(defaultResources);

export function useEditablePagesData() {
  const [pages, setPages] = useState<EditablePage[]>(derivedFallbackPages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadEditablePages(derivedFallbackPages)
      .then((data) => {
        if (!active) return;
        startTransition(() => setPages(data));
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { pages, loading };
}

export function useLeadsData() {
  const [items, setItems] = useState<Lead[]>(fallbackLeads);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadLeads()
      .then((data) => {
        if (!active) return;
        startTransition(() => setItems(data));
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { leads: items, loading };
}

export function useDocumentsData() {
  const [items, setItems] = useState<DocumentItem[]>(fallbackDocuments);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadDocuments().then((data) => {
      if (!active) return;
      startTransition(() => setItems(data));
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return { documents: items, loading };
}

export function useMediaItemsData() {
  const [items, setItems] = useState<MediaItem[]>(fallbackMediaItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadMediaItems().then((data) => {
      if (!active) return;
      startTransition(() => setItems(data));
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return { mediaItems: items, loading };
}

export function useSeoSettingsData() {
  const [items, setItems] = useState<SeoPageSetting[]>(fallbackSeoSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadSeoSettings().then((data) => {
      if (!active) return;
      startTransition(() => setItems(data));
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return { seoSettings: items, loading };
}

export function useAdminUsersData() {
  const [items, setItems] = useState<AdminUser[]>(fallbackUsers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadAdminUsers().then((data) => {
      if (!active) return;
      startTransition(() => setItems(data));
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return { users: items, loading };
}
