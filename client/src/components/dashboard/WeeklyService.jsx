import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

function WeeklyService() {
  const data = [
    {
      name: "Sun",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Mon",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Tue",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Wed",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Thu",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Fri",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Sat",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <div className="w-full mb-20 h-96 ">
      <div className="flex justify-between pb-4">
        <div>
          <h1 className="dark:text-gray-500 text-md text-ddbackground font-poppins">
            Weekly average service
          </h1>
          <h1 className="dark:text-gray-300 text-xl text-ddbackground font-poppins">
            P99,999
          </h1>
        </div>
        <div>
          <h1 className="dark:text-gray-500 text-md text-ddbackground font-poppins">
            Last 7 days
          </h1>
          <h1 className="dark:text-gray-300 text-xl text-ddbackground font-poppins">
            P99,999
          </h1>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#0085FF" />
          <Bar dataKey="uv" stackId="a" fill="#963FEE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyService;
