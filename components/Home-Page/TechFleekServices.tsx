'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, Palette, Cloud, Smartphone, Code, Globe, Cpu,
  Layers, Sparkles, Zap, Shield, Rocket, LineChart,
  Server, Database, Terminal, Layout, PenTool, Monitor,
  Workflow, BrainCircuit, Settings, ChevronLeft, ChevronRight
} from 'lucide-react';
import { homeStyles } from './styles';

// Service Categories with descriptions
const serviceCategories = [
  {
    category: "UI/UX Design",
    tagline: "Creating intuitive interfaces that users love",
    description: "We craft user-centered designs that blend aesthetics with seamless functionality, turning visitors into loyal customers.",
    color: "#3C8ECB",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    href: "/services/ui-ux-design",
    services: ["Visual Design", "Wireframing", "Prototyping", "Design Systems", "Responsive Design"]
  },
  {
    category: "Web Development",
    tagline: "Building high-performance web applications",
    description: "From landing pages to complex platforms, we build fast, secure, and scalable web solutions using modern technologies.",
    color: "#3C8ECB",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    href: "/services/web-development",
    services: ["Frontend Development", "Backend Development", "Database Design", "Performance Optimization", "Security Implementation"]
  },
  {
    category: "Mobile Apps",
    tagline: "Native and cross-platform mobile solutions",
    description: "We develop mobile applications that users love, ensuring exceptional performance on iOS, Android, and cross-platform.",
    color: "#3C8ECB",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    href: "/services/mobile-app-development",
    services: ["iOS Development", "Android Development", "React Native", "Flutter Apps", "App Store Launch"]
  },
  {
    category: "Cloud Services",
    tagline: "Scalable infrastructure for modern businesses",
    description: "Leverage cloud computing power with our comprehensive solutions—from migration to optimization and security.",
    color: "#3C8ECB",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    href: "/services/cloud-services",
    services: ["Cloud Migration", "AWS & Azure", "Cloud Databases", "DevOps & CI/CD", "Cloud Security"]
  },
  {
    category: "Custom Software",
    tagline: "Tailored solutions for unique business needs",
    description: "We build custom solutions that align perfectly with your workflows, automate processes, and give you a competitive edge.",
    color: "#3C8ECB",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    href: "/services/custom-software",
    services: ["Enterprise Applications", "System Integrations", "Analytics Platforms", "AI & ML Solutions", "IoT Development"]
  },
  {
    category: "Digital Strategy",
    tagline: "Strategic planning for digital transformation",
    description: "Navigate the digital landscape with confidence through strategic consulting and data-driven growth roadmaps.",
    color: "#3C8ECB",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    href: "/services",
    services: ["Digital Roadmap", "Growth Strategy", "Tech Consulting", "Security Audit", "Performance Optimization"]
  }
];

