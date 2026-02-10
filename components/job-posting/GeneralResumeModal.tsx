'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, FileText, Loader2, User, Mail, Phone, MessageSquare, ChevronDown } from 'lucide-react';

interface GeneralResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const countryCodes = [
    { code: "IN", name: "India", dial: "+91" },
    { code: "US", name: "United States", dial: "+1" },
    { code: "GB", name: "United Kingdom", dial: "+44" },
    { code: "CA", name: "Canada", dial: "+1" },
    { code: "AU", name: "Australia", dial: "+61" },
];

export default function GeneralResumeModal({ isOpen, onClose }: GeneralResumeModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [countryCode, setCountryCode] = useState("IN");
    const [resume, setResume] = useState<File | null>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ];
            if (!allowedTypes.includes(file.type)) {
                setErrorMessage('Please upload a PDF or Word document');
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                setErrorMessage('File size must be less than 5MB');
                return;
            }
            setResume(file);
            setErrorMessage('');
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange({ target: { files: e.dataTransfer.files } } as any);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone) {
            setErrorMessage('Please fill in all required fields');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const submitData = new FormData();
            submitData.append('name', formData.name);
            submitData.append('email', formData.email);
            submitData.append('phone', formData.phone);
            submitData.append('role', 'General Application - ' + (formData.message || 'Open to opportunities'));
            if (resume) {
                submitData.append('resume', resume);
            }

            const response = await fetch('/api/jobs/apply', {
                method: 'POST',
                body: submitData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit application');
            }

            setStatus('success');
        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setResume(null);
        setStatus('idle');
        setErrorMessage('');
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-[family-name:var(--font-red-hat)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center text-center p-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                        Resume Submitted!
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-8 max-w-[280px] leading-relaxed">
                                        Thank you for your interest. We'll contact you when a suitable position opens up.
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="px-10 py-3.5 bg-[#3C8ECB] text-white rounded-xl font-bold text-sm hover:bg-[#3C8ECB]/90 transition-colors shadow-lg shadow-[#3C8ECB]/20"
                                    >
                                        Done
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col h-full max-h-[90vh]"
                                >
                                    {/* Header - Clean White */}
                                    <div className="px-8 py-6 border-b border-slate-100 flex items-start justify-between bg-white sticky top-0 z-10">
                                        <div>
                                            <h2 className="text-slate-900 text-2xl font-bold mb-1">
                                                Send Your Resume
                                            </h2>
                                            <p className="text-slate-500 text-sm font-medium">
                                                We'll reach out when a role opens up
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleClose}
                                            className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Content (Scrollable) */}
                                    <div className="overflow-y-auto p-8 space-y-6 custom-scrollbar" data-lenis-prevent>
                                        <form className="space-y-5" onSubmit={handleSubmit}>
                                            {/* Name Field */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                                    Full Name <span className="text-[#3C8ECB]">*</span>
                                                </label>
                                                <div className="relative group">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3C8ECB] transition-colors" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="John Doe"
                                                        required
                                                        disabled={status === 'loading'}
                                                        className="w-full h-12 pl-12 pr-4 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all font-medium disabled:opacity-50"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email Field */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                                    Email Address
                                                </label>
                                                <div className="relative group">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3C8ECB] transition-colors" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@example.com"
                                                        disabled={status === 'loading'}
                                                        className="w-full h-12 pl-12 pr-4 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all font-medium disabled:opacity-50"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone Field */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                                    Phone Number <span className="text-[#3C8ECB]">*</span>
                                                </label>
                                                <div className="flex gap-3 group">
                                                    <div className="relative w-24 flex-shrink-0">
                                                        <select
                                                            value={countryCode}
                                                            onChange={(e) => setCountryCode(e.target.value)}
                                                            className="w-full h-12 pl-3 pr-8 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 appearance-none focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all text-sm font-bold cursor-pointer"
                                                        >
                                                            {countryCodes.map((c) => (
                                                                <option key={c.code} value={c.code}>
                                                                    {c.dial}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                    </div>
                                                    <div className="relative flex-1">
                                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3C8ECB] transition-colors" />
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            placeholder="Phone Number"
                                                            required
                                                            disabled={status === 'loading'}
                                                            className="w-full h-12 pl-12 pr-4 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all font-medium disabled:opacity-50"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Area of Interest */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                                    Area of Interest
                                                </label>
                                                <div className="relative group">
                                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-[#3C8ECB] transition-colors" />
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="E.g., Frontend Development, UI/UX Design..."
                                                        rows={2}
                                                        disabled={status === 'loading'}
                                                        className="w-full pl-12 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 resize-none transition-all font-medium disabled:opacity-50"
                                                    />
                                                </div>
                                            </div>

                                            {/* Resume Upload */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                                    Resume / CV
                                                </label>
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx"
                                                    className="hidden"
                                                    disabled={status === 'loading'}
                                                />
                                                <div
                                                    onClick={() => fileInputRef.current?.click()}
                                                    onDragOver={handleDrop}
                                                    onDrop={handleDrop}
                                                    className={`relative w-full p-6 border-2 border-dashed rounded-xl cursor-pointer transition-all ${resume
                                                        ? 'border-green-400 bg-green-50/50'
                                                        : 'border-slate-200 hover:border-[#3C8ECB] hover:bg-[#3C8ECB]/5'
                                                        }`}
                                                >
                                                    {resume ? (
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                                                                <FileText className="w-6 h-6 text-green-600" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-bold text-slate-900 truncate">{resume.name}</p>
                                                                <p className="text-xs text-slate-500 mt-0.5">Click to change file</p>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={(e) => { e.stopPropagation(); setResume(null); }}
                                                                className="p-2 rounded-full hover:bg-green-200 transition-colors"
                                                            >
                                                                <X className="w-4 h-4 text-green-600" />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center">
                                                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 group-hover:bg-[#3C8ECB]/10 transition-colors">
                                                                <Upload className="w-6 h-6 text-slate-400 group-hover:text-[#3C8ECB] transition-colors" />
                                                            </div>
                                                            <p className="text-sm font-medium text-slate-700 text-center">
                                                                <span className="text-[#3C8ECB] font-bold">Click to upload</span> or drag and drop
                                                            </p>
                                                            <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Error Message */}
                                            {errorMessage && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm text-center font-medium"
                                                >
                                                    {errorMessage}
                                                </motion.div>
                                            )}

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={status === 'loading'}
                                                className="w-full h-12 mt-4 bg-[#3C8ECB] text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 hover:bg-[#3C8ECB]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#3C8ECB]/20 transform hover:-translate-y-0.5 active:translate-y-0"
                                            >
                                                {status === 'loading' ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    'Submit Resume'
                                                )}
                                            </button>

                                            <p className="text-xs text-slate-400 text-center px-4">
                                                By submitting, you agree that we may contact you about opportunities.
                                            </p>
                                        </form>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
