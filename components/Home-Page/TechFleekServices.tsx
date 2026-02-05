'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

// Services data
const services = [
  {
    number: '01',
    title: 'UI/UX Design',
    description: 'Crafting intuitive interfaces and seamless user experiences that delight and engage your customers.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: '/services/ui-ux'
  },
  {
    number: '02',
    title: 'Product Development',
    description: 'Building scalable, high-performance products that solve real business problems and drive growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '/services/product-development'
  },
  {
    number: '03',
    title: 'Brand Design',
    description: 'Creative design solutions that communicate your brand story and captivate your target audience.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    link: '/services/design'
  },
  {
    number: '04',
    title: '3D & Motion',
    description: 'Immersive 3D experiences and stunning motion graphics that bring your concepts to life.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '/services/3d-design'
  },
  {
    number: '05',
    title: 'Web Development',
    description: 'Full-stack development using cutting-edge technologies for blazing-fast web applications.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
    gradient: 'linear-gradient(135deg, #4fd1c5 0%, #38b2ac 100%)',
    link: '/services/development'
  }
];

const TechFleekServices = () => {
  const fontRedHat = "font-[family-name:var(--font-red-hat)]";
  const [activeIndex, setActiveIndex] = useState<number>(0);
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

  return (
    <section
      className={`w-full bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden relative ${fontRedHat}`}
      style={{
        padding: isMobile ? '50px 16px' : isTablet ? '60px 28px' : 'clamp(70px, 10vh, 100px) clamp(40px, 5vw, 80px)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-20 w-96 h-96 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.5, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="w-full mx-auto relative z-10"
        style={{ maxWidth: '1250px' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Header with staggered animation */}
        <motion.div
          className="text-center w-full"
          style={{ marginBottom: isMobile ? '32px' : isTablet ? '40px' : 'clamp(40px, 6vh, 60px)' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </motion.div>
            <span
              className="text-gray-400 font-medium tracking-wider uppercase"
              style={{ fontSize: isMobile ? '11px' : '12px' }}
            >
              Our Services
            </span>
          </motion.div>

          <motion.h2
            className="font-bold"
            style={{
              fontSize: isMobile ? '28px' : isTablet ? '34px' : 'clamp(36px, 4vw, 48px)',
              lineHeight: '1.1',
              marginBottom: isMobile ? '12px' : '16px',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #3d3d5c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What We Do Best
          </motion.h2>

          <motion.p
            className="text-gray-500 max-w-[550px] mx-auto"
            style={{
              fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A comprehensive suite of digital services designed to transform your ideas into exceptional experiences.
          </motion.p>
        </motion.div>

        {/* Unified Card Container */}
        <motion.div
          className="rounded-2xl lg:rounded-3xl overflow-visible relative"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(229, 231, 235, 0.7)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.06)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isLast = index === services.length - 1;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveIndex(index)}
                className="service-item relative"
                style={{
                  borderBottom: isLast ? 'none' : '1px solid rgba(229, 231, 235, 0.6)',
                  zIndex: isActive ? 10 : 1
                }}
              >
                <Link href={service.link}>
                  <motion.div
                    className="relative overflow-visible cursor-pointer"
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? '#0f0f0f' : 'transparent'
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={false}
                      animate={{
                        boxShadow: isActive
                          ? 'inset 0 0 60px rgba(99, 102, 241, 0.1)'
                          : 'inset 0 0 0px transparent'
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    <div
                      className="flex items-center gap-6 lg:gap-10 relative"
                      style={{
                        padding: isMobile ? '20px 16px' : isTablet ? '24px 28px' : 'clamp(26px, 3.5vh, 36px) clamp(32px, 4vw, 48px)'
                      }}
                    >
                      {/* Number with pulse animation */}
                      <motion.span
                        className="font-medium flex-shrink-0"
                        style={{
                          fontSize: isMobile ? '14px' : '16px',
                          width: isMobile ? '32px' : '40px'
                        }}
                        animate={{
                          color: isActive ? '#a5b4fc' : '#d1d5db',
                          scale: isActive ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.number}
                      </motion.span>

                      {/* Title with slide animation */}
                      <motion.h3
                        className="font-bold flex-shrink-0"
                        style={{
                          fontSize: isMobile ? '18px' : isTablet ? '22px' : 'clamp(24px, 2.2vw, 30px)',
                          letterSpacing: '-0.01em',
                          minWidth: isMobile ? 'auto' : isTablet ? '180px' : '220px'
                        }}
                        animate={{
                          color: isActive ? '#ffffff' : '#1a1a2e',
                          x: isActive ? 8 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description with fade */}
                      <motion.p
                        className="hidden md:block flex-1"
                        style={{
                          fontSize: isTablet ? '13px' : '14px',
                          lineHeight: '1.6',
                          maxWidth: '380px'
                        }}
                        animate={{
                          color: isActive ? 'rgba(255,255,255,0.7)' : '#6b7280',
                          opacity: isActive ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Right side - Arrow (Image is now absolutely positioned) */}
                      <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0 ml-auto">
                        {/* Arrow with rotation */}
                        <motion.div
                          className="flex items-center justify-center rounded-full border-2 flex-shrink-0"
                          style={{
                            width: isMobile ? '44px' : isTablet ? '50px' : '56px',
                            height: isMobile ? '44px' : isTablet ? '50px' : '56px'
                          }}
                          animate={{
                            borderColor: isActive ? '#ffffff' : 'rgba(209, 213, 219, 0.5)',
                            backgroundColor: isActive ? '#ffffff' : 'transparent',
                            scale: isActive ? 1.05 : 1
                          }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <motion.div
                            animate={{
                              color: isActive ? '#0f0f0f' : '#9ca3af',
                              rotate: isActive ? 45 : 0
                            }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <ArrowUpRight
                              style={{
                                width: isMobile ? '20px' : '24px',
                                height: isMobile ? '20px' : '24px'
                              }}
                            />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Floating Pop-up Image - Absolutely positioned */}
                      <AnimatePresence mode="popLayout">
                        {isActive && !isMobile && (
                          <motion.div
                            className="absolute overflow-hidden rounded-2xl"
                            style={{
                              right: isTablet ? '120px' : '140px',
                              top: '50%',
                              width: isTablet ? '180px' : '220px',
                              height: isTablet ? '120px' : '150px',
                              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.2)',
                              zIndex: 20
                            }}
                            initial={{
                              opacity: 0,
                              scale: 0.6,
                              y: '-50%',
                              rotate: -8
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              y: '-50%',
                              rotate: -4
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.6,
                              y: '-50%',
                              rotate: -8
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                          >
                            {/* Gradient overlay */}
                            <div
                              className="absolute inset-0 z-10 opacity-20"
                              style={{ background: service.gradient }}
                            />
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 z-20"
                              style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, transparent 100%)'
                              }}
                              animate={{
                                opacity: [0.5, 0.8, 0.5]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Mobile description */}
                    {isMobile && (
                      <motion.p
                        className="px-4 pb-5 -mt-2"
                        style={{ fontSize: '13px', lineHeight: '1.5' }}
                        animate={{
                          color: isActive ? 'rgba(255,255,255,0.55)' : '#6b7280'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                    )}

                    {/* Left accent line */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ background: service.gradient }}
                      initial={false}
                      animate={{
                        scaleY: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechFleekServices;