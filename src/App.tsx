import { Routes, Route } from 'react-router-dom';
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
  return (
    <Routes>
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
  );
}

export default App;