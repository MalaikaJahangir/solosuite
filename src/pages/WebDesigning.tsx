import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';
import ContactForm from '../components/ContactForm';

const WebDesigning = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    const projects = [
        {
            title: "SaaS Landing Page",
            description: "Modern, conversion-focused landing page design with interactive elements and smooth animations.",
            image: "/api/placeholder/400/300",
            category: "UI/UX Design",
            metrics: "45% Conversion Rate"
        },
        {
            title: "Mobile App Interface",
            description: "Intuitive mobile app design with user-centered approach and seamless user experience flow.",
            image: "/api/placeholder/400/300",
            category: "Mobile Design",
            metrics: "4.8★ App Store Rating"
        },
        {
            title: "Brand Identity System",
            description: "Complete brand identity including logo, color palette, typography, and design guidelines.",
            image: "/api/placeholder/400/300",
            category: "Brand Design",
            metrics: "Brand Recognition +250%"
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
                                Web Designing
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stunning UI/UX designs that captivate users and drive conversions with pixel-perfect frontend implementations.
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
                                Why Professional Design Matters
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🎨 First Impressions Count</h3>
                                    <p className="text-gray-600">Users form opinions about your website in just 50 milliseconds. Professional design ensures that first impression is positive and lasting.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">💡 User Experience Excellence</h3>
                                    <p className="text-gray-600">Intuitive navigation, clear information hierarchy, and seamless interactions that guide users toward your goals effortlessly.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">📈 Conversion Optimization</h3>
                                    <p className="text-gray-600">Strategic design elements that psychologically influence user behavior and increase conversion rates by up to 200%.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🏆 Why SoloSuite Excels</h3>
                                    <p className="text-gray-600">Malaika combines artistic vision with data-driven design principles. Every design decision is backed by user research and conversion psychology, ensuring beautiful designs that actually work.</p>
                                </div>
                            </div>

                            {/* Projects Carousel */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Design Portfolio</h3>
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

export default WebDesigning;