import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';
import ContactForm from '../components/ContactForm';

const WebDevelopment = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    const projects = [
        {
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            image: "/api/placeholder/400/300",
            category: "Web Application",
            metrics: "300% Sales Increase"
        },
        {
            title: "SaaS Dashboard",
            description: "Modern React-based dashboard with real-time analytics, user management, and API integrations.",
            image: "/api/placeholder/400/300",
            category: "Web Application",
            metrics: "50K+ Active Users"
        },
        {
            title: "Corporate Website",
            description: "Professional corporate website with CMS integration, SEO optimization, and mobile responsiveness.",
            image: "/api/placeholder/400/300",
            category: "Website",
            metrics: "200% Traffic Growth"
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
                                Digital Infrastructure
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                           Conversion-focused websites and scalable digital foundations engineered for clarity, credibility, and measurable growth.
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
                                Why You Need Strategic Digital Infrastructure
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🚀 Conversion-Focused Architecture</h3>
                                    <p className="text-gray-600">High-performance websites structured to guide visitors toward clear actions and measurable outcomes.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">📱 Responsive & Scalable Design</h3>
                                    <p className="text-gray-600">Optimized experiences across all devices, built to grow with your business and evolving demands.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">⚙️ Performance & Reliability</h3>
                                    <p className="text-gray-600">Engineered for speed, security, and long-term maintainability using modern development standards.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Why Choose SoloSuite</h3>
                                    <p className="text-gray-600">We don’t just build websites — we engineer digital foundations designed for authority, clarity, and sustainable growth.</p>
                                </div>
                            </div>

                            {/* Projects Carousel */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-World Projects</h3>
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
                                   Build a scalable online foundation aligned with long-term business growth.
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

export default WebDevelopment;
