import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            phone,
            services,
            budget,
            timeline,
            projectDetails
        } = body;

        // Simple validation
        if (!name || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Split name into first and last for existing schema compatibility
        const nameParts = (name || '').trim().split(' ');
        const firstName = nameParts[0] || 'Unknown';
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '-';

        // Use placeholder email since it was removed from form
        const email = 'no-email@provided.com';

        // Combine project details and timeline into description
        const descriptionValue = `TIMELINE: ${timeline}\n\nDETAILS:\n${projectDetails || 'No details provided'}`;

        // Save to MySQL using Prisma
        const data = await prisma.enquiry.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                budgetRange: budget || null,
                description: descriptionValue,
                services: services || null,
                company: null,
                eventType: null,
                eventTheme: null,
                preferredDate: null,
                location: null,
                status: 'new'
            }
        });

        // Convert BigInt id to string for JSON serialization
        return NextResponse.json(
            {
                message: 'Enquiry submitted successfully',
                data: {
                    ...data,
                    id: data.id.toString()
                }
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: `Failed to save enquiry: ${error.message}` },
            { status: 500 }
        );
    }
}
