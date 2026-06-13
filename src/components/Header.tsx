import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight">
                SoloSuite
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/#about" 
                className="text-gray-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                to="/#services" 
                className="text-gray-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/#projects" 
                className="text-gray-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/#contact" 
                className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
