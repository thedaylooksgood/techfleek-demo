'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight, Clock, User, ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { homeStyles } from './styles';

// --- Blog Data with Unsplash Images ---
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: { name: string; role: string; avatar: string; };
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of AI in Modern SaaS Architecture",
    excerpt: "Exploring how artificial intelligence is reshaping backend scalability and frontend personalization in 2025. We dive deep into the new paradigms of neural search.",
    category: "Artificial Intelligence",
    author: { name: "Alex Chen", role: "CTO", avatar: "/avatars/alex.jpg" },
    date: "Feb 2, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Optimizing Next.js Applications for Core Web Vitals",
    excerpt: "A deep dive into server components, image optimization, and rigorous performance testing strategies.",
    category: "Engineering",
    author: { name: "Sarah Miller", role: "Lead Dev", avatar: "/avatars/sarah.jpg" },
    date: "Jan 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1740&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Psychology of Dark Mode Design",
    excerpt: "Why dark interfaces are taking over and how to design them for accessibility and visual comfort.",
    category: "UI/UX Design",
    author: { name: "David Park", role: "Design Lead", avatar: "/avatars/david.jpg" },
    date: "Jan 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1664&auto=format&fit=crop"
  }
];

export default function BlogsSection() {
  const fontRedHat = "font-[family-name:var(--font-red-hat)]";
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Animation & Layout Constants (Matching AboutTechFleek)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  // Responsive Fonts Clamps (Matching AboutTechFleek / IndustriesTargeted)
  const labelSize = isMobile ? '10px' : 'clamp(11px, 1vw, 13px)';
  const headlineSize = isMobile ? '26px' : isTablet ? '32px' : 'clamp(32px, 4vw, 48px)';

  return (
    <section
      ref={sectionRef}
      className={homeStyles.section}
      style={{
        paddingTop: '60px',
        paddingBottom: '60px'
      }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={homeStyles.gridBackgroundStyle}>
      </div>

      <motion.div
        className={homeStyles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* 1. Compact 2-Column Header */}
        <div className={`${homeStyles.headerWrapper} flex-row justify-between items-end`}>
          <div className="flex flex-col gap-2 text-left">
            <span className={homeStyles.label}>
              Insights & Updates
            </span>
            <h2 className={homeStyles.title}>
              Latest from <span className={homeStyles.gradientText}>TechFleek</span>
            </h2>
          </div>

          <div className={isMobile ? 'w-full mt-4' : 'w-auto'}>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #3C8ECB 0%, #2563EB 100%)' }}
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2. Ultra-Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[340px]">

          {/* Featured Post (Left) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-7 relative group overflow-hidden rounded-2xl cursor-pointer h-[340px] lg:h-full shadow-md hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                {blogPosts[0].category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 p-5 lg:p-6 w-full">
              <div className="flex items-center gap-2 text-[10px] text-gray-300 mb-1.5 font-medium uppercase tracking-wide">
                <Clock className="w-3 h-3" />
                {blogPosts[0].readTime}
                <span className="w-0.5 h-2 bg-gray-500 rounded-full"></span>
                {blogPosts[0].date}
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-indigo-200 transition-colors">
                {blogPosts[0].title}
              </h3>

              <p className="text-gray-300 text-xs line-clamp-2 max-w-md mb-3 leading-relaxed opacity-90">
                {blogPosts[0].excerpt}
              </p>

              <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <User className="w-3 h-3 text-white" />
                </div>
                <div className="text-xs">
                  <p className="text-white font-semibold">{blogPosts[0].author.name}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Posts (Right Stack) */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            {blogPosts.slice(1, 3).map((post, index) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                className="flex-1 relative group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-row"
              >
                {/* Image Side - Fixed Width */}
                <div className="hidden sm:block w-[130px] relative overflow-hidden h-full shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Content Side */}
                <div className="flex-1 p-4 flex flex-col justify-center relative">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h4 className="text-sm lg:text-base font-bold text-gray-900 leading-snug mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-50 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <div className="ml-auto w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </motion.div>
    </section>
  );
}