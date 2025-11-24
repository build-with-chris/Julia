import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaarePage from './pages/PaarePage';
import HochzeitenPage from './pages/HochzeitenPage';
import PortraitPage from './pages/PortraitPage';
import FamiliePage from './pages/FamiliePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
