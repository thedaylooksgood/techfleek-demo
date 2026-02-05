import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// Type for enquiry from Prisma
interface EnquiryRecord {
    id: bigint
    createdAt: Date
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string | null
    eventType: string | null
    eventTheme: string | null
    preferredDate: Date | null
    budgetRange: string | null
    location: string | null
    description: string | null
    services: unknown
    status: string
}

// GET - Fetch all enquiries
export async function GET() {
    try {
        const enquiries = await prisma.enquiry.findMany({
            orderBy: { createdAt: 'desc' }
        })

        // Convert BigInt to string for JSON serialization
        const serialized = enquiries.map((e: EnquiryRecord) => ({
            ...e,
            id: e.id.toString(),
            createdAt: e.createdAt.toISOString(),
            preferredDate: e.preferredDate?.toISOString() || null
        }))

        return NextResponse.json(serialized)
    } catch (error: unknown) {
        console.error('Failed to fetch enquiries:', error)
        return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 })
    }
}

// PATCH - Update enquiry status
export async function PATCH(request: NextRequest) {
    try {
        const { id, status } = await request.json()

        await prisma.enquiry.update({
            where: { id: BigInt(id) },
            data: { status }
        })

        return NextResponse.json({ success: true })
    } catch (error: unknown) {
        console.error('Failed to update enquiry:', error)
        return NextResponse.json({ error: 'Failed to update enquiry' }, { status: 500 })
    }
}

// DELETE - Delete enquiries
export async function DELETE(request: NextRequest) {
    try {
        const { ids } = await request.json()

        await prisma.enquiry.deleteMany({
            where: {
                id: { in: ids.map((id: string) => BigInt(id)) }
            }
        })

        return NextResponse.json({ success: true })
    } catch (error: unknown) {
        console.error('Failed to delete enquiries:', error)
        return NextResponse.json({ error: 'Failed to delete enquiries' }, { status: 500 })
    }
}
