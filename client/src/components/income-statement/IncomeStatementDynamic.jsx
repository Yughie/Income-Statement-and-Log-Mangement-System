function IncomeStatementDynamic() {
  return (
    <>
      <div>
        <div className="flex justify-between  pb-4">
          <div>
            <h1 className="dark:text-gray-300 text-3xl text-ddbackground font-poppins">
              Income Statement
            </h1>
            <h3 className="dark:text-gray-400 text-lg text-ddbackground font-poppins">
              for december 13-28,2024 (15 days)
            </h3>
          </div>{/**
          <div className="mb-4">
            <select
              id="days-filter"
              className="bg-gray-50  border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-purpleGrape focus:border-purpleGrape block w-full p-2.5 dark:bg-dbackground dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purpleGrape dark:focus:border-purpleGrape"
            >
              <option value="7-days" defaultValue={"7"}>
                Last 7 days
              </option>
              <option value="15-days">Last 15 days</option>
              <option value="30-days">Laast 30 days</option>
            </select>
          </div>
          */}
        </div>
        <div className="w-full  bg-gray-200 dark:bg-dbackground rounded-lg mb-4 ">
          <form>
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
                placeholder="" disabled
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="99999" 
                disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="less-return-bar"
                  className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                >
                  Less: Return
                </label>
              </div>
              <input
                type="text"
                id="less-return-bar"
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="less-discount-bar"
                  className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                >
                  Less: Discount
                </label>
              </div>
              <input
                type="text"
                id="less-discount-bar"
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
                placeholder=""
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
                placeholder="" disabled
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
                placeholder=""
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
                placeholder=""
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
                placeholder=""
                disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="goods-sold-bar"
                  className="text-purpleGrape  font-medium  start-1 bottom-0.3 px-0 py-2 "
                >
                  Total Cost of Goods Sold
                </label>
              </div>
              <input
                type="text"
                id="goods-sold-bar"
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
                placeholder=""
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
                placeholder="" disabled
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
                placeholder=""
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
                placeholder=""
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
                placeholder=""
                disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="interest-bar"
                  className="text-dbackground dark:text-white font-sm start-1 bottom-0.3 px-0 py-2 "
                >
                  Interest
                </label>
              </div>
              <input
                type="text"
                id="Interest-bar"
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
                placeholder=""
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
                placeholder=""
                disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="operating-profit-bar"
                  className="text-dbackground dark:text-white font-medium  start-1 bottom-0.3 px-0 py-2 "
                >
                  Operating Profit(Loss)
                </label>
              </div>
              <input
                type="text"
                id="operating-profit-bar"
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="other-income-bar"
                  className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                >
                  Add: Other Income
                </label>
              </div>
              <input
                type="text"
                id="other-income-bar"
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
                placeholder=""
                disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="before-taxes-bar"
                  className="text-dbackground dark:text-white font-medium  start-1 bottom-0.3 px-0 py-2 "
                >
                  Profit (Loss) Before Taxes
                </label>
              </div>
              <input
                type="text"
                id="before-taxes-bar"
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="tax-expense-bar"
                  className="text-dbackground dark:text-white font-sm  start-1 bottom-0.3 px-0 py-2 "
                >
                  Less: Tax Expense
                </label>
              </div>
              <input
                type="text"
                id="tax-expense-bar"
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                disabled
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <label
                  htmlFor="net-profit-bar"
                  className="text-white font-medium  start-1 bottom-0.3 px-0 py-2 "
                >
                  Net Profit (Loss)
                </label>
              </div>
              <input
                type="text"
                id="net-profit-bar"
                className="text-right rounded-b-lg block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-purpleGrape focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
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
