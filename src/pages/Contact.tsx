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
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-[1.15]">
            Let's Build Something
            <span className="block bg-gradient-to-r from-slate-100 via-slate-200 to-indigo-200 bg-clip-text text-transparent mt-2 font-bold">
              Amazing Together
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch and let's discuss how SoloSuite can help your business grow and succeed online with structured digital foundations.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Zap className="w-5 h-5 text-indigo-400" />
            <span className="font-semibold text-sm sm:text-base tracking-wide uppercase">Free consultation • Quick response • Custom solutions</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
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
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-300 bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="digital-infrastructure">Digital Infrastructure</option>
                    <option value="strategic-brand-positioning">Strategic Brand Positioning</option>
                    <option value="authority-social-systems">Authority & Social Systems</option>
                    <option value="content-conversion-strategy">Content & Conversion Strategy</option>
                    <option value="ai-driven-growth-systems">AI-Driven Growth Systems</option>
                    <option value="backend-sales-systems">Backend & Sales Systems</option>
                    <option value="complete-package">Complete Digital Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={10}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-slate-900 text-white py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "Send Message & Get Quote"}
                </button>
              </form>

            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email Us</h3>
                      <p className="text-slate-800 font-medium">hello@solosuitehq.com</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">Best for detailed project discussions</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Call Us</h3>
                      <p className="text-slate-800 font-medium">+92 (335) 7200072</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">Quick questions and consultations</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Location</h3>
                      <p className="text-slate-800 font-medium">Global Remote</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">Serving clients worldwide</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Response Time</h3>
                      <p className="text-slate-800 font-medium">Within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">We respond to all inquiries quickly</p>
                </div>
              </div>

              {/* Why Choose SoloSuite */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Why Choose SoloSuite?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Personal Attention</p>
                      <p className="text-sm text-gray-600">Direct communication with Founder</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Proven Results</p>
                      <p className="text-sm text-gray-600">Track record of successful projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">All-in-One Solution</p>
                      <p className="text-sm text-gray-600">Complete digital services under one roof</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Competitive Pricing</p>
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
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long will my project take?",
                answer: "Timelines depend on scope. A basic site can be done in 1–2 weeks; complex apps usually require 4–8. You'll get a clear schedule during our kickoff call."
              },
              {
                question: "Can you support me after launch?",
                answer: "Yes. We offer ongoing maintenance, updates, and strategy work so your digital product continues performing and evolving."
              },
              {
                question: "What do your service packages include?",
                answer: "Packages are flexible. Choose individual services or bundle design, development, SEO, content, and automation into a complete digital system tailored to your goals."
              },
              {
                question: "How do you keep projects on track?",
                answer: "We follow a disciplined workflow: plan thoroughly, communicate often, build iteratively, and test everything. This process keeps us aligned and delivers results."
              },
              {
                question: "Why work with SoloSuite?",
                answer: "You get founder-level attention from a hands-on entrepreneur/developer. Our small‑team agility and data‑driven creativity beat cookie‑cutter agencies every time."
              },
              {
                question: "Do you take on international clients?",
                answer: "Definitely. We partner with businesses worldwide using a remote‑first setup that handles time zones, currencies and culture smoothly."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-800 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-slate-950 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of successful businesses who've chosen SoloSuite for their digital growth
          </p>
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
            ))}
            <span className="ml-2 text-slate-300">4.9/5 from 200+ clients</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-2 shadow-md"
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
