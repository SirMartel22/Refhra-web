
'use client'
import React from 'react'
import LineChart from '@/components/charts/Linechart'
import StudyTime from '@/components/charts/HorizontalBarchart'

const Productivity = () => {
  return (
    <div className="flex flex-col justify-center items-center px-12 py-12 gap-12">

      <StudyTime />
      <LineChart />
    </div>
  )
}

export default Productivity
