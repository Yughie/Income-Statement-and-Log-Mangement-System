import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts"; // Make sure to install the 'react-apexcharts' package

const MonthlyService = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [55555, 52215, 41333],
      labels: ["Engine Wash", "Wax (Hydro Wax)", "Others"],

      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {},
              value: {},
              total: {
                show: true,
                showAlways: false,
                label: "Total",
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 240,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };

    // Create the chart instance
    const chartInstance = new ApexCharts(chartRef.current, options);

    // Render the chart
    chartInstance.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chartInstance.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <>
      <h1 className="dark:text-gray-300 text-xl text-ddbackground font-poppins">
        Monthly Services
      </h1>
      <h1 className="dark:text-gray-500 text-md text-ddbackground font-poppins mb-4">
        Average total sales +99%
      </h1>

      <div id="chart" ref={chartRef}>
        {/* The chart will be rendered here */}
      </div>
    </>
  );
};

export default MonthlyService;
