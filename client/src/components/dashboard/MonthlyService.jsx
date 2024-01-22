import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts"; // Make sure to install the 'react-apexcharts' package

const MonthlyService = () => {
  const chartRef = useRef(null);
  const [logsData, setLogsData] = useState(null); // Set initial state to null
  const [serviceNames, setServiceNames] = useState([]);
  const [loading, setLoading] = useState(true); // Introduce loading state

  const [carwash, setCarwash] = useState(0);
  const [motorwash, setMotorwash] = useState(0);
  const [tricyclePriv, setTricyclePriv] = useState(0);
  const [tricyclePub, setTricyclePub] = useState(0);
  const [wax, setWax] = useState(0);
  const [back2Zero, setBack2Zero] = useState(0);
  const [buffing, setBuffing] = useState(0);
  const [engineWash, setEngineWash] = useState(0);
  const [promoPackage, setPromoPackage] = useState(0);
  const [interiorDetailing, setInteriorDetailing] = useState(0);
  const [exteriorDetailing, setExteriorDetailing] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const logsResponse = await fetch(
          "http://localhost:8081/dashboard/month"
        );
        const logsData = await logsResponse.json();
        setLogsData(logsData);

        const servicesResponse = await fetch("http://localhost:8081/services");
        const servicesData = await servicesResponse.json();
        const uniqueServiceNames = Array.from(
          new Set(servicesData.serviceNames)
        );
        setServiceNames(uniqueServiceNames.slice(0, 11));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (logsData && serviceNames.length > 0) {
      const calculateServiceSums = (serviceNameToCalculate) => {
        const servicePrices = {
          Carwash: {
            S: 120,
            M: 160,
            L: 180,
            XL: 200,
            XXL: 220,
          },
          Motorwash: {
            S: 120,
            M: 160,
            L: 180,
            XL: 200,
            XXL: 220,
          },
          "Tricycle (Private)": {
            S: 120,
            M: 120,
            L: 120,
            XL: 120,
            XXL: 120,
          },
          "Tricycle (Public)": {
            S: 120,
            M: 120,
            L: 120,
            XL: 120,
            XXL: 120,
          },
          Wax: {
            S: 300,
            M: 420,
            L: 440,
            XL: 500,
            XXL: 550,
          },
          "Back 2 Zero": {
            S: 400,
            M: 450,
            L: 500,
            XL: 500,
            XXL: 550,
          },
          Buffing: {
            S: 500,
            M: 620,
            L: 640,
            XL: 700,
            XXL: 750,
          },
          "Engine Wash": {
            S: 400,
            M: 400,
            L: 450,
            XL: 500,
            XXL: 500,
          },
          "Promo Package": {
            S: 1200,
            M: 1500,
            L: 1900,
            XL: 2200,
            XXL: 2400,
          },
          "Interior Detailing": {
            S: 5000,
            M: 5500,
            L: 5500,
            XL: 6000,
            XXL: 6000,
          },
          "Exterior Detailing": {
            S: 2500,
            M: 3000,
            L: 3500,
            XL: 5000,
            XXL: 5000,
          },
        };

        const newServiceSum = logsData.reduce((sum, log) => {
          const serviceList = log.serviceNames.split(",");
          const size = log.vehicleSizing;

          serviceList.forEach((serviceName) => {
            let serviceCost = 0;
            if (serviceName === serviceNameToCalculate) {
              const sizePrices = servicePrices[serviceName];
              if (sizePrices && sizePrices[size] !== undefined) {
                serviceCost = sizePrices[size];
              }
            }
            sum += serviceCost;
          });

          return sum;
        }, 0);

        console.log(`new${serviceNameToCalculate}:`, newServiceSum);
        return newServiceSum;
      };

      const carwashValue = calculateServiceSums("Carwash");
      setCarwash(carwashValue);

      const motorwashValue = calculateServiceSums("Motorwash");
      setMotorwash(motorwashValue);
      const triciclePrivValue = calculateServiceSums("Tricycle (Private)");
      setTricyclePriv(triciclePrivValue);
      const triciclePubValue = calculateServiceSums("Tricycle (Public)");
      setTricyclePub(triciclePubValue);
      const waxValue = calculateServiceSums("Wax");
      setWax(waxValue);
      const back2ZeroValue = calculateServiceSums("Back 2 Zero");
      setBack2Zero(back2ZeroValue);
      const buffingValue = calculateServiceSums("Buffing");
      setBuffing(buffingValue);
      const engineWashValue = calculateServiceSums("Engine Wash");
      setEngineWash(engineWashValue);
      const promoPackageValue = calculateServiceSums("Promo Package");
      setPromoPackage(promoPackageValue);
      const interiorDetailingValue = calculateServiceSums("Interior Detailing");
      setInteriorDetailing(interiorDetailingValue);
      const exteriorDetailingValue = calculateServiceSums("Exterior Detailing");
      setExteriorDetailing(exteriorDetailingValue);

      // Add calculations for other services as needed
    }
  }, [logsData, serviceNames]);

  useEffect(() => {
    if (!loading) {
      const options = {
        series: [
          carwash,
          motorwash,
          tricyclePriv,
          tricyclePub,
          wax,
          back2Zero,
          buffing,
          engineWash,
          promoPackage,
          interiorDetailing,
          exteriorDetailing,
        ], // Update series data based on logsData [213, 3423, 23, 5, 352, 34, 6, 76, 834, 76, 45]
        labels: serviceNames, // Update labels based on logsData

        chart: {
          type: "donut",
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
              background: "transparent",
              labels: {
                show: true,
                name: {},
                value: {
                  show: true,
                  fontSize: "10px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: "Total",
                  fontSize: "10px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 100,
                  color: "#373d3f",
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

      const chartInstance = new ApexCharts(chartRef.current, options);
      chartInstance.render();
      return () => {
        chartInstance.destroy();
      };
    }
  }, [loading, carwash]);

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
