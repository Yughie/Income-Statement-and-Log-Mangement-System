import { useEffect, useState } from "react";
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
  const [logsData, setLogsData] = useState([]);
  const daysOfWeek = getDaysOfWeek(); // Move it here

  useEffect(() => {
    // Fetch data for all customers
    fetch("http://localhost:8081/dashboard/week")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched logsData:", data);
        setLogsData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function getDaysOfWeek() {
    const daysOfWeek = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - i - 1);
      const dayString = day.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'
      daysOfWeek.push(dayString);
    }
    return daysOfWeek.reverse();
  }

  const data = daysOfWeek.map((day) => {
    const dayLogs = logsData.filter((log) => {
      // Convert both dates to UTC format for accurate comparison
      const logDate = new Date(log.date).toISOString().split("T")[0];
      return logDate === day;
    });

    const totalServices = dayLogs.reduce((acc, log) => {
      const services = log.serviceNames
        .split(",")
        .map((service) => service.trim());
      services.forEach((service) => {
        acc[service] = (acc[service] || 0) + 1;
      });
      return acc;
    }, {});
    const dayString = new Date(day).toLocaleDateString("en-US", {
      weekday: "short",
    });

    const sampleData = {
      name: dayString,
      Carwash: totalServices["Carwash"] || 0,
      Motorwash: totalServices["Motorwash"] || 0,
      Wax: totalServices["Wax"] || 0,
      "Back 2 Zero": totalServices["Back 2 Zero"] || 0,
      Buffing: totalServices["Buffing"] || 0,
      "Engine Wash": totalServices["Engine Wash"] || 0,
      "Promo Package": totalServices["Promo Package"] || 0,
      "Interior Detailing": totalServices["Interior Detailing"] || 0,
      "Exterior Detailing": totalServices["Exterior Detailing"] || 0,
    };
    return sampleData;
  });

  return (
    <div className="w-full mb-20 h-96 ">
      <div className="flex justify-between pb-4">
        <div>
          <h1 className="dark:text-gray-300 text-xl text-ddbackground font-poppins">
            Weekly Service Statistics
          </h1>
          <h1 className="dark:text-gray-500 text-md text-ddbackground font-poppins mb-4">
            Hover to see total services on that day
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
          <Bar dataKey="Carwash" stackId="a" fill="#7EC4CF " />
          <Bar dataKey="Motorwash" stackId="a" fill="#9CADCE " />
          <Bar dataKey="Wax" stackId="a" fill="#FFCD91" />
          <Bar dataKey="Back 2 Zero" stackId="a" fill="#DF81A2" />
          <Bar dataKey="Buffing" stackId="a" fill="#7D68AD" />
          <Bar dataKey="Engine Wash" stackId="a" fill="#8797D4" />
          <Bar dataKey="Promo Package" stackId="a" fill="#52B2CF" />
          <Bar dataKey="Interior Detailing" stackId="a" fill="#AEC6CF " />
          <Bar dataKey="Exterior Detailing" stackId="a" fill="#FFC0CB " />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyService;
