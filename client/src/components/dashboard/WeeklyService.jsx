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
  ResponsiveContainer,
} from "recharts";

function WeeklyService() {
  const [logsData, setLogsData] = useState([]);
  const daysOfWeek = getDaysOfWeek(); // Move it here

  useEffect(() => {
    console.log("Fetching data...");
    // Fetch data for all customers
    fetch("http://localhost:8081/dashboard/week")
      .then((response) => response.json())
      .then((data) => {
        const logsDataInClientTime = convertToClientTimeZone(data);
        console.log("Fetched logsData:", logsDataInClientTime);
        setLogsData(logsDataInClientTime);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function convertToClientTimeZone(logsData) {
    return logsData.map((log) => ({
      ...log,
      date: new Date(log.date).toLocaleString("en-US", {
        timeZone: "Asia/Manila", // Set the time zone to Philippine time
      }),
    }));
  }

  function getDaysOfWeek() {
    const daysOfWeek = [];
    const today = new Date();
    today.setHours(0 + 8, 0, 0, 0); // Set time to midnight in local time
    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      const dayString = day.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'
      daysOfWeek.push(dayString);
    }
    return daysOfWeek.reverse();
  }

  const data = daysOfWeek.map((day) => {
    const dayLogs = logsData.filter((log) => {
      const logDate = new Date(log.date).toISOString().split("T")[0];
      const nextDay = new Date(day);
      nextDay.setDate(nextDay.getDate() - 1); // Add one day to the current day
      const nextDayString = nextDay.toISOString().split("T")[0];
      return logDate === nextDayString;
    });

    const totalServices = dayLogs.reduce((acc, log) => {
      const services = log.serviceNames
        .split(",")
        .map((service) => service.trim());
      services.forEach((service) => {
        // Initialize the service count for each day
        acc[day] = acc[day] || {};
        acc[day][service] = (acc[day][service] || 0) + 1;
      });
      return acc;
    }, {});

    const dayString = new Date(day).toLocaleDateString("en-US", {
      timeZone: "Asia/Manila",
      weekday: "short",
      day: "numeric",
    });
    const sampleData = {
      name: dayString,
      ...totalServices[day], // Spread the services for the specific day
    };

    console.log("Total Services for", day, totalServices[day]);
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
