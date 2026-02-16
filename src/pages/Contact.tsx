import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, CheckCircle, Star, ArrowRight, MessageCircle, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;

    emailjs
      .sendForm(
        "service_e31pvk9",       // your service ID
        "template_6iiqyqt",      // your template ID
        form,
        "BnnRJRnPM85DCT3Ee"      // your public key
      )
      .then(
        () => {
          setIsSubmitting(false);
          navigate("/thank-you");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
        }
      );
  };



  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Let's Build Something
            <span className="block text-yellow-300">Amazing Together</span>
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch and let's discuss how SoloSuite can help your business grow and succeed online.
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-300">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Free consultation • Quick response • Custom solutions</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Start Your Project Today
              </h2>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                name="contact"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                  >
                    <option value="">Select a service...</option>
                    <option value="web-development">Web Development</option>
                    <option value="web-designing">Web Design</option>
                    <option value="seo-services">SEO Services</option>
                    <option value="copywriting">Copywriting</option>
                    <option value="social-media">Social Media Strategy</option>
                    <option value="digital-consulting">Digital Consulting</option>
                    <option value="complete-package">Complete Digital Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={10}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "Send Message & Get Quote"}
                </button>
              </form>

            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-purple-600 font-medium">hello@solosuitehq.com</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Best for detailed project discussions</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <p className="text-blue-600 font-medium">+92 (335) 7200072</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Quick questions and consultations</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-green-600 font-medium">Global Remote</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Serving clients worldwide</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Response Time</h3>
                      <p className="text-orange-600 font-medium">Within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">We respond to all inquiries quickly</p>
                </div>
              </div>

              {/* Why Choose SoloSuite */}
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose SoloSuite?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Personal Attention</p>
                      <p className="text-sm text-gray-600">Direct communication with Founder</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Proven Results</p>
                      <p className="text-sm text-gray-600">Track record of successful projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">All-in-One Solution</p>
                      <p className="text-sm text-gray-600">Complete digital services under one roof</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Competitive Pricing</p>
                      <p className="text-sm text-gray-600">Quality services at affordable rates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications can take 4-8 weeks. We'll provide a detailed timeline during consultation."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes! We provide ongoing maintenance, updates, and support for all our projects. We're here to help your business grow long-term."
              },
              {
                question: "What's included in your packages?",
                answer: "Our packages are customized based on your needs. We can provide individual services or complete digital solutions including design, development, SEO, and marketing."
              },
              {
                question: "How do you ensure project success?",
                answer: "We use a proven process: thorough planning, regular communication, iterative development, and comprehensive testing to ensure every project exceeds expectations."
              },
              {
                question: "What makes SoloSuite different from other agencies?",
                answer: "As a young entrepreneur and self-taught developer, Malaika brings fresh perspectives and cutting-edge solutions. You get direct access to the founder, personalized attention, and innovative approaches that larger agencies can't offer."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! We work with clients globally and are experienced in different time zones, currencies, and business requirements. Our remote-first approach ensures seamless collaboration regardless of location."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful businesses who've chosen SoloSuite for their digital growth
          </p>
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-300">4.9/5 from 200+ clients</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5" />
            Start Your Project Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
