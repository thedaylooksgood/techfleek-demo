'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme, GlowCard } from './layout'
import Image from 'next/image'
import {
    MessageSquare,
    Briefcase,
    TrendingUp,
    ArrowUpRight,
    Sparkles
} from 'lucide-react'
import Link from 'next/link'

interface Stats {
    totalEnquiries: number
    totalApplications: number
    newEnquiries: number
    pendingApplications: number
}

export default function AdminDashboard() {
    const { theme } = useTheme()
    const [stats, setStats] = useState<Stats>({
        totalEnquiries: 0,
        totalApplications: 0,
        newEnquiries: 0,
        pendingApplications: 0
    })
    const [loading, setLoading] = useState(true)

    const isDark = theme === 'dark'

    const themeClasses = {
        card: isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-[#e2e8f0]',
        text: isDark ? 'text-white' : 'text-[#0f172a]',
        textSecondary: isDark ? 'text-[#d4d4d8]' : 'text-[#334155]',
        textMuted: isDark ? 'text-[#71717a]' : 'text-[#64748b]',
        hover: isDark ? 'hover:bg-[#27272a]' : 'hover:bg-[#f1f5f9]',
        tableBg: isDark ? 'bg-[#0f0f12]' : 'bg-[#f8fafc]',
    }

    useEffect(() => {
        fetchStats()
    }, [])

    const fetchStats = async () => {
        try {
            const res = await fetch('/api/admin/stats')
            const data = await res.json()
            if (data && typeof data === 'object' && !data.error) {
                setStats(data)
            }
        } catch (error) {
            console.error('Failed to fetch stats:', error)
        } finally {
            setLoading(false)
        }
    }

    const statCards = [
        {
            label: 'Total Enquiries',
            value: stats.totalEnquiries,
            icon: MessageSquare,
            change: `${stats.newEnquiries} new`,
            href: '/admin/enquiries',
            gradient: 'from-[#3C8ECB] to-[#2563eb]',
            iconBg: 'bg-[#3C8ECB]/10',
            iconColor: '#3C8ECB'
        },
        {
            label: 'Total Applications',
            value: stats.totalApplications,
            icon: Briefcase,
            change: `${stats.pendingApplications} pending`,
            href: '/admin/applications',
            gradient: 'from-[#10b981] to-[#059669]',
            iconBg: 'bg-[#10b981]/10',
            iconColor: '#10b981'
        },
        {
            label: 'Action Required',
            value: stats.newEnquiries + stats.pendingApplications,
            icon: TrendingUp,
            change: 'Requires attention',
            href: '/admin/enquiries',
            gradient: 'from-[#f59e0b] to-[#d97706]',
            iconBg: 'bg-[#f59e0b]/10',
            iconColor: '#f59e0b'
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
    }

    return (
        <div className="space-y-8">
            {/* Header with Logo */}
            <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#3C8ECB] to-[#2563eb] shadow-lg shadow-[#3C8ECB]/20">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className={`text-2xl font-bold tracking-tight ${themeClasses.text}`}>Dashboard</h1>
                        <p className={`${themeClasses.textMuted} text-sm`}>Welcome back to TechFleek Admin</p>
                    </div>
                </div>

                {/* TechFleek Logo */}
                <div className="hidden md:flex items-center gap-3">
                    <Image
                        src="/logo.svg"
                        alt="TechFleek"
                        width={140}
                        height={40}
                        className={isDark ? 'brightness-0 invert' : ''}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
                {statCards.map((card, index) => (
                    <motion.div key={card.label} variants={itemVariants}>
                        <Link href={card.href}>
                            <GlowCard
                                className={`${themeClasses.card} border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#3C8ECB]/10 hover:-translate-y-1 cursor-pointer group`}
                            >
                                <div className="flex items-start justify-between">
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}
                                    >
                                        <card.icon className="w-6 h-6" style={{ color: card.iconColor }} />
                                    </div>
                                    <ArrowUpRight className={`w-5 h-5 ${themeClasses.textMuted} opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                                </div>
                                <div className="mt-5">
                                    <motion.p
                                        className={`text-4xl font-bold ${themeClasses.text}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        {loading ? (
                                            <span className={`${themeClasses.textMuted}`}>—</span>
                                        ) : (
                                            card.value
                                        )}
                                    </motion.p>
                                    <p className={`text-sm ${themeClasses.textMuted} mt-1 font-medium`}>{card.label}</p>
                                </div>
                                <div className="mt-4 pt-4 border-t" style={{ borderColor: isDark ? '#27272a' : '#e2e8f0' }}>
                                    <p className="text-xs font-semibold" style={{ color: card.iconColor }}>{card.change}</p>
                                </div>
                            </GlowCard>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Quick Actions */}
            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.4 }}
            >
                <h2 className={`text-sm font-bold ${themeClasses.text} mb-4 uppercase tracking-wide`}>Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/admin/enquiries">
                        <GlowCard className={`p-6 rounded-2xl border ${themeClasses.card} transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group`}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#3C8ECB]/10 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-[#3C8ECB]" />
                                </div>
                                <div>
                                    <p className={`text-base font-bold ${themeClasses.text}`}>View Enquiries</p>
                                    <p className={`text-sm ${themeClasses.textMuted} mt-0.5`}>Manage contact form submissions</p>
                                </div>
                                <ArrowUpRight className={`w-5 h-5 ${themeClasses.textMuted} ml-auto opacity-0 group-hover:opacity-100 transition-opacity`} />
                            </div>
                        </GlowCard>
                    </Link>
                    <Link href="/admin/applications">
                        <GlowCard className={`p-6 rounded-2xl border ${themeClasses.card} transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group`}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                                    <Briefcase className="w-6 h-6 text-[#10b981]" />
                                </div>
                                <div>
                                    <p className={`text-base font-bold ${themeClasses.text}`}>View Applications</p>
                                    <p className={`text-sm ${themeClasses.textMuted} mt-0.5`}>Review job applications & resumes</p>
                                </div>
                                <ArrowUpRight className={`w-5 h-5 ${themeClasses.textMuted} ml-auto opacity-0 group-hover:opacity-100 transition-opacity`} />
                            </div>
                        </GlowCard>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
