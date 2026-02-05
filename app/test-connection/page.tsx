'use client'

import { useEffect, useState } from 'react'

export default function TestConnection() {
    const [status, setStatus] = useState('Testing...')
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        testConnection()
    }, [])

    const testConnection = async () => {
        try {
            // Test API endpoint (which connects to MySQL)
            const apiResponse = await fetch('/api/jobs/apply', { method: 'GET' })

            let apiData
            const contentType = apiResponse.headers.get("content-type")
            if (contentType && contentType.indexOf("application/json") !== -1) {
                apiData = await apiResponse.json()
            } else {
                const text = await apiResponse.text()
                console.error("API returned non-JSON:", text)
                apiData = { status: `Error: ${apiResponse.status}`, error: text.slice(0, 100) }
            }

            if (apiData.status === 'API is running') {
                setStatus('✅ Connected to MySQL!')
            } else {
                setStatus('⚠️ API responded but check details')
            }

            setData({
                mysql: 'Connected',
                api: apiData.status,
                timestamp: new Date().toISOString()
            })

        } catch (error: any) {
            setStatus(`❌ Error: ${error.message}`)
        }
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">MySQL Connection Test</h1>
            <div className="p-4 bg-gray-100 rounded">
                <p className="mb-2"><strong>Status:</strong> {status}</p>
                {data && (
                    <pre className="mt-4 p-4 bg-white rounded">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    )
}
