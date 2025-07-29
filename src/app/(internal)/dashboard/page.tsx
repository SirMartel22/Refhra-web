'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'
import { FileSpreadsheet } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
  // <BookOpen />

export default function Dashboard() {

  const setTime = (hour: number, minute: number = 0) => {
    const time = new Date();
    time.setHours(hour, minute, 0)
    const formattedTime = time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' })
    return formattedTime
  }
  
  //Define the individual object type
  type TodaysFocus = {
    id: number;
    title: string;
    time: string;
    percentage: string
  }

  //define the array type to hold all the objects
  type TodaysFocusArray = TodaysFocus[]

  const todaysFocus: TodaysFocusArray = [
    {
      id: 1,
      title: "Calculus II",
      time: `${setTime(9)} - ${setTime(10)}`,
      percentage: `${((100 / 4) * 3)} %`,
    },

    {
      id: 2,
      title: "Calculus II",
      time: `${setTime(10)} - ${setTime(11)}`,
      percentage:`${((100/4) * 2)} %`,

    },

    {
      id: 3,
      title: "Calculus II",
      time: `${setTime(11)} - ${setTime(12)}`,
      percentage:`${((100/4) * 1)} %`,

    }
  ]

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

      <div className="todays-focus">
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
      <div className="upcoming-dealines">
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

      {/* Study Progress Section */}

      <div className="study-progress">
        <div className="progress-title">
            <h3> Study Progress </h3>
        </div>
        <div className="course-title">
          {todaysFocus.map((item, i) => (
            <div key={i} id={item.id}>
              <h2>{item.title}</h2>
              <Progress value={item.percentage} />
              <p>{item.percentage}</p>
            </div>
            ))}
        </div>
      </div>
    </div >
  )
}