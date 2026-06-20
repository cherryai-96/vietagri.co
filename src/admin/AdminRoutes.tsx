import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminAuthProvider } from './adminAuth';
import { ProtectedAdminRoute } from './components/ProtectedAdminRoute';
import { AdminLayout } from './components/AdminLayout';
import { AdminDashboard } from './pages/Dashboard';
import { AIAgentPage } from './pages/AIAgentPage';
import { AdminLogin } from './pages/Login';
import { LeadDetailPage, LeadsPage } from './pages/Leads';
import { PageEditor, PagesIndex } from './pages/PageEditors';
import { DocumentsPage, MediaPage, SecurityPage, SeoPage, SettingsPage, UsersPage } from './pages/ManagementPages';
import { AdminLanguageProvider } from './adminI18n';

export function AdminRoutes() {
  return (
    <AdminLanguageProvider>
      <AdminAuthProvider>
        <Routes>
          <Route path="login" element={<AdminLogin />} />
          <Route element={<ProtectedAdminRoute />}>
            <Route element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="ai-agent" element={<AIAgentPage />} />
              <Route path="pages" element={<PagesIndex />} />
              <Route path="pages/:slug" element={<PageEditor />} />
              <Route path="leads" element={<LeadsPage />} />
              <Route path="leads/:id" element={<LeadDetailPage />} />
              <Route path="media" element={<MediaPage />} />
              <Route path="documents" element={<DocumentsPage />} />
              <Route path="seo" element={<SeoPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="security" element={<SecurityPage />} />
            </Route>
          </Route>
        </Routes>
      </AdminAuthProvider>
    </AdminLanguageProvider>
  );
}
