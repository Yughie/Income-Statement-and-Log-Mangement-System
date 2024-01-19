import React, { useState, useEffect } from "react";

const SalesOfTheDay = () => {
    const [totalSales, setTotalSales] = useState(0);

    useEffect(() => {
        const fetchTotalSales = async () => {
        try {
            const response = await fetch("http://localhost:8081/customers/total");
            const data = await response.json();

            // Calculate the sum of the "total" column
            const sum = data.total.reduce((accumulator, totalValue) => accumulator + totalValue, 0);

        setTotalSales(sum);
        } catch (error) {
            console.error("Error fetching total sales:", error);
        }
    };

    fetchTotalSales();

    }, []);  

    return (
        <input
            type="text"
            id="sales-bar"
            value={totalSales}
            className="text-right block w-full p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={totalSales}
            disabled
        />
    );
};

export default SalesOfTheDay;
