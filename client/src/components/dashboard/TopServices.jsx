import React from "react";
import ReactApexChart from "react-apexcharts";

class TopServices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [400, 430, 448, 470, 540],
        },
      ],

      options: {
        chart: {
          type: "bar",
          height: 350,
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#ffffff"], //Set color of value within the bar
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#696969 ", // Set the color for all categories
            },
          },
        },
        xaxis: {
          categories: [
            "Engine Wash ",
            "Wax (Hydro Wax)",
            "Hydrophobic Waxing",
            "Cleaning Sanitizing",
            "Back 2 Zero (Antibac)",
          ],
          labels: {
            style: {
              colors: "#696969 ", // Set the color for all categories
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <>
        <div className="flex justify-between pb-4">
          <div>
            <h1 className="dark:text-gray-300 text-xl text-ddbackground font-poppins">
              Top Services
            </h1>
          </div>
          <div>
            <h1 className="dark:text-gray-500 text-md text-ddbackground font-poppins">
              Last 7 days
            </h1>
          </div>
        </div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
      </>
    );
  }
}

export default TopServices;
