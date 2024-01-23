import React, { useState, useEffect } from "react";
import { Datepicker } from "flowbite-react";
import axios from "axios";
'use client';

function ViewFinancialLog({ onGoBackClick }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [financialLogData, setFinancialLogData] = useState({});
    const [error, setError] = useState(null);

    const formatDate = (date) => {
        const rawDate = new Date(date);
        rawDate.setUTCHours(rawDate.getUTCHours() + 8);
        return rawDate.toISOString().split("T")[0];
    };

    const handleDateSelect = (event) => {
        console.log('Complete Event Object:', event);
        const selectedDate = event; // Extract the selected date from the event
        console.log('Selected Date (before formatting):', selectedDate);
        setSelectedDate(formatDate(selectedDate)); // Format the selected date
        console.log('Selected Date (after formatting):', selectedDate);

    };

    useEffect(() => {
        const fetchFormsData = async () => {
            try {
                if (selectedDate) {
                    const response = await fetch(`http://localhost:8081/dailyfinanciallog/selected-forms-data?selectedDate=${selectedDate}`);
                    const data = await response.json();

                    console.log('Fetching data for date:', selectedDate);
                    console.log('Data from server:', data);
                    setFinancialLogData(data);  // Corrected from setFormsData
                }
            } catch (error) {
                console.error('Error fetching forms data:', error);
            }
        };

        fetchFormsData();
    }, [selectedDate]);

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center dark:ddbackground rounded-lg pt-1">
                <div className="w-full flex flex-col items-center justify-center bg-ddbackground">
                    <p className="dark:text-gray-100 text-sm text-center font-poppins mb-1">
                        Select the date of the financial log you want to view.
                    </p>
                    <div className="w-full flex items-center justify-center pb-2">
                        <Datepicker
                            className="mr-2"
                            title="Financial Log Date"
                            onSelectedDateChanged={handleDateSelect}
                        />
                        <button
                            type="button"
                            onClick={onGoBackClick}
                            className="inline-block text-center rounded bg-gray-50 ml-2 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700"
                        >
                            Back to Menu
                        </button>
                    </div>

                </div>
                <div className="flex items-center justify-center mb-4 w-full bg-ddbackground">
                    {/* Display the fetched financial log data */}
                    {Object.keys(financialLogData).length > 0 && (
                        <>
                            <form className="w-full">
                                <div className="relative ">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="revenue-bar"
                                            className="text-dbackground dark:text-white font-medium   start-1 bottom-0.3 py-2 "
                                        >
                                            Revenue
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="revenue-bar"
                                        className="text-right rounded-t-lg block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="sales-bar"
                                            className="text-dbackground dark:text-white font-sm start-1 bottom-0.3  py-2 "
                                        >
                                            Sales
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="sales-bar"
                                        className="text-right block w-full p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.sales}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="less-return-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Return
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="less-return-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.return_amount}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="less-discount-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Discount
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="less-discount-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.discount}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="net-sales-bar"
                                            className="text-purpleGrape  font-bold  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Net Sales
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="net-sales-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 borderbg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.net_sales}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="cost-service-bar"
                                            className="text-dbackground dark:text-white font-medium  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Cost of Services
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="cost-service-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="materials-bar"
                                            className="text-dbackground dark:text-white font-sm start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Materials
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="materials-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.materials}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="labor-bar"
                                            className="text-dbackground dark:text-white font-sm start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Labor
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="labor-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.labor}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="overhead-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Overhead
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="overhead-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.overhead}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="goods-sold-bar"
                                            className="text-purpleGrape  font-medium  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Total Cost of Services Provided
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="goods-sold-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.total_cost_of_srvcs_provided}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="gross-profit-bar"
                                            className="text-purpleGrape  font-medium  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Gross Profit
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="gross-profit-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.gross_profit}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="operating-expenses-bar"
                                            className="text-dbackground dark:text-white font-medium  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Operating Expenses
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="operating-expenses-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="wages-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Wages
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="wages-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.wages}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="repair-maintenance-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Repairs & Maintenance
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="repair-maintenance-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.repairs_maintenance}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="depreciation-bar"
                                            className="text-dbackground dark:text-white font-sm start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Depreciation
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="depreciation-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.depreciation}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="other-expenses-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Interest
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="Interest-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.interest}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="other-expenses-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Other Expenses
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="other-expenses-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.other_expenses}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="total-operating-bar"
                                            className="text-purpleGrape font-medium  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Total Operating Expenses
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="total-operating-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.total_operating_exp}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="operating-profit-bar"
                                            className="text-dbackground dark:text-white font-medium  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Operating Profit
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="operating-profit-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.operating_profit}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="other-income-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Other Income
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="other-income-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.other_income}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="interest-income-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Interest Income
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="interest-income-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.interest_income}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="before-taxes-bar"
                                            className="text-dbackground dark:text-white font-medium  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Profit Before Taxes
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="before-taxes-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.profit_before_taxes}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="tax-expense-bar"
                                            className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Tax Expense
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="tax-expense-bar"
                                        className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.tax_expense}
                                        disabled
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <label
                                            htmlFor="net-profit-bar"
                                            className="text-white font-medium  start-1 bottom-0.3 px-0 py-2 "
                                        >
                                            Net Profit
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id="net-profit-bar"
                                        className="text-right rounded-b-lg block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-purpleGrape focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={financialLogData.net_profit}
                                        disabled
                                    />
                                </div>
                            </form>
                        </>
                    )}
                </div>

            </div >
        </>
    );
}

export default ViewFinancialLog;
