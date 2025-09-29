import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';
import ContactForm from '../components/ContactForm';

const Copywriting = () => {

     useEffect(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }, []);

  const projects = [
    {
      title: "SaaS Email Campaign",
      description: "High-converting email sequence that increased trial-to-paid conversions by 180% for a B2B SaaS company.",
      image: "/api/placeholder/400/300",
      category: "Email Marketing",
      metrics: "180% Conversion Increase"
    },
    {
      title: "Landing Page Copy",
      description: "Persuasive landing page copy that transformed a struggling product launch into a bestseller.",
      image: "/api/placeholder/400/300",
      category: "Sales Copy",
      metrics: "65% Conversion Rate"
    },
    {
      title: "Brand Messaging Strategy",
      description: "Complete brand voice and messaging framework that unified communications across all channels.",
      image: "/api/placeholder/400/300",
      category: "Brand Copy",
      metrics: "Brand Consistency +400%"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Copywriting
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compelling content that converts visitors into customers with persuasive and engaging copy that drives action.
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
                Why Professional Copywriting Transforms Businesses
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Psychology-Driven Persuasion</h3>
                  <p className="text-gray-600">Every word is strategically chosen using proven psychological triggers that motivate readers to take action, increasing conversions by up to 300%.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">💬 Brand Voice That Resonates</h3>
                  <p className="text-gray-600">Develop a unique brand voice that connects emotionally with your audience, building trust and loyalty that translates to long-term customer relationships.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Data-Backed Content Strategy</h3>
                  <p className="text-gray-600">Every piece of copy is crafted based on audience research, competitor analysis, and conversion optimization principles for maximum impact.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">✨ SoloSuite's Copywriting Edge</h3>
                  <p className="text-gray-600">Malaika combines creative storytelling with conversion psychology, creating copy that not only engages but compels action. From email sequences to landing pages, every word works toward your business goals.</p>
                </div>
              </div>

              {/* Projects Carousel */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Copywriting Success Stories</h3>
                <ProjectCarousel projects={projects} />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <ContactForm />
              
              {/* CTA for All Services */}
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Complete Digital Solutions?</h3>
                <p className="text-gray-600 mb-6">
                  Get web development, design, SEO, copywriting, and social media strategy - all in one comprehensive package.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get All Services
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