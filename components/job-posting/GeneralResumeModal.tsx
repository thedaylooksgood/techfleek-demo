'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, FileText, Loader2 } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface GeneralResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GeneralResumeModal({ isOpen, onClose }: GeneralResumeModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
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
            // Validate file type
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ];
            if (!allowedTypes.includes(file.type)) {
                setErrorMessage('Please upload a PDF or Word document');
                return;
            }
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                setErrorMessage('File size must be less than 5MB');
                return;
            }
            setResume(file);
            setErrorMessage('');
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

    // Backdrop variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    // Modal variants
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring' as const, damping: 25, stiffness: 300 }
        },
        exit: { opacity: 0, scale: 0.9, y: 20 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className={`relative w-full max-w-[500px] max-h-[90vh] bg-white rounded-[16px] sm:rounded-[20px] shadow-2xl overflow-hidden flex flex-col ${inter.className}`}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#000000] to-[#3C8ECB] px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between flex-shrink-0">
                            <div>
                                <h2 className="text-white text-[16px] sm:text-[20px] font-bold">Send Your Resume</h2>
                                <p className="text-white/80 text-[12px] sm:text-[14px]">We'll reach out when a suitable role opens up</p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-white/80 hover:text-white transition-colors p-1"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>

                        {/* Content - Scrollable */}
                        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
                            {status === 'success' ? (
                                // Success State
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center text-center py-4 sm:py-8"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-[20px] sm:text-[24px] font-bold text-[#111827] mb-2">
                                        Resume Submitted!
                                    </h3>
                                    <p className="text-[#4B5563] text-[14px] sm:text-[16px] mb-4 sm:mb-6 max-w-[300px]">
                                        Thank you for your interest in TechFleek. We'll contact you when a suitable position opens up.
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="bg-[#3C8ECB] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#2A75A8] transition-colors text-[14px] sm:text-[16px]"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            ) : (
                                // Form State
                                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-[13px] sm:text-[14px] font-medium text-[#374151] mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                            disabled={status === 'loading'}
                                            className="w-full h-[44px] sm:h-[48px] border border-[#D1D5DB] rounded-[8px] px-3 sm:px-4 text-[14px] sm:text-[16px] text-black placeholder-[#9CA3AF] focus:outline-none focus:border-[#3C8ECB] focus:ring-1 focus:ring-[#3C8ECB] disabled:bg-gray-100"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-[13px] sm:text-[14px] font-medium text-[#374151] mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            disabled={status === 'loading'}
                                            className="w-full h-[44px] sm:h-[48px] border border-[#D1D5DB] rounded-[8px] px-3 sm:px-4 text-[14px] sm:text-[16px] text-black placeholder-[#9CA3AF] focus:outline-none focus:border-[#3C8ECB] focus:ring-1 focus:ring-[#3C8ECB] disabled:bg-gray-100"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-[13px] sm:text-[14px] font-medium text-[#374151] mb-1">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            required
                                            disabled={status === 'loading'}
                                            className="w-full h-[44px] sm:h-[48px] border border-[#D1D5DB] rounded-[8px] px-3 sm:px-4 text-[14px] sm:text-[16px] text-black placeholder-[#9CA3AF] focus:outline-none focus:border-[#3C8ECB] focus:ring-1 focus:ring-[#3C8ECB] disabled:bg-gray-100"
                                        />
                                    </div>

                                    {/* Brief Message / Area of Interest */}
                                    <div>
                                        <label className="block text-[13px] sm:text-[14px] font-medium text-[#374151] mb-1">
                                            Area of Interest / Brief Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="E.g., Frontend Development, UI/UX Design..."
                                            rows={2}
                                            disabled={status === 'loading'}
                                            className="w-full border border-[#D1D5DB] rounded-[8px] px-3 sm:px-4 py-2 sm:py-3 text-[14px] sm:text-[16px] text-black placeholder-[#9CA3AF] focus:outline-none focus:border-[#3C8ECB] focus:ring-1 focus:ring-[#3C8ECB] resize-none disabled:bg-gray-100"
                                        />
                                    </div>

                                    {/* Resume Upload */}
                                    <div>
                                        <label className="block text-[13px] sm:text-[14px] font-medium text-[#374151] mb-1">
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
                                            className={`w-full min-h-[60px] sm:min-h-[80px] border-2 border-dashed rounded-[8px] flex flex-col items-center justify-center cursor-pointer transition-colors py-2 ${resume
                                                ? 'border-green-400 bg-green-50'
                                                : 'border-[#D1D5DB] hover:border-[#3C8ECB] hover:bg-blue-50/30'
                                                }`}
                                        >
                                            {resume ? (
                                                <div className="flex items-center gap-2 text-green-600 px-2">
                                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                                    <span className="text-[12px] sm:text-[14px] font-medium truncate max-w-[200px]">{resume.name}</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-[#9CA3AF] mb-1" />
                                                    <span className="text-[12px] sm:text-[14px] text-[#6B7280] text-center px-2">
                                                        Click to upload PDF or Word
                                                    </span>
                                                    <span className="text-[10px] sm:text-[12px] text-[#9CA3AF]">
                                                        Max 5MB
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Error Message */}
                                    {errorMessage && (
                                        <div className="text-red-500 text-[12px] sm:text-[14px] text-center bg-red-50 py-2 rounded-lg">
                                            {errorMessage}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full h-[44px] sm:h-[52px] bg-gradient-to-r from-[#000000] to-[#3C8ECB] text-white font-semibold text-[14px] sm:text-[16px] rounded-[8px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            'Submit Resume'
                                        )}
                                    </button>

                                    <p className="text-[10px] sm:text-[12px] text-[#6B7280] text-center">
                                        By submitting, you agree that we may contact you about job opportunities.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
