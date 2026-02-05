import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-8 lg:pt-16 pb-8 font-sans text-black border-t border-gray-100 relative">

            <div className="max-w-[1440px] mx-auto px-[10px] lg:px-10 grid grid-cols-3 lg:grid-cols-12 gap-y-8 lg:gap-8 mb-8 lg:mb-16 relative">

                {/* === 1. BRAND SECTION === */}
                <div className="col-span-3 lg:col-span-4 flex flex-col items-start relative">

                    <Link href="/">
                        <img
                            src="/logo.svg"
                            alt="TechFleek"
                            className="w-[70px] h-[18px] lg:w-auto lg:h-[44px] mb-4 lg:mb-6 block object-contain"
                        />
                    </Link>

                    <p className="text-[10px] leading-[13px] lg:text-[16px] lg:leading-[24px] font-normal text-black max-w-[300px] lg:max-w-[350px] mb-4 lg:mb-8">
                        Leading the digital transformation revolution with innovative solutions that empower businesses to achieve extraordinary results.
                    </p>

                    {/* --- SOCIAL ICONS START HERE --- */}
                    {/* SOCIAL ICONS SECTION */}
                    {/* Matches Figma exactly:
              - Order: FB, Twitter, LinkedIn, Instagram, YouTube
              - Size: 40px circles
              - Gap: 2px (Calculated from left:0, left:42, etc.)
          */}
                    <div className="flex items-center gap-[2px] mt-8">

                        {/* 1. FACEBOOK - No link */}
                        <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#3C8ECB] rounded-full flex items-center justify-center cursor-default">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </div>

                        {/* 2. TWITTER - No link */}
                        <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#3C8ECB] rounded-full flex items-center justify-center cursor-default">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </div>

                        {/* 3. LINKEDIN - No link */}
                        <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#3C8ECB] rounded-full flex items-center justify-center cursor-default">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </div>

                        {/* 4. INSTAGRAM - No link */}
                        <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#3C8ECB] rounded-full flex items-center justify-center cursor-default">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </div>

                        {/* 5. YOUTUBE - No link */}
                        <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#3C8ECB] rounded-full flex items-center justify-center cursor-default">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </div>

                        {/* 6. WHATSAPP */}
                        <a
                            href="https://wa.me/918802172570?text=Hi%20TechFleek!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[40px] h-[40px] bg-[#3C8ECB] rounded-full flex items-center justify-center hover:opacity-80 transition"
                        >
                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>

                    </div>
                    {/* --- SOCIAL ICONS END HERE --- */}

                </div>

                {/* === 2. LINKS GRID === */}
                <div className="col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-[12px] lg:text-[18px] mb-2 lg:mb-6">Products</h3>
                    <ul className="space-y-1 lg:space-y-3">
                        {["Web Development", "Mobile Apps", "Cloud Solutions", "Digital Marketing", "Analytics", "Consulting"].map((item) => (
                            <FooterLink key={item} text={item} />
                        ))}
                    </ul>
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-[12px] lg:text-[18px] mb-2 lg:mb-6">Resources</h3>
                    <ul className="space-y-1 lg:space-y-3">
                        {["Documentation", "API Reference", "Tutorials", "Case Studies", "Blog", "Webinars"].map((item) => (
                            <FooterLink key={item} text={item} />
                        ))}
                    </ul>
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-[12px] lg:text-[18px] mb-2 lg:mb-6">Company</h3>
                    <ul className="space-y-1 lg:space-y-3">
                        {["About Us", "Careers", "Press", "Partners", "Contact", "Support"].map((item) => (
                            <FooterLink key={item} text={item} />
                        ))}
                    </ul>
                </div>

                {/* === 3. CONTACT US === */}
                <div className="col-span-3 lg:col-span-2 mt-2 lg:mt-0">
                    <h3 className="font-semibold text-[12px] lg:text-[18px] mb-2 lg:mb-6">Contact us</h3>
                    <ul className="space-y-2 lg:space-y-4">

                        {/* Phone */}
                        <li className="flex items-start gap-3">
                            <span className="mt-[2px] lg:mt-0.5 w-[10px] h-[10px] lg:w-5 lg:h-5 flex-shrink-0 text-black">
                                <svg className="w-full h-full text-black fill-current" viewBox="0 0 24 24">
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                </svg>
                            </span>
                            <span className="text-[10px] lg:text-[14px] font-medium">+91 88021 72570</span>
                        </li>

                        {/* Address */}
                        <li className="flex items-start gap-3">
                            <span className="mt-[2px] lg:mt-0.5 w-[10px] h-[10px] lg:w-5 lg:h-5 flex-shrink-0 text-black">
                                <svg className="w-full h-full text-black fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </span>
                            <span className="text-[10px] lg:text-[14px] leading-[11px] lg:leading-[22px]">
                                O-1106, Officer City - 1, Raj Nagar Extension, Ghaziabad - 201017
                            </span>
                        </li>

                        {/* Email */}
                        <li className="flex items-start gap-3">
                            <span className="mt-[2px] lg:mt-0.5 w-[10px] h-[10px] lg:w-5 lg:h-5 flex-shrink-0 text-black">
                                <svg className="w-full h-full text-black fill-current" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </span>
                            <span className="text-[10px] lg:text-[14px] font-medium">hello@techfleek.com</span>
                        </li>

                    </ul>
                </div>

            </div>

            {/* --- BOTTOM BAR --- */}
            <div className="max-w-[1440px] mx-auto px-[10px] lg:px-10 lg:border-t border-gray-200 lg:pt-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-4">

                    <ul className="flex flex-wrap justify-between lg:justify-end gap-2 lg:gap-8 order-1 lg:order-3">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((link) => (
                            <li key={link}>
                                <Link href="#" className="text-[10px] lg:text-[14px] text-black hover:text-[#3C8ECB] transition-colors">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <p className="text-[10px] lg:text-[14px] text-[#3A3030] lg:text-black text-center lg:text-left order-2 lg:order-2">
                        GST - 09AALCT2786L1ZI
                    </p>

                    <p className="text-[10px] lg:text-[14px] text-black text-center lg:text-left order-3 lg:order-1">
                        © 2025 Techfleek Technologies Private Limited. All rights reserved.
                    </p>

                </div>
            </div>

        </footer>
    );
}

// Simple Helper for Links to keep the main code clean
function FooterLink({ text }: { text: string }) {
    // Map link text to actual routes
    const getHref = (linkText: string): string => {
        const linkMap: { [key: string]: string } = {
            // Products
            "Web Development": "/Services",
            "Mobile Apps": "/Services",
            "Cloud Solutions": "/Services",
            "Digital Marketing": "/Services",
            "Analytics": "/Services",
            "Consulting": "/enquiry",
            // Resources
            "Documentation": "#",
            "API Reference": "#",
            "Tutorials": "#",
            "Case Studies": "/case-study",
            "Blog": "#",
            "Webinars": "#",
            // Company
            "About Us": "/about-us",
            "Careers": "/job-posting",
            "Press": "#",
            "Partners": "#",
            "Contact": "/enquiry",
            "Support": "/enquiry",
        };
        return linkMap[linkText] || "#";
    };

    return (
        <li>
            <Link href={getHref(text)} className="
        text-[8px] lg:text-[16px] 
        font-normal text-black 
        hover:text-[#3C8ECB] transition-colors block
      ">
                {text}
            </Link>
        </li>
    );
}