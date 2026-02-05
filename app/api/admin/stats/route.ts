import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const [totalEnquiries, newEnquiries, totalApplications, pendingApplications] = await Promise.all([
            prisma.enquiry.count(),
            prisma.enquiry.count({ where: { status: 'new' } }),
            prisma.jobApplication.count(),
            prisma.jobApplication.count({ where: { status: 'pending' } })
        ])

        return NextResponse.json({
            totalEnquiries,
            newEnquiries,
            totalApplications,
            pendingApplications
        })
    } catch (error: unknown) {
        console.error('Failed to fetch stats:', error)
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
    }
}
