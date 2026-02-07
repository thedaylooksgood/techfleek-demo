"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  BarChart3,
  Globe,
  Zap,
  Server,
  Layers,
  ChevronRight,
} from "lucide-react";
import { homeStyles } from "./Home-Page/styles";

// ============================================================================
// DATA
// ============================================================================

const SERVICES = {
  design: [
    {
      name: "UI/UX Design",
      desc: "Research-driven interfaces that delight users.",
      icon: <Palette className="w-5 h-5" />,
      href: "/services?s=ui-ux",
      color: "text-pink-500 bg-pink-50",
    },
    {
      name: "Brand Identity",
      desc: "Memorable visual systems and style guides.",
      icon: <Layers className="w-5 h-5" />,
      href: "/services?s=branding",
      color: "text-purple-500 bg-purple-50",
    },
  ],
  engineering: [
    {
      name: "Web Development",
      desc: "High-performance Next.js & React applications.",
      icon: <Code2 className="w-5 h-5" />,
      href: "/services?s=web",
      color: "text-blue-500 bg-blue-50",
    },
    {
      name: "Mobile Apps",
      desc: "Native iOS & Android experiences.",
      icon: <Smartphone className="w-5 h-5" />,
      href: "/services?s=mobile",
      color: "text-orange-500 bg-orange-50",
    },
    {
      name: "Cloud & DevOps",
      desc: "Scalable infrastructure and CI/CD pipelines.",
      icon: <Server className="w-5 h-5" />,
      href: "/services?s=cloud",
      color: "text-cyan-500 bg-cyan-50",
    },
  ],
  strategy: [
    {
      name: "Digital Growth",
      desc: "SEO, analytics, and conversion optimization.",
      icon: <BarChart3 className="w-5 h-5" />,
      href: "/services?s=growth",
      color: "text-green-500 bg-green-50",
    },
    {
      name: "AI Integration",
      desc: "Intelligent automation and ML solutions.",
      icon: <Zap className="w-5 h-5" />,
      href: "/services?s=ai",
      color: "text-yellow-500 bg-yellow-50",
    },
  ],
};

const CASE_STUDIES = [
  {
    title: "MergerDomo Platform",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    href: "/case-study/mergerdomo",
  },
  {
    title: "Dygo Diagnostics",
    category: "MedTech",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    href: "/case-study/dygo-diagnostics",
  },
  {
    title: "Bollco Solutions",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6b2f3?auto=format&fit=crop&w=800&q=80",
    href: "/case-study/bollco",
  },
];

