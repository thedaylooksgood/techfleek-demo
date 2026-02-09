export const homeStyles = {
    // Section & Layout
    section: "w-full overflow-hidden relative font-[family-name:var(--font-red-hat)] bg-white",
    sectionPadding: "py-[40px] md:py-[50px] lg:py-[60px]", // Consistent vertical spacing

    // The main constraint container
    container: "w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8",

    // Background Grid Pattern (style object)
    gridBackgroundStyle: {
        backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), 
                          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        opacity: 0.35
    },

    // Header Components
    headerWrapper: "w-full mb-8 border-b border-slate-100 pb-4 flex flex-col gap-2 text-left",

    // The small top label (e.g. "ABOUT US")
    label: "inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-[10px] sm:text-xs shrink-0 select-none",

    // The main H2 title
    title: "font-black text-slate-900 text-2xl md:text-2xl lg:text-[30px] leading-[1.1]",

    // Gradient text span
    gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-[#2563EB]",

    // Body / Description text
    description: "text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[600px] font-medium",

    // Common Card/Item styles
    card: "bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300",
};
