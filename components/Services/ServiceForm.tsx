'use client';

import React, { useState, useRef } from 'react';
import { X, Upload, CreditCard, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Header from '../Header';

interface ServiceFormProps {
    isOpen: boolean;
    onClose: () => void;
    planName?: string;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ isOpen, onClose, planName }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    // Removed global countryCode state as it's now managed within MobileInputWithCountry

    const countryCodes = [
        { code: 'UK', label: 'UK (+44)' },
        { code: 'US', label: 'US (+1)' },
        { code: 'IN', label: 'IN (+91)' },
        { code: 'CA', label: 'CA (+1)' },
        { code: 'AU', label: 'AU (+61)' },
        { code: 'DE', label: 'DE (+49)' },
        { code: 'FR', label: 'FR (+33)' },
        { code: 'JP', label: 'JP (+81)' },
        { code: 'CN', label: 'CN (+86)' },
        { code: 'BR', label: 'BR (+55)' },
        { code: 'AE', label: 'AE (+971)' },
        { code: 'SA', label: 'SA (+966)' },
    ];

    // Reusable Mobile Input Component
    const MobileInputWithCountry: React.FC<{ initialCountryCode?: string; hasError?: boolean; hasSuccess?: boolean }> = ({ initialCountryCode = 'UK', hasError = false, hasSuccess = false }) => {
        const [countryCode, setCountryCode] = useState(initialCountryCode);
        const [customCode, setCustomCode] = useState(''); // For typing custom code
        const selectRef = useRef<HTMLSelectElement>(null);

        const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            setCountryCode(e.target.value);
            setCustomCode(''); // Reset custom typing if dropdown used
        };

        const handleInputFocus = () => {
            // When input is focused, we might want to clear customCode or show current countryCode
            // For now, let's just ensure the input is editable.
        };

        const displayCode = customCode || countryCode;

        const borderColorClass = hasError ? 'border-[#DC2626]' : hasSuccess ? 'border-[#16A34A]' : 'border-[#D2D5DA]';
        const bgColorClass = hasError ? 'bg-[#FEF2F2]' : 'bg-white';
        const textColorClass = hasError ? 'text-[#991B1B]' : 'text-[#4B5563]';
        const inputTextColorClass = hasError ? 'text-[#991B1B]' : 'text-[#4B5563]';


        return (
            <div className="flex h-[52px]">
                {/* Country Code Section */}
                <div className={`w-[85px] ${bgColorClass} border ${borderColorClass} rounded-l-[6px] flex items-center justify-center gap-1 px-2 border-r-0 relative group`}>
                    {/* Editable Input for Country Code */}
                    <input
                        type="text"
                        value={displayCode}
                        onChange={(e) => {
                            setCustomCode(e.target.value);
                            setCountryCode(''); // Clear dropdown selection state visually if typing
                        }}
                        onFocus={handleInputFocus}
                        className={`w-full h-full bg-transparent text-[16px] text-[#222122] font-medium outline-none text-center relative z-20`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                    />

                    {/* Chevron - visible, but clicking it should ideally open the select */}
                    <ChevronDown size={14} className="text-[#222122] absolute right-2 z-20 pointer-events-none" />

                    {/* Invisible Select overlay for dropdown functionality */}
                    {/* This select covers the entire country code area. When clicked, it opens the native dropdown.
                        The input above allows typing. This setup allows both. */}
                    <select
                        ref={selectRef}
                        value={countryCode} // Controlled by state
                        onChange={handleSelectChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30" // Higher z-index to capture clicks for dropdown
                        title="Select country code"
                    >
                        {countryCodes.map((c) => (
                            <option key={c.code} value={c.code}>{c.label}</option>
                        ))}
                    </select>
                </div>

                {/* Number Input */}
                <div className={`flex-1 ${bgColorClass} border ${borderColorClass} rounded-r-[6px] flex items-center px-[12px]`}>
                    <input
                        type="tel"
                        placeholder="Number goes here"
                        className={`w-full h-full outline-none text-[16px] ${inputTextColorClass} bg-transparent`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                    />
                </div>
            </div>
        );
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-[#F3F3F3] overflow-y-auto">
            {/* Global Header */}
            <div className="relative z-[102]">
                <Header />
            </div>

            {/* Close Button - Floating */}
            <button
                onClick={onClose}
                className="fixed top-[100px] right-6 z-[101] p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                title="Close Form"
            >
                <X size={24} color="#222122" />
            </button>

            {/* Main Content */}
            <div className="w-full max-w-[1770px] mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col items-center mt-[80px]">

                {/* Page Title */}
                <div className="w-full flex justify-between items-end mb-16 border-b border-[#D0D0CC] pb-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <h1 className="text-[40px] md:text-[60px] leading-tight font-medium text-[#222122]" style={{ fontFamily: 'var(--font-inter)' }}>
                                Form Fields
                            </h1>
                            <div className="flex items-center justify-center px-3 py-1 bg-[#EFF6FF] border border-[#60A5FA] rounded-full h-fit">
                                <span className="text-[#2563EB] text-[12px] font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                                    {planName || 'Plan'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Container */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] lg:gap-x-[40px] gap-y-[40px]">

                    {/* --- Column 1 --- */}
                    <div className="flex flex-col gap-[30px]">
                        {/* Title Input */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <input type="text" placeholder="Field text goes here" className="w-full h-[50px] bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] outline-none focus:border-[#60A5FA]" style={{ fontFamily: 'var(--font-inter)' }} />
                        </div>

                        {/* Title Input (Duplicate for visual match) */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <input type="text" placeholder="Field text goes here" className="w-full h-[50px] bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] outline-none focus:border-[#60A5FA]" style={{ fontFamily: 'var(--font-inter)' }} />
                        </div>

                        {/* Dropdown */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <div className="relative w-full h-[50px]">
                                <select className="w-full h-full bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] appearance-none outline-none focus:border-[#60A5FA] cursor-pointer" style={{ fontFamily: 'var(--font-inter)' }}>
                                    <option>Field text goes here</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#4B5563] pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Title Input */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <input type="text" placeholder="Field text goes here" className="w-full h-[50px] bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] outline-none focus:border-[#60A5FA]" style={{ fontFamily: 'var(--font-inter)' }} />
                        </div>

                        {/* Error Input */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <input type="text" placeholder="Field text goes here" className="w-full h-[50px] bg-[#FEF2F2] border border-[#DC2626] rounded-[6px] px-[12px] text-[16px] text-[#991B1B] outline-none" style={{ fontFamily: 'var(--font-inter)' }} />
                            <span className="text-[#DC2626] text-[12px]">Error message goes here</span>
                        </div>

                        {/* Success Input */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <input type="text" placeholder="Field text goes here" className="w-full h-[50px] bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] outline-none focus:border-[#60A5FA]" style={{ fontFamily: 'var(--font-inter)' }} />
                            <span className="text-[#16A34A] text-[12px]">Success message goes here</span>
                        </div>

                        {/* Message Box */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Message</label>
                            <textarea placeholder="Message text goes here" className="w-full h-[152px] bg-white border border-[#D2D5DA] rounded-[6px] p-[12px] text-[16px] text-[#6D7280] outline-none resize-none focus:border-[#60A5FA]" style={{ fontFamily: 'var(--font-inter)' }} />
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Message</label>
                            <textarea placeholder="Message text goes here" className="w-full h-[152px] bg-white border border-[#D2D5DA] rounded-[6px] p-[12px] text-[16px] text-[#6D7280] outline-none resize-none focus:border-[#60A5FA]" style={{ fontFamily: 'var(--font-inter)' }} />
                        </div>
                    </div>

                    {/* --- Column 2 --- */}
                    <div className="flex flex-col gap-[30px]">
                        {/* Dropdown */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <div className="relative w-full h-[50px]">
                                <select className="w-full h-full bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] appearance-none outline-none focus:border-[#60A5FA] cursor-pointer" style={{ fontFamily: 'var(--font-inter)' }}>
                                    <option>Field text goes here</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#4B5563] pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Dropdown */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <div className="relative w-full h-[50px]">
                                <select className="w-full h-full bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] appearance-none outline-none focus:border-[#60A5FA] cursor-pointer" style={{ fontFamily: 'var(--font-inter)' }}>
                                    <option>Field text goes here</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#4B5563] pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Title Input */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <input type="text" placeholder="Field text goes here" className="w-full h-[50px] bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] outline-none focus:border-[#60A5FA]" style={{ fontFamily: 'var(--font-inter)' }} />
                        </div>

                        {/* Dropdown */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <div className="relative w-full h-[50px]">
                                <select className="w-full h-full bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[16px] text-[#4B5563] appearance-none outline-none focus:border-[#60A5FA] cursor-pointer" style={{ fontFamily: 'var(--font-inter)' }}>
                                    <option>Field text goes here</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#4B5563] pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Dropdown Error */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <div className="relative w-full h-[50px]">
                                <select className="w-full h-full bg-[#FEF2F2] border border-[#DC2626] rounded-[6px] px-[12px] text-[#991B1B] appearance-none outline-none focus:border-[#60A5FA] cursor-pointer" style={{ fontFamily: 'var(--font-inter)' }}>
                                    <option>Field text goes here</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#991B1B] pointer-events-none" size={16} />
                            </div>
                            <span className="text-[#DC2626] text-[12px]">Error message goes here</span>
                        </div>

                        {/* Dropdown Success */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Title</label>
                            <div className="relative w-full h-[50px]">
                                <select className="w-full h-full bg-white border border-[#D2D5DA] rounded-[6px] px-[12px] text-[#4B5563] appearance-none outline-none focus:border-[#60A5FA] cursor-pointer" style={{ fontFamily: 'var(--font-inter)' }}>
                                    <option>Field text goes here</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#4B5563] pointer-events-none" size={16} />
                            </div>
                            <span className="text-[#16A34A] text-[12px]">Success message goes here</span>
                        </div>

                        {/* Attachment (Interactive Demo) */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Attachment</label>
                            <div
                                className={`w-full h-[152px] bg-white border border-dashed rounded-[6px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors ${isDragging ? 'border-[#2563EB] bg-blue-50' : 'border-[#D2D5DA]'}`}
                                onClick={handleFileClick}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center mb-3">
                                    <Upload size={20} className="text-[#6D7280]" />
                                </div>
                                <p className="text-[16px] text-[#4B5563]" style={{ fontFamily: 'var(--font-inter)' }}>
                                    {selectedFile ? (
                                        <span className="text-black font-medium">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                                    ) : (
                                        <>Drop here to attach or <span className="text-[#2563EB]">upload</span></>
                                    )}
                                </p>
                                <p className="text-[12px] text-[#6D7280] mt-1" style={{ fontFamily: 'var(--font-inter)' }}>Max size: 5GB</p>
                            </div>
                        </div>

                        {/* Attachment (Static) */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Attachment</label>
                            <div className="w-full h-[152px] bg-white border border-dashed border-[#D2D5DA] rounded-[6px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center mb-3">
                                    <Upload size={20} className="text-[#6D7280]" />
                                </div>
                                <p className="text-[16px] text-[#4B5563]" style={{ fontFamily: 'var(--font-inter)' }}>
                                    Drop here to attach or <span className="text-[#2563EB]">upload</span>
                                </p>
                                <p className="text-[12px] text-[#6D7280] mt-1" style={{ fontFamily: 'var(--font-inter)' }}>Max size: 5GB</p>
                            </div>
                        </div>

                    </div>

                    {/* --- Column 3 --- */}
                    <div className="flex flex-col gap-[30px]">
                        {/* Mobile Number (Interactive Demo) */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Mobile number</label>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Mobile number</label>
                            <div className="flex h-[52px]">
                                <div className="w-[66px] bg-white border border-[#D2D5DA] rounded-l-[6px] flex items-center justify-center gap-1 px-1 border-r-0">
                                    <span className="text-[16px] text-black">UK</span><ChevronDown size={14} className="text-black" />
                                </div>
                                <div className="flex-1 bg-white border border-[#D2D5DA] rounded-r-[6px] flex items-center px-[12px]"><input type="tel" placeholder="Number goes here" className="w-full h-full outline-none text-[16px] bg-transparent" /></div>
                            </div>
                        </div>

                        {/* Mobile Error */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Mobile number</label>
                            <div className="flex h-[52px]">
                                <div className="w-[66px] bg-white border border-y border-l border-[#D2D5DA] rounded-l-[6px] flex items-center justify-center gap-1 px-1">
                                    <span className="text-[16px] text-black">UK</span><ChevronDown size={14} className="text-black" />
                                </div>
                                <div className="flex-1 bg-[#FEF2F2] border border-[#DC2626] rounded-r-[6px] flex items-center px-[12px]"><input type="tel" placeholder="Number goes here" className="w-full h-full outline-none text-[16px] bg-transparent text-[#991B1B]" /></div>
                            </div>
                            <span className="text-[#DC2626] text-[12px]">Error message goes here</span>
                        </div>

                        {/* Mobile Success */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Mobile number</label>
                            <MobileInputWithCountry hasSuccess={true} />
                            <span className="text-[#16A34A] text-[12px]">Success message goes here</span>
                        </div>

                        {/* Attachment (Again) */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Attachment</label>
                            <div className="w-full h-[152px] bg-white border border-dashed border-[#D2D5DA] rounded-[6px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center mb-3">
                                    <Upload size={20} className="text-[#6D7280]" />
                                </div>
                                <p className="text-[16px] text-[#4B5563]" style={{ fontFamily: 'var(--font-inter)' }}>
                                    Drop here to attach or <span className="text-[#2563EB]">upload</span>
                                </p>
                                <p className="text-[12px] text-[#6D7280] mt-1" style={{ fontFamily: 'var(--font-inter)' }}>Max size: 5GB</p>
                            </div>
                            <span className="text-[#DC2626] text-[12px]">Max file size: 5GB</span>
                        </div>

                    </div>


                    {/* --- Column 4 --- */}
                    <div className="flex flex-col gap-[30px]">
                        {/* Website URL */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Website URL</label>
                            <div className="flex h-[52px]">
                                <div className="w-[77px] bg-white border border-[#D2D5DA] rounded-l-[6px] flex items-center justify-center border-r-0"><span className="text-[16px] text-black">https://</span></div>
                                <div className="flex-1 bg-white border border-[#D2D5DA] rounded-r-[6px] flex items-center px-[12px]"><input type="url" placeholder="Link goes here" className="w-full h-full outline-none text-[16px] bg-transparent" /></div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Website URL</label>
                            <div className="flex h-[52px]">
                                <div className="w-[77px] bg-white border border-[#D2D5DA] rounded-l-[6px] flex items-center justify-center border-r-0"><span className="text-[16px] text-black">https://</span></div>
                                <div className="flex-1 bg-white border border-[#D2D5DA] rounded-r-[6px] flex items-center px-[12px]"><input type="url" placeholder="Link goes here" className="w-full h-full outline-none text-[16px] bg-transparent" /></div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Website URL</label>
                            <div className="flex h-[52px]">
                                <div className="w-[77px] bg-white border border-[#D2D5DA] rounded-l-[6px] flex items-center justify-center border-r-0"><span className="text-[16px] text-black">https://</span></div>
                                <div className="flex-1 bg-white border border-[#D2D5DA] rounded-r-[6px] flex items-center px-[12px]"><input type="url" placeholder="Link goes here" className="w-full h-full outline-none text-[16px] bg-transparent" /></div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Website URL</label>
                            <div className="flex h-[52px]">
                                <div className="w-[77px] bg-white border border-[#D2D5DA] rounded-l-[6px] flex items-center justify-center border-r-0"><span className="text-[16px] text-black">https://</span></div>
                                <div className="flex-1 bg-white border border-[#D2D5DA] rounded-r-[6px] flex items-center px-[12px]"><input type="url" placeholder="Link goes here" className="w-full h-full outline-none text-[16px] bg-transparent" /></div>
                            </div>
                        </div>

                        {/* Website URL Error */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Website URL</label>
                            <div className="flex h-[52px]">
                                <div className="w-[77px] bg-white border border-y border-l border-[#D2D5DA] rounded-l-[6px] flex items-center justify-center"><span className="text-[16px] text-black">https://</span></div>
                                <div className="flex-1 bg-[#FEF2F2] border border-[#DC2626] rounded-r-[6px] flex items-center px-[12px]"><input type="url" placeholder="Link goes here" className="w-full h-full outline-none text-[16px] bg-transparent text-[#991B1B]" /></div>
                            </div>
                            <span className="text-[#DC2626] text-[12px]">Error message goes here</span>
                        </div>

                        {/* Website URL Success */}
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Website URL</label>
                            <div className="flex h-[52px]">
                                <div className="w-[77px] bg-white border border-y border-l border-[#D2D5DA] rounded-l-[6px] flex items-center justify-center"><span className="text-[16px] text-black">https://</span></div>
                                <div className="flex-1 bg-white border border-[#D2D5DA] rounded-r-[6px] flex items-center px-[12px]"><input type="url" placeholder="Link goes here" className="w-full h-full outline-none text-[16px] bg-transparent" /></div>
                            </div>
                            <span className="text-[#16A34A] text-[12px]">Success message goes here</span>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <label className="font-medium text-[14px] leading-[20px] text-black">Card details</label>
                            <div className="w-full h-[50px] bg-white border border-[#D2D5DA] rounded-[6px] flex items-center justify-between px-[12px]">
                                <div className="flex items-center gap-3 flex-1"><CreditCard size={20} className="text-[#9CA3AF]" /><input type="text" placeholder="Card number" className="w-full h-full outline-none text-[16px] bg-transparent" /></div>
                                <div className="flex items-center gap-4 text-[#6D7280]"><input type="text" placeholder="MM/YY" className="w-[60px] outline-none text-[16px] bg-transparent text-center" /><input type="text" placeholder="CVV" className="w-[40px] outline-none text-[16px] bg-transparent text-center" /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceForm;
