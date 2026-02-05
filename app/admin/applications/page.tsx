'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../layout'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import {
    Mail,
    Phone,
    FileText,
    Calendar,
    X,
    Filter,
    Download,
    ChevronDown,
    User,
    Trash2,
    Pin,
    Check,
    ArrowUpDown,
    Eye,
    Briefcase,
    ChevronLeft,
    ChevronRight,
    ZoomIn,
    ZoomOut
} from 'lucide-react'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface JobApplication {
    id: string
    createdAt: string
    name: string
    email: string | null
    phone: string
    role: string
    resumeUrl: string | null
    resumeFilename: string | null
    status: string
}

const statusConfig: Record<string, { label: string; color: string; bgLight: string; bgDark: string; border: string }> = {
    pending: { label: 'Pending', color: '#f59e0b', bgLight: 'bg-amber-50', bgDark: 'bg-amber-500/10', border: 'border-amber-200' },
    reviewed: { label: 'Reviewed', color: '#3b82f6', bgLight: 'bg-blue-50', bgDark: 'bg-blue-500/10', border: 'border-blue-200' },
    interviewed: { label: 'Interviewed', color: '#8b5cf6', bgLight: 'bg-violet-50', bgDark: 'bg-violet-500/10', border: 'border-violet-200' },
    hired: { label: 'Hired', color: '#10b981', bgLight: 'bg-emerald-50', bgDark: 'bg-emerald-500/10', border: 'border-emerald-200' },
    rejected: { label: 'Rejected', color: '#ef4444', bgLight: 'bg-red-50', bgDark: 'bg-red-500/10', border: 'border-red-200' },
}

const statusOptions = ['pending', 'reviewed', 'interviewed', 'hired', 'rejected']

// Premium PDF Viewer Component - Native canvas rendering, no browser chrome
function PdfViewer({ url, filename, onClose }: { url: string, filename?: string | null, onClose: () => void }) {
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [scale, setScale] = useState(1.2)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
        setLoading(false)
    }, [])

    const onDocumentLoadError = useCallback((err: Error) => {
        setError(err.message || 'Failed to load document')
        setLoading(false)
    }, [])

    const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1))
    const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages))
    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3))
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5))

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: 'linear-gradient(180deg, #0f0f14 0%, #1a1a24 100%)' }}
        >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-xl border-b border-white/10">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3C8ECB] to-[#2563eb] flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white truncate max-w-[200px] md:max-w-lg">{filename || 'Resume'}</h3>
                        {numPages > 0 && (
                            <p className="text-xs text-white/40">{numPages} page{numPages > 1 ? 's' : ''}</p>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Zoom */}
                    <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                        <button onClick={zoomOut} className="p-1.5 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white">
                            <ZoomOut className="w-4 h-4" />
                        </button>
                        <span className="px-2 text-xs text-white/60 min-w-[50px] text-center">{Math.round(scale * 100)}%</span>
                        <button onClick={zoomIn} className="p-1.5 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white">
                            <ZoomIn className="w-4 h-4" />
                        </button>
                    </div>

                    <a
                        href={url}
                        download={filename || 'resume.pdf'}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3C8ECB] hover:bg-[#3C8ECB]/80 text-sm font-medium text-white transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Save</span>
                    </a>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* PDF Content */}
            <div className="flex-1 overflow-auto" onClick={(e) => e.stopPropagation()}>
                <div className="min-h-full flex flex-col items-center py-8 px-4">
                    {loading && !error && (
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
                            <div className="relative w-12 h-12">
                                <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                                <div className="absolute inset-0 border-4 border-[#3C8ECB] border-t-transparent rounded-full animate-spin" />
                            </div>
                            <p className="mt-4 text-white/40 text-sm">Loading...</p>
                        </div>
                    )}
                    {error ? (
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
                            <FileText className="w-16 h-16 text-red-400/50 mb-4" />
                            <p className="text-red-400 font-medium mb-2">Unable to load</p>
                            <a href={url} target="_blank" className="text-[#3C8ECB] text-sm hover:underline">
                                Open in browser
                            </a>
                        </div>
                    ) : (
                        <Document
                            file={url}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading={null}
                            className="flex flex-col items-center gap-4"
                        >
                            <Page
                                pageNumber={pageNumber}
                                scale={scale}
                                className="shadow-2xl rounded-lg overflow-hidden"
                                renderTextLayer={true}
                                renderAnnotationLayer={true}
                            />
                        </Document>
                    )}
                </div>
            </div>

            {/* Footer Navigation */}
            {numPages > 1 && (
                <div className="px-6 py-4 bg-black/40 backdrop-blur-xl border-t border-white/10">
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={goToPrevPage}
                            disabled={pageNumber <= 1}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 text-white transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-white/60 text-sm min-w-[80px] text-center">
                            {pageNumber} / {numPages}
                        </span>
                        <button
                            onClick={goToNextPage}
                            disabled={pageNumber >= numPages}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 text-white transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    )
}

