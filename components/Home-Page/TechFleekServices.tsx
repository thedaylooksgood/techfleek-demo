'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Palette, Component, PenTool, Box, Code, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { homeStyles } from './styles';

// Services data - optimized for uniform 3-2 Grid Layout
const services = [
  {
    number: '01',
    title: 'UI/UX Design',
    description: 'Crafting intuitive interfaces and seamless user experiences.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    link: '/services/ui-ux-design',
    icon: Palette
  },
  {
    number: '02',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '/services/cloud-services',
    icon: Component
  },
  {
    number: '03',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile application development.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    link: '/services/mobile-app-development',
    icon: PenTool
  },
  {
    number: '04',
    title: 'Custom Software',
    description: 'Tailored software solutions for complex business needs.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    link: '/services/custom-software',
    icon: Box
  },
  {
    number: '05',
    title: 'Web Development',
    description: 'Modern, high-performance web applications and platforms.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    link: '/services/web-development',
    icon: Code
  },
  {
    number: '06',
    title: 'Digital Strategy',
    description: 'Strategic planning for digital transformation and growth.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    link: '/services',
    icon: Cpu
  }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="
        relative group overflow-hidden rounded-2xl bg-[#E3F2FD] border border-blue-200/60 shadow-sm transition-all duration-300 cursor-pointer 
        flex-shrink-0 snap-center
        w-[85vw] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(32%-12px)]
        h-[180px] lg:h-[240px]
        flex flex-col justify-between 
        p-5 lg:p-6
        hover:shadow-2xl
      "
    >
      <Link href={service.link} className="absolute inset-0 z-20" />

      {/* Background Image Reveal */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
        <div className="absolute inset-0 bg-cover bg-center transform scale-105 group-hover:scale-100 transition-transform duration-700"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Top Row: Number & Arrow */}
      <div className="relative z-10 flex justify-between items-start">
        <span className="font-bold text-[11px] lg:text-[13px] text-slate-400 group-hover:text-white/80 transition-colors duration-300">
          {service.number}
        </span>
        <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-white/20 group-hover:backdrop-blur-md transition-all duration-300 group-hover:rotate-45 shadow-sm">
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      {/* Bottom Row: Content with Icon */}
      <div className="relative z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <div className="mb-2 opacity-80 group-hover:opacity-100 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
          <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500/80 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
        </div>
        <h3 className="text-[15px] lg:text-[18px] font-bold text-slate-900 group-hover:text-white mb-1.5 transition-colors duration-300 leading-tight">
          {service.title}
        </h3>
        <p className="text-[12px] lg:text-[14px] text-slate-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300 line-clamp-2">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const TechFleekServices = ({ showButton = true }: { showButton?: boolean }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full relative bg-white overflow-hidden flex flex-col justify-start lg:justify-center py-16 lg:py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none" style={homeStyles.gridBackgroundStyle}></div>

      <div className={`${homeStyles.container} h-full flex flex-col justify-center`}>
        {/* Header - Compact & Consistent */}
        <div className={homeStyles.headerWrapper}>
          <div className="flex justify-between items-start w-full">
            <span className={homeStyles.label}>
              Our Services
            </span>
            {/* Mobile Navigation Buttons */}
            <div className="flex gap-2 lg:hidden">
              <button onClick={scrollLeft} className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 shadow-sm active:scale-95 transition-all">
                <ChevronLeft size={16} />
              </button>
              <button onClick={scrollRight} className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 shadow-sm active:scale-95 transition-all">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className={homeStyles.title}>
              What We <span className={homeStyles.gradientText}>Do Best</span>
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className={homeStyles.description} style={{ maxWidth: '500px' }}>
                Comprehensive digital services designed to transform your ideas into exceptional experiences.
              </p>
              {showButton && (
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                >
                  View All Services
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Services Flex Container - Slider on Mobile, Grid on Desktop */}
        <div
          ref={scrollContainerRef}
          className="
            flex lg:flex-wrap lg:justify-center 
            overflow-x-auto lg:overflow-visible 
            snap-x snap-mandatory lg:snap-none 
            gap-4 lg:gap-6 
            w-full 
            pb-4 lg:pb-0 
            scrollbar-hide
          "
        >
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechFleekServices;