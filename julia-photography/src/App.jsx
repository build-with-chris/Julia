import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaarePage from './pages/PaarePage';
import HochzeitenPage from './pages/HochzeitenPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paare" element={<PaarePage />} />
        <Route path="/hochzeiten" element={<HochzeitenPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
