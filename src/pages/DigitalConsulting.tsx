import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';
import ContactForm from '../components/ContactForm';

const DigitalConsulting = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    const projects = [
        {
            title: "Startup Digital Transformation",
            description: "Complete digital strategy overhaul for a tech startup, resulting in 500% growth and successful Series A funding.",
            image: "/api/placeholder/400/300",
            category: "Digital Strategy",
            metrics: "500% Business Growth"
        },
        {
            title: "E-commerce Optimization",
            description: "Comprehensive digital audit and optimization strategy that tripled online sales for a retail business.",
            image: "/api/placeholder/400/300",
            category: "E-commerce Consulting",
            metrics: "300% Sales Increase"
        },
        {
            title: "Technology Stack Modernization",
            description: "Legacy system modernization and digital workflow optimization for improved efficiency and scalability.",
            image: "/api/placeholder/400/300",
            category: "Tech Consulting",
            metrics: "70% Efficiency Improvement"
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
                                Digital Consulting
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Expert guidance on digital transformation and technology solutions tailored to accelerate your business growth.
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
                                Why Digital Consulting Accelerates Success
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Strategic Digital Roadmap</h3>
                                    <p className="text-gray-600">Get a clear, actionable plan for digital transformation that aligns with your business goals and maximizes ROI on technology investments.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Avoid Costly Mistakes</h3>
                                    <p className="text-gray-600">Leverage expert insights to avoid common pitfalls and make informed decisions about technology, platforms, and digital strategies.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🚀 Competitive Advantage</h3>
                                    <p className="text-gray-600">Stay ahead of industry trends and implement cutting-edge solutions that give you a significant edge over competitors.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🧠 SoloSuite's Consulting Expertise</h3>
                                    <p className="text-gray-600">Malaika's unique perspective as a young entrepreneur and self-taught developer brings fresh, innovative solutions. We understand both the technical and business sides, ensuring recommendations that actually work in the real world.</p>
                                </div>
                            </div>

                            {/* Projects Carousel */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Consulting Success Stories</h3>
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

export default DigitalConsulting;