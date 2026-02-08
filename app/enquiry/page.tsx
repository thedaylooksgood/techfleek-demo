"use client";

import PageTemplate from "@/components/Common/PageTemplate";
import PageHero from "@/components/Common/PageHero";
import {
    Mail, Phone, MapPin, Clock, Send, CheckCircle, Building2,
    User, MessageSquare, Briefcase, Globe, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Services options
const serviceOptions = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Blockchain / Web3",
    "E-commerce Solutions",
    "Cloud & DevOps",
    "AI / ML Integration",
    "Digital Marketing"
];

// Budget options
const budgetOptions = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
];

// Timeline options
const timelineOptions = [
    "ASAP",
    "1-2 Months",
    "3-6 Months",
    "6+ Months",
    "Flexible"
];

export default function EnquiryPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        services: [] as string[],
        budget: '',
        timeline: '',
        projectDetails: '',
        hearAboutUs: '',
        privacyAgreed: false,
        marketingAgreed: false
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.privacyAgreed) {
            setErrorMessage('Please agree to the privacy policy to continue.');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit enquiry');
            }

            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const resetForm = () => {
        setStatus('idle');
        setFormData({
            firstName: '', lastName: '', email: '', phone: '', company: '', website: '',
            services: [], budget: '', timeline: '', projectDetails: '', hearAboutUs: '',
            privacyAgreed: false, marketingAgreed: false
        });
    };

    return (
        <PageTemplate>
            <PageHero
                title="Get in"
                subtitle="Touch"
                description="Ready to bring your vision to life? Tell us about your project and we'll get back to you within 24 hours."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Enquiry' }
                ]}
            />

            {/* Main Content */}
            <div className="w-full bg-white font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                        {/* Left Column - Contact Info */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                {/* Section Header */}
                                <div className="mb-6">
                                    <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-2">
                                        CONTACT INFO
                                    </span>
                                    <h2 className="font-black text-slate-900 text-xl md:text-2xl leading-[1.1]">
                                        Let's Start a <span className="text-[#3C8ECB]">Conversation</span>
                                    </h2>
                                </div>

                                {/* Contact Cards */}
                                <div className="space-y-3">
                                    <a href="mailto:hello@techfleek.in" className="group flex items-start gap-4 p-4 bg-slate-50 hover:bg-[#3C8ECB]/5 rounded-xl border border-slate-100 hover:border-[#3C8ECB]/30 transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-[#3C8ECB]/10 group-hover:bg-[#3C8ECB] flex items-center justify-center transition-colors">
                                            <Mail className="w-5 h-5 text-[#3C8ECB] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">Email Us</h3>
                                            <p className="text-slate-500 text-xs mt-0.5">hello@techfleek.in</p>
                                        </div>
                                    </a>

                                    <a href="tel:+918802172570" className="group flex items-start gap-4 p-4 bg-slate-50 hover:bg-[#3C8ECB]/5 rounded-xl border border-slate-100 hover:border-[#3C8ECB]/30 transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-[#3C8ECB]/10 group-hover:bg-[#3C8ECB] flex items-center justify-center transition-colors">
                                            <Phone className="w-5 h-5 text-[#3C8ECB] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">Call Us</h3>
                                            <p className="text-slate-500 text-xs mt-0.5">+91 88021 72570</p>
                                        </div>
                                    </a>

                                    <div className="group flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-10 h-10 rounded-lg bg-[#3C8ECB]/10 flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-[#3C8ECB]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">Location</h3>
                                            <p className="text-slate-500 text-xs mt-0.5">O-1106, Officer City - 1,<br />Raj Nagar Extension, Ghaziabad</p>
                                        </div>
                                    </div>

                                    <div className="group flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-10 h-10 rounded-lg bg-[#3C8ECB]/10 flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-[#3C8ECB]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">Business Hours</h3>
                                            <p className="text-slate-500 text-xs mt-0.5">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Response Promise */}
                                <div className="mt-6 p-4 bg-gradient-to-br from-[#3C8ECB]/10 to-blue-50 rounded-xl border border-[#3C8ECB]/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle className="w-4 h-4 text-[#3C8ECB]" />
                                        <span className="font-bold text-slate-900 text-sm">24-Hour Response</span>
                                    </div>
                                    <p className="text-slate-500 text-xs">We respond to all inquiries within 24 hours with a personalized proposal.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:col-span-2">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-white rounded-2xl border border-slate-200 p-8 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="font-black text-slate-900 text-2xl mb-2">Thank You!</h3>
                                        <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
                                            Your enquiry has been submitted successfully. Our team will review your project details and get back to you within 24 hours.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <button onClick={resetForm} className="px-6 py-2.5 bg-[#3C8ECB] text-white rounded-lg font-semibold text-sm hover:bg-[#3C8ECB]/90 transition-colors">
                                                Submit Another Enquiry
                                            </button>
                                            <Link href="/" className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors">
                                                Back to Home
                                            </Link>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                                    >
                                        {/* Form Header */}
                                        <div className="bg-slate-900 px-6 py-4">
                                            <h3 className="font-bold text-white text-lg">Project Enquiry Form</h3>
                                            <p className="text-slate-400 text-xs mt-0.5">Fields marked with * are required</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                            {/* Personal Info */}
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                                                    <User className="w-4 h-4 text-[#3C8ECB]" />
                                                    Personal Information
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-semibold text-slate-700 mb-1">First Name *</label>
                                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                                                            className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all"
                                                            placeholder="John" disabled={status === 'loading'} />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name *</label>
                                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                                                            className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all"
                                                            placeholder="Doe" disabled={status === 'loading'} />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                                                            className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all"
                                                            placeholder="john@company.com" disabled={status === 'loading'} />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                                                            className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all"
                                                            placeholder="+91 98765 43210" disabled={status === 'loading'} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Company Info */}
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                                                    <Building2 className="w-4 h-4 text-[#3C8ECB]" />
                                                    Company Details
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                                                        <input type="text" name="company" value={formData.company} onChange={handleChange}
                                                            className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all"
                                                            placeholder="Your Company" disabled={status === 'loading'} />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-slate-700 mb-1">Website</label>
                                                        <input type="url" name="website" value={formData.website} onChange={handleChange}
                                                            className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all"
                                                            placeholder="https://yourcompany.com" disabled={status === 'loading'} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Services */}
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-[#3C8ECB]" />
                                                    Services Required *
                                                </h4>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                    {serviceOptions.map((service, idx) => (
                                                        <label key={idx}
                                                            className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all border text-xs font-medium ${formData.services.includes(service)
                                                                ? 'border-[#3C8ECB] bg-[#3C8ECB]/5 text-[#3C8ECB]'
                                                                : 'border-slate-200 hover:border-[#3C8ECB]/50 text-slate-700'
                                                                }`}>
                                                            <input type="checkbox" checked={formData.services.includes(service)}
                                                                onChange={() => handleServiceToggle(service)}
                                                                className="sr-only" disabled={status === 'loading'} />
                                                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${formData.services.includes(service)
                                                                ? 'border-[#3C8ECB] bg-[#3C8ECB]'
                                                                : 'border-slate-300'
                                                                }`}>
                                                                {formData.services.includes(service) && (
                                                                    <CheckCircle className="w-3 h-3 text-white" />
                                                                )}
                                                            </div>
                                                            {service}
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Budget & Timeline */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Budget *</label>
                                                    <select name="budget" value={formData.budget} onChange={handleChange} required
                                                        className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all bg-white"
                                                        disabled={status === 'loading'}>
                                                        <option value="">Select budget range</option>
                                                        {budgetOptions.map((opt, idx) => (
                                                            <option key={idx} value={opt}>{opt}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project Timeline *</label>
                                                    <select name="timeline" value={formData.timeline} onChange={handleChange} required
                                                        className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all bg-white"
                                                        disabled={status === 'loading'}>
                                                        <option value="">Select timeline</option>
                                                        {timelineOptions.map((opt, idx) => (
                                                            <option key={idx} value={opt}>{opt}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Project Details */}
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                                                    <MessageSquare className="w-4 h-4 text-[#3C8ECB]" />
                                                    Project Details
                                                </h4>
                                                <textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange}
                                                    className="w-full h-28 p-3 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all resize-none"
                                                    placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                                                    disabled={status === 'loading'} />
                                            </div>

                                            {/* How did you hear */}
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-700 mb-1">How did you hear about us?</label>
                                                <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange}
                                                    className="w-full h-10 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 transition-all bg-white"
                                                    disabled={status === 'loading'}>
                                                    <option value="">Select an option</option>
                                                    <option value="Google Search">Google Search</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="LinkedIn">LinkedIn</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            {/* Agreements */}
                                            <div className="space-y-3 pt-2 border-t border-slate-100">
                                                <label className="flex items-start gap-3 cursor-pointer">
                                                    <input type="checkbox" name="privacyAgreed" checked={formData.privacyAgreed} onChange={handleCheckboxChange}
                                                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#3C8ECB] focus:ring-[#3C8ECB]/20"
                                                        disabled={status === 'loading'} />
                                                    <span className="text-xs text-slate-600 leading-relaxed">
                                                        I agree to the <Link href="/privacy" className="text-[#3C8ECB] hover:underline">Privacy Policy</Link> and consent to processing of my data. *
                                                    </span>
                                                </label>
                                                <label className="flex items-start gap-3 cursor-pointer">
                                                    <input type="checkbox" name="marketingAgreed" checked={formData.marketingAgreed} onChange={handleCheckboxChange}
                                                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#3C8ECB] focus:ring-[#3C8ECB]/20"
                                                        disabled={status === 'loading'} />
                                                    <span className="text-xs text-slate-600 leading-relaxed">
                                                        I'd like to receive updates about TechFleek services and insights.
                                                    </span>
                                                </label>
                                            </div>

                                            {/* Error Message */}
                                            <AnimatePresence>
                                                {(status === 'error' || errorMessage) && (
                                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                                        className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs">
                                                        {errorMessage}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Submit Button */}
                                            <button type="submit" disabled={status === 'loading'}
                                                className="w-full h-12 bg-slate-900 hover:bg-[#3C8ECB] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50">
                                                {status === 'loading' ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Submit Enquiry
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-center text-xs text-slate-400">
                                                We'll respond within 24 hours with a personalized proposal.
                                            </p>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}
