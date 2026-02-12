'use client';

import React, { useState } from 'react';
import {
    MdLightbulbOutline,
    MdGroups,
    MdAccessTime,
    MdLocationOn,
    MdPhone,
    MdEmail,
    MdArrowForward
} from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaBehance, FaFacebook } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const EnquirySection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        eventType: '',
        eventTheme: '',
        preferredDate: '',
        budgetRange: '',
        location: '',
        description: '',
        services: [] as string[],
        privacyAgreed: false
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

    const handleServiceChange = (service: string) => {
        setFormData(prev => {
            const exists = prev.services.includes(service);
            return exists
                ? { ...prev, services: prev.services.filter(s => s !== service) }
                : { ...prev, services: [...prev.services, service] };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.privacyAgreed) {
            setErrorMessage('You must agree to the privacy policy.');
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
            firstName: '', lastName: '', email: '', phone: '', company: '',
            eventType: '', eventTheme: '', preferredDate: '', budgetRange: '',
            location: '', description: '', services: [], privacyAgreed: false
        });
    };

    // Success Modal Popup Component - Figma Design
    const SuccessModal = () => (
        <AnimatePresence>
            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                    onClick={(e) => { if (e.target === e.currentTarget) resetForm(); }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="w-full max-w-[448px] bg-white rounded-[16px] shadow-2xl flex flex-col items-center overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Main Content Area */}
                        <div className="w-full px-8 pt-8 pb-6 flex flex-col items-center text-center">
                            {/* Animated Checkmark - Inside the box with bounce animation */}
                            <div className="relative mb-5 flex items-center justify-center" style={{ width: '80px', height: '80px' }}>
                                {/* Outer ring that scales in */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="absolute w-20 h-20 rounded-full border-4 border-[#3C8ECB]/20"
                                />

                                {/* Main checkmark circle with bounce */}
                                <motion.div
                                    initial={{ scale: 0, y: -20 }}
                                    animate={{ scale: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                                    className="w-20 h-20 rounded-full flex items-center justify-center relative z-10"
                                    style={{
                                        background: 'linear-gradient(135deg, #3C8ECB 0%, #000000 70.71%)',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <motion.path
                                            d="M20 6L9 17l-5-5"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                                        />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* Success Text */}
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="font-bold text-[22px] sm:text-[24px] text-[#111827] mb-2 leading-tight"
                            >
                                Enquiry Submitted<br />Successfully!
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="text-[14px] text-[#4B5563] mb-1 max-w-[368px] leading-relaxed"
                            >
                                Thank you for contacting TechFleek. Our team will review your enquiry and get back to you soon.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45, duration: 0.4 }}
                                className="text-[13px] text-[#6B7280] mb-5 max-w-[340px]"
                            >
                                Meanwhile, explore our services or follow us for updates.
                            </motion.p>

                            {/* Buttons - Figma: 384px width, 48px height */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="w-full max-w-[384px] flex flex-col gap-3"
                            >
                                <button
                                    onClick={resetForm}
                                    className="w-full h-[48px] rounded-[8px] text-white font-semibold text-[14px] hover:brightness-110 active:scale-[0.98] transition-all"
                                    style={{
                                        background: '#3C8ECB',
                                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                                    }}
                                >
                                    Submit Another Enquiry
                                </button>
                                <a
                                    href="/"
                                    className="w-full h-[48px] rounded-[8px] bg-[#F3F4F6] text-[#374151] font-medium text-[14px] flex items-center justify-center hover:bg-[#E5E7EB] active:scale-[0.98] transition-all"
                                >
                                    Back to Home
                                </a>
                            </motion.div>
                        </div>

                        {/* Social Links Footer - Figma: #F9FAFB background */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="w-full bg-[#F9FAFB] py-5 flex flex-col items-center gap-3"
                        >
                            <p className="text-[12px] font-medium text-[#4B5563] tracking-wide">Follow us for updates</p>
                            <div className="flex gap-4">
                                {[
                                    { Icon: FaLinkedin, bg: "#1E3A8A", href: "https://www.linkedin.com/company/techfleek/" },
                                    { Icon: FaFacebook, bg: "#1877F2", href: "https://www.facebook.com/p/Techfleek-61566903430555/" },
                                    { Icon: FaTwitter, bg: "#0D9488", href: "https://twitter.com" },
                                    { Icon: FaBehance, bg: "#1769FF", href: "https://behance.net" }
                                ].map(({ Icon, bg, href }, idx) => (
                                    <a key={idx} href={href} target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all"
                                        style={{ background: bg }}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <SuccessModal />
            <section className="w-full bg-gradient-to-br from-[#F0F7FC] via-[#F9FAFB] to-[#E8F4FD] py-6 lg:py-8 px-5 lg:px-8">
                <div className="w-full max-w-[1500px] mx-auto flex flex-col xl:flex-row xl:items-start gap-6 xl:gap-10">

                    {/* LEFT COLUMN - Sidebar with Background */}
                    <div className="w-full xl:w-80 2xl:w-96 xl:sticky xl:top-20 xl:self-start flex flex-col shrink-0">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-lg border border-[#E5E7EB]/50">
                            {/* Header Text */}
                            <div className="mb-5">
                                <h2 className="font-bold text-lg text-[#1F2937] mb-2">
                                    Tell Us About Your Enquire
                                </h2>
                                <p className="text-sm text-[#4B5563] leading-relaxed">
                                    Fill out this form and our expert event planners will get back to you within 24 hours with a customized proposal.
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="flex flex-col gap-3 mb-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-b from-[#3C8ECB] to-black shadow-md">
                                        <MdLightbulbOutline className="text-white w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#1F2937]">Creative Planning</h3>
                                        <p className="text-xs text-[#4B5563] mt-0.5">Unique concepts tailored to your vision and brand</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-b from-[#3C8ECB] to-black shadow-md">
                                        <MdGroups className="text-white w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#1F2937]">Expert Team</h3>
                                        <p className="text-xs text-[#4B5563] mt-0.5">Experienced professionals managing every detail</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-b from-[#3C8ECB] to-black shadow-md">
                                        <MdAccessTime className="text-white w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#1F2937]">On-Time Delivery</h3>
                                        <p className="text-xs text-[#4B5563] mt-0.5">Flawless execution within timeline and budget</p>
                                    </div>
                                </div>
                            </div>

                            {/* Separator */}
                            <div className="h-px bg-gradient-to-r from-transparent via-[#3C8ECB]/30 to-transparent mb-5" />

                            {/* Contact Header */}
                            <div className="mb-4">
                                <h2 className="font-bold text-lg text-[#1F2937] mb-2">
                                    Need to Talk Right Away?
                                </h2>
                                <p className="text-sm text-[#4B5563]">
                                    Our event planning experts are available to discuss your requirements and answer any questions you may have.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="flex flex-col gap-2">
                                {/* Address */}
                                <a href="https://maps.google.com/?q=O-1106,+Officer+City+-+1,+Raj+Nagar+Extension,+Ghaziabad+-+201017" target="_blank" rel="noopener noreferrer"
                                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#3C8ECB]/5 transition-all group cursor-pointer">
                                    <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center bg-[conic-gradient(from_45deg_at_70.71%_0%,#3C8ECB_0deg,#000000_360deg)] shadow-md">
                                        <MdLocationOn className="text-white w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#2E2E3A] group-hover:text-[#3C8ECB] transition-colors">Office Address</h3>
                                        <p className="text-xs text-[#666666] mt-0.5 leading-relaxed group-hover:text-[#374151] transition-colors">
                                            O-1106, Officer City - 1, Raj Nagar Extension, Ghaziabad - 201017
                                        </p>
                                    </div>
                                </a>

                                {/* Phone */}
                                <a href="tel:+918802172570" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#3C8ECB]/5 transition-all group cursor-pointer">
                                    <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center bg-[conic-gradient(from_45deg_at_70.71%_0%,#3C8ECB_0deg,#000000_360deg)] shadow-md">
                                        <MdPhone className="text-white w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#2E2E3A] group-hover:text-[#3C8ECB] transition-colors">Phone</h3>
                                        <p className="text-xs text-[#4B5563] mt-0.5 group-hover:text-[#3C8ECB] transition-colors">+91 88021 72570</p>
                                        <p className="text-[11px] text-[#666666] mt-0.5">Mon-Fri: 9AM - 6PM PST</p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a href="https://wa.me/918802172570?text=Hi%20TechFleek,%20I%20have%20an%20enquiry" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-2.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all group cursor-pointer border border-[#25D366]/20">
                                    <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center bg-[#25D366] shadow-md">
                                        <FaWhatsapp className="text-white w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#374151] group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</h3>
                                        <p className="text-xs text-[#6B7280] mt-0.5">Get instant response</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a href="mailto:hello@techfleek.com" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#3C8ECB]/5 transition-all group cursor-pointer">
                                    <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center bg-[conic-gradient(from_45deg_at_70.71%_0%,#3C8ECB_0deg,#000000_360deg)] shadow-md">
                                        <MdEmail className="text-white w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#2E2E3A] group-hover:text-[#3C8ECB] transition-colors">Email</h3>
                                        <p className="text-xs text-[#666666] mt-0.5 group-hover:text-[#3C8ECB] transition-colors">hello@techfleek.com</p>
                                        <p className="text-[11px] text-[#666666] mt-0.5">We respond within 24 hours</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Divider Line - Desktop Only */}
                    <div className="hidden xl:block w-px bg-gradient-to-b from-transparent via-[#3C8ECB]/30 to-transparent self-stretch min-h-[400px]" />

                    {/* RIGHT COLUMN - Form */}
                    <div className="w-full xl:flex-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-[#E5E7EB]/50 overflow-hidden">
                            {/* Form Header - Matching Hero Gradient */}
                            <div className="px-5 lg:px-6 py-4" style={{ background: 'linear-gradient(96.21deg, #3C8ECB -5.79%, #000000 99.29%)' }}>
                                <h2 className="font-bold text-base lg:text-lg text-white">Get Started with Your Project</h2>
                                <p className="text-xs text-white/60 mt-0.5">Complete the form below and we'll be in touch shortly</p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-5 lg:p-6 flex flex-col gap-3">

                                {/* Row 1: Names */}
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="font-semibold text-xs text-[#374151]">First Name *</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter your first name"
                                            className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black placeholder-[#ADAEBC] focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10"
                                            disabled={status === 'loading'} />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="font-semibold text-xs text-[#374151]">Last Name *</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter your last name"
                                            className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black placeholder-[#ADAEBC] focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10"
                                            disabled={status === 'loading'} />
                                    </div>
                                </div>

                                {/* Row 2: Contact */}
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="font-semibold text-xs text-[#374151]">Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                                            className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black placeholder-[#ADAEBC] focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10"
                                            disabled={status === 'loading'} />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="font-semibold text-xs text-[#374151]">Phone Number *</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 (555) 123-4567"
                                            className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black placeholder-[#ADAEBC] focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10"
                                            disabled={status === 'loading'} />
                                    </div>
                                </div>

                                {/* Row 3: Company */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold text-xs text-[#374151]">Company/Organization</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name"
                                        className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black placeholder-[#ADAEBC] focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10"
                                        disabled={status === 'loading'} />
                                </div>

                                {/* Row 4: Selects */}
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="flex-1 flex flex-col gap-1 relative">
                                        <label className="font-semibold text-xs text-[#374151]">Event Type *</label>
                                        <select name="eventType" value={formData.eventType} onChange={handleChange}
                                            className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black appearance-none bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 cursor-pointer"
                                            disabled={status === 'loading'}>
                                            <option value="">Select event type</option>
                                            <option value="Corporate">Corporate</option>
                                            <option value="Private">Private</option>
                                        </select>
                                        <div className="absolute right-3 top-[26px] pointer-events-none">
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1 relative">
                                        <label className="font-semibold text-xs text-[#374151]">Event Theme / Guest Count *</label>
                                        <select name="eventTheme" value={formData.eventTheme} onChange={handleChange}
                                            className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black appearance-none bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 cursor-pointer"
                                            disabled={status === 'loading'}>
                                            <option value="">Select guest count</option>
                                            <option value="50-100">50-100</option>
                                            <option value="100-500">100-500</option>
                                        </select>
                                        <div className="absolute right-3 top-[26px] pointer-events-none">
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 5: Date & Budget */}
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="font-semibold text-xs text-[#374151]">Preferred Date</label>
                                        <div className="relative">
                                            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange}
                                                className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 pr-10 text-sm text-black focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 bg-white appearance-none"
                                                style={{ colorScheme: 'light' }} disabled={status === 'loading'} />
                                            <BiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1 relative">
                                        <label className="font-semibold text-xs text-[#374151]">Budget Range</label>
                                        <select name="budgetRange" value={formData.budgetRange} onChange={handleChange}
                                            className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black appearance-none bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 cursor-pointer"
                                            disabled={status === 'loading'}>
                                            <option value="">Select budget range</option>
                                            <option value="$1k - $5k">$1k - $5k</option>
                                            <option value="$5k - $10k">$5k - $10k</option>
                                        </select>
                                        <div className="absolute right-3 top-[26px] pointer-events-none">
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 6: Location */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold text-xs text-[#374151]">Event Location/Venue</label>
                                    <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, venue name, or 'Need venue suggestions'"
                                        className="w-full h-10 border border-[#D1D5DB] rounded-lg px-3 text-sm text-black placeholder-[#ADAEBC] focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10"
                                        disabled={status === 'loading'} />
                                </div>

                                {/* Row 7: Description */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold text-xs text-[#374151]">Event Description & Requirements</label>
                                    <textarea name="description" value={formData.description} onChange={handleChange}
                                        placeholder="Tell us about your event vision, specific requirements, themes, or any special requests..."
                                        className="w-full min-h-[80px] border border-[#D1D5DB] rounded-lg p-3 text-sm text-black placeholder-[#ADAEBC] focus:outline-none focus:border-[#3C8ECB] focus:ring-2 focus:ring-[#3C8ECB]/10 resize-y"
                                        disabled={status === 'loading'} />
                                </div>

                                {/* Services */}
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-xs text-[#374151]">Services Needed (Select all that apply)</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            "Event Planning & Coordination", "Venue Selection",
                                            "Catering Services", "Photography & Videography",
                                            "Entertainment & Music", "Decoration & Design",
                                            "Audio/Visual Equipment", "Transportation & Logistics"
                                        ].map((service, idx) => (
                                            <label key={idx} className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all border ${formData.services.includes(service) ? 'border-[#3C8ECB] bg-[#3C8ECB]/5' : 'border-[#D1D5DB] hover:border-[#3C8ECB]/50'
                                                }`}>
                                                <input type="checkbox" checked={formData.services.includes(service)} onChange={() => handleServiceChange(service)}
                                                    disabled={status === 'loading'}
                                                    className="w-4 h-4 rounded border-[#D1D5DB] text-[#3C8ECB] focus:ring-[#3C8ECB]/20" />
                                                <span className="text-xs text-[#374151]">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Privacy */}
                                <label className="flex items-start gap-2 cursor-pointer">
                                    <input type="checkbox" name="privacyAgreed" checked={formData.privacyAgreed} onChange={handleCheckboxChange}
                                        required disabled={status === 'loading'}
                                        className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#3C8ECB] focus:ring-[#3C8ECB]/20" />
                                    <span className="text-xs text-[#4B5563] leading-relaxed">
                                        I agree to receive communications about my enquiry and understand that my information will be handled according to the Privacy Policy.
                                    </span>
                                </label>

                                {/* Error */}
                                <AnimatePresence>
                                    {status === 'error' && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                            className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs text-center">
                                            {errorMessage}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit Button */}
                                <button type="submit" disabled={status === 'loading'}
                                    className="w-full h-11 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50"
                                    style={{ background: 'linear-gradient(96.21deg, #3C8ECB -5.79%, #000000 99.29%)' }}>
                                    {status === 'loading' ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span className="font-semibold text-sm text-white">Submitting...</span>
                                        </div>
                                    ) : (
                                        <>
                                            <MdArrowForward className="text-white w-4 h-4" />
                                            <span className="font-semibold text-sm text-white">Submit Enquiry</span>
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-[#6B7280] text-center">Our team will respond within 24 hours with a personalized proposal</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnquirySection;
