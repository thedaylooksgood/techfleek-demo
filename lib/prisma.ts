import 'dotenv/config'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

// Use require to avoid TypeScript import issues with Prisma v7
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client')

// Validate DATABASE_URL exists
// Validate DATABASE_URL exists, use fallback for build time
const databaseUrl = process.env.DATABASE_URL || "mysql://build:build@localhost:3306/build"

if (!process.env.DATABASE_URL) {
    console.warn('⚠️ DATABASE_URL environment variable is not set! Using fallback for build.')
}

// Parse DATABASE_URL to extract connection details
// Parse DATABASE_URL to extract connection details using URL object
const parseDbUrl = (urlStr: string) => {
    if (!urlStr) {
        throw new Error('DATABASE_URL is not defined. Please set it in your .env.local file.')
    }

    try {
        const url = new URL(urlStr)

        return {
            user: url.username,
            password: url.password,
            host: url.hostname,
            port: parseInt(url.port) || 3306,
            database: url.pathname.split('/')[1]
        }
    } catch (error) {
        throw new Error(
            `Invalid DATABASE_URL format: ${urlStr}. Expected format: mysql://username:password@hostname:port/database_name`
        )
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
