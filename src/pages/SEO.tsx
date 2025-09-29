import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';
import ContactForm from '../components/ContactForm';

const SEOServices = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);
    
    const projects = [
        {
            title: "Local Business SEO",
            description: "Complete local SEO strategy that dominated Google Maps and local search results for a service business.",
            image: "/api/placeholder/400/300",
            category: "Local SEO",
            metrics: "500% Local Visibility Increase"
        },
        {
            title: "E-commerce SEO Campaign",
            description: "Comprehensive SEO overhaul for online store, focusing on product pages and category optimization.",
            image: "/api/placeholder/400/300",
            category: "E-commerce SEO",
            metrics: "300% Organic Traffic Growth"
        },
        {
            title: "Content Marketing SEO",
            description: "Strategic content creation and optimization that established thought leadership and drove qualified leads.",
            image: "/api/placeholder/400/300",
            category: "Content SEO",
            metrics: "Top 3 Rankings for 50+ Keywords"
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
                                SEO Services
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Boost your search rankings and online visibility with data-driven SEO strategies that deliver measurable results.
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
                                Why SEO is Critical for Your Business
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🔍 Organic Traffic Goldmine</h3>
                                    <p className="text-gray-600">93% of online experiences begin with a search engine. Ranking on page 1 can drive thousands of qualified visitors to your website monthly.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">💰 Cost-Effective Marketing</h3>
                                    <p className="text-gray-600">SEO provides 5x higher ROI than paid advertising. Once you rank, you get continuous traffic without paying for each click.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🏆 Authority & Trust Building</h3>
                                    <p className="text-gray-600">High search rankings establish your business as an industry authority, building trust and credibility with potential customers.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ SoloSuite's SEO Advantage</h3>
                                    <p className="text-gray-600">Malaika stays ahead of Google's algorithm updates and uses white-hat techniques that deliver sustainable results. Our data-driven approach ensures every optimization decision is backed by analytics and industry best practices.</p>
                                </div>
                            </div>

                            {/* Projects Carousel */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">SEO Success Stories</h3>
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

export default SEOServices;