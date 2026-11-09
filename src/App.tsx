import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const VietWolffia = lazy(() => import('./pages/VietWolffia').then(m => ({ default: m.VietWolffia })));
const TrainingProgram = lazy(() => import('./pages/TrainingProgram').then(m => ({ default: m.TrainingProgram })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Products = lazy(() => import('./pages/Products').then(m => ({ default: m.Products })));
const CategoryPage = lazy(() => import('./pages/products/CategoryPage').then(m => ({ default: m.CategoryPage })));
const CropsPlantBasedPage = lazy(() => import('./pages/products/CropsPlantBasedPage').then(m => ({ default: m.CropsPlantBasedPage })));
const Catalogues = lazy(() => import('./pages/Catalogues').then(m => ({ default: m.Catalogues })));
const ContractFarming = lazy(() => import('./pages/ContractFarming').then(m => ({ default: m.ContractFarming })));
const Infrastructure = lazy(() => import('./pages/Infrastructure').then(m => ({ default: m.Infrastructure })));
const OrganicConsulting = lazy(() => import('./pages/OrganicConsulting').then(m => ({ default: m.OrganicConsulting })));
const AgricultureInputs = lazy(() => import('./pages/AgricultureInputs').then(m => ({ default: m.AgricultureInputs })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));
const AdminRoutes = lazy(() => import('./admin/AdminRoutes').then(m => ({ default: m.AdminRoutes })));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-forest/20 border-t-forest rounded-full animate-spin" />
  </div>
);

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/admin/*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AdminRoutes />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <div className="flex flex-col min-h-screen bg-cream text-carbon">
                  <Header />
                  <main className="flex-grow">
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/viet-wolffia" element={<VietWolffia />} />
                        <Route path="/training-program" element={<TrainingProgram />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/crops-plant-based-products" element={<CropsPlantBasedPage />} />
                        <Route path="/products/crops-plant-based" element={<CropsPlantBasedPage />} />
                        <Route path="/products/:categorySlug" element={<CategoryPage />} />
                        <Route path="/catalogues" element={<Catalogues />} />
                        <Route path="/sustainability" element={<Navigate to="/about" replace />} />
                        <Route path="/agricultural-inputs" element={<AgricultureInputs />} />
                        <Route path="/contract-farming" element={<ContractFarming />} />
                        <Route path="/infrastructure-rd" element={<Infrastructure />} />
                        <Route path="/organic-consulting-certification" element={<OrganicConsulting />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                  <CookieConsentBanner />
                </div>
              }
            />
          </Routes>
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
