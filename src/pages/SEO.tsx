import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const SEOServices = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);
    


    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 bg-clip-text text-transparent">
                                Authority & Social Systems
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Platform-agnostic authority systems designed to build trust, grow influence, and generate structured inbound demand.
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                                Why Authority Systems Drive Growth
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">📈 Platform-Aligned Strategy</h3>
                                    <p className="text-gray-600">Structured authority frameworks tailored for Instagram, LinkedIn, and Facebook.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">🧩 Content Structure & Direction</h3>
                                    <p className="text-gray-600">Defined content pillars that build trust, visibility, and engagement.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">🤝 Inbound Demand Generation</h3>
                                    <p className="text-gray-600">Strategic positioning that transforms audience attention into qualified opportunities.</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Why Choose SoloSuite</h3>
                                <p className="text-gray-600">We design authority ecosystems that convert visibility into credibility and consistent growth.</p>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="lg:sticky lg:top-32 lg:self-start">
                            <ContactForm />

                            {/* CTA for All Services */}
                            <div className="mt-8 bg-slate-50 border border-slate-100 p-8 rounded-3xl">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Build Your Authority System Today</h3>
                                <p className="text-gray-600 mb-6">
                                    Turn influence into structured inbound demand.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 shadow-sm"
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

export default SEOServices;
