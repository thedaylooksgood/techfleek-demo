import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const newCount = await prisma.enquiry.count({ where: { status: 'new' } })
        return NextResponse.json({ count: newCount })
    } catch (error: unknown) {
        console.error('Failed to fetch notifications:', error)
        return NextResponse.json({ count: 0 })
    }
}
