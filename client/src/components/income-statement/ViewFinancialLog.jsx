import React, { useState, useEffect } from "react";
import { Datepicker } from "flowbite-react";

function ViewFinancialLog({ onGoBackClick }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };


    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center dark:ddbackground rounded-lg mb-4 border-2 border-dashed border-gray-700 rounded">
                <div className="w-3/4 flex flex-col items-center justify-center bg-ddbackground">
                    <p className="dark:text-gray-100 text-sm text-center font-poppins mb-5">
                        Select the date of the financial log you want to view.
                    </p>
                    <Datepicker />
                </div>
                <div className="flex items-center justify-center mb-4 w-full bg-ddbackground">
                    <button
                        type="button"
                        onClick={onGoBackClick}
                        className="inline-block text-center rounded bg-gray-50 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700"
                    >
                        Back to Menu
                    </button>
                    <button
                        type="button"
                        className="inline-block text-center rounded bg-gray-50 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700"
                    >
                        View
                    </button>
                </div>
            </div>

        </>
    )
}

export default ViewFinancialLog;