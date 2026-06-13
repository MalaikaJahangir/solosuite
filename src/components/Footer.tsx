import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, LucideMessageCircleDashed } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 mb-8 md:mb-0">
            <h3 className="text-2xl font-black text-white tracking-tight mb-4">
              SoloSuite
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed break-words text-sm md:text-base max-w-md">
              Empowering businesses with digital solutions that scale. Your trusted partner for web development, design, and digital growth.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/malaikajahangir/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="https://www.instagram.com/malaikajahangirr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="https://wa.me/923357200072"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-300"
              >
                <LucideMessageCircleDashed className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-200 mb-4">Services</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm md:text-base">
              <li>
                <Link to="/services/digital-infrastructure" className="hover:text-white transition-colors">
                  Digital Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-brand-positioning" className="hover:text-white transition-colors">
                  Strategic Brand Positioning
                </Link>
              </li>
              <li>
                <Link to="/services/authority-social-systems" className="hover:text-white transition-colors">
                  Authority & Social Systems
                </Link>
              </li>
              <li>
                <Link to="/services/content-conversion-strategy" className="hover:text-white transition-colors">
                  Content & Conversion Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/ai-driven-growth-systems" className="hover:text-white transition-colors">
                  AI-Driven Growth Systems
                </Link>
              </li>
              <li>
                <Link to="/services/backend-sales-systems" className="hover:text-white transition-colors">
                  Backend & Sales Systems
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-200 mb-4">Contact</h4>
            <div className="space-y-3.5 text-slate-400 text-sm md:text-base">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="break-words hover:text-white transition-colors cursor-pointer">malaika@solosuitehq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>+92 (355) 7200072</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Global Remote</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-900 mt-12 pt-8 text-center text-slate-500">
          <p className="break-words text-xs md:text-sm">
            &copy; 2026 SoloSuite. All rights reserved. Founded by Malaika Jahangir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
