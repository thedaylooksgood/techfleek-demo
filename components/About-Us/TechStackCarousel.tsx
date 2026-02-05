"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";

// --- Fonts ---
import { Outfit, Roboto, Red_Hat_Display, Poppins } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
const redHat = Red_Hat_Display({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

// --- Mock Data ---
interface TechStackPost {
  id: number;
  image: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  isBookmarked: boolean;
}

const techPosts: TechStackPost[] = [
  {
    id: 1,
    image: "/Home-Page/tech-stack/card-image.png",
    title: "Google Antigravity",
    description: "The Future of AI-Driven Software Development Has Arrived",
    author: {
      name: "Mary",
      avatar: "/Home-Page/tech-stack/avatar.png",
    },
    date: "July 14, 2022",
    isBookmarked: false,
  },
  {
    id: 2,
    image: "/Home-Page/tech-stack/card-image.png",
    title: "Google Antigravity",
    description: "The Future of AI-Driven Software Development Has Arrived",
    author: {
      name: "Techfleek Technologis",
      avatar: "/Home-Page/tech-stack/avatar.png",
    },
    date: "July 14, 2022",
    isBookmarked: false,
  },
  {
    id: 3,
    image: "/Home-Page/tech-stack/card-image.png",
    title: "Google Antigravity",
    description: "The Future of AI-Driven Software Development Has Arrived",
    author: {
      name: "Techfleek Technologis",
      avatar: "/Home-Page/tech-stack/avatar.png",
    },
    date: "July 14, 2022",
    isBookmarked: false,
  },
  {
    id: 4,
    image: "/Home-Page/tech-stack/card-image.png",
    title: "Google Antigravity",
    description: "The Future of AI-Driven Software Development Has Arrived",
    author: {
      name: "Techfleek Technologis",
      avatar: "/Home-Page/tech-stack/avatar.png",
    },
    date: "July 14, 2022",
    isBookmarked: false,
  },
  {
    id: 5,
    image: "/Home-Page/tech-stack/card-image.png",
    title: "Google Antigravity",
    description: "The Future of AI-Driven Software Development Has Arrived",
    author: {
      name: "Mary",
      avatar: "/Home-Page/tech-stack/avatar.png",
    },
    date: "July 14, 2022",
    isBookmarked: false,
  },
];

// --- Tech Card Component ---
function TechCard({ post }: { post: TechStackPost }) {
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);

  return (
    <div
      className="flex-shrink-0 w-[347px] bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
      style={{
        boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.07)",
      }}
    >
      {/* Card Image */}
      <div className="relative w-full h-[157px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <h3
          className={`${roboto.className} font-medium text-[16px] text-[#3E3232] overflow-hidden text-ellipsis whitespace-nowrap capitalize`}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p
          className={`${roboto.className} font-normal text-[14px] leading-[20px] text-[rgba(62,50,50,0.75)] capitalize line-clamp-2`}
          style={{
            letterSpacing: "0.25px",
          }}
        >
          {post.description}
        </p>

        {/* Info Row */}
        <div className="flex items-center justify-between bg-[#F5F5F5] rounded-xl p-3">
          {/* Author Info */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span
                className={`${roboto.className} font-medium text-[14px] text-[#3E3232]`}
                style={{ letterSpacing: "0.10px" }}
              >
                {post.author.name}
              </span>
              <span
                className={`${roboto.className} font-normal text-[12px] text-[rgba(62,50,50,0.75)]`}
                style={{ letterSpacing: "0.25px" }}
              >
                {post.date}
              </span>
            </div>
          </div>

          {/* Bookmark Icon */}
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="flex-shrink-0 transition-colors"
          >
            <Bookmark
              size={20}
              className={`${isBookmarked
                ? "fill-[rgba(62,50,50,0.50)] text-[rgba(62,50,50,0.50)]"
                : "text-[rgba(62,50,50,0.50)]"
                }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function TechStackCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 375; // Card width (347px) + gap (28px)
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-7 bg-white">
      <div className="container mx-auto px-4 max-w-[1440px]">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h3
            className={`${redHat.className} font-bold text-[20px] leading-[20px] mb-2.5`}
            style={{
              background: "linear-gradient(90deg, #3C8ECB 0%, #1E4765 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.10px",
            }}
          >
            See What Technology TechFleek Uses
          </h3>
          <h2
            className={`${outfit.className} font-semibold text-[36px] leading-[40px] text-black`}
          >
            Tech Stack
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-10 h-10 rounded-xl bg-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              boxShadow: "0px -1px 10.2px #3C8ECB",
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-[#3C8ECB]" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-7 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {techPosts.map((post) => (
              <TechCard key={post.id} post={post} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-10 h-10 rounded-xl bg-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              boxShadow: "0px -1px 10.2px #3C8ECB",
            }}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-[#3C8ECB]" />
          </button>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button
            className={`${poppins.className} font-semibold text-[16px] text-white bg-[#3C8ECB] px-12 py-3 rounded-lg transition-all duration-300 hover:bg-[#2E7AB0] hover:shadow-lg`}
          >
            Load More
          </button>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}