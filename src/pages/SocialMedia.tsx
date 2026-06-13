import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const SocialMediaStrategy = () => {

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
                                AI-Driven Growth Systems
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Intelligent workflows and automation frameworks that streamline operations and unlock scalable performance.
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
                                Why Intelligent Systems Accelerate Scale
                            </h2> 

                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">🤖 Workflow Automation</h3>
                                    <p className="text-gray-600">Streamlined operational processes that reduce manual workload.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">📧 Lead Nurturing Systems</h3>
                                    <p className="text-gray-600">Structured follow-ups designed to increase engagement and conversion rates.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">⚡ Scalable Efficiency</h3>
                                    <p className="text-gray-600">Data-driven frameworks that support consistent performance at scale.</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Why Choose SoloSuite</h3>
                                <p className="text-gray-600">We implement intelligent systems that enhance productivity and unlock operational leverage.</p>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="lg:sticky lg:top-32 lg:self-start">
                            <ContactForm />

                            {/* CTA for All Services */}
                            <div className="mt-8 bg-slate-50 border border-slate-100 p-8 rounded-3xl">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Ready to Automate Your Growth?</h3>
                                <p className="text-gray-600 mb-6">
                                    Build efficient systems designed for sustainable expansion.
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

export default SocialMediaStrategy;
