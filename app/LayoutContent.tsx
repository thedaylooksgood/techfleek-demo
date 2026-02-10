'use client'

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import SmoothScroll from "@/components/SmoothScroll";

export default function LayoutContent({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    // Admin routes have their own layout, skip main site components
    if (isAdminRoute) {
        return <>{children}</>;
    }

    return (
        <>
            <Suspense fallback={null}>
                <SmoothScroll />
            </Suspense>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
