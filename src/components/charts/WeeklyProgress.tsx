// import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Progress } from "@/components/ui/progress"

type progressData = {
    id: number;
    title: string;
    percentage: number;
    // length: number;
}

type Progress = progressData[];

const progress: Progress = [
    {
        id: 1,
        title: "Reading",
        percentage: 80,
    },

    {
        id: 1,
        title: "Reading",
        percentage: 80,
    },

    {
        id: 1,
        title: "Reading",
        percentage: 80,
    },

    {
        id: 1,
        title: "Reading",
        percentage: 80,
    },
] 

const headerPercentage = () => {
    progress.map((item) => {
       console.log(item)
   })
}
headerPercentage();

export const WeeklyProgress = () => {
    return (
        <div className="flex flex-col justify-center py-6">
            <div className="goal-title">
                <h3 className="font-bold py-2 text-3xl"> Goal Achievements </h3>
            </div>
            <div className=" border rounded-md p-6">
                <h3 className="font-bold">Goals Completed</h3>
                <h2 className="font-bold py-2 text-5xl">80%</h2>
                <p className="pb-4">This Week</p>
                <div className="flex items-center justify-center gap-4">
                    <h4>Reading</h4>
                    <Progress value={progress[0].percentage} className="" />
                </div>
            </div>
        </div>
    )
}

export default WeeklyProgress;