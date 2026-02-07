'use client';

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, ArrowUpRight, Tag, User } from "lucide-react";

// --- Fonts ---
import { Outfit, Red_Hat_Display, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700"] });
const redHat = Red_Hat_Display({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

// --- Blog Data ---
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of AI in Modern SaaS Architecture",
    excerpt: "Exploring how artificial intelligence is reshaping backend scalability and frontend personalization in 2025.",
    category: "Artificial Intelligence",
    author: { name: "Alex Chen", role: "CTO", avatar: "/avatars/alex.jpg" },
    date: "Feb 2, 2025",
    readTime: "5 min read",
    image: "/blog/ai-future.jpg" // We'll use a gradient fallback
  },
  {
    id: 2,
    title: "Optimizing Next.js Applications for Core Web Vitals",
    excerpt: "A deep dive into server components, image optimization, and rigorous performance testing strategies.",
    category: "Engineering",
    author: { name: "Sarah Miller", role: "Lead Dev", avatar: "/avatars/sarah.jpg" },
    date: "Jan 28, 2025",
    readTime: "8 min read",
    image: "/blog/nextjs-opt.jpg"
  },
  {
    id: 3,
    title: "The Psychology of Dark Mode Design",
    excerpt: "Why dark interfaces are taking over and how to design them for accessibility and visual comfort.",
    category: "UI/UX Design",
    author: { name: "David Park", role: "Design Lead", avatar: "/avatars/david.jpg" },
    date: "Jan 20, 2025",
    readTime: "6 min read",
    image: "/blog/dark-mode.jpg"
  },
  {
    id: 4,
    title: "Microservices vs Monolith: Choosing the Right Path",
    excerpt: "Breaking down the complexity of distributed systems and when it makes sense to stay monolithic.",
    category: "Backend",
    author: { name: "James Wilson", role: "Architect", avatar: "/avatars/james.jpg" },
    date: "Jan 15, 2025",
    readTime: "10 min read",
    image: "/blog/microservices.jpg"
  },
  {
    id: 5,
    title: "Scaling Cloud Infrastructure with Kubernetes",
    excerpt: "Best practices for container orchestration and managing high-availability clusters in production.",
    category: "DevOps",
    author: { name: "Elena Ross", role: "DevOps Eng", avatar: "/avatars/elena.jpg" },
    date: "Jan 10, 2025",
    readTime: "7 min read",
    image: "/blog/k8s.jpg"
  }
];

// --- Blog Card Component ---
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      className="group relative flex-shrink-0 w-[300px] sm:w-[360px] h-[480px] bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#3C8ECB]/30 hover:shadow-2xl hover:shadow-[#3C8ECB]/10 transition-all duration-500 flex flex-col"
      whileHover={{ y: -8 }}
    >
      {/* Image Area with Gradient Fallback */}
      <div className="relative h-[220px] overflow-hidden bg-slate-100">
        <div className={`absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110 
            ${post.id % 2 === 0 ? 'from-slate-800 to-slate-900' : 'from-[#3C8ECB] to-[#1a5a8a]'}`}>
          {/* Abstract Pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 flex flex-col relative bg-white">

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>{post.date}</span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.id}`} className="block mb-3">
          <h3 className={`${outfit.className} text-xl font-bold text-slate-900 leading-tight group-hover:text-[#3C8ECB] transition-colors line-clamp-2`}>
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className={`${inter.className} text-sm text-slate-500 leading-relaxed line-clamp-2 mb-6`}>
          {post.excerpt}
        </p>

        {/* Author & Action Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs border border-slate-200">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className={`text-xs font-bold text-slate-800 ${outfit.className}`}>{post.author.name}</p>
              <p className="text-[10px] text-slate-400 font-medium">{post.author.role}</p>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#3C8ECB] group-hover:text-white transition-all duration-300 shadow-sm">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Main Container ---
export default function BlogsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20 bg-slate-50/50 border-t border-white">
      <div className="container mx-auto px-4 max-w-[1440px]">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className={`${redHat.className} text-[#3C8ECB] text-xs font-bold tracking-[0.2em] uppercase mb-3 block`}>
              Insights & Updates
            </span>
            <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold text-slate-900 leading-tight`}>
              Latest from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-[#2563EB]">TechFleek</span>
            </h2>
            <p className={`${inter.className} text-slate-500 mt-4 text-lg max-w-lg`}>
              Expert perspectives on technology, design, and digital transformation.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#3C8ECB] hover:text-[#3C8ECB] hover:shadow-lg hover:shadow-[#3C8ECB]/10 transition-all duration-300 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#3C8ECB] flex items-center justify-center text-white shadow-lg shadow-[#3C8ECB]/30 hover:bg-[#2563EB] hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-12 px-2 -mx-2 snap-x snap-mandatory scrollbar-hide"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {blogPosts.map((post) => (
            <div key={post.id} className="snap-start">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* View All Linked Button */}
        <div className="flex justify-center">
          <Link
            href="/blogs"
            className={`group inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:border-[#3C8ECB] hover:text-[#3C8ECB] hover:shadow-xl hover:shadow-[#3C8ECB]/10 transition-all duration-300 ${outfit.className}`}
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}