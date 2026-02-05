import 'dotenv/config'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

// Use require to avoid TypeScript import issues with Prisma v7
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client')

// Validate DATABASE_URL exists
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
    console.error('❌ DATABASE_URL environment variable is not set!')
    console.error('Please create a .env.local file with:')
    console.error('DATABASE_URL="mysql://username:password@hostname:port/database_name"')
}

// Parse DATABASE_URL to extract connection details
const parseDbUrl = (url: string) => {
    if (!url) {
        throw new Error('DATABASE_URL is not defined. Please set it in your .env.local file.')
    }
    const regex = /mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/
    const match = url.match(regex)
    if (!match) {
        throw new Error(
            'Invalid DATABASE_URL format. Expected: mysql://username:password@hostname:port/database_name'
        )
    }
    return {
        user: match[1],
        password: match[2],
        host: match[3],
        port: parseInt(match[4]),
        database: match[5]
    }
}

const dbConfig = parseDbUrl(databaseUrl || '')

// Create MariaDB adapter for MySQL with optimized settings for dev environment
const adapter = new PrismaMariaDb({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    connectionLimit: 3,           // Reduced for dev to prevent exhaustion
    acquireTimeout: 10000,        // Reduced to 10 seconds for faster feedback
    connectTimeout: 5000,         // 5 second connection timeout
    idleTimeout: 30000,           // 30 second idle timeout - release faster
    waitForConnections: true,     // Wait for available connection instead of erroring immediately
})

const prismaClientSingleton = () => {
    const client = new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === 'development'
            ? ['error', 'warn']
            : ['error']
    })

    return client
}

declare global {
    // eslint-disable-next-line no-var
    var prisma: ReturnType<typeof prismaClientSingleton> | undefined
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

// Graceful shutdown handling
if (typeof process !== 'undefined') {
    process.on('beforeExit', async () => {
        await prisma.$disconnect()
    })
}
