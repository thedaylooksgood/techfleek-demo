import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// Type for job application from Prisma
interface ApplicationRecord {
    id: string
    createdAt: Date
    name: string
    email: string | null
    phone: string
    role: string
    resumeUrl: string | null
    resumeFilename: string | null
    status: string
}

// GET - Fetch all job applications
export async function GET() {
    try {
        const applications = await prisma.jobApplication.findMany({
            orderBy: { createdAt: 'desc' }
        })

        // Serialize for JSON
        const serialized = applications.map((a: ApplicationRecord) => ({
            ...a,
            createdAt: a.createdAt.toISOString()
        }))

        return NextResponse.json(serialized)
    } catch (error: unknown) {
        console.error('Failed to fetch applications:', error)
        return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 })
    }
}

// PATCH - Update application status
export async function PATCH(request: NextRequest) {
    try {
        const { id, status } = await request.json()

        await prisma.jobApplication.update({
            where: { id },
            data: { status }
        })

        return NextResponse.json({ success: true })
    } catch (error: unknown) {
        console.error('Failed to update application:', error)
        return NextResponse.json({ error: 'Failed to update application' }, { status: 500 })
    }
}

// DELETE - Delete applications
export async function DELETE(request: NextRequest) {
    try {
        const { ids } = await request.json()

        await prisma.jobApplication.deleteMany({
            where: {
                id: { in: ids }
            }
        })

        return NextResponse.json({ success: true })
    } catch (error: unknown) {
        console.error('Failed to delete applications:', error)
        return NextResponse.json({ error: 'Failed to delete applications' }, { status: 500 })
    }
}
