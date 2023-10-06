'use client'

import { useMemo, useState } from "react"
import { useFunnelStore } from "../lib/store"
import FunnelComponent from "../components/Funnel";
import { Funnel as FunnelType } from "../lib/types";
import ErrorComponent from "../components/Error";
import FileLoader from "../components/FileLoader";

export default function Funnel() {
    const [error, setError] = useState<any>(undefined)
    const funnel = useFunnelStore((state) => state.funnel)
    const stringifyFunnel = useMemo(() => JSON.stringify(funnel, null, 2), [funnel])
    const setFunnel = useFunnelStore((state) => state.setFunnel)

    const handleFunnelChange = (newFunnel: string) => {
        try {
            const parsedFunnel = JSON.parse(newFunnel)

            setFunnel(parsedFunnel)
            setError(undefined)
        } catch (error) {
            setError(error)
        }
    }

    const handleFileChange = (newFunnel: FunnelType) => {
        setFunnel(newFunnel)
    }


    return (
        <main className="min-h-screen flex flex-row items-center justify-between">
            <div className="flex-1 min-h-screen hidden sm:block">
                <textarea
                    id="message"
                    className="font-mono block p-2.5 w-full min-h-screen text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Test here your Json..."
                    onChange={(e) => handleFunnelChange(e.target.value)}
                    value={stringifyFunnel}
                    rows={10}
                />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center min-h-screen">
                <div className="min-w-screen block sm:hidden">
                    <FileLoader onFileChange={handleFileChange} />
                </div>
                {!error || funnel !== undefined ? <FunnelComponent data={funnel} /> : <ErrorComponent />}
            </div>
        </main>
    )
}