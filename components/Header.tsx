"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // We use a Ref to track mouse position constantly, 
  // so the Scroll event can access it even if the mouse isn't moving.
  const mousePos = useRef(0);
  const pathname = usePathname();

  // Check if a nav link is active
  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  useEffect(() => {
    // Guard clause: Only run this logic on Desktop (> 1024px)
    // We check window existence to be safe during SSR
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    // 1. TRACK MOUSE POSITION
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = e.clientY;
      checkVisibility();
    };

    // 2. CHECK VISIBILITY (Run on both Scroll and MouseMove)
    const checkVisibility = () => {
      const scrollY = window.scrollY;
      const mouseY = mousePos.current;

      // LOGIC:
      // Show IF:
      // A) We are at the very top of the page (Hero section)
      //    For Case Studies, hero is approx 440px.
      //    For others, default to 50px buffer.
      // B) OR The mouse is hovering in the top 100px zone

      const threshold = pathname === '/CaseStudy' ? 450 : 50;
      const isAtTop = scrollY < threshold;
      const isHoveringHeader = mouseY < 100;

      if (isAtTop || isHoveringHeader) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', checkVisibility);

    // Initial check
    checkVisibility();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [pathname]);

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Case Study", href: "/case-study" },
    { name: "Careers", href: "/job-posting" },
  ];

  return (
    <>
      {/* CSS for gradient animations */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .gradient-btn {
          background: linear-gradient(101deg, #000000 -10.5%, #3C8ECB 35%, #1a5a8a 70%, #000000 110%);
          background-size: 200% 200%;
          transition: all 0.3s ease;
        }
        
        .gradient-btn:hover {
          animation: gradientShift 2s ease infinite;
          box-shadow: 0 4px 20px rgba(60, 142, 203, 0.4);
          transform: translateY(-2px);
        }
        
        .gradient-btn-active {
          background: linear-gradient(101deg, #3C8ECB -10%, #1a5a8a 50%, #3C8ECB 110%);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          box-shadow: 0 4px 25px rgba(60, 142, 203, 0.5);
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #3C8ECB 0%, #1a5a8a 50%, #3C8ECB 100%);
          background-size: 200% 100%;
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover {
          transform: translateY(-2px);
          color: #3C8ECB;
        }
        
        .nav-link:hover::after {
          transform: translateX(-50%) scaleX(1);
          animation: gradientShift 2s ease infinite;
        }
        
        .nav-link-active {
          color: #3C8ECB !important;
          font-weight: 600 !important;
        }
        
        .nav-link-active::after {
          transform: translateX(-50%) scaleX(1);
          animation: gradientShift 3s ease infinite;
        }
        
        .mobile-nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-link-active {
          color: #3C8ECB !important;
          font-weight: 600 !important;
          background: linear-gradient(90deg, rgba(60, 142, 203, 0.1) 0%, transparent 100%);
          border-left: 3px solid #3C8ECB;
          padding-left: 12px;
        }
      `}</style>

      <header
        className={`
          w-full bg-white fixed top-0 z-50 shadow-sm border-b border-gray-100 font-sans 
          h-[50px] lg:h-[75px] transition-transform duration-300 ease-in-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {/* INNER CONTENT */}
        <div className="max-w-[1440px] mx-auto px-[10px] lg:px-6 h-full flex items-center justify-between">

          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105">
            <Link href="/">
              <img
                src="/logo.svg"
                alt="TechFleek Logo"
                className="w-[127px] h-[27px] lg:w-auto lg:h-10 block object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`nav-link text-black text-[16px] font-medium ${isActiveLink(link.href) ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:block flex-shrink-0">
            <Link href="/enquiry">
              <button className={`
                w-[213px] h-[46px] 
                rounded-[12px] 
                ${pathname === '/enquiry' ? 'gradient-btn-active' : 'gradient-btn'}
                text-white 
                text-[20px] font-normal 
                cursor-pointer
              `}>
                Request a call back
              </button>
            </Link>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="lg:hidden p-2 text-[#1D1B20] transition-transform duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* MOBILE DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[50px] left-0 w-full bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`mobile-nav-link text-black text-[16px] font-medium py-2 border-b border-gray-50 ${isActiveLink(link.href) ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/enquiry" onClick={() => setIsMobileMenuOpen(false)}>
              <button className={`
                w-full h-[46px] mt-2 rounded-[12px] 
                ${pathname === '/enquiry' ? 'gradient-btn-active' : 'gradient-btn'}
                text-white font-medium
              `}>
                Request a call back
              </button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}