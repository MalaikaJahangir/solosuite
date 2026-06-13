import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_e31pvk9",        // your Service ID
        "template_6iiqyqt",       // your Template ID
        form,                     // the form reference
        "BnnRJRnPM85DCT3Ee"       // your Public Key
      );
      navigate("/thank-you");
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
        Ready to Get Started?
      </h3>
      <form name="contact" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-300 text-slate-900 placeholder:text-gray-400 bg-white"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-300 text-slate-900 placeholder:text-gray-400 bg-white"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-300 resize-none text-slate-900 placeholder:text-gray-400 bg-white"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-slate-900 text-white py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm ${
            isSubmitting ? "opacity-70 cursor-not-allowed transform-none" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Let's Build Together"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
