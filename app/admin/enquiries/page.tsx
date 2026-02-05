'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../layout'
import {
    Mail,
    Phone,
    Building2,
    Calendar,
    MapPin,
    X,
    Filter,
    ChevronDown,
    Trash2,
    Pin,
    Check,
    ArrowUpDown,
    Eye,
    MessageSquare
} from 'lucide-react'

interface Enquiry {
    id: string
    createdAt: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string | null
    eventType: string | null
    eventTheme: string | null
    preferredDate: string | null
    budgetRange: string | null
    location: string | null
    description: string | null
    services: string[] | null
    status: string
    pinned?: boolean
}

const statusConfig: Record<string, { label: string; color: string; bgLight: string; bgDark: string; border: string }> = {
    new: { label: 'New', color: '#10b981', bgLight: 'bg-emerald-50', bgDark: 'bg-emerald-500/10', border: 'border-emerald-200' },
    contacted: { label: 'Contacted', color: '#3b82f6', bgLight: 'bg-blue-50', bgDark: 'bg-blue-500/10', border: 'border-blue-200' },
    'in-progress': { label: 'In Progress', color: '#f59e0b', bgLight: 'bg-amber-50', bgDark: 'bg-amber-500/10', border: 'border-amber-200' },
    closed: { label: 'Closed', color: '#6b7280', bgLight: 'bg-gray-100', bgDark: 'bg-gray-500/10', border: 'border-gray-300' },
}

const statusOptions = ['new', 'contacted', 'in-progress', 'closed']