// Glow Card Component
function GlowCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
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


export default function ApplicationsPage() {
    const { theme } = useTheme()
    const [applications, setApplications] = useState<JobApplication[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null)
    const [filter, setFilter] = useState('all')
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
    const [sortBy, setSortBy] = useState<'date' | 'name' | 'role'>('date')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set())
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [previewFilename, setPreviewFilename] = useState<string | null>(null)

    const isDark = theme === 'dark'

    useEffect(() => {
        fetchApplications()

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setPreviewUrl(null)
                setSelectedApp(null)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const fetchApplications = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch('/api/admin/applications')
            const data = await res.json()
            console.log('Applications API response:', data)
            if (Array.isArray(data)) {
                setApplications(data)
            } else if (data.error) {
                setError(data.error)
                setApplications([])
            } else {
                setError('Invalid response format')
                setApplications([])
            }
        } catch (err) {
            console.error('Failed to fetch applications:', err)
            setError('Failed to load applications')
            setApplications([])
        } finally {
            setLoading(false)
        }
    }

    const updateStatus = async (id: string, status: string) => {
        try {
            await fetch('/api/admin/applications', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status })
            })
            setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a))
        } catch (err) {
            console.error('Failed to update status:', err)
        }
    }

    const deleteApplications = async (ids: string[]) => {
        if (!confirm(`Delete ${ids.length} application(s)?`)) return
        try {
            await fetch('/api/admin/applications', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids })
            })
            setApplications(prev => prev.filter(a => !ids.includes(a.id)))
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
    let filteredApplications = filter === 'all' ? applications : applications.filter(a => a.status === filter)

    // Sort
    filteredApplications = [...filteredApplications].sort((a, b) => {
        const aPinned = pinnedIds.has(a.id) ? 1 : 0
        const bPinned = pinnedIds.has(b.id) ? 1 : 0
        if (aPinned !== bPinned) return bPinned - aPinned

        let comparison = 0
        if (sortBy === 'date') {
            comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        } else if (sortBy === 'name') {
            comparison = a.name.localeCompare(b.name)
        } else {
            comparison = a.role.localeCompare(b.role)
        }
        return sortOrder === 'desc' ? -comparison : comparison
    })

    const selectAll = () => {
        if (selectedIds.size === filteredApplications.length) {
            setSelectedIds(new Set())
        } else {
            setSelectedIds(new Set(filteredApplications.map(a => a.id)))
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
                    <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669] shadow-lg shadow-[#10b981]/20">
                        <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 className={`text-2xl font-bold tracking-tight ${textColor}`}>
                            Job Applications
                        </h1>
                        <p className={`${textMuted} text-sm`}>
                            {filteredApplications.length} applications • {applications.filter(a => a.status === 'pending').length} pending
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
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${selectedIds.size === filteredApplications.length && filteredApplications.length > 0
                            ? 'bg-[#3C8ECB] border-[#3C8ECB]'
                            : isDark ? 'border-[#52525b]' : 'border-[#cbd5e1]'
                            }`}>
                            {selectedIds.size === filteredApplications.length && filteredApplications.length > 0 && (
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
                                    onClick={() => deleteApplications(Array.from(selectedIds))}
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
                                    <button onClick={() => { setSortBy('role'); setIsSortOpen(false); }} className={`w-full px-3 py-2.5 text-left text-sm ${textColor} ${hoverBg} flex items-center justify-between`}>
                                        Role {sortBy === 'role' && <Check className="w-4 h-4 text-[#3C8ECB]" />}
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

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {loading ? (
                    <div className={`col-span-full ${cardBg} border ${cardBorder} rounded-xl p-12 text-center`}>
                        <div className="w-6 h-6 border-2 border-[#3C8ECB] border-t-transparent rounded-full mx-auto animate-spin" />
                        <p className={`${textMuted} mt-4 text-sm`}>Loading applications...</p>
                    </div>
                ) : error ? (
                    <div className={`col-span-full ${cardBg} border ${cardBorder} rounded-xl p-12 text-center`}>
                        <p className="text-red-500 text-sm">{error}</p>
                        <button onClick={fetchApplications} className="mt-4 px-4 py-2 bg-[#3C8ECB] text-white rounded-lg text-sm">
                            Retry
                        </button>
                    </div>
                ) : filteredApplications.length === 0 ? (
                    <div className={`col-span-full ${cardBg} border ${cardBorder} rounded-xl p-12 text-center`}>
                        <Briefcase className={`w-10 h-10 mx-auto mb-3 ${textMuted}`} />
                        <p className={`${textMuted} text-sm`}>No applications found</p>
                    </div>
                ) : (
                    filteredApplications.map((app) => {
                        const { date, time } = formatDateTime(app.createdAt)
                        const status = statusConfig[app.status] || statusConfig.pending
                        const isSelected = selectedIds.has(app.id)
                        const isPinned = pinnedIds.has(app.id)

                        return (
                            <GlowCard
                                key={app.id}
                                className={`${cardBg} border ${cardBorder} rounded-xl overflow-hidden transition-all ${isSelected ? 'ring-2 ring-[#3C8ECB] border-[#3C8ECB]' : ''
                                    } ${isPinned ? (isDark ? 'bg-[#1f1f23]' : 'bg-[#f8fafc]') : ''}`}
                            >
                                {/* Header */}
                                <div className="p-5">
                                    <div className="flex items-start gap-3">
                                        {/* Checkbox */}
                                        <button
                                            onClick={() => toggleSelect(app.id)}
                                            className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${isSelected
                                                ? 'bg-[#3C8ECB] border-[#3C8ECB]'
                                                : isDark ? 'border-[#52525b] hover:border-[#3C8ECB]' : 'border-[#cbd5e1] hover:border-[#3C8ECB]'
                                                }`}
                                        >
                                            {isSelected && <Check className="w-3 h-3 text-white" />}
                                        </button>

                                        {/* Avatar */}
                                        <div className={`w-11 h-11 rounded-full ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'} flex items-center justify-center flex-shrink-0`}>
                                            <User className={`w-5 h-5 ${textMuted}`} />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                {isPinned && <Pin className="w-3.5 h-3.5 text-[#3C8ECB] flex-shrink-0" />}
                                                <h3 className={`font-bold truncate ${textColor}`}>{app.name}</h3>
                                            </div>
                                            <p className="text-sm text-[#3C8ECB] font-semibold">{app.role}</p>
                                        </div>

                                        {/* Status */}
                                        <select
                                            value={app.status}
                                            onChange={(e) => updateStatus(app.id, e.target.value)}
                                            className={`px-2.5 py-1 rounded-full text-xs font-semibold border cursor-pointer ${isDark ? status.bgDark : status.bgLight
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

                                    {/* Contact Info */}
                                    <div className="mt-4 space-y-2">
                                        {app.email && (
                                            <a href={`mailto:${app.email}`} className="flex items-center gap-2 text-sm text-[#3C8ECB] hover:underline">
                                                <Mail className="w-3.5 h-3.5" />
                                                <span className="truncate">{app.email}</span>
                                            </a>
                                        )}
                                        <a href={`tel:${app.phone}`} className={`flex items-center gap-2 text-sm ${textMuted} hover:text-[#3C8ECB]`}>
                                            <Phone className="w-3.5 h-3.5" />
                                            {app.phone}
                                        </a>
                                        <div className={`flex items-center gap-2 text-xs ${textMuted}`}>
                                            <Calendar className="w-3.5 h-3.5" />
                                            {date} at {time}
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className={`px-5 py-3 ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'} flex items-center gap-2 border-t ${cardBorder}`}>
                                    {app.resumeUrl ? (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setPreviewUrl(app.resumeUrl)
                                                    setPreviewFilename(app.resumeFilename)
                                                }}
                                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#3C8ECB] text-white rounded-lg text-xs font-bold hover:bg-[#3C8ECB]/90 transition-colors"
                                            >
                                                <FileText className="w-3.5 h-3.5" />
                                                View Resume
                                            </button>
                                            <a
                                                href={app.resumeUrl}
                                                download={app.resumeFilename || 'resume.pdf'}
                                                className={`p-2 rounded-lg ${cardBg} border ${cardBorder} text-[#3C8ECB] hover:bg-[#3C8ECB]/10 transition-colors`}
                                                title="Download Resume"
                                            >
                                                <Download className="w-4 h-4" />
                                            </a>
                                        </>
                                    ) : (
                                        <span className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 ${cardBg} border ${cardBorder} rounded-lg text-xs ${textMuted}`}>
                                            <FileText className="w-3.5 h-3.5" />
                                            No Resume
                                        </span>
                                    )}
                                    <button
                                        onClick={() => setSelectedApp(app)}
                                        className={`p-2 rounded-lg ${cardBg} border ${cardBorder} ${hoverBg}`}
                                        title="View Details"
                                    >
                                        <Eye className={`w-4 h-4 ${textMuted}`} />
                                    </button>
                                    <button
                                        onClick={() => togglePin(app.id)}
                                        className={`p-2 rounded-lg transition-colors ${isPinned
                                            ? 'bg-[#3C8ECB]/10 text-[#3C8ECB] border border-[#3C8ECB]/20'
                                            : `${cardBg} border ${cardBorder} ${textMuted} ${hoverBg}`
                                            }`}
                                        title={isPinned ? 'Unpin' : 'Pin'}
                                    >
                                        <Pin className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => deleteApplications([app.id])}
                                        className="p-2 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </GlowCard>
                        )
                    })
                )}
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedApp && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedApp(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`${cardBg} border ${cardBorder} rounded-2xl p-6 max-w-md w-full`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className={`text-xl font-bold ${textColor}`}>{selectedApp.name}</h2>
                                    <p className="text-sm text-[#3C8ECB] font-semibold mt-1">{selectedApp.role}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedApp(null)}
                                    className={`p-2 rounded-lg ${hoverBg}`}
                                >
                                    <X className={`w-5 h-5 ${textMuted}`} />
                                </button>
                            </div>

                            <div className="space-y-3">
                                <div className={`p-4 rounded-xl ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Mail className={`w-4 h-4 ${textMuted}`} />
                                        <span className={`text-xs font-semibold ${textMuted} uppercase`}>Email</span>
                                    </div>
                                    {selectedApp.email ? (
                                        <a href={`mailto:${selectedApp.email}`} className="text-sm text-[#3C8ECB] hover:underline font-medium">
                                            {selectedApp.email}
                                        </a>
                                    ) : (
                                        <p className={`text-sm ${textMuted}`}>Not provided</p>
                                    )}
                                </div>
                                <div className={`p-4 rounded-xl ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Phone className={`w-4 h-4 ${textMuted}`} />
                                        <span className={`text-xs font-semibold ${textMuted} uppercase`}>Phone</span>
                                    </div>
                                    <a href={`tel:${selectedApp.phone}`} className={`text-sm font-medium ${textColor}`}>
                                        {selectedApp.phone}
                                    </a>
                                </div>
                                <div className={`p-4 rounded-xl ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Calendar className={`w-4 h-4 ${textMuted}`} />
                                        <span className={`text-xs font-semibold ${textMuted} uppercase`}>Applied On</span>
                                    </div>
                                    <p className={`text-sm font-medium ${textColor}`}>
                                        {formatDateTime(selectedApp.createdAt).date} at {formatDateTime(selectedApp.createdAt).time}
                                    </p>
                                </div>
                            </div>

                            {selectedApp.resumeUrl && (
                                <div className="mt-6 flex gap-3">
                                    <button
                                        onClick={() => {
                                            setPreviewUrl(selectedApp.resumeUrl)
                                            setPreviewFilename(selectedApp.resumeFilename)
                                        }}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#3C8ECB] text-white rounded-xl text-sm font-bold hover:bg-[#3C8ECB]/90 transition-colors"
                                    >
                                        <FileText className="w-4 h-4" />
                                        View Resume
                                    </button>
                                    <a
                                        href={selectedApp.resumeUrl}
                                        download={selectedApp.resumeFilename || 'resume.pdf'}
                                        className={`flex items-center justify-center p-3 ${isDark ? 'bg-[#27272a]' : 'bg-[#f1f5f9]'} border ${cardBorder} text-[#3C8ECB] rounded-xl hover:bg-[#3C8ECB]/10 transition-colors`}
                                        title="Download"
                                    >
                                        <Download className="w-5 h-5" />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* PDF Viewer */}
            <AnimatePresence>
                {previewUrl && (
                    <PdfViewer
                        url={previewUrl}
                        filename={previewFilename}
                        onClose={() => setPreviewUrl(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
