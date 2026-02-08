'use client';

import React, { ReactNode } from 'react';
import { homeStyles } from '../Home-Page/styles';

interface PageTemplateProps {
    children: ReactNode;
    className?: string;
}

export default function PageTemplate({ children, className = '' }: PageTemplateProps) {
    return (
        <main className={`bg-white min-h-screen w-full flex flex-col ${className}`}>
            {children}
        </main>
    );
}