// Glow Card Component
function GlowCard({ children, className = '', onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setGlowPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={onClick}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(400px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(60, 142, 203, 0.12), transparent 40%)`
                }}
            />
            {children}
        </div>
    )
}

export default function EnquiriesPage() {
    const { theme } = useTheme()
    const [enquiries, setEnquiries] = useState<Enquiry[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null)
    const [filter, setFilter] = useState('all')
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
    const [sortBy, setSortBy] = useState<'date' | 'name'>('date')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set())

    const isDark = theme === 'dark'

    useEffect(() => {
        fetchEnquiries()
    }, [])

    const fetchEnquiries = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch('/api/admin/enquiries')
            const data = await res.json()
            console.log('Enquiries API response:', data)
            if (Array.isArray(data)) {
                setEnquiries(data)
            } else if (data.error) {
                setError(data.error)
                setEnquiries([])
            } else {
                setError('Invalid response format')
                setEnquiries([])
            }
        } catch (err) {
            console.error('Failed to fetch enquiries:', err)
            setError('Failed to load enquiries')
            setEnquiries([])
        } finally {
            setLoading(false)
        }
    }

    const updateStatus = async (id: string, status: string) => {
        try {
            await fetch('/api/admin/enquiries', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status })
            })
            setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e))
        } catch (err) {
            console.error('Failed to update status:', err)
        }
    }

    const deleteEnquiries = async (ids: string[]) => {
        if (!confirm(`Delete ${ids.length} enquiry(s)?`)) return
        try {
            await fetch('/api/admin/enquiries', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids })
            })
            setEnquiries(prev => prev.filter(e => !ids.includes(e.id)))
            setSelectedIds(new Set())
        } catch (err) {
            console.error('Failed to delete:', err)
        }
    }

    const togglePin = (id: string) => {
        setPinnedIds(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) newSet.delete(id)
            else newSet.add(id)
            return newSet
        })
    }

    const toggleSelect = (id: string) => {
        setSelectedIds(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) newSet.delete(id)
            else newSet.add(id)
            return newSet
        })
    }

    const formatDateTime = (dateString: string) => {
        const date = new Date(dateString)
        return {
            date: date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
            time: date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
        }
    }

    // Filter and sort
    let filteredEnquiries = filter === 'all' ? enquiries : enquiries.filter(e => e.status === filter)

    // Sort
    filteredEnquiries = [...filteredEnquiries].sort((a, b) => {
        const aPinned = pinnedIds.has(a.id) ? 1 : 0
        const bPinned = pinnedIds.has(b.id) ? 1 : 0
        if (aPinned !== bPinned) return bPinned - aPinned

        if (sortBy === 'date') {
            const comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            return sortOrder === 'desc' ? -comparison : comparison
        } else {
            const comparison = `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
            return sortOrder === 'desc' ? -comparison : comparison
        }
    })

    const selectAll = () => {
        if (selectedIds.size === filteredEnquiries.length) {
            setSelectedIds(new Set())
        } else {
            setSelectedIds(new Set(filteredEnquiries.map(e => e.id)))
        }
    }

    // Styling
    const cardBg = isDark ? 'bg-[#18181b]' : 'bg-white'
    const cardBorder = isDark ? 'border-[#27272a]' : 'border-[#e2e8f0]'
    const textColor = isDark ? 'text-white' : 'text-[#0f172a]'
    const textMuted = isDark ? 'text-[#a1a1aa]' : 'text-[#64748b]'
    const hoverBg = isDark ? 'hover:bg-[#27272a]' : 'hover:bg-[#f1f5f9]'

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#3C8ECB] to-[#2563eb] shadow-lg shadow-[#3C8ECB]/20">
                        <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 className={`text-2xl font-bold tracking-tight ${textColor}`}>
                            Enquiries
                        </h1>
                        <p className={`${textMuted} text-sm`}>
                            {filteredEnquiries.length} enquiries • {enquiries.filter(e => e.status === 'new').length} new
                        </p>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Select All */}
                    <button
                        onClick={selectAll}
                        className={`flex items-center gap-2 px-3 py-2 ${cardBg} border ${cardBorder} rounded-lg text-sm ${textMuted} transition-all ${hoverBg}`}
                    >
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${selectedIds.size === filteredEnquiries.length && filteredEnquiries.length > 0
                                ? 'bg-[#3C8ECB] border-[#3C8ECB]'
                                : isDark ? 'border-[#52525b]' : 'border-[#cbd5e1]'
                            }`}>
                            {selectedIds.size === filteredEnquiries.length && filteredEnquiries.length > 0 && (
                                <Check className="w-3 h-3 text-white" />
                            )}
                        </div>
                        Select All
                    </button>

                    {/* Bulk Actions */}
                    <AnimatePresence>
                        {selectedIds.size > 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex items-center gap-2"
                            >
                                <span className={`text-sm ${textMuted}`}>
                                    {selectedIds.size} selected
                                </span>
                                <button
                                    onClick={() => deleteEnquiries(Array.from(selectedIds))}
                                    className="flex items-center gap-1.5 px-3 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg text-sm font-medium hover:bg-red-500/20 transition-colors"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    Delete
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex-1" />

                    {/* Sort */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className={`flex items-center gap-2 px-3 py-2 ${cardBg} border ${cardBorder} rounded-lg text-sm ${textMuted} transition-all ${hoverBg}`}
                        >
                            <ArrowUpDown className="w-4 h-4" />
                            Sort
                        </button>
                        <AnimatePresence>
                            {isSortOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                                    className={`absolute right-0 mt-2 w-44 ${cardBg} border ${cardBorder} rounded-xl shadow-xl z-20 overflow-hidden`}
                                >
                                    <div className={`px-3 py-2 text-xs font-medium ${textMuted} ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>Sort by</div>
                                    <button onClick={() => { setSortBy('date'); setIsSortOpen(false); }} className={`w-full px-3 py-2.5 text-left text-sm ${textColor} ${hoverBg} flex items-center justify-between`}>
                                        Date {sortBy === 'date' && <Check className="w-4 h-4 text-[#3C8ECB]" />}
                                    </button>
                                    <button onClick={() => { setSortBy('name'); setIsSortOpen(false); }} className={`w-full px-3 py-2.5 text-left text-sm ${textColor} ${hoverBg} flex items-center justify-between`}>
                                        Name {sortBy === 'name' && <Check className="w-4 h-4 text-[#3C8ECB]" />}
                                    </button>
                                    <div className={`border-t ${cardBorder}`} />
                                    <div className={`px-3 py-2 text-xs font-medium ${textMuted} ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>Order</div>
                                    <button onClick={() => { setSortOrder('desc'); setIsSortOpen(false); }} className={`w-full px-3 py-2.5 text-left text-sm ${textColor} ${hoverBg} flex items-center justify-between`}>
                                        Newest first {sortOrder === 'desc' && <Check className="w-4 h-4 text-[#3C8ECB]" />}
                                    </button>
                                    <button onClick={() => { setSortOrder('asc'); setIsSortOpen(false); }} className={`w-full px-3 py-2.5 text-left text-sm ${textColor} ${hoverBg} flex items-center justify-between`}>
                                        Oldest first {sortOrder === 'asc' && <Check className="w-4 h-4 text-[#3C8ECB]" />}
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Filter */}
                    <div className="relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`flex items-center gap-2 px-3 py-2 ${cardBg} border ${cardBorder} rounded-lg text-sm ${textMuted} transition-all ${hoverBg}`}
                        >
                            <Filter className="w-4 h-4" />
                            {filter === 'all' ? 'All' : statusConfig[filter]?.label}
                            <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {isFilterOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                                    className={`absolute right-0 mt-2 w-44 ${cardBg} border ${cardBorder} rounded-xl shadow-xl z-20 overflow-hidden`}
                                >
                                    <button onClick={() => { setFilter('all'); setIsFilterOpen(false); }} className={`w-full px-3 py-2.5 text-left text-sm ${textColor} ${hoverBg}`}>
                                        All Status
                                    </button>
                                    {statusOptions.map(s => (
                                        <button key={s} onClick={() => { setFilter(s); setIsFilterOpen(false); }} className={`w-full px-3 py-2.5 text-left text-sm ${textColor} ${hoverBg} flex items-center gap-2`}>
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusConfig[s].color }} />
                                            {statusConfig[s].label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="space-y-3">
                {loading ? (
                    <div className={`${cardBg} border ${cardBorder} rounded-xl p-12 text-center`}>
                        <div className="w-6 h-6 border-2 border-[#3C8ECB] border-t-transparent rounded-full mx-auto animate-spin" />
                        <p className={`${textMuted} mt-4 text-sm`}>Loading enquiries...</p>
                    </div>
                ) : error ? (
                    <div className={`${cardBg} border ${cardBorder} rounded-xl p-12 text-center`}>
                        <p className="text-red-500 text-sm">{error}</p>
                        <button onClick={fetchEnquiries} className="mt-4 px-4 py-2 bg-[#3C8ECB] text-white rounded-lg text-sm">
                            Retry
                        </button>
                    </div>
                ) : filteredEnquiries.length === 0 ? (
                    <div className={`${cardBg} border ${cardBorder} rounded-xl p-12 text-center`}>
                        <MessageSquare className={`w-10 h-10 mx-auto mb-3 ${textMuted}`} />
                        <p className={`${textMuted} text-sm`}>No enquiries found</p>
                    </div>
                ) : (
                    filteredEnquiries.map((enquiry) => {
                        const { date, time } = formatDateTime(enquiry.createdAt)
                        const status = statusConfig[enquiry.status] || statusConfig.new
                        const isSelected = selectedIds.has(enquiry.id)
                        const isPinned = pinnedIds.has(enquiry.id)

                        return (
                            <GlowCard
                                key={enquiry.id}
                                className={`${cardBg} border ${cardBorder} rounded-xl p-5 transition-all cursor-pointer group ${isSelected ? 'ring-2 ring-[#3C8ECB] border-[#3C8ECB]' : ''
                                    } ${isPinned ? (isDark ? 'bg-[#1f1f23]' : 'bg-[#f8fafc]') : ''} ${hoverBg}`}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Checkbox */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleSelect(enquiry.id); }}
                                        className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${isSelected
                                                ? 'bg-[#3C8ECB] border-[#3C8ECB]'
                                                : isDark ? 'border-[#52525b] hover:border-[#3C8ECB]' : 'border-[#cbd5e1] hover:border-[#3C8ECB]'
                                            }`}
                                    >
                                        {isSelected && <Check className="w-3 h-3 text-white" />}
                                    </button>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    {isPinned && <Pin className="w-3.5 h-3.5 text-[#3C8ECB]" />}
                                                    <h3 className={`font-bold text-base ${textColor}`}>
                                                        {enquiry.firstName} {enquiry.lastName}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <a href={`mailto:${enquiry.email}`} onClick={(e) => e.stopPropagation()} className="text-sm text-[#3C8ECB] hover:underline flex items-center gap-1.5">
                                                        <Mail className="w-3.5 h-3.5" />{enquiry.email}
                                                    </a>
                                                    <a href={`tel:${enquiry.phone}`} onClick={(e) => e.stopPropagation()} className={`text-sm ${textMuted} hover:text-[#3C8ECB] flex items-center gap-1.5`}>
                                                        <Phone className="w-3.5 h-3.5" />{enquiry.phone}
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Status */}
                                            <select
                                                value={enquiry.status}
                                                onClick={(e) => e.stopPropagation()}
                                                onChange={(e) => updateStatus(enquiry.id, e.target.value)}
                                                className={`px-3 py-1.5 rounded-full text-xs font-semibold border cursor-pointer ${isDark ? status.bgDark : status.bgLight
                                                    } ${status.border}`}
                                                style={{ color: status.color }}
                                            >
                                                {statusOptions.map(s => (
                                                    <option key={s} value={s} className={isDark ? 'bg-[#18181b]' : 'bg-white'}>
                                                        {statusConfig[s].label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 mt-3">
                                            <span className={`text-xs ${textMuted} flex items-center gap-1.5`}>
                                                <Calendar className="w-3.5 h-3.5" />
                                                {date} at {time}
                                            </span>
                                            {enquiry.company && (
                                                <span className={`text-xs ${textMuted} flex items-center gap-1.5`}>
                                                    <Building2 className="w-3.5 h-3.5" />{enquiry.company}
                                                </span>
                                            )}
                                            {enquiry.location && (
                                                <span className={`text-xs ${textMuted} flex items-center gap-1.5`}>
                                                    <MapPin className="w-3.5 h-3.5" />{enquiry.location}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedEnquiry(enquiry); }}
                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#3C8ECB] text-white rounded-lg text-xs font-semibold hover:bg-[#3C8ECB]/90 transition-colors"
                                            >
                                                <Eye className="w-3.5 h-3.5" />
                                                View Details
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); togglePin(enquiry.id); }}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${isPinned
                                                        ? 'bg-[#3C8ECB]/10 text-[#3C8ECB] border border-[#3C8ECB]/20'
                                                        : `${cardBg} border ${cardBorder} ${textMuted}`
                                                    }`}
                                            >
                                                <Pin className="w-3.5 h-3.5" />
                                                {isPinned ? 'Unpin' : 'Pin'}
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); deleteEnquiries([enquiry.id]); }}
                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg text-xs font-medium hover:bg-red-500/20 transition-colors"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        )
                    })
                )}
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedEnquiry && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedEnquiry(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`${cardBg} border ${cardBorder} rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className={`text-xl font-bold ${textColor}`}>
                                        {selectedEnquiry.firstName} {selectedEnquiry.lastName}
                                    </h2>
                                    <p className={`${textMuted} text-sm mt-1`}>
                                        {formatDateTime(selectedEnquiry.createdAt).date} at {formatDateTime(selectedEnquiry.createdAt).time}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedEnquiry(null)}
                                    className={`p-2 rounded-lg ${hoverBg}`}
                                >
                                    <X className={`w-5 h-5 ${textMuted}`} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className={`p-4 rounded-xl ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Mail className={`w-4 h-4 ${textMuted}`} />
                                        <span className={`text-xs font-semibold ${textMuted} uppercase`}>Email</span>
                                    </div>
                                    <a href={`mailto:${selectedEnquiry.email}`} className="text-sm text-[#3C8ECB] hover:underline font-medium">
                                        {selectedEnquiry.email}
                                    </a>
                                </div>
                                <div className={`p-4 rounded-xl ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Phone className={`w-4 h-4 ${textMuted}`} />
                                        <span className={`text-xs font-semibold ${textMuted} uppercase`}>Phone</span>
                                    </div>
                                    <a href={`tel:${selectedEnquiry.phone}`} className={`text-sm font-medium ${textColor}`}>
                                        {selectedEnquiry.phone}
                                    </a>
                                </div>
                                {selectedEnquiry.company && (
                                    <div className={`p-4 rounded-xl ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Building2 className={`w-4 h-4 ${textMuted}`} />
                                            <span className={`text-xs font-semibold ${textMuted} uppercase`}>Company</span>
                                        </div>
                                        <p className={`text-sm font-medium ${textColor}`}>{selectedEnquiry.company}</p>
                                    </div>
                                )}
                                {selectedEnquiry.location && (
                                    <div className={`p-4 rounded-xl ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <MapPin className={`w-4 h-4 ${textMuted}`} />
                                            <span className={`text-xs font-semibold ${textMuted} uppercase`}>Location</span>
                                        </div>
                                        <p className={`text-sm font-medium ${textColor}`}>{selectedEnquiry.location}</p>
                                    </div>
                                )}
                            </div>

                            {selectedEnquiry.description && (
                                <div className={`p-4 rounded-xl ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'} mt-3`}>
                                    <span className={`text-xs font-semibold ${textMuted} uppercase`}>Message</span>
                                    <p className={`text-sm ${textColor} mt-2 whitespace-pre-wrap`}>{selectedEnquiry.description}</p>
                                </div>
                            )}

                            {selectedEnquiry.services && selectedEnquiry.services.length > 0 && (
                                <div className="mt-4">
                                    <span className={`text-xs font-semibold ${textMuted} uppercase`}>Services Interested</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {selectedEnquiry.services.map((service, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-[#3C8ECB]/10 text-[#3C8ECB] border border-[#3C8ECB]/20 rounded-full text-xs font-medium"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
