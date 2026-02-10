'use client';

import React, { useState, useRef } from 'react';
import { X, Upload, ChevronDown, Linkedin, Github, User, Mail, Phone, Briefcase, FileText, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle?: string;
    availableJobs: { id: number; title: string }[];
}

const countryCodes = [
    { code: "IN", name: "India", dial: "+91" },
    { code: "US", name: "United States", dial: "+1" },
    { code: "GB", name: "United Kingdom", dial: "+44" },
    { code: "CA", name: "Canada", dial: "+1" },
    { code: "AU", name: "Australia", dial: "+61" },
    { code: "DE", name: "Germany", dial: "+49" },
    { code: "FR", name: "France", dial: "+33" },
    { code: "AE", name: "UAE", dial: "+971" },
    { code: "SG", name: "Singapore", dial: "+65" },
    { code: "JP", name: "Japan", dial: "+81" },
    { code: "CN", name: "China", dial: "+86" },
]; // Simplified list for cleaner display

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ isOpen, onClose, jobTitle = "", availableJobs }) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState("IN");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    // Form States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedRole, setSelectedRole] = useState(jobTitle || "");
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Close on escape key
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // Reset form when modal opens
    React.useEffect(() => {
        if (isOpen) {
            setStatus('idle');
            setFileName(null);
            setName("");
            setEmail("");
            setPhone("");
            setSelectedRole(jobTitle || "");
            setResumeFile(null);
            // Prevent body scroll (handle both html and body for Lenis/Next.js)
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
    }, [isOpen, jobTitle]);

    if (!isOpen) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
            setResumeFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFileName(e.dataTransfer.files[0].name);
            setResumeFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', `${countryCodes.find(c => c.code === countryCode)?.dial} ${phone}`);
        formData.append('role', selectedRole);
        if (resumeFile) {
            formData.append('resume', resumeFile);
        }

        try {
            const response = await fetch('/api/jobs/apply', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('success');
            } else {
                const result = await response.json();
                alert(`❌ Error: ${result.error}`);
                setStatus('idle');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('❌ Network error. Please try again.');
            setStatus('idle');
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-[family-name:var(--font-red-hat)]">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[520px] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
                <AnimatePresence mode="wait">
                    {status !== 'success' ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col h-full max-h-[90vh]"
                        >
                            {/* Header - Clean White Design */}
                            <div className="px-8 py-6 border-b border-slate-100 flex items-start justify-between bg-white sticky top-0 z-10">
                                <div>
                                    <h2 className="text-slate-900 text-2xl font-bold mb-1">
                                        Apply for Position
                                    </h2>
                                    <p className="text-slate-500 text-sm font-medium">
                                        {selectedRole || 'Select a position below'}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Form Content */}
                            <div className="overflow-y-auto p-8 space-y-6 custom-scrollbar" data-lenis-prevent>
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">
                                            Full Name <span className="text-[#3C8ECB]">*</span>
                                        </label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3C8ECB] transition-colors" />
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="John Doe"
                                                required
                                                className="w-full h-12 pl-12 pr-4 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">
                                            Email Address <span className="text-[#3C8ECB]">*</span>
                                        </label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3C8ECB] transition-colors" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="john@example.com"
                                                required
                                                className="w-full h-12 pl-12 pr-4 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">
                                            Phone Number <span className="text-[#3C8ECB]">*</span>
                                        </label>
                                        <div className="flex gap-3 group">
                                            <div className="relative w-28 flex-shrink-0">
                                                <select
                                                    value={countryCode}
                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                    className="w-full h-12 pl-3 pr-8 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 appearance-none focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all text-sm font-bold cursor-pointer"
                                                >
                                                    {countryCodes.map((c) => (
                                                        <option key={c.code} value={c.code}>
                                                            {c.dial} ({c.code})
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            </div>
                                            <div className="relative flex-1">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3C8ECB] transition-colors" />
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="Phone Number"
                                                    required
                                                    className="w-full h-12 pl-12 pr-4 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all font-medium"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Position Applied For */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">
                                            Position <span className="text-[#3C8ECB]">*</span>
                                        </label>
                                        <div className="relative group">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3C8ECB] transition-colors" />
                                            <select
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                required
                                                className="w-full h-12 pl-12 pr-10 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 appearance-none focus:bg-white focus:outline-none focus:border-[#3C8ECB] focus:ring-4 focus:ring-[#3C8ECB]/10 transition-all font-medium cursor-pointer"
                                            >
                                                <option value="" disabled>Select a position</option>
                                                {availableJobs.map((job) => (
                                                    <option key={job.id} value={job.title}>
                                                        {job.title}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Resume Upload */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">
                                            Resume / CV <span className="text-slate-400 font-normal ml-1">(Optional)</span>
                                        </label>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={handleDrop}
                                            className={`relative w-full p-6 border-2 border-dashed rounded-xl cursor-pointer transition-all ${fileName
                                                ? 'border-green-400 bg-green-50/50'
                                                : 'border-slate-200 hover:border-[#3C8ECB] hover:bg-[#3C8ECB]/5'
                                                }`}
                                        >
                                            {fileName ? (
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                                                        <FileText className="w-6 h-6 text-green-600" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-bold text-slate-900 truncate">{fileName}</p>
                                                        <p className="text-xs text-slate-500 mt-0.5">Click to change file</p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={(e) => { e.stopPropagation(); setFileName(null); setResumeFile(null); }}
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
                                            'Submit Application'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px]"
                        >
                            {/* Animated Checkmark */}
                            <div className="relative mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#3C8ECB] to-blue-400 shadow-xl shadow-[#3C8ECB]/30"
                                >
                                    <CheckCircle className="w-12 h-12 text-white" />
                                </motion.div>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-3">
                                Application Submitted!
                            </h2>
                            <p className="text-slate-500 text-base mb-10 max-w-[320px] leading-relaxed">
                                Thank you for applying to TechFleek. Our team will review your application and get back to you soon.
                            </p>

                            <div className="w-full max-w-[280px] flex flex-col gap-3">
                                <button
                                    onClick={onClose}
                                    className="w-full h-12 bg-[#3C8ECB] text-white rounded-xl font-bold text-sm hover:bg-[#3C8ECB]/90 transition-colors shadow-lg shadow-[#3C8ECB]/20"
                                >
                                    View More Jobs
                                </button>
                                <button
                                    onClick={onClose}
                                    className="w-full h-12 bg-white text-slate-600 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors"
                                >
                                    Close
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="mt-12 flex flex-col items-center gap-4">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Follow us for updates</p>
                                <div className="flex gap-4">
                                    {[
                                        { Icon: Linkedin, color: "#0077b5" },
                                        { Icon: Github, color: "#24292e" }
                                    ].map(({ Icon, color }, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 transition-all hover:scale-110 hover:shadow-md"
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = color;
                                                e.currentTarget.style.color = 'white';
                                                e.currentTarget.style.borderColor = color;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '';
                                                e.currentTarget.style.color = '';
                                                e.currentTarget.style.borderColor = '';
                                            }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default JobApplicationModal;
