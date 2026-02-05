'use client'

import { useState, useEffect, ReactNode, createContext, useContext, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
    LayoutDashboard,
    MessageSquare,
    Briefcase,
    LogOut,
    Menu,
    X,
    Sun,
    Moon,
    Bell,
    ChevronRight,
    Settings,
    User,
    Users,
    Key,
    Shield
} from 'lucide-react'

// ============================================
// TYPES & INTERFACES
// ============================================

interface AdminUser {
    id: string
    username: string
    role: 'admin' | 'manager' | 'viewer'
    email: string
    createdAt: string
    lastLogin: string
}

interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
    currentUser: AdminUser | null
}

// ============================================
// DEFAULT USERS (For future multi-user feature)
// ============================================

const DEFAULT_USERS: AdminUser[] = [
    {
        id: '1',
        username: 'admin',
        role: 'admin',
        email: 'admin@techfleek.com',
        createdAt: '2024-01-01',
        lastLogin: new Date().toISOString()
    },
    // Future users can be added here
    // { id: '2', username: 'manager1', role: 'manager', email: 'manager@techfleek.com', createdAt: '2024-06-01', lastLogin: '' },
]

const DEFAULT_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
}

// ============================================
// CONTEXT
// ============================================

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => { },
    currentUser: null
})

export const useTheme = () => useContext(ThemeContext)

// ============================================
// GLOW CARD COMPONENT
// ============================================

interface GlowCardProps {
    children: ReactNode
    className?: string
    onClick?: () => void
}

