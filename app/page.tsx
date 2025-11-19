"use client";

import React, { useState, useEffect } from "react";
import {
  Code2,
  Smartphone,
  Globe,
  Monitor,
  Mail,
  CreditCard,
  Shield,
  Zap,
  ArrowRight,
  Check,
  Send,
  Loader2,
  LucideIcon,
} from "lucide-react";
import Logo from "./components/Logo";

interface FormData {
  name: string;
  email: string;
  phone: string;
  appType: string;
  description: string;
}

type SubmitStatus = "validation" | "success" | "error" | null;

interface AppType {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const GreenCodeLanding = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    appType: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const appTypes: AppType[] = [
    {
      icon: Monitor,
      title: "Desktop Apps",
      desc: "Native cross-platform applications",
    },
    {
      icon: Globe,
      title: "Web Applications",
      desc: "Responsive, scalable web solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "iOS & Android native development",
    },
    {
      icon: Code2,
      title: "Custom Solutions",
      desc: "Tailored to your exact needs",
    },
  ];

  const features: Feature[] = [
    {
      icon: Mail,
      title: "Email Integration",
      desc: "Seamless communication systems",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      desc: "Secure transaction handling",
    },
    {
      icon: Shield,
      title: "Authentication",
      desc: "Enterprise-grade security",
    },
    {
      icon: Zap,
      title: "API Development",
      desc: "Robust backend architecture",
    },
  ];

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.appType ||
      !formData.description
    ) {
      setSubmitStatus("validation");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const API_ENDPOINT = "/api/send-email";
    const FROM_EMAIL =
      process.env.NEXT_PUBLIC_DOMAIN || "noreply@greencode.com";
    const TO_EMAIL =
      process.env.NEXT_PUBLIC_ADMIN_EMAIL || "contact@greencode.com";
    const LOGO_URL =
      process.env.NEXT_PUBLIC_LOGO_URL ||
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=200";

    const message = `
New App Development Request

Client Information:
-------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Project Details:
-------------------
App Type: ${formData.appType}
Description: ${formData.description}

-------------------
Submitted via GreenCode Landing Page
    `.trim();

    // console.log("See for yourself what's going on: ", {
    //   API_ENDPOINT,
    //   from: FROM_EMAIL,
    //   to: TO_EMAIL,
    //   subject: `New App Request - ${formData.appType}`,
    //   firstName: formData.name.split(" ")[0],
    //   product: "GreenCode Development Services",
    //   message: message,
    //   logoUrl: LOGO_URL,
    //   template: "modern",
    // });

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          subject: `New App Request - ${formData.appType}`,
          firstName: process.env.NEXT_PUBLIC_ADMIN_NAME,
          product: process.env.NEXT_PUBLIC_PRODUCT,
          message: message,
          logoUrl: LOGO_URL,
          template: "default", //"modern",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          appType: "",
          description: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/80 backdrop-blur-lg shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo />
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                GreenCode
              </h1>
              <p className="text-xs text-green-400/70">Coded Solutions</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-gradient-to-r from-green-500 to-emerald-600 rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-semibold whitespace-nowrap"
          >
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Contact</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-6xl md:text-7xl font-bold leading-tight">
              Bring Your Ideas
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                To Life
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              World-class software development for visionaries who demand
              excellence. From concept to deployment, we craft digital
              experiences that transform businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="#services"
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-green-500 rounded-full font-semibold hover:bg-green-500/10 transition-all duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              What We Build
            </h3>
            <p className="text-slate-400 text-lg">
              Cutting-edge solutions across all platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-green-500/20 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{type.title}</h4>
                  <p className="text-slate-400">{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Modern App Essentials
            </h3>
            <p className="text-slate-400 text-lg">
              Every feature you need, built to perfection
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-green-500/30 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-green-400 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose GreenCode?
              </h3>
              <div className="space-y-4">
                {[
                  "Expert developers with 10+ years experience",
                  "Agile methodology for faster delivery",
                  "Clean, maintainable, production-ready code",
                  "24/7 support and maintenance",
                  "Transparent pricing and timeline",
                  "Guaranteed satisfaction or refund",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-green-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Projects Delivered</span>
                    <span className="text-3xl font-bold text-green-400">
                      500+
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Client Satisfaction</span>
                    <span className="text-3xl font-bold text-green-400">
                      99%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Countries Served</span>
                    <span className="text-3xl font-bold text-green-400">
                      30+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Together
            </h3>
            <p className="text-slate-400 text-lg">
              Tell us about your project and we'll bring it to life
            </p>
          </div>

          <div className="space-y-6 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-green-500/30">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  App Type *
                </label>
                <select
                  value={formData.appType}
                  onChange={(e) =>
                    setFormData({ ...formData, appType: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                >
                  <option value="">Select type...</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Mobile App (iOS/Android)">
                    Mobile App (iOS/Android)
                  </option>
                  <option value="Desktop Application">
                    Desktop Application
                  </option>
                  <option value="Custom Solution">Custom Solution</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">
                Project Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all resize-none"
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              />
            </div>

            {submitStatus === "validation" && (
              <div className="p-4 bg-yellow-500/20 border border-yellow-500 rounded-xl text-yellow-400">
                Please fill in all required fields (marked with *)
              </div>
            )}

            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400 flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Thank you! We'll get back to you within 24 hours.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400">
                Something went wrong. Please try again or email us directly at
                contact@greencode.com
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Request</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center pr-4">
              <Logo />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                GreenCode
              </h1>
            </div>
          </div>
          <p className="text-slate-400 mb-4">
            Bringing your ideas to life, one line of code at a time.
          </p>
          <p className="text-slate-600 text-sm">
            &copy; 2025 GreenCode. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GreenCodeLanding;
