"use client";

import { useState } from "react";
import PageTemplate from "@/components/Common/PageTemplate";
import PageHero from "@/components/Common/PageHero";
import TechFleekServices from "@/components/Home-Page/TechFleekServices";
import TechStack from "@/components/Home-Page/TechStack";
import {
    Target, Layers, GitBranch, Rocket, Settings, Figma,
    ArrowRight, Zap, Shield, TrendingUp, Users, Clock, Award,
    ShoppingCart, Briefcase, BarChart3, ListChecks, Truck, Package,
    Heart, Building2, Stethoscope, Video, Calendar, Activity, FlaskConical, Wifi,
    Brain, Code2, Mic, Bot, Link2,
    GraduationCap, School, BookOpen, MonitorPlay, MessageCircle,
    DollarSign, Receipt, Calculator,
    Mail, MessageSquare, Megaphone, ClipboardList,
    UserPlus, UsersRound, MapPin, Share2,
    Boxes, Factory, Cog, ClipboardCheck, Wrench, CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { homeStyles } from "@/components/Home-Page/styles";

// All Service Categories
const serviceCategories = [
    {
        category: "Sales",
        tagline: "Accelerate growth with powerful sales tools",
        color: "#3C8ECB",
        services: [
            { icon: Briefcase, title: "CRM System", description: "Customer relationship suite" },
            { icon: ShoppingCart, title: "POS Solution", description: "Modern point of sale" },
            { icon: BarChart3, title: "Lead Management", description: "Track sales pipeline" },
            { icon: Truck, title: "Rental Management", description: "Equipment rental system" },
            { icon: Package, title: "E-Commerce", description: "Online sales platform" }
        ]
    },
    {
        category: "Healthtech",
        tagline: "Revolutionize healthcare delivery with integrated solutions",
        color: "#10b981",
        services: [
            { icon: Heart, title: "Corporate Wellness", description: "Employee health programs" },
            { icon: Building2, title: "EHR", description: "Electronic Health Records system" },
            { icon: Video, title: "Telemedicine", description: "Virtual consultations platform" },
            { icon: Calendar, title: "Appointment System", description: "Smart scheduling solution" },
            { icon: Activity, title: "Hospital Management", description: "Complete healthcare system" },
            { icon: FlaskConical, title: "Lab Management", description: "Digital lab operations" },
            { icon: Wifi, title: "IoT Integration", description: "Connected health devices" }
        ]
    },
    {
        category: "Emerging Technologies",
        tagline: "Stay ahead with cutting-edge AI solutions",
        color: "#8b5cf6",
        services: [
            { icon: Brain, title: "LLM Integration", description: "AI language models" },
            { icon: Code2, title: "Vibe Coding", description: "Next-gen development" },
            { icon: Mic, title: "Voice AI", description: "Speech recognition system" },
            { icon: Bot, title: "Agentic AI", description: "Autonomous AI agents" },
            { icon: Link2, title: "Blockchain", description: "Decentralized solutions" }
        ]
    },
    {
        category: "Edtech",
        tagline: "Transform education with modern K-12 learning solutions",
        color: "#f59e0b",
        services: [
            { icon: School, title: "School Management", description: "Complete school administration system" },
            { icon: BookOpen, title: "Learning Platform", description: "Interactive learning experience" },
            { icon: MonitorPlay, title: "Virtual Classroom", description: "Real-time online teaching tools" },
            { icon: MessageCircle, title: "Communication", description: "Connect teachers and students" }
        ]
    },
    {
        category: "Finance",
        tagline: "Streamline financial operations with smart solutions",
        color: "#06b6d4",
        services: [
            { icon: DollarSign, title: "Expense Management", description: "Track and control spending" },
            { icon: Receipt, title: "Smart Invoicing", description: "Automated billing system" },
            { icon: Calculator, title: "Accounting Suite", description: "Complete financial tracking" }
        ]
    },
    {
        category: "Martech",
        tagline: "Power your marketing with intelligent automation",
        color: "#ec4899",
        services: [
            { icon: Mail, title: "Email Marketing", description: "Automated campaign management" },
            { icon: MessageSquare, title: "WhatsApp Business", description: "Direct customer engagement" },
            { icon: Megaphone, title: "Marketing Automation", description: "Streamline marketing workflows" },
            { icon: ClipboardList, title: "Survey Tools", description: "Gather customer insights" }
        ]
    },
    {
        category: "Human Resources",
        tagline: "Transform HR operations with smart management",
        color: "#6366f1",
        services: [
            { icon: UserPlus, title: "Smart Recruitment", description: "Streamline hiring process" },
            { icon: UsersRound, title: "Employee Management", description: "Complete workforce solution" },
            { icon: MapPin, title: "Field Fleet Management", description: "Track field operations" },
            { icon: Share2, title: "Referral System", description: "Employee referral platform" }
        ]
    },
    {
        category: "Inventory & Manufacturing",
        tagline: "Streamline your operations with smart solutions",
        color: "#f97316",
        services: [
            { icon: Boxes, title: "Inventory", description: "Manage your stock and logistics activities" },
            { icon: Factory, title: "Manufacturing", description: "Manufacturing Orders & BOMs" },
            { icon: Cog, title: "PLM", description: "Product Lifecycle Management" },
            { icon: ClipboardCheck, title: "Purchase", description: "Purchase orders, tenders and agreements" },
            { icon: Wrench, title: "Maintenance", description: "Track equipment and manage requests" },
            { icon: CheckCircle2, title: "Quality", description: "Control the quality of your products" }
        ]
    }
];

// Our process
const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding your business, target audience, and goals.", icon: Target },
    { step: "02", title: "Strategy", description: "Architecture planning, tech stack, and roadmap creation.", icon: Layers },
    { step: "03", title: "Design", description: "Beautiful interfaces with wireframes and prototypes.", icon: Figma },
    { step: "04", title: "Development", description: "Agile development with regular updates and testing.", icon: GitBranch },
    { step: "05", title: "Launch", description: "Deployment with comprehensive testing and monitoring.", icon: Rocket },
    { step: "06", title: "Support", description: "Post-launch maintenance and dedicated support.", icon: Settings }
];

