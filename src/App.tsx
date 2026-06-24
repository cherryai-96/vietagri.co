import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { VietWolffia } from './pages/VietWolffia';
import { Sustainability } from './pages/Sustainability';
import { Contact } from './pages/Contact';
import { AdminRoutes } from './admin/AdminRoutes';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route
              path="*"
              element={
                <div className="flex flex-col min-h-screen bg-cream text-carbon select-none">
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/viet-wolffia" element={<VietWolffia />} />
                      <Route path="/sustainability" element={<Sustainability />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
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
