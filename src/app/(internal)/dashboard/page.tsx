'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'
import { FileSpreadsheet } from 'lucide-react'
  // <BookOpen />

export default function Dashboard() {

  const setTime = (hour: number, minute: number = 0) => {
    const time = new Date();
    time.setHours(hour, minute, 0)
    const formattedTime = time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' })
    return formattedTime
}

  const todaysFocus = [
    {
      id: 1,
      title: "Calculus II",
      time: `${setTime(9)} - ${setTime(10)}`,
    },

    {
      id: 2,
      title: "Calculus II",
      time: `${setTime(10)} - ${setTime(11)}`,
    },

    {
      id: 3,
      title: "Calculus II",
      time: `${setTime(11)} - ${setTime(12)}`,
    }
  ];

  console.log(todaysFocus[0].time)



  const upComingDeadlines = [
    {
      id: 1,
      title: "Calculus II Assignment",
      elapseTime: "Due: Tomorrow"
    },

     {
      id: 2,
      title: "Linear Algebra Project",
      elapseTime: "Due: Next Week"
    },
     
    {
      id: 3,
      title: "Linear Algebra Project",
      elapseTime: "Due: Next Week"
    }
     
  ]

  return (

    <div>
        <div>
          <h1>Welcome Back, Sarah</h1>
        </div>

      {/* The days Focus section */}

      <div>
        <h3>{"Today's Focus"}</h3>
        {todaysFocus.map((item, i) => (
          <div key={i} id={item.id}> 
            <BookOpen />
            <div>
              <h4>{item.title}</h4>
              <p>{item.time}</p>
            </div>
          </div>

        ))}
        
      </div>

      {/* Upcoming Deadlines Section */}
      <div>

        <div>
          <h3>Upcoming Deadlines</h3>
        </div>

        <div>
          {upComingDeadlines.map((item, i) => (
            <div key={i} id={item.id}> 
              <FileSpreadsheet />
              <div> 
                <h4>{item.title}</h4>
                <p>{item.elapseTime}</p>
              </div>

           </div>
         ))}
        </div>

      </div>

    </div >
  )
}