
'use client'
import React from 'react'
import LineChart from '@/components/charts/Linechart'
import StudyTime from '@/components/charts/HorizontalBarchart'

const Productivity = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-12 gap-12">

      <div className="w-full">
        <h2 className="font-bold text-3xl"> Productivity Report </h2>
        <p className="text-2xl-blue"> Analyze your weekly productivity, goal, achievement, and mental health trends. </p>
      </div>

      <div className="study-chart w-full">
        <h2 className="font-bold text-2xl py-8"> Weekly Productivity </h2>
        <StudyTime />
      </div>

      <div className="productivity-chart w-full"> 
        <LineChart />
      </div>
    </div>
  )
}

export default Productivity
