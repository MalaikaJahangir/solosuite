import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin,  LucideMessageCircleDashed } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              SoloSuite
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed break-words text-sm md:text-base">
              Empowering businesses with digital solutions that scale. Your trusted partner for web development, design, and digital growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/malaikajahangir/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/malaikajahangirr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923357200072" // Replace with your number
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <LucideMessageCircleDashed className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li>
                <Link to="/services/web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-designing" className="hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/copywriting" className="hover:text-white transition-colors">
                  Copywriting
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="hover:text-white transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/services/digital-consulting" className="hover:text-white transition-colors">
                  Digital Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm md:text-base">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="break-words">solosuitehq@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+92 (355) 7200072</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Global Remote</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="break-words text-xs md:text-sm">
            &copy; 2024 SoloSuite. All rights reserved. Founded by Malaika Jahangir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
