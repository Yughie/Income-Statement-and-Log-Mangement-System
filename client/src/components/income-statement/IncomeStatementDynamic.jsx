import { useState, useEffect } from 'react';
import CurrentDateTime from '../CurrentDateTime';
import CurrentMonth from '../CurrentMonth';
import axios from 'axios';

function IncomeStatementDynamic() {
  const [currentMonthIncomeStatement, setCurrentMonthIncomeStatement] = useState({});

  useEffect(() => {
    const fetchCurrentMonthIncomeStatement = async () => {
      try {
        const response = await axios.get('http://localhost:8081/dailyfinanciallog/current-month-forms-data');

        setCurrentMonthIncomeStatement(response.data);
      } catch (error) {
        console.error('Error fetching monthly income statement:', error);
      }
    };

    fetchCurrentMonthIncomeStatement();
  }, []); // Empty dependency array to run the effect only once when the component mounts
  return (
    <>
      <div>
        <div className="flex justify-between  pb-4">
          <div>
            <div className="w-full dark:text-gray-300 text-2xl text-ddbackground font-poppins">
              <CurrentMonth />
            </div>
            <div className="w-full dark:text-gray-400 text-lg text-ddbackground font-poppins" >
              <CurrentDateTime />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-dbackground rounded-lg mb-4 ">
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
                className="text-right rounded-t-lg block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableHeader dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_sales}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_return_amount}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_discount}
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
                className="text-right block w-full p-2  text-sm text-gray-900 borderbg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_net_sales}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableHeader dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_materials}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_labor}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_overhead}
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
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_cost_of_services_provided}
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
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG border-2 border-purpleGrape  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_gross_profit}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableHeader dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_wages}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_repairs_maintenance}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_depreciation}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_interest}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_other_expenses}
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
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG border-2 border-purpleGrape  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_operating_profit}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableHeader dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_operating_profit}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_other_income}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_interest_income}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableHeader dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_profit_before_taxes}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={currentMonthIncomeStatement.total_tax_expense}
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
                placeholder={currentMonthIncomeStatement.total_net_profit}
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default IncomeStatementDynamic;
