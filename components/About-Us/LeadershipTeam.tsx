'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LeadershipTeam: React.FC = () => {
    const teamMembers = [
        {
            name: 'Jane Dow',
            role: 'CEO',
            image: '/About-Us/person1.png',
        },
        {
            name: 'Jane Dow',
            role: 'CEO',
            image: '/About-Us/person1.png',
        },
        {
            name: 'Jane Dow',
            role: 'CEO',
            image: '/About-Us/person1.png',
        },
    ];

    return (
        <div
            className="w-full relative z-10 flex flex-col items-center"
            style={{
                paddingTop: 'clamp(40px, 7vw, 100px)',
                paddingBottom: 'clamp(30px, 5vw, 70px)',
                background: 'white',
            }}
        >
            {/* Header Section */}
            <motion.div
                className="text-center flex flex-col items-center"
                style={{ marginBottom: 'clamp(20px, 3vw, 45px)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <h3
                    className="font-bold uppercase"
                    style={{
                        fontFamily: 'var(--font-red-hat)',
                        fontSize: 'clamp(10px, 1vw, 16px)',
                        lineHeight: 'clamp(14px, 1.4vw, 22px)',
                        marginBottom: 'clamp(4px, 0.5vw, 8px)',
                        background: 'linear-gradient(90deg, #3C8ECB 0%, #000000 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: 'clamp(1px, 0.1vw, 2px)',
                    }}
                >
                    PROFESSIONAL TEAM
                </h3>
                <h2
                    className="font-bold text-black"
                    style={{
                        fontFamily: 'var(--font-red-hat)',
                        fontSize: 'clamp(20px, 2.2vw, 36px)',
                        lineHeight: '1.2',
                        marginBottom: 'clamp(8px, 1vw, 16px)',
                        letterSpacing: 'clamp(1px, 0.1vw, 2px)',
                    }}
                >
                    Meet Our Leadership Team
                </h2>
                <p
                    className="text-black text-center opacity-80"
                    style={{
                        fontFamily: 'var(--font-red-hat)',
                        fontSize: 'clamp(12px, 1vw, 16px)',
                        lineHeight: '1.4',
                        maxWidth: 'clamp(280px, 60vw, 900px)',
                        letterSpacing: 'clamp(0.5px, 0.1vw, 1.5px)',
                        padding: '0 16px',
                    }}
                >
                    Our strength lies in our people — passionate designers, developers, and innovators who bring creativity and expertise to every project. With a professional team at the core, we deliver solutions that inspire and perform.
                </p>
            </motion.div>

            {/* Team Cards Grid */}
            <div
                className="grid grid-cols-1 md:grid-cols-3"
                style={{
                    gap: 'clamp(24px, 2.5vw, 40px)',
                    width: 'clamp(300px, 75vw, 1100px)',
                    padding: '0 16px',
                }}
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="relative flex flex-col items-center"
                        style={{
                            height: 'clamp(280px, 24vw, 350px)',
                        }}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                    >
                        {/* Image Container */}
                        <div
                            className="relative w-full h-full overflow-hidden"
                            style={{
                                borderRadius: '0px clamp(20px, 2.5vw, 40px)',
                            }}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                                style={{
                                    objectPosition: 'top',
                                }}
                            />
                        </div>

                        {/* Floating Info Card */}
                        <div
                            className="absolute bg-white flex flex-col items-center justify-center shadow-lg"
                            style={{
                                width: '85%',
                                height: 'clamp(70px, 6.5vw, 100px)',
                                borderRadius: 'clamp(16px, 2vw, 32px)',
                                boxShadow: '0px 0px clamp(12px, 1.5vw, 24px) clamp(4px, 0.5vw, 8px) rgba(0, 0, 0, 0.25)',
                                bottom: 'clamp(-40px, -3.25vw, -50px)',
                            }}
                        >
                            <h4
                                className="font-bold text-black"
                                style={{
                                    fontFamily: 'var(--font-red-hat)',
                                    fontSize: 'clamp(14px, 1.6vw, 26px)',
                                    marginBottom: 'clamp(2px, 0.2vw, 4px)',
                                    letterSpacing: 'clamp(0.5px, 0.1vw, 1.5px)',
                                    transform: 'rotate(-0.2deg)',
                                }}
                            >
                                {member.name}
                            </h4>
                            <p
                                className="text-gray-600"
                                style={{
                                    fontFamily: 'var(--font-red-hat)',
                                    fontSize: 'clamp(10px, 0.9vw, 15px)',
                                    letterSpacing: 'clamp(0.5px, 0.1vw, 1.5px)',
                                    transform: 'rotate(-0.2deg)',
                                }}
                            >
                                {member.role}
                            </p>
                        </div>

                        {/* Social Icons - Overlapping the bottom of the card name box */}
                        <div
                            className="absolute flex items-center justify-center"
                            style={{
                                gap: 'clamp(8px, 1vw, 16px)',
                                bottom: 'clamp(-55px, -4.25vw, -65px)',
                                zIndex: 20,
                            }}
                        >
                            {[
                                { src: '/About-Us/linkedin.png', alt: 'LinkedIn', href: 'https://www.linkedin.com/company/techfleek/' },
                                { src: '/About-Us/facebook.png', alt: 'Facebook', href: 'https://www.facebook.com/p/Techfleek-61566903430555/' },
                                { src: '/About-Us/gmail.png', alt: 'Email', href: 'mailto:hello@techfleek.com' }
                            ].map((icon, i) => (
                                <a
                                    key={i}
                                    href={icon.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform bg-white relative"
                                    style={{
                                        width: 'clamp(28px, 2vw, 32px)',
                                        height: 'clamp(28px, 2vw, 32px)',
                                        boxShadow: '0px 0px clamp(8px, 0.8vw, 12px) clamp(2px, 0.2vw, 4px) rgba(151, 196, 255, 1)',
                                    }}
                                >
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination dots (static for visual match) */}
            <div className="flex" style={{ gap: 'clamp(4px, 0.4vw, 6px)', marginTop: 'clamp(80px, 8vw, 120px)' }}>
                <div className="rounded-full bg-gray-300" style={{ width: 'clamp(6px, 0.6vw, 10px)', height: 'clamp(6px, 0.6vw, 10px)' }}></div>
                <div className="rounded-full bg-gray-400" style={{ width: 'clamp(6px, 0.6vw, 10px)', height: 'clamp(6px, 0.6vw, 10px)' }}></div>
                <div className="rounded-full bg-[#1e4066]" style={{ width: 'clamp(8px, 0.8vw, 12px)', height: 'clamp(8px, 0.8vw, 12px)' }}></div>
                <div className="rounded-full bg-gray-400" style={{ width: 'clamp(6px, 0.6vw, 10px)', height: 'clamp(6px, 0.6vw, 10px)' }}></div>
                <div className="rounded-full bg-gray-300" style={{ width: 'clamp(6px, 0.6vw, 10px)', height: 'clamp(6px, 0.6vw, 10px)' }}></div>
            </div>
        </div>
    );
};

export default LeadershipTeam;
