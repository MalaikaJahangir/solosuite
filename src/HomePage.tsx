import { ArrowRight, Code2, Palette, Search, PenTool, TrendingUp, ExternalLink, Star, Mail } from 'lucide-react';
import malaikaImg from './assets/malaika.png'; // Adjust the path as necessary
import themeBg from './assets/themebg.png';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from './components/Footer';
import { FormEvent } from 'react';
import  { useState } from "react";
import emailjs from "@emailjs/browser";

function HomePage() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.currentTarget;

        emailjs
            .sendForm(
                "service_e31pvk9", // ✅ your service ID
                "template_6iiqyqt", // ✅ your template ID
                form,
                "BnnRJRnPM85DCT3Ee" // ✅ your public key
            )
            .then(
                () => {
                    console.log("Email sent successfully!");
                    navigate("/thank-you");
                },
                (error) => {
                    console.error("Email send error:", error);
                    setIsSubmitting(false);
                }
            );
    };


    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <HashLink
                                    smooth
                                    to="/"
                                    className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                                >
                                    SoloSuite
                                </HashLink>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <HashLink
                                    smooth
                                    to="/#about"
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    About
                                </HashLink>
                                <HashLink
                                    smooth
                                    to="/#services"
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    Services
                                </HashLink>
                                <HashLink
                                    smooth
                                    to="/#projects"
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    Projects
                                </HashLink>
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    Contact
                                </Link>
                                <HashLink
                                    smooth
                                    to="/#contact"
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    Get Started
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
           <section className="pt-36 pb-32 px-6 sm:px-8 lg:px-8">
    <div className="max-w-6xl mx-auto">
        <div className="text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-[1.15]">
                We Build Strategic Digital Infrastructure
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-2">
                    That Powers Serious Brands to Scale
                </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
                From positioning to execution, SoloSuite HQ builds the structured digital foundations ambitious brands rely on to grow with clarity and control.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="/#about">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </a>

                <Link to="/contact">
                    <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-colors">
                        Reach Out
                    </button>
                </Link>
            </div>
        </div>
    </div>
</section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Meet <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Malaika Jahangir</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                As the founder of SoloSuite, Malaika Jahangir is an entrepreneur and  developer driven by innovation and the desire to help businesses thrive in the digital world.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                With a passion for creating digital solutions that make a real impact & combining technical expertise with creative vision to deliver exceptional results for startups, entrepreneurs, and small businesses.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="font-semibold text-gray-900 mb-2">Tech Entrepreneur</h3>
                                    <p className="text-gray-600">Building scalable digital products with a business-first mindset</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="font-semibold text-gray-900 mb-2">Results Focused</h3>
                                    <p className="text-gray-600">Turning ideas into impactful solutions that drive growth</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 h-96 flex flex-col items-center justify-center relative overflow-hidden">
                                <img
                                    src={themeBg}
                                    alt="Theme background"
                                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                                    style={{ zIndex: 1 }}
                                />
                                {/* Profile image circle */}
                                <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center overflow-hidden mb-4 shadow-lg">
                                    <img
                                        src={malaikaImg}
                                        alt="Malaika Jahangir"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                {/* Text beneath profile pic */}
                                <div className="relative z-10 text-center">
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                                        Malaika Jahangir
                                    </h3>
                                    <p className="text-gray-700 text-sm font-medium">Founder &amp; Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital solutions tailored to help your business grow and succeed online.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Code2 className="w-8 h-8" />,
                                title: "Web Development",
                                description: "Custom websites & applications built with modern technologies for optimal performance and user experience.",
                                gradient: "from-purple-500 to-purple-600",
                                link: "/services/web-development"
                            },
                            {
                                icon: <Palette className="w-8 h-8" />,
                                title: "Web Designing",
                                description: "Stunning UI/UX designs that captivate users and drive conversions with pixel-perfect frontend implementations.",
                                gradient: "from-blue-500 to-blue-600",
                                link: "/services/web-designing"
                            },
                            {
                                icon: <Search className="w-8 h-8" />,
                                title: "SEO Services",
                                description: "Boost your search rankings and online visibility with data-driven SEO strategies that deliver results.",
                                gradient: "from-green-500 to-green-600",
                                link: "/services/seo"
                            },
                            {
                                icon: <PenTool className="w-8 h-8" />,
                                title: "Copywriting",
                                description: "Compelling content that converts visitors into customers with persuasive and engaging copy.",
                                gradient: "from-orange-500 to-orange-600",
                                link: "/services/copywriting"
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Social Media Strategy",
                                description: "Comprehensive social media strategies for growth and brand presence across all major platforms.",
                                gradient: "from-pink-500 to-pink-600",
                                link: "/services/social-media"
                            },
                            {
                                icon: <Mail className="w-8 h-8" />,
                                title: "Digital Consulting",
                                description: "Expert guidance on digital transformation and technology solutions tailored to your business needs.",
                                gradient: "from-indigo-500 to-indigo-600",
                                link: "/services/digital-consulting"
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                <Link
                                    to={service.link}
                                    className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                                >
                                    Learn More
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Showcasing our successful digital solutions and the impact they've made for our clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "CaptionCrafter App",
                                description: "AI-powered caption generation tool that helps content creators craft engaging social media posts effortlessly.",
                                metrics: "10K+ Users",
                                category: "Web Application",
                                link: "/projects/caption-crafter"
                            },
                            {
                                title: "Personality Finder",
                                description: "Interactive web application that provides personalized insights through advanced personality assessment algorithms.",
                                metrics: "50K+ Tests Completed",
                                category: "Web Development",
                                link: "https://solosuite-personalityinsights.netlify.app/"
                            },
                            {
                                title: "Instagram Growth Campaign",
                                description: "Strategic social media campaign that achieved viral reach through targeted content and engagement strategies.",
                                metrics: "7M+ Reach in 30 Days",
                                category: "Social Media",
                                link: "projects/instagram-strategy"
                            }
                        ].map((project, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                                            <Code2 className="w-8 h-8 text-purple-600" />
                                        </div>
                                        <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-semibold text-green-600">{project.metrics}</span>
                                        {project.link?.startsWith('http') ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                                            >
                                                View Project
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        ) : (
                                            <Link
                                                to={project.link}
                                                className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                                            >
                                                View Project
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it - hear from the businesses we've helped transform digitally.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "SoloSuite helped us scale our online presence effortlessly. Their expertise in web development and SEO drove incredible results.",
                                author: "Sarah Johnson",
                                role: "CEO, TechStart Inc.",
                                rating: 5
                            },
                            {
                                quote: "The team's creativity and technical skills transformed our brand. We saw a 300% increase in engagement within the first month.",
                                author: "Michael Chen",
                                role: "Founder, Digital Dynamics",
                                rating: 5
                            },
                            {
                                quote: "Professional, innovative, and results-driven. SoloSuite delivered exactly what we needed to grow our business online.",
                                author: "Emily Rodriguez",
                                role: "Marketing Director, Growth Co.",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Ready to{" "}
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Get Started?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Let's discuss your project and create something amazing together.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={8}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                            >
                                {isSubmitting ? "Submitting..." : "Let's Build Together"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <Footer />
        </div>
    );
}

export default HomePage;