// Why choose us
const advantages = [
    { icon: Zap, title: "Fast Delivery", description: "Quality work delivered on time." },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security." },
    { icon: TrendingUp, title: "Scalable", description: "Built to grow with you." },
    { icon: Users, title: "Expert Team", description: "Skilled developers & designers." },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock assistance." },
    { icon: Award, title: "100+ Projects", description: "Proven track record." }
];

// Statistics
const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" }
];

// Interactive Tabs Component
function IndustrySolutionsTabs({ categories }: { categories: typeof serviceCategories }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCategory = categories[activeIndex];

    return (
        <div>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeIndex === index
                            ? 'text-white shadow-lg'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        style={activeIndex === index ? { backgroundColor: cat.color } : {}}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>

            {/* Active Category Content */}
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
            >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-1.5 h-10 rounded-full" style={{ backgroundColor: activeCategory.color }} />
                    <div>
                        <h3 className="font-bold text-slate-900 text-xl">{activeCategory.category}</h3>
                        <p className="text-slate-500 text-sm">{activeCategory.tagline}</p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {activeCategory.services.map((service, svcIndex) => (
                        <motion.div
                            key={svcIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: svcIndex * 0.05, duration: 0.3 }}
                            whileHover={{ y: -4 }}
                            className="group bg-white hover:bg-white rounded-xl p-4 border border-slate-100 hover:border-[#3C8ECB]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors"
                                style={{ backgroundColor: `${activeCategory.color}15` }}>
                                <service.icon className="w-5 h-5" style={{ color: activeCategory.color }} />
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">{service.title}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Our"
                subtitle="Services"
                description="Comprehensive digital solutions across all industries."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services" }
                ]}
            />

            {/* Services Overview from Homepage */}
            <TechFleekServices showButton={false} />

            {/* Full Services Catalog */}
            <div className="w-full bg-white font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                    {/* Section Header */}
                    <div className={homeStyles.headerWrapper}>
                        <span className={homeStyles.label}>
                            INDUSTRY SOLUTIONS
                        </span>
                        <h2 className={homeStyles.title}>
                            Our Expertise Spans <span className={homeStyles.gradientText}>All Industries</span>
                        </h2>
                        <p className={homeStyles.description}>
                            From sales to manufacturing, we deliver tailored solutions for every business need.
                        </p>
                    </div>

                    {/* Interactive Tabs */}
                    <IndustrySolutionsTabs categories={serviceCategories} />
                </div>
            </div>

            {/* Tech Stack */}
            <TechStack />

            {/* Process Section */}
            <div className="w-full bg-slate-50 font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className={homeStyles.headerWrapper}>
                        <span className={homeStyles.label}>
                            HOW WE WORK
                        </span>
                        <h2 className={homeStyles.title}>
                            Our <span className={homeStyles.gradientText}>Process</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="group bg-white rounded-xl p-4 border border-slate-100 hover:border-[#3C8ECB]/30 hover:shadow-lg transition-all text-center"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#3C8ECB]/10 group-hover:bg-[#3C8ECB] flex items-center justify-center mx-auto mb-3 transition-colors">
                                    <step.icon className="w-5 h-5 text-[#3C8ECB] group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-xs font-bold text-slate-300 block mb-1">{step.step}</span>
                                <h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
                                <p className="text-slate-500 text-[10px] leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="w-full bg-white font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className={homeStyles.label}>
                                WHY TECHFLEEK
                            </span>
                            <h2 className={`${homeStyles.title} mb-4`}>
                                Why Choose <span className={homeStyles.gradientText}>Us?</span>
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {advantages.map((adv, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#3C8ECB]/10 flex items-center justify-center shrink-0">
                                            <adv.icon className="w-4 h-4 text-[#3C8ECB]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">{adv.title}</h3>
                                            <p className="text-slate-500 text-xs">{adv.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center hover:shadow-lg transition-all"
                                >
                                    <span className="block font-black text-3xl md:text-4xl text-[#3C8ECB] mb-1">{stat.value}</span>
                                    <span className="text-slate-500 text-xs font-medium">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-slate-900 font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h2 className={`${homeStyles.title} !text-white mb-2`}>
                                Ready to Start Your Project?
                            </h2>
                            <p className={`${homeStyles.description} !text-slate-400`}>
                                Let's discuss how we can help bring your vision to life.
                            </p>
                        </div>
                        <Link href="/enquiry">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#3C8ECB] hover:bg-[#3C8ECB]/90 text-white rounded-full font-bold text-sm transition-colors"
                            >
                                Get a Free Quote
                                <ArrowRight size={16} />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}
