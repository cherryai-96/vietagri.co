import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../adminAuth';

export function ProtectedAdminRoute() {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#F8F2E6] px-6 text-center">
        <div>
          <p className="font-serif text-3xl font-bold text-[#0B120C]">VAC Admin</p>
          <p className="mt-2 text-sm text-[#6B7280]">Checking your admin session...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
