
'use client'
import React from 'react'
import { LineChart, YAxis, Tooltip, Line, CartesianGrid, XAxis, Legend, ResponsiveContainer } from 'recharts';


type Data = {
  name: string;
  uv: number;
  pv: number;
  amt: number;

}

type LineData = Data[]

const data: LineData= [
  {
    name: "Mon",
    uv: 400,
    pv: 2400,
    amt: 2400, 
  },

  {
    name: "Tue",
    uv: 300,
    pv: 2800,
    amt: 2800,
  },

  {
    name: "Wed",
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
   
  {
    name: "Thur",
    uv: 200,
    pv: 2500,
    amt: 2500,
  },
    
  {
    name: "Fri",
    uv: 500,
    pv: 2500,
    amt: 2500,
  },
     
  {
    name: "Sat",
    uv: 300,
    pv: 2400,
    amt: 2400,
  },

  {
    name: "Sun",
    uv: 500,
    pv: 2800,
    amt: 2800,
  }
]

const Productivity = () => {
  return (
    <div className="w-[100%] h-96 p-4">
      <h2 className="text-xl font-bold mb-4">Weekly Productivity Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: '#666'}}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: '#666'}}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '4px'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 6, stroke: '#8884d8, strokeWidth: 2'}}
            dot={{ fill: '#8884d8', strokeWidth: 2, r: 4}}
          
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ fill: '#82ca9d', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#82ca9d', strokeWidth: 2 }}
          />

          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Productivity
