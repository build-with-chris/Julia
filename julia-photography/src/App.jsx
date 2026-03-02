import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PaarePage from './pages/PaarePage';
import HochzeitenPage from './pages/HochzeitenPage';
import PortraitPage from './pages/PortraitPage';
import FamiliePage from './pages/FamiliePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import Koenigsbrunn2026Page from './pages/Koenigsbrunn2026Page';

// Component to ensure scrolling is enabled on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure body scroll is enabled
    document.body.style.overflow = '';
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paare" element={<PaarePage />} />
        <Route path="/hochzeiten" element={<HochzeitenPage />} />
        <Route path="/portrait" element={<PortraitPage />} />
        <Route path="/familie" element={<FamiliePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/koenigsbrunn-2026" element={<Koenigsbrunn2026Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
