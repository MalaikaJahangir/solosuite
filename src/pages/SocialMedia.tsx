import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';
import ContactForm from '../components/ContactForm';

const SocialMediaStrategy = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    const projects = [
        {
            title: "Viral Instagram Campaign",
            description: "Strategic content campaign that achieved 7M+ reach in 30 days, establishing brand authority and driving massive engagement.",
            image: "/api/placeholder/400/300",
            category: "Instagram Marketing",
            metrics: "7M+ Reach in 30 Days"
        },
        {
            title: "LinkedIn B2B Strategy",
            description: "Professional LinkedIn strategy that generated 500+ qualified leads for a B2B service company.",
            image: "/api/placeholder/400/300",
            category: "LinkedIn Marketing",
            metrics: "500+ Qualified Leads"
        },
        {
            title: "Multi-Platform Growth",
            description: "Comprehensive social media strategy across all platforms that grew follower base by 1000% in 6 months.",
            image: "/api/placeholder/400/300",
            category: "Multi-Platform",
            metrics: "1000% Follower Growth"
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
                                Social Media Strategy
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive social media strategies for explosive growth and powerful brand presence across all major platforms.
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
                                Why Social Media Strategy is Essential
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🚀 Explosive Brand Awareness</h3>
                                    <p className="text-gray-600">4.8 billion people use social media globally. Strategic content can reach millions, building brand recognition faster than any traditional marketing method.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">💰 Direct Revenue Generation</h3>
                                    <p className="text-gray-600">Social commerce is projected to reach $1.2 trillion by 2025. Strategic social media drives direct sales and customer acquisition at scale.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🤝 Community Building</h3>
                                    <p className="text-gray-600">Build loyal communities around your brand, creating advocates who promote your business organically and provide valuable feedback.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 SoloSuite's Social Media Mastery</h3>
                                    <p className="text-gray-600">Malaika's proven track record includes viral campaigns with 7M+ reach. We understand platform algorithms, trending content, and audience psychology to create strategies that actually work.</p>
                                </div>
                            </div>

                            {/* Projects Carousel */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Media Success Stories</h3>
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

export default SocialMediaStrategy;