function GlowCard({ children, className = '', onClick }: GlowCardProps) {
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
            style={{ willChange: 'transform' }}
        >
            {/* Glow effect */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(400px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(60, 142, 203, 0.15), transparent 40%)`
                }}
            />
            {children}
        </div>
    )
}

// ============================================
// ADMIN LAYOUT PROPS
// ============================================

interface AdminLayoutProps {
    children: ReactNode
}

// ============================================
// MAIN LAYOUT COMPONENT
// ============================================

export default function AdminLayout({ children }: AdminLayoutProps) {
    const pathname = usePathname()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [notifications, setNotifications] = useState(0)
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')
    const [currentUser, setCurrentUser] = useState<AdminUser | null>(null)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [sidebarWidth, setSidebarWidth] = useState(240)

    // ============================================
    // EFFECTS
    // ============================================

    useEffect(() => {
        const auth = sessionStorage.getItem('admin_auth')
        const savedUser = sessionStorage.getItem('admin_user')
        if (auth === 'true' && savedUser) {
            setIsAuthenticated(true)
            setCurrentUser(JSON.parse(savedUser))
        }

        const savedTheme = localStorage.getItem('admin_theme') as 'light' | 'dark'
        if (savedTheme) setTheme(savedTheme)

        fetchNotifications()
        const interval = setInterval(fetchNotifications, 30000) // Refresh every 30s
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setSidebarWidth(isSidebarOpen ? 240 : 72)
    }, [isSidebarOpen])

    // ============================================
    // HANDLERS
    // ============================================

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('admin_theme', newTheme)
    }

    const fetchNotifications = async () => {
        try {
            const res = await fetch('/api/admin/notifications')
            const data = await res.json()
            setNotifications(data.count || 0)
        } catch { /* ignore */ }
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        // Check credentials
        if (username === DEFAULT_CREDENTIALS.username && password === DEFAULT_CREDENTIALS.password) {
            const user = DEFAULT_USERS.find(u => u.username === username)
            if (user) {
                setIsAuthenticated(true)
                setCurrentUser(user)
                sessionStorage.setItem('admin_auth', 'true')
                sessionStorage.setItem('admin_user', JSON.stringify(user))
                setError('')
            }
        } else {
            setError('Invalid username or password')
        }
    }

    const handleLogout = () => {
        setIsAuthenticated(false)
        setCurrentUser(null)
        sessionStorage.removeItem('admin_auth')
        sessionStorage.removeItem('admin_user')
    }

    // ============================================
    // NAVIGATION
    // ============================================

    const navItems = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/enquiries', label: 'Enquiries', icon: MessageSquare, badge: notifications },
        { href: '/admin/applications', label: 'Applications', icon: Briefcase },
        // Future: Settings page
        // { href: '/admin/settings', label: 'Settings', icon: Settings },
        // { href: '/admin/users', label: 'Team', icon: Users },
    ]

    // ============================================
    // THEME CLASSES
    // ============================================

    const isDark = theme === 'dark'

    const themeClasses = {
        bg: isDark ? 'bg-[#09090b]' : 'bg-[#f8fafc]',
        card: isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-[#e2e8f0]',
        text: isDark ? 'text-white' : 'text-[#0f172a]',
        textSecondary: isDark ? 'text-[#d4d4d8]' : 'text-[#334155]',
        textMuted: isDark ? 'text-[#71717a]' : 'text-[#64748b]',
        sidebar: isDark ? 'bg-[#09090b] border-[#27272a]' : 'bg-white border-[#e2e8f0]',
        hover: isDark ? 'hover:bg-[#27272a]' : 'hover:bg-[#f1f5f9]',
        input: isDark ? 'bg-[#27272a] border-[#3f3f46] text-white placeholder-[#71717a]' : 'bg-white border-[#cbd5e1] text-[#0f172a] placeholder-[#94a3b8]',
        divider: isDark ? 'border-[#27272a]' : 'border-[#e2e8f0]',
    }

    // ============================================
    // LOGIN SCREEN
    // ============================================

    if (!isAuthenticated) {
        return (
            <div className={`fixed inset-0 ${themeClasses.bg} flex items-center justify-center p-4 z-[9999]`}>
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`${themeClasses.card} border rounded-2xl p-8 w-full max-w-sm shadow-2xl`}
                >
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="w-14 h-14 bg-gradient-to-br from-[#3C8ECB] to-[#2d6a9f] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-[#3C8ECB]/20"
                        >
                            <Shield className="w-7 h-7 text-white" />
                        </motion.div>
                        <h1 className={`text-xl font-bold ${themeClasses.text}`}>Admin Portal</h1>
                        <p className={`${themeClasses.textMuted} mt-1 text-sm`}>Sign in to your account</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className={`block text-xs font-semibold ${themeClasses.textMuted} mb-2 uppercase tracking-wide`}>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="admin"
                                className={`w-full px-4 py-3 ${themeClasses.input} border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3C8ECB]/30 focus:border-[#3C8ECB] transition-all`}
                            />
                        </div>
                        <div>
                            <label className={`block text-xs font-semibold ${themeClasses.textMuted} mb-2 uppercase tracking-wide`}>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={`w-full px-4 py-3 ${themeClasses.input} border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3C8ECB]/30 focus:border-[#3C8ECB] transition-all`}
                            />
                        </div>
                        <AnimatePresence>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-500 text-xs font-medium"
                                >
                                    {error}
                                </motion.p>
                            )}
                        </AnimatePresence>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-[#3C8ECB] to-[#2d6a9f] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-[#3C8ECB]/25 transition-all"
                        >
                            Sign In
                        </motion.button>
                    </form>
                    <p className={`${themeClasses.textMuted} text-xs text-center mt-6`}>
                        Default: admin / admin123
                    </p>
                </motion.div>
            </div>
        )
    }

    // ============================================
    // MAIN LAYOUT
    // ============================================

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, currentUser }}>
            <div className={`fixed inset-0 ${themeClasses.bg} flex z-[9999]`}>

                {/* Desktop Sidebar */}
                <motion.aside
                    initial={false}
                    animate={{ width: sidebarWidth }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={`hidden md:flex ${themeClasses.sidebar} border-r flex-col h-full`}
                >
                    {/* Logo */}
                    <div className={`h-16 px-4 flex items-center justify-between border-b ${themeClasses.divider}`}>
                        <AnimatePresence mode="wait">
                            {isSidebarOpen && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`text-sm font-bold ${themeClasses.text}`}
                                >
                                    TechFleek Admin
                                </motion.span>
                            )}
                        </AnimatePresence>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className={`p-2 rounded-lg ${themeClasses.hover} ${themeClasses.textMuted} transition-colors`}
                        >
                            <Menu className="w-4 h-4" />
                        </motion.button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link key={item.href} href={item.href}>
                                    <GlowCard
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${isActive
                                            ? 'bg-gradient-to-r from-[#3C8ECB] to-[#2d6a9f] text-white shadow-lg shadow-[#3C8ECB]/20'
                                            : `${themeClasses.textMuted} ${themeClasses.hover}`
                                            }`}
                                    >
                                        <item.icon className="w-4 h-4 flex-shrink-0" />
                                        <AnimatePresence mode="wait">
                                            {isSidebarOpen && (
                                                <motion.span
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="text-sm font-medium flex-1"
                                                >
                                                    {item.label}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                        {item.badge && item.badge > 0 && isSidebarOpen && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                                            >
                                                {item.badge}
                                            </motion.span>
                                        )}
                                    </GlowCard>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Footer */}
                    <div className={`p-3 border-t ${themeClasses.divider} space-y-1`}>
                        {/* Profile Button */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl ${themeClasses.hover} transition-colors`}
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3C8ECB] to-[#2d6a9f] flex items-center justify-center text-white text-xs font-bold">
                                    {currentUser?.username.charAt(0).toUpperCase()}
                                </div>
                                {isSidebarOpen && (
                                    <div className="flex-1 text-left">
                                        <p className={`text-sm font-medium ${themeClasses.text}`}>{currentUser?.username}</p>
                                        <p className={`text-xs ${themeClasses.textMuted}`}>{currentUser?.role}</p>
                                    </div>
                                )}
                            </button>

                            {/* Profile Dropdown */}
                            <AnimatePresence>
                                {isProfileOpen && isSidebarOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className={`absolute bottom-full left-0 right-0 mb-2 ${themeClasses.card} border rounded-xl shadow-xl overflow-hidden`}
                                    >
                                        <div className={`px-4 py-3 border-b ${themeClasses.divider}`}>
                                            <p className={`text-sm font-semibold ${themeClasses.text}`}>{currentUser?.username}</p>
                                            <p className={`text-xs ${themeClasses.textMuted}`}>{currentUser?.email}</p>
                                        </div>
                                        {/* Future: Settings & Team Management */}
                                        {/*
                                        <button className={`w-full flex items-center gap-3 px-4 py-3 ${themeClasses.textMuted} ${themeClasses.hover} text-sm`}>
                                            <Key className="w-4 h-4" />
                                            Change Password
                                        </button>
                                        <button className={`w-full flex items-center gap-3 px-4 py-3 ${themeClasses.textMuted} ${themeClasses.hover} text-sm`}>
                                            <Users className="w-4 h-4" />
                                            Manage Team
                                        </button>
                                        <button className={`w-full flex items-center gap-3 px-4 py-3 ${themeClasses.textMuted} ${themeClasses.hover} text-sm`}>
                                            <Settings className="w-4 h-4" />
                                            Settings
                                        </button>
                                        */}
                                        <button
                                            onClick={handleLogout}
                                            className={`w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500/10 text-sm`}
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Sign Out
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl ${themeClasses.textMuted} ${themeClasses.hover} transition-colors`}
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            {isSidebarOpen && <span className="text-sm font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
                        </button>

                        {/* Logout */}
                        <button
                            onClick={handleLogout}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl ${themeClasses.textMuted} hover:bg-red-500/10 hover:text-red-500 transition-colors`}
                        >
                            <LogOut className="w-4 h-4" />
                            {isSidebarOpen && <span className="text-sm font-medium">Sign Out</span>}
                        </button>
                    </div>
                </motion.aside>

                {/* Mobile Header */}
                <div className={`md:hidden fixed top-0 left-0 right-0 h-14 ${themeClasses.sidebar} border-b ${themeClasses.divider} z-30 flex items-center justify-between px-4`}>
                    <span className={`text-sm font-bold ${themeClasses.text}`}>TechFleek Admin</span>
                    <div className="flex items-center gap-2">
                        <button onClick={toggleTheme} className={`p-2 rounded-lg ${themeClasses.hover}`}>
                            {theme === 'dark' ? <Sun className={`w-4 h-4 ${themeClasses.textMuted}`} /> : <Moon className={`w-4 h-4 ${themeClasses.textMuted}`} />}
                        </button>
                        {notifications > 0 && (
                            <div className="relative p-2">
                                <Bell className={`w-4 h-4 ${themeClasses.textMuted}`} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </div>
                        )}
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-lg ${themeClasses.hover}`}>
                            {isMobileMenuOpen ? <X className={`w-4 h-4 ${themeClasses.textMuted}`} /> : <Menu className={`w-4 h-4 ${themeClasses.textMuted}`} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`md:hidden fixed top-14 left-0 right-0 ${themeClasses.card} border-b z-20 p-4 space-y-1`}
                        >
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                                        <div className={`flex items-center justify-between px-4 py-3 rounded-xl ${isActive
                                            ? 'bg-gradient-to-r from-[#3C8ECB] to-[#2d6a9f] text-white'
                                            : `${themeClasses.textMuted} ${themeClasses.hover}`
                                            }`}>
                                            <div className="flex items-center gap-3">
                                                <item.icon className="w-4 h-4" />
                                                <span className="text-sm font-medium">{item.label}</span>
                                                {item.badge && item.badge > 0 && (
                                                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                )
                            })}
                            <button
                                onClick={handleLogout}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${themeClasses.textMuted} hover:text-red-500 transition-colors`}
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="text-sm font-medium">Sign Out</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Content */}
                <main className="flex-1 pt-14 md:pt-0 overflow-y-auto">
                    <div className="p-4 md:p-8 max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </ThemeContext.Provider>
    )
}

// ============================================
// EXPORT GLOW CARD FOR USE IN OTHER PAGES
// ============================================

export { GlowCard }