const BLOG_POSTS = [
  {
    title: "Building for the AI Era",
    excerpt: "How we're integrating intelligence into every product.",
    date: "Oct 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80",
    href: "#", // blogs folder missing in app directory
  },
  {
    title: "Design Systems at Scale",
    excerpt: "Lessons from building component libraries.",
    date: "Nov 2025",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=400&q=80",
    href: "#", // blogs folder missing in app directory
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setActiveMenu(null);
    setIsMobileOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  // Hover handlers with delay for smoother UX
  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      {/* ========== HEADER BAR ========== */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || activeMenu
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-gray-100"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
          }`}
      >
        <div className={homeStyles.container}>
          <div className="flex items-center justify-between h-[72px]">
            {/* LOGO */}
            <Link href="/" className="relative z-50 flex-shrink-0">
              <img src="/logo.svg" alt="TechFleek" className="h-8 w-auto" />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center h-full">
              <NavItem href="/about-us" label="About" isActive={isActive("/about-us")} />

              <NavDropdown
                id="services"
                label="Services"
                isOpen={activeMenu === "services"}
                isActive={isActive("/services")}
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              />

              <NavDropdown
                id="case-studies"
                label="Case Studies"
                isOpen={activeMenu === "case-studies"}
                isActive={isActive("/case-study")}
                onMouseEnter={() => handleMouseEnter("case-studies")}
                onMouseLeave={handleMouseLeave}
              />

              <NavDropdown
                id="insights"
                label="Insights"
                isOpen={activeMenu === "insights"}
                isActive={false}
                onMouseEnter={() => handleMouseEnter("insights")}
                onMouseLeave={handleMouseLeave}
              />

            </nav>

            {/* CTA + MOBILE TOGGLE */}
            <div className="flex items-center gap-4">
              <Link href="/enquiry" className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden group px-6 py-2.5 rounded-full bg-[#1a1a1a] text-white text-sm font-semibold"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Talk <ArrowRight size={14} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3C8ECB] to-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>

              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMobileOpen(true)}
              >
                <Menu size={24} className="text-gray-900" />
              </button>
            </div>
          </div>
        </div>

        {/* ========== MEGA MENU PANEL ========== */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-[72px] left-0 w-full bg-white border-b border-gray-100 shadow-xl"
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${homeStyles.container} py-10`}>
                {/* SERVICES CONTENT */}
                {activeMenu === "services" && (
                  <div className="grid grid-cols-12 gap-10">
                    {/* LEFT: Service Categories */}
                    <div className="col-span-8 grid grid-cols-3 gap-8">
                      {/* Design */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Design</h4>
                        <ul className="space-y-4">
                          {SERVICES.design.map((item, i) => (
                            <ServiceItem key={i} item={item} />
                          ))}
                        </ul>
                      </div>
                      {/* Engineering */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Engineering</h4>
                        <ul className="space-y-4">
                          {SERVICES.engineering.map((item, i) => (
                            <ServiceItem key={i} item={item} />
                          ))}
                        </ul>
                      </div>
                      {/* Strategy */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Strategy</h4>
                        <ul className="space-y-4">
                          {SERVICES.strategy.map((item, i) => (
                            <ServiceItem key={i} item={item} />
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* RIGHT: Featured */}
                    <div className="col-span-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#3C8ECB] uppercase tracking-widest">Why TechFleek</span>
                        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">End-to-end digital excellence</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          From first concept to final deployment, we partner with you to build products users love.
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3C8ECB] hover:gap-3 transition-all"
                      >
                        Explore all services <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}

                {/* CASE STUDIES CONTENT */}
                {activeMenu === "case-studies" && (
                  <div className="grid grid-cols-4 gap-6">
                    {/* Intro Card */}
                    <div className="col-span-1 flex flex-col justify-center pr-6 border-r border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Work</h3>
                      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Real-world solutions for visionary companies.
                      </p>
                      <Link
                        href="/case-study"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-[#3C8ECB] transition-colors"
                      >
                        View All <ArrowRight size={14} />
                      </Link>
                    </div>

                    {/* Case Study Cards */}
                    {CASE_STUDIES.map((study, idx) => (
                      <Link
                        key={idx}
                        href={study.href}
                        className="group col-span-1 relative overflow-hidden rounded-xl aspect-[4/3]"
                      >
                        <img
                          src={study.image}
                          alt={study.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-5">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                            {study.category}
                          </span>
                          <h4 className="text-white font-bold text-lg group-hover:translate-x-1 transition-transform">
                            {study.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* INSIGHTS CONTENT */}
                {activeMenu === "insights" && (
                  <div className="grid grid-cols-12 gap-10">
                    {/* Left: Featured Article */}
                    <div className="col-span-7">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Featured</h4>
                      <Link href={BLOG_POSTS[0].href} className="group flex gap-6">
                        <div className="w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={BLOG_POSTS[0].image}
                            alt={BLOG_POSTS[0].title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-xs text-gray-500 mb-2">{BLOG_POSTS[0].date}</span>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3C8ECB] transition-colors mb-2">
                            {BLOG_POSTS[0].title}
                          </h3>
                          <p className="text-sm text-gray-600">{BLOG_POSTS[0].excerpt}</p>
                        </div>
                      </Link>
                    </div>

                    {/* Right: Quick Links */}
                    <div className="col-span-5 border-l border-gray-100 pl-10">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Topics</h4>
                      <ul className="space-y-3">
                        {["Engineering", "Design", "Product", "Company News", "Careers"].map((topic, i) => (
                          <li key={i}>
                            <Link
                              href="#"
                              className="group flex items-center justify-between py-2 text-base font-medium text-gray-700 hover:text-[#3C8ECB] transition-colors"
                            >
                              {topic}
                              <ChevronRight
                                size={16}
                                className="text-gray-400 group-hover:text-[#3C8ECB] group-hover:translate-x-1 transition-all"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========== MOBILE FULLSCREEN MENU ========== */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[200] bg-white flex flex-col"
          >
            {/* Header */}
            {/* Header */}
            <div className="border-b border-gray-100">
              <div className={`flex items-center justify-between h-[72px] ${homeStyles.container}`}>
                <img src="/logo.svg" alt="TechFleek" className="h-8" />
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="flex flex-col gap-6">
                <MobileLink href="/" label="Home" onClick={() => setIsMobileOpen(false)} />
                <MobileLink href="/about-us" label="About Us" onClick={() => setIsMobileOpen(false)} />

                {/* Services Section */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Services</div>
                  <div className="pl-4 border-l-2 border-gray-100 space-y-3">
                    {[...SERVICES.design, ...SERVICES.engineering, ...SERVICES.strategy].map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block text-lg font-medium text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <MobileLink href="/case-study" label="Case Studies" onClick={() => setIsMobileOpen(false)} />
                <MobileLink href="#" label="Insights" onClick={() => setIsMobileOpen(false)} />
                <MobileLink href="/job-posting" label="Careers" onClick={() => setIsMobileOpen(false)} />
              </nav>
            </div>

            {/* CTA */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <Link href="/enquiry" onClick={() => setIsMobileOpen(false)}>
                <button className="w-full py-4 rounded-xl bg-[#1a1a1a] text-white font-bold text-lg">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function NavItem({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`relative px-5 h-[72px] flex items-center text-sm font-medium transition-colors ${isActive ? "text-[#3C8ECB]" : "text-gray-700 hover:text-gray-900"
        }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3C8ECB]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
}

function NavDropdown({
  id,
  label,
  isOpen,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  label: string;
  isOpen: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className={`relative px-5 h-[72px] flex items-center cursor-pointer ${isOpen || isActive ? "text-[#3C8ECB]" : "text-gray-700 hover:text-gray-900"
        }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="flex items-center gap-1 text-sm font-medium">
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </span>
      {(isOpen || isActive) && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3C8ECB]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
}

function ServiceItem({ item }: { item: (typeof SERVICES.design)[0] }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-start gap-4 p-3 -m-3 rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div className={`mt-1 p-2 rounded-lg ${item.color} transition-transform group-hover:scale-110`}>
          {item.icon}
        </div>
        <div>
          <div className="font-semibold text-gray-900 group-hover:text-[#3C8ECB] transition-colors">
            {item.name}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
        </div>
      </Link>
    </li>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-2xl font-bold text-gray-900 tracking-tight">
      {label}
    </Link>
  );
}