import React, { useState, useEffect } from "react";
import CurrentDate from "../CurrentDate";
import axios from "axios";


function DailyFinancialLog({ onGoBackClick }) {
  const [lessReturn, setLessReturn] = useState(0);
  const [lessDiscount, setLessDiscount] = useState(0);
  const [materials, setMaterials] = useState(0);
  const [labor, setLabor] = useState(0);
  const [overhead, setOverhead] = useState(0);
  const [wages, setWages] = useState(0);
  const [repair, setRepair] = useState(0);
  const [deprecation, setDepreciation] = useState(0);
  const [interest, setInterest] = useState(0);
  const [otherExp, setOtherExp] = useState(0);
  const [otherIncome, setOtherInc] = useState(0);
  const [interestIncome, setInterestIncome] = useState(0);
  const [taxExp, setTaxExp] = useState(0);

  // for getting sales of the day
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


  // for getting normal hour wage
  const [normalWage, setNormalWage] = useState(0);

  useEffect(() => {
    const fetchNormalWage = async () => {
      try {
        const response = await fetch("http://localhost:8081/customers/totalNormalWage");
        const data = await response.json();

        const normalWageValue = data.totalNormalWage;
        setNormalWage(normalWageValue);
      } catch (error) {
        console.error("Error fetching normal wage:", error);
      }
    };

    fetchNormalWage();
  }, []);

  // for getting overtime hour wage
  const [overtimeWage, setOvertimeWage] = useState(0);

  useEffect(() => {
    const fetchOvertimeWage = async () => {
      try {
        const response = await fetch("http://localhost:8081/customers/totalOvertimeWage");
        const data = await response.json();

        const overtimeWageValue = data.totalOvertimeWage;
        setOvertimeWage(overtimeWageValue);
      } catch (error) {
        console.error("Error fetching overtime wage:", error);
      }
    };

    fetchOvertimeWage();
  }, []);

  // handle totals 
  const netSales = totalSales - lessReturn - lessDiscount;
  const totalCostOfSrvcsProvided = materials + labor + overhead;
  const grossPrft = netSales - totalCostOfSrvcsProvided;
  const totalOperatingExp = wages + repair + deprecation + interest + otherExp;
  const operatingPrft = grossPrft - totalOperatingExp;
  const prftBeforeTaxes = operatingPrft + otherIncome + interestIncome;
  const netProfit = (netSales + otherIncome + interestIncome) - totalCostOfSrvcsProvided - totalOperatingExp - taxExp;
  const totalWage = normalWage + overtimeWage;

  // function to load data form datbase to the placeholders and values
  const [formsData, setFormsData] = useState({
    sales: '',
    return_amount: '',
    discount: '',
    net_sales: '',
    materials: '',
    labor: '',
    overhead: '',
    total_cost_of_srvcs_provided: '',
    gross_profit: '',
    repairs_maintenance: '',
    depreciation: '',
    interest: '',
    other_expenses: '',
    total_operating_exp: '',
    operating_profit: '',
    other_income: '',
    interest_income: '',
    profit_before_taxes: '',
    tax_expense: '',
    net_profit: ''
  });

  useEffect(() => {
    const fetchFormsData = async () => {
      try {
        const response = await fetch("http://localhost:8081/dailyfinanciallog/forms-data");
        const data = await response.json();

        // Check if any property in the data object is defined or not
        const hasData = Object.values(data).some(value => value !== undefined);

        if (!hasData) {
          // If none of the properties are defined, set all placeholders to "0"
          setFormsData({
            sales: '0',
            return_amount: '0',
            discount: '0',
            net_sales: '0',
            materials: '0',
            labor: '0',
            overhead: '0',
            total_cost_of_srvcs_provided: '0',
            gross_profit: '0',
            repairs_maintenance: '0',
            depreciation: '0',
            interest: '0',
            other_expenses: '0',
            total_operating_exp: '0',
            operating_profit: '0',
            other_income: '0',
            interest_income: '0',
            profit_before_taxes: '0',
            tax_expense: '0',
            net_profit: '0'
          });
        } else {
          setFormsData(data);
        }
      } catch (error) {
        console.error('Error fetching forms data:', error);
      }
    };

    fetchFormsData();
  }, []);


  // function to handle editing
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleLessReturnChange = (e) => {
    const newLessReturn = parseFloat(e.target.value) || formsData.return_amount;
    console.log("Default value:", formsData.return_amount);
    setLessReturn(newLessReturn);
  };

  const handleLessDiscountChange = (e) => {
    const newLessDiscount = parseFloat(e.target.value);
    setLessDiscount(newLessDiscount);
  };

  const handleMaterialsChange = (e) => {
    const newMaterials = parseFloat(e.target.value);
    setMaterials(newMaterials);
  };

  const handleLaborChange = (e) => {
    const newLabor = parseFloat(e.target.value);
    setLabor(newLabor);
  };

  const handleOverheadChange = (e) => {
    const newOverhead = parseFloat(e.target.value);
    setOverhead(newOverhead);
  };

  const handleRepairChange = (e) => {
    const newRepair = parseFloat(e.target.value);
    setRepair(newRepair);
  };

  const handleDepreciationChange = (e) => {
    const newDepreciation = parseFloat(e.target.value);
    setDepreciation(newDepreciation);
  };

  const handleInterestChange = (e) => {
    const newInterest = parseFloat(e.target.value);
    setInterest(newInterest);
  };

  const handleOtherExpChange = (e) => {
    const newOtherExp = parseFloat(e.target.value);
    setOtherExp(newOtherExp);
  };

  const handleOtherIncChange = (e) => {
    const newOtherInc = parseFloat(e.target.value);
    setOtherInc(newOtherInc);
  };

  const handleInterestIncomeChange = (e) => {
    const newInterestIncome = parseFloat(e.target.value);
    setInterestIncome(newInterestIncome);
  };

  const handleTaxExpChange = (e) => {
    const newTaxExp = parseFloat(e.target.value);
    setTaxExp(newTaxExp);
  };


  // Function to handle form submission
  const handleSubmit = async (e) => {
    setIsEditing(false);
    e.preventDefault();

    handleLessReturnChange(e);

    const rawCurrentDate = new Date();
    rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
    const currentDate = rawCurrentDate.toISOString().split("T")[0];

    const formData = {
      date: currentDate,
      sales: totalSales,
      return_amount: lessReturn,
      discount: lessDiscount,
      net_sales: netSales,
      materials: materials,
      labor: labor,
      overhead: overhead,
      total_cost_of_srvcs_provided: totalCostOfSrvcsProvided,
      gross_profit: grossPrft,
      wages: totalWage,
      repairs_maintenance: repair,
      depreciation: deprecation,
      interest: interest,
      other_expenses: otherExp,
      total_operating_exp: totalOperatingExp,
      operating_profit: operatingPrft,
      other_income: otherIncome,
      interest_income: interestIncome,
      profit_before_taxes: prftBeforeTaxes,
      tax_expense: taxExp,
      net_profit: netProfit
    };

    console.log("Form Data:", formData);

    axios
      .post("http://localhost:8081/income-statement", formData)
      .then((res) => console.log("Inserted Successfully", res.data))
      .catch((err) => console.log("ERROR:", err));
  };

  return (
    <>
      <div>
        <div className="flex justify-between  pb-4">
          <div>
            <h1 className="dark:text-gray-300 text-3xl text-ddbackground font-poppins">
              Daily Financial Log
            </h1>
            <h3 className="dark:text-gray-400 text-lg text-ddbackground font-poppins">
              <CurrentDate />
            </h3>
          </div>

        </div>
        <div className="w-full  bg-gray-200 dark:bg-dbackground rounded-lg mb-4 ">
          <form onSubmit={handleSubmit}>
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
                placeholder=""
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
                value={totalSales}
                className="text-right block w-full p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={totalSales}
                disabled={!isEditing}
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
                onChange={handleLessReturnChange}
                onBlur={handleLessReturnChange}
                defaultValue={formsData.return_amount}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.return_amount}
                disabled={!isEditing}
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
                onChange={handleLessDiscountChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.discount}
                disabled={!isEditing}
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
                value={netSales}
                className="text-right block w-full p-2  text-sm text-gray-900 borderbg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={netSales}
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
                onChange={handleMaterialsChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.materials}
                disabled={!isEditing}
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
                onChange={handleLaborChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.labor}
                disabled={!isEditing}
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
                onChange={handleOverheadChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.overhead}
                disabled={!isEditing}
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
                value={totalCostOfSrvcsProvided}
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={totalCostOfSrvcsProvided}
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
                value={grossPrft}
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={grossPrft}
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
                placeholder={totalWage}
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
                value={formsData.repairs_maintenance}
                onChange={handleRepairChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.repairs_maintenance}
                disabled={!isEditing}
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
                onChange={handleDepreciationChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.depreciation}
                disabled={!isEditing}
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
                onChange={handleInterestChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.interest}
                disabled={!isEditing}
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
                onChange={handleOtherExpChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.other_expenses}
                disabled={!isEditing}
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
                value={totalOperatingExp}
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 border-2 border-purpleGrape  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={totalOperatingExp}
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
                value={operatingPrft}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={operatingPrft}
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
                onChange={handleOtherIncChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.other_income}
                disabled={!isEditing}
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
                onChange={handleInterestIncomeChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.interest_income}
                disabled={!isEditing}
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
                value={prftBeforeTaxes}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={prftBeforeTaxes}
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
                onChange={handleTaxExpChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.tax_expense}
                disabled={!isEditing}
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
                value={netProfit}
                className="text-right rounded-b-lg block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-purpleGrape focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={netProfit}
                disabled
              />
            </div>

            <div className="flex items-center justify-center mb-4 w-full bg-ddbackground">
              {!isEditing && <button
                type="submit"
                className="w-32 text-center rounded bg-gray-50 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700"
                onClick={handleEdit}
              >
                Edit
              </button>}

              {isEditing && <button
                type="submit"
                className="w-32 text-center rounded bg-gray-50 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700"
                onClick={handleSubmit}
              >
                Submit
              </button>}

              <button
                type="button"
                onClick={onGoBackClick}
                className="inline-block text-center rounded bg-gray-50 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700"
              >
                Go Back to Menu
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DailyFinancialLog;