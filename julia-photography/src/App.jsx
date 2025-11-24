import { useState } from 'react';
import Home from './pages/Home';
import PaarePage from './pages/PaarePage';
import HochzeitenPage from './pages/HochzeitenPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Simple page navigation (temporary until React Router is added)
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'paare', 'hochzeiten', 'about', or 'kontakt'

  // Expose navigation function globally for components
  window.navigateTo = (page) => setCurrentPage(page);

  return (
    <>
      {currentPage === 'home' && <Home />}
      {currentPage === 'paare' && <PaarePage />}
      {currentPage === 'hochzeiten' && <HochzeitenPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'kontakt' && <ContactPage />}
    </>
  );
}

export default App;
