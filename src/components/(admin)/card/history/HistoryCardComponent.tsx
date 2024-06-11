import React from 'react'
import { HistoryCardProps } from '@/lib/definitions'

export default function HistoryCardComponent({ title, count, bgColor }: HistoryCardProps) {
    return (
        <div>
            <div className="relative w-72 md:w-44 lg:w-72 overflow-hidden py-10 rounded-lg shadow my-5" style={{ backgroundColor: bgColor }}>
                <div className="text-h20 text-center font-medium">{title}</div>
                <div className="text-h22 text-center text-primaryColor">{count}</div>
            </div>
        </div>
    )
}
