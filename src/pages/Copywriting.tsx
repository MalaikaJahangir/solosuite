import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Copywriting = () => {

     useEffect(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }, []);



  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Content & Conversion Strategy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured content ecosystems that guide audiences from attention to action with precision and intent.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Structured Content Converts
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">📝 Conversion-Focused Messaging</h3>
                  <p className="text-gray-600">Content crafted with intent, guiding audiences from interest to action.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🔄 Funnel Integration</h3>
                  <p className="text-gray-600">Seamless alignment between content, lead capture, and offers.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Performance-Driven Optimization</h3>
                  <p className="text-gray-600">Refinement based on engagement and measurable outcomes.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose SoloSuite</h3>
                <p className="text-gray-600">We create content systems that support business objectives — not just visibility metrics.</p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <ContactForm />
              
              {/* CTA for All Services */}
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need a Clear Content Framework?</h3>
                <p className="text-gray-600 mb-6">
                  Transform attention into measurable results.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Copywriting;