// Compact Split Layout Component
function ServicesShowcase({ categories }: { categories: typeof serviceCategories }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  const categoryImages = [
    activeCategory.image,
    `https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80`,
    `https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80`,
  ];

  const nextImage = () => setImageIndex((prev) => (prev + 1) % categoryImages.length);
  const prevImage = () => setImageIndex((prev) => (prev - 1 + categoryImages.length) % categoryImages.length);

  React.useEffect(() => {
    setImageIndex(0);
  }, [activeIndex]);

  return (
    <div className="space-y-5">
      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:flex-wrap md:overflow-visible md:pb-0">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border flex-shrink-0 whitespace-nowrap cursor-pointer ${activeIndex === index
              ? 'text-white border-transparent'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            style={activeIndex === index ? {
              backgroundColor: cat.color,
              boxShadow: `0 4px 20px ${cat.color}40`
            } : {}}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Split Layout Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden shadow-xl"
          style={{
            boxShadow: `0 8px 40px ${activeCategory.color}15, 0 4px 12px rgba(0,0,0,0.06)`
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div
              className="p-6 lg:p-8 flex flex-col relative"
              style={{
                background: `linear-gradient(135deg, white 0%, ${activeCategory.color}05 100%)`
              }}
            >
              {/* Decorative accent */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background: `linear-gradient(90deg, ${activeCategory.color}, ${activeCategory.color}60, transparent)`
                }}
              />

              {/* Category Header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${activeCategory.color}, ${activeCategory.color}cc)`,
                    boxShadow: `0 4px 12px ${activeCategory.color}40`
                  }}
                >
                  <span className="text-white text-lg font-black">
                    {activeCategory.category.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">
                    {activeCategory.category}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {activeCategory.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5 pb-4 border-b border-slate-100">
                {activeCategory.description}
              </p>

              {/* Bullet Points - 2 columns on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 flex-1">
                {activeCategory.services.map((service, svcIndex) => (
                  <motion.div
                    key={svcIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: svcIndex * 0.06, duration: 0.3 }}
                    className="flex items-center gap-3 py-2 px-3 -mx-3 rounded-lg hover:bg-white transition-all group cursor-default"
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${activeCategory.color}15` }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: activeCategory.color }}
                      />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Service Badge */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `${activeCategory.color}12`,
                    color: activeCategory.color
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeCategory.color }} />
                  {activeCategory.services.length} Services
                </div>
                <Link
                  href={activeCategory.href || "/services"}
                  scroll={true}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  style={{ color: activeCategory.color }}
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Side - Image Showcase */}
            <div className="relative overflow-hidden min-h-[320px] lg:min-h-[380px] group">
              {/* Main Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={categoryImages[imageIndex]}
                    alt={activeCategory.category}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(180deg, transparent 50%, ${activeCategory.color}90 100%)`
                }}
              />

              {/* Navigation Arrows - Always visible, themed */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-10">
                <button
                  onClick={prevImage}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    backgroundColor: activeCategory.color,
                    boxShadow: `0 4px 16px ${activeCategory.color}50`
                  }}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    backgroundColor: activeCategory.color,
                    boxShadow: `0 4px 16px ${activeCategory.color}50`
                  }}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg drop-shadow-lg">{activeCategory.category}</h4>
                    <p className="text-white/90 text-sm">{activeCategory.services.length} Services</p>
                  </div>
                  {/* Image Indicators */}
                  <div className="flex gap-2">
                    {categoryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setImageIndex(idx)}
                        className={`rounded-full transition-all duration-300 cursor-pointer ${idx === imageIndex
                          ? 'bg-white w-8 h-2'
                          : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Counter Badge */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-medium">
                {imageIndex + 1} / {categoryImages.length}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const TechFleekServices = ({ showButton = true }: { showButton?: boolean }) => {
  return (
    <section className="w-full relative bg-white overflow-hidden py-8 md:py-10">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none" style={homeStyles.gridBackgroundStyle}></div>

      <div className={`${homeStyles.container}`}>
        {/* Header - Compact */}
        <div className="mb-5">
          <span className={homeStyles.label}>
            OUR SERVICES
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-3">
            <div>
              <h2 className={`${homeStyles.title} mb-5`}>
                What We <span className={homeStyles.gradientText}>Do Best</span>
              </h2>
              <p className={homeStyles.description} style={{ maxWidth: '450px' }}>
                Comprehensive digital services designed to transform your ideas into exceptional experiences.
              </p>
            </div>
            {showButton && (
              <Link
                href="/services"
                scroll={true}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-1 px-3 py-1.5 md:px-4 md:py-2 text-white font-semibold text-xs md:text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap self-start w-fit"
                style={{ background: 'linear-gradient(135deg, #3C8ECB 0%, #2563EB 100%)' }}
              >
                <span className="hidden md:inline">View All Services</span>
                <span className="md:hidden">View All</span>
                <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Compact Split Layout Showcase */}
        <ServicesShowcase categories={serviceCategories} />
      </div>
    </section>
  );
};

export default TechFleekServices;