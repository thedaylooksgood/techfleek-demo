import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            firstName,
            lastName,
            email,
            phone,
            company,
            eventType,
            eventTheme,
            preferredDate,
            budgetRange,
            location,
            description,
            services,
        } = body;

        // Simple validation
        if (!firstName || !lastName || !email || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Save to MySQL using Prisma
        const data = await prisma.enquiry.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                company: company || null,
                eventType: eventType || null,
                eventTheme: eventTheme || null,
                preferredDate: preferredDate ? new Date(preferredDate) : null,
                budgetRange: budgetRange || null,
                location: location || null,
                description: description || null,
                services: services || null, // Stored as JSON in MySQL
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
