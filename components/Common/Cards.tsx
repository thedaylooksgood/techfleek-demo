'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    number?: string;
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
}

export function FeatureCard({ number, icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
    const cardVariants: Variants = {
        hidden: { y: 50, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut", delay }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(60, 142, 203, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden group p-5 lg:p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-400"
        >
            {/* Gradient overlay on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'linear-gradient(135deg, rgba(60, 142, 203, 0.03) 0%, rgba(37, 99, 235, 0.03) 100%)'
                }}
            />

            <div className="relative flex items-start gap-4">
                {/* Icon with animated background */}
                <motion.div
                    className="flex items-center justify-center rounded-xl lg:rounded-2xl relative overflow-hidden w-12 h-12 lg:w-14 lg:h-14 min-w-[48px] lg:min-w-[56px]"
                    style={{
                        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)'
                    }}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon
                        className="text-[#3C8ECB] relative z-10 w-6 h-6 lg:w-7 lg:h-7"
                    />
                </motion.div>

                <div className="flex-1">
                    {/* Number badge */}
                    {number && (
                        <span
                            className="font-bold bg-gradient-to-r from-[#3C8ECB]/30 to-[#2563EB]/30 bg-clip-text text-transparent text-xs"
                        >
                            {number}
                        </span>
                    )}

                    {/* Title with gradient on hover */}
                    <h3
                        className="font-bold text-slate-900 group-hover:text-[#3C8ECB] transition-colors duration-300 text-sm lg:text-base leading-tight mt-0.5"
                    >
                        {title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-slate-500 group-hover:text-slate-600 transition-colors duration-300 text-xs lg:text-sm leading-relaxed mt-2"
                    >
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

interface StatsCardProps {
    value: string;
    label: string;
    icon?: LucideIcon;
    delay?: number;
}

export function StatsCard({ value, label, icon: Icon, delay = 0 }: StatsCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group"
        >
            {Icon && (
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#3C8ECB]/10 to-[#2563EB]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#3C8ECB]" />
                </div>
            )}
            <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-[#2563EB]">
                {value}
            </div>
            <div className="text-slate-500 text-sm font-medium mt-1">
                {label}
            </div>
        </motion.div>
    );
}

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    company?: string;
    avatarUrl?: string;
    delay?: number;
}

export function TestimonialCard({ quote, author, role, company, avatarUrl, delay = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <div className="text-[#3C8ECB] text-4xl font-serif mb-4">"</div>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6">
                {quote}
            </p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3C8ECB] to-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt={author} className="w-full h-full rounded-full object-cover" />
                    ) : (
                        author.charAt(0)
                    )}
                </div>
                <div>
                    <div className="font-semibold text-slate-900 text-sm">{author}</div>
                    <div className="text-slate-500 text-xs">{role}{company && ` at ${company}`}</div>
                </div>
            </div>
        </motion.div>
    );
}

interface ImageCardProps {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    href?: string;
    delay?: number;
}

export function ImageCard({ src, alt, title, description, href, delay = 0 }: ImageCardProps) {
    const content = (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8 }}
            className={`relative group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${href ? 'cursor-pointer' : ''}`}
        >
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            {(title || description) && (
                <div className="p-5">
                    {title && (
                        <h4 className="font-bold text-slate-900 text-sm lg:text-base group-hover:text-[#3C8ECB] transition-colors">
                            {title}
                        </h4>
                    )}
                    {description && (
                        <p className="text-slate-500 text-xs lg:text-sm mt-2 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            )}
        </motion.div>
    );

    if (href) {
        return <a href={href} className="block">{content}</a>;
    }

    return content;
}
