'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { homeStyles } from '../Home-Page/styles';

interface ContentSectionProps {
    label?: string;
    title: string;
    titleHighlight?: string;
    description?: string;
    children: ReactNode;
    showActions?: boolean;
    primaryActionText?: string;
    primaryActionHref?: string;
    secondaryActionText?: string;
    secondaryActionHref?: string;
    className?: string;
    showGridBackground?: boolean;
    id?: string;
}

export default function ContentSection({
    label,
    title,
    titleHighlight,
    description,
    children,
    showActions = false,
    primaryActionText = 'Get Quotes',
    primaryActionHref = '/enquiry',
    secondaryActionText = 'Connect Us',
    secondaryActionHref = '/enquiry',
    className = '',
    showGridBackground = true,
    id,
}: ContentSectionProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const headerVariants: Variants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section
            id={id}
            className={`${homeStyles.section} ${homeStyles.sectionPadding} ${className}`}
        >
            {/* Grid Background */}
            {showGridBackground && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={homeStyles.gridBackgroundStyle}
                />
            )}

            <motion.div
                className={homeStyles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header Section with Actions */}
                <div className={`${homeStyles.headerWrapper} lg:flex-row lg:items-end lg:justify-between`}>
                    <motion.div
                        className="flex flex-col gap-2 flex-1"
                        variants={headerVariants}
                    >
                        {label && (
                            <span className={homeStyles.label}>
                                {label}
                            </span>
                        )}
                        <h2 className={homeStyles.title}>
                            {title}
                            {titleHighlight && (
                                <> <span className={homeStyles.gradientText}>{titleHighlight}</span></>
                            )}
                        </h2>
                        {description && (
                            <p className={homeStyles.description}>
                                {description}
                            </p>
                        )}
                    </motion.div>

                    {/* CTA Buttons */}
                    {showActions && (
                        <motion.div
                            className="flex items-center gap-3 shrink-0 mt-4 lg:mt-0 lg:pb-1"
                            variants={headerVariants}
                        >
                            <Link href={primaryActionHref}>
                                <motion.button
                                    className="font-semibold text-white rounded-full relative overflow-hidden group cursor-pointer"
                                    style={{
                                        padding: 'clamp(12px, 1.2vh, 16px) clamp(24px, 2.5vw, 36px)',
                                        fontSize: 'clamp(13px, 1vw, 15px)',
                                        background: 'linear-gradient(135deg, #3C8ECB 0%, #2563EB 100%)',
                                        boxShadow: '0 4px 20px rgba(60, 142, 203, 0.35)'
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                        boxShadow: '0 12px 35px rgba(60, 142, 203, 0.45)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {primaryActionText}
                                        <motion.span
                                            className="inline-block"
                                            whileHover={{ x: 3 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: 'linear-gradient(135deg, #2563EB 0%, #3C8ECB 100%)' }}
                                    />
                                </motion.button>
                            </Link>
                            <Link href={secondaryActionHref}>
                                <motion.button
                                    className="font-semibold rounded-full border-2 border-[#3C8ECB]/30 bg-white/90 backdrop-blur-sm hover:border-[#3C8ECB]/60 hover:bg-[#3C8ECB]/5 transition-all duration-300 cursor-pointer"
                                    style={{
                                        padding: 'clamp(12px, 1.2vh, 16px) clamp(24px, 2.5vw, 36px)',
                                        fontSize: 'clamp(13px, 1vw, 15px)',
                                        color: '#3C8ECB'
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                        boxShadow: '0 8px 25px rgba(60, 142, 203, 0.15)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <span className="flex items-center gap-2">
                                        {secondaryActionText}
                                        <motion.span
                                            className="inline-block"
                                            whileHover={{ rotate: 45 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            ↗
                                        </motion.span>
                                    </span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    )}
                </div>

                {/* Content Area */}
                <motion.div
                    variants={headerVariants}
                    className="mt-2"
                >
                    {children}
                </motion.div>
            </motion.div>
        </section>
    );
}
