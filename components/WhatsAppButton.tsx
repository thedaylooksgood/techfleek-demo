'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '918802172570'; // India country code + number (no + or spaces)
const DEFAULT_MESSAGE = 'Hi TechFleek! I\'m interested in your services.';

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber = WHATSAPP_NUMBER,
    message = DEFAULT_MESSAGE
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [hasPulsed, setHasPulsed] = useState(false);

    // WhatsApp Click-to-Chat URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    useEffect(() => {
        // Show button after a short delay for better UX
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        // Show tooltip hint after 5 seconds to draw attention
        const tooltipTimer = setTimeout(() => {
            if (!hasPulsed) {
                setShowTooltip(true);
                setHasPulsed(true);
                // Hide tooltip after 4 seconds
                setTimeout(() => setShowTooltip(false), 4000);
            }
        }, 5000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(tooltipTimer);
        };
    }, [hasPulsed]);

    const handleClick = () => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
                    {/* Tooltip */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-lg shadow-lg px-4 py-2 text-sm text-gray-700 font-medium whitespace-nowrap"
                                style={{
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                                💬 Chat with us on WhatsApp!
                                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"
                                    style={{ boxShadow: '2px -2px 4px rgba(0,0,0,0.05)' }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* WhatsApp Button */}
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 15
                        }}
                        onClick={handleClick}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className="relative w-[60px] h-[60px] lg:w-[65px] lg:h-[65px] rounded-full flex items-center justify-center cursor-pointer group"
                        style={{
                            background: 'linear-gradient(135deg, #3C8ECB 0%, #000000 100%)',
                            boxShadow: '0 4px 20px rgba(60, 142, 203, 0.4), 0 2px 8px rgba(0, 0, 0, 0.15)'
                        }}
                        aria-label="Chat on WhatsApp"
                    >
                        {/* Pulse Animation Ring */}
                        <span className="absolute inset-0 rounded-full animate-ping bg-[#3C8ECB] opacity-20" />

                        {/* Second Pulse Ring (delayed) */}
                        <span
                            className="absolute inset-0 rounded-full bg-[#3C8ECB] opacity-15"
                            style={{
                                animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                                animationDelay: '0.5s'
                            }}
                        />

                        {/* WhatsApp Icon */}
                        <svg
                            className="w-8 h-8 lg:w-9 lg:h-9 text-white relative z-10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>

                        {/* Hover Glow Effect */}
                        <div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)'
                            }}
                        />
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
