import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { v4 as uuidv4 } from 'uuid'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
    console.log('🔵 API Route called: /api/jobs/apply')

    try {
        const formData = await request.formData()

        // Extract fields
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string
        const role = formData.get('role') as string
        const resume = formData.get('resume') as File

        // Validate required fields
        if (!name || !phone || !role) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        let resumeUrl: string | null = null
        let resumeFilename: string | null = null

        // Process resume file if provided
        if (resume && resume instanceof File && resume.size > 0) {
            // Validate file type
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ]

            if (!allowedTypes.includes(resume.type)) {
                return NextResponse.json(
                    { error: 'Only PDF and Word documents are allowed' },
                    { status: 400 }
                )
            }

            // Validate file size (5MB max)
            if (resume.size > 5 * 1024 * 1024) {
                return NextResponse.json(
                    { error: 'File size must be less than 5MB' },
                    { status: 400 }
                )
            }

            // Save file locally
            const fileExtension = resume.name.split('.').pop() || 'pdf'
            const fileName = `${uuidv4()}.${fileExtension}`

            // Create uploads directory if it doesn't exist
            const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'resumes')
            await mkdir(uploadsDir, { recursive: true })

            // Write file to disk
            const bytes = await resume.arrayBuffer()
            const buffer = Buffer.from(bytes)
            const filePath = path.join(uploadsDir, fileName)
            await writeFile(filePath, buffer)

            resumeUrl = `/uploads/resumes/${fileName}`
            resumeFilename = resume.name
            console.log('✅ Resume saved locally:', resumeUrl)
        }

        // Save to MySQL database using Prisma
        console.log('💾 Saving application to MySQL database...')

        const dbData = await prisma.jobApplication.create({
            data: {
                name,
                email: email || null,
                phone,
                role,
                resumeUrl,
                resumeFilename,
                status: 'pending'
            }
        })

        console.log('✅ Application saved to MySQL database. ID:', dbData.id)

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully!',
            applicationId: dbData.id,
            reference: `APP-${dbData.id.substring(0, 8).toUpperCase()}`
        }, { status: 201 })

    } catch (error: any) {
        console.error('🔥 Error:', error)
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        )
    }
}

// GET method to verify API is working
export async function GET() {
    return NextResponse.json({
        status: 'API is running',
        timestamp: new Date().toISOString()
    })
}
