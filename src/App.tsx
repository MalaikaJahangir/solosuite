import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import ThankYou from "./pages/ThankYou";
import WebDesigning from './pages/WebDesigning';
import SEO from './pages/SEO';
import Copywriting from './pages/Copywriting';
import SocialMedia from './pages/SocialMedia';
import DigitalConsulting from './pages/DigitalConsulting';
import CaptionCrafter from './pages/projects/CaptionCrafter';
import InstagramStrategy from './pages/projects/InstagramStrategy';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setProgress(18);

    const fastStep = setTimeout(() => setProgress(62), 120);
    const slowStep = setTimeout(() => setProgress(88), 260);
    const complete = setTimeout(() => setProgress(100), 420);
    const cleanup = setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 620);

    return () => {
      clearTimeout(fastStep);
      clearTimeout(slowStep);
      clearTimeout(complete);
      clearTimeout(cleanup);
    };
  }, [location.pathname]);

  return (
    <>
      <div
        className={`route-loader ${isLoading ? 'is-active' : ''}`}
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      <div key={location.pathname} className="route-enter">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/web-designing" element={<WebDesigning />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/copywriting" element={<Copywriting />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/digital-consulting" element={<DigitalConsulting />} />
          <Route path="/projects/caption-crafter" element={<CaptionCrafter />} />
          <Route path="/projects/instagram-strategy" element={<InstagramStrategy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Add more project/service routes as needed */}
        </Routes>
      </div>
    </>
  );
}

export default App;
