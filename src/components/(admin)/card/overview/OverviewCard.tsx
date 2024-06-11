import React from 'react'
import { OverviewCardProps } from '@/lib/definitions'

export default function OverviewCard({ count, label, icon: Icon, bgColor }: OverviewCardProps) {
  return (
    <div>
      <div className="relative overflow-hidden p-6 bg-white rounded-lg shadow my-5">
        <div className="flex justify-around items-start py-3">
          <Icon className="text-4xl text-primaryColor" />
          <div className='pl-3'>
            <div className="text-4xl font-medium" style={{ color: bgColor }}>{count}</div>
            <div className="text-sm text-primaryColor">{label}</div>
          </div>
        </div>
        <div className={`absolute top-0 left-52 md:left-24 lg:left-40 opacity-30 rotate-45 w-32 h-12 rounded-tr-lg`} style={{ backgroundColor: bgColor }} />
      </div>
    </div>
  )
}
