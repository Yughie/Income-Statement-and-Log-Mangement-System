import React, { useState, useEffect } from "react";
import CurrentDate from "../CurrentDate";
import axios from "axios";

function DailyFinancialLog({ onGoBackClick }) {
  const [lessReturn, setLessReturn] = useState(null);
  const [lessDiscount, setLessDiscount] = useState(null);
  const [materials, setMaterials] = useState(null);
  const [labor, setLabor] = useState(null);
  const [overhead, setOverhead] = useState(null);
  const [wages, setWages] = useState(null);
  const [repair, setRepair] = useState(null);
  const [deprecation, setDepreciation] = useState(null);
  const [interest, setInterest] = useState(null);
  const [otherExp, setOtherExp] = useState(null);
  const [otherIncome, setOtherInc] = useState(null);
  const [interestIncome, setInterestIncome] = useState(null);
  const [taxExp, setTaxExp] = useState(null);

  // for getting sales of the day
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const response = await fetch("http://localhost:8081/customers/total");
        const data = await response.json();

        // Calculate the sum of the "total" column
        const sum = data.total.reduce(
          (accumulator, totalValue) => accumulator + totalValue,
          0
        );

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
        const response = await fetch(
          "http://localhost:8081/customers/totalNormalWage"
        );
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
        const response = await fetch(
          "http://localhost:8081/customers/totalOvertimeWage"
        );
        const data = await response.json();

        const overtimeWageValue = data.totalOvertimeWage;
        setOvertimeWage(overtimeWageValue);
      } catch (error) {
        console.error("Error fetching overtime wage:", error);
      }
    };

    fetchOvertimeWage();
  }, []);

  // function to load data form datbase to the placeholders and values
  const [formsData, setFormsData] = useState({});

  useEffect(() => {
    const fetchFormsData = async () => {
      console.log("Form component is mounting...", formsData);
      try {
        const response = await fetch(
          "http://localhost:8081/dailyfinanciallog/forms-data"
        );
        const data = await response.json();
        console.log("Data from server:", data);

        // Use the fetched data if available, otherwise use default values
        const updatedFormsData = Object.values(data).some(
          (value) => value === undefined || value === ""
        )
          ? defaultValues
          : data;

        setFormsData(updatedFormsData);
      } catch (error) {
        console.error("Error fetching forms data:", error);
      }
    };
    fetchFormsData();
  }, []);

  // function to handle editing
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleLessReturnChange = (e) => {
    const newReturn = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      return_amount: newReturn,
    }));
  };

  const handleLessDiscountChange = (e) => {
    const newLessDiscountChange = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      discount: newLessDiscountChange,
    }));
  };

  const handleMaterialsChange = (e) => {
    const newMaterials = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      materials: newMaterials,
    }));
  };

  const handleLaborChange = (e) => {
    const newLabor = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      labor: newLabor,
    }));
  };

  const handleOverheadChange = (e) => {
    const newOverhead = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      overhead: newOverhead,
    }));
  };

  const handleRepairChange = (e) => {
    const newRepair = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      repairs_maintenance: newRepair,
    }));
  };

  const handleDepreciationChange = (e) => {
    const newDepreciation = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      depreciation: newDepreciation,
    }));
  };

  const handleInterestChange = (e) => {
    const newInterest = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      interest: newInterest,
    }));
  };

  const handleOtherExpChange = (e) => {
    const newOtherExp = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      other_expenses: newOtherExp,
    }));
  };

  const handleOtherIncChange = (e) => {
    const newOtherInc = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      other_income: newOtherInc,
    }));
  };

  const handleInterestIncomeChange = (e) => {
    const newInterestIncome = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      interest_income: newInterestIncome,
    }));
  };

  const handleTaxExpChange = (e) => {
    const newTaxExp = parseFloat(e.target.value);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      tax_expense: newTaxExp,
    }));
  };

  const [userInput, setUserInput] = useState({
    return_amount: null,
    discount: null,
    materials: null,
    labor: null,
    overhead: null,
    repairs_maintenance: null,
    depreciation: null,
    interest: null,
    other_expenses: null,
    other_income: null,
    interest_income: null,
    tax_expense: null,
  });

  // handle submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setIsEditing(false);
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    console.log("Submitting...");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 500); // Adjust the duration as needed

    try {
      const rawCurrentDate = new Date();
      rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
      const currentDate = rawCurrentDate.toISOString().split("T")[0];

      const netSales =
        totalSales -
        (userInput.return_amount !== null
          ? userInput.return_amount
          : formsData.return_amount) -
        (userInput.discount !== null ? userInput.discount : formsData.discount);

      const totalCostOfSrvcsProvided =
        (userInput.materials !== null
          ? userInput.materials
          : formsData.materials) +
        (userInput.labor !== null ? userInput.labor : formsData.labor) +
        (userInput.overhead !== null ? userInput.overhead : formsData.overhead);

      const grossPrft = netSales - totalCostOfSrvcsProvided;

      const totalWage = normalWage + overtimeWage;

      const totalOperatingExp =
        totalWage +
        (userInput.repairs_maintenance !== null
          ? userInput.repairs_maintenance
          : formsData.repairs_maintenance) +
        (userInput.depreciation !== null
          ? userInput.depreciation
          : formsData.depreciation) +
        (userInput.interest !== null
          ? userInput.interest
          : formsData.interest) +
        (userInput.other_expenses !== null
          ? userInput.other_expenses
          : formsData.other_expenses);

      const operatingPrft = grossPrft - totalOperatingExp;

      const prftBeforeTaxes =
        operatingPrft +
        (userInput.other_income !== null
          ? userInput.other_income
          : formsData.other_income) +
        (userInput.interest_income !== null
          ? userInput.interest_income
          : formsData.interest_income);

      const netProfit =
        netSales +
        (userInput.other_income !== null
          ? userInput.other_income
          : formsData.other_income) +
        (userInput.interest_income !== null
          ? userInput.interest_income
          : formsData.interest_income) -
        totalCostOfSrvcsProvided -
        totalOperatingExp -
        (userInput.tax_expense !== null
          ? userInput.tax_expense
          : formsData.tax_expense);

      const formData = {
        date: currentDate,
        sales: totalSales,
        return_amount:
          userInput.return_amount !== null
            ? userInput.return_amount
            : formsData.return_amount,
        discount:
          userInput.discount !== null ? userInput.discount : formsData.discount,
        net_sales: netSales,
        materials:
          userInput.materials !== null
            ? userInput.materials
            : formsData.materials,
        labor: userInput.labor !== null ? userInput.labor : formsData.labor,
        overhead:
          userInput.overhead !== null ? userInput.overhead : formsData.overhead,
        total_cost_of_srvcs_provided: totalCostOfSrvcsProvided,
        gross_profit: grossPrft,
        wages: totalWage,
        repairs_maintenance:
          userInput.repairs_maintenance !== null
            ? userInput.repairs_maintenance
            : formsData.repairs_maintenance,
        depreciation:
          userInput.depreciation !== null
            ? userInput.depreciation
            : formsData.depreciation,
        interest:
          userInput.interest !== null ? userInput.interest : formsData.interest,
        other_expenses:
          userInput.other_expenses !== null
            ? userInput.other_expenses
            : formsData.other_expenses,
        total_operating_exp: totalOperatingExp,
        operating_profit: operatingPrft,
        other_income:
          userInput.other_income !== null
            ? userInput.other_income
            : formsData.other_income,
        interest_income:
          userInput.interest_income !== null
            ? userInput.interest_income
            : formsData.interest_income,
        profit_before_taxes: prftBeforeTaxes,
        tax_expense:
          userInput.tax_expense !== null
            ? userInput.tax_expense
            : formsData.tax_expense,
        net_profit: netProfit,
      };

      console.log("Form Datasss:", formData);

      const response = await axios.post(
        "http://localhost:8081/income-statement",
        formData
      );

      // Check if the response contains expected data
      if (response.data && response.data.success) {
        console.log("Submitted Successfully", response.data);
      } else {
        console.error("Error submitting form:", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const totalWage = normalWage + overtimeWage;
  const netSales =
    formsData.sales - formsData.return_amount - formsData.discount;
  const totalCostOfSrvcsProvided =
    formsData.materials + formsData.labor + formsData.overhead;
  const grossPrft = netSales - totalCostOfSrvcsProvided;
  const totalOperatingExp =
    totalWage +
    formsData.repairs_maintenance +
    formsData.depreciation +
    formsData.interest +
    formsData.other_expenses;
  const operatingPrft = grossPrft - totalOperatingExp;
  const prftBeforeTaxes =
    operatingPrft + formsData.other_income + formsData.interest_income;
  const netProfit =
    netSales +
    formsData.other_income +
    formsData.interest_income -
    totalCostOfSrvcsProvided -
    totalOperatingExp -
    formsData.tax_expense;

  return (
    <>
      <div>
        <div className="flex justify-between  pb-4">
          <div>
            <h1 className="dark:text-gray-300 text-2xl text-ddbackground font-poppins">
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
                placeholder={totalSales}
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
                onChange={handleLessReturnChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                value={
                  totalSales -
                  (userInput.return_amount !== null
                    ? userInput.return_amount
                    : formsData.return_amount) -
                  (userInput.discount !== null
                    ? userInput.discount
                    : formsData.discount)
                }
                className="text-right block w-full p-2  text-sm text-gray-900 borderbg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                onChange={handleMaterialsChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                value={
                  (userInput.materials !== null
                    ? userInput.materials
                    : formsData.materials) +
                  (userInput.labor !== null
                    ? userInput.labor
                    : formsData.labor) +
                  (userInput.overhead !== null
                    ? userInput.overhead
                    : formsData.overhead)
                }
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG border-2 border-purpleGrape dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.total_cost_of_srvcs_provided}
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
                value={
                  totalSales -
                  (userInput.return_amount !== null
                    ? userInput.return_amount
                    : formsData.return_amount) -
                  (userInput.discount !== null
                    ? userInput.discount
                    : formsData.discount) -
                  ((userInput.materials !== null
                    ? userInput.materials
                    : formsData.materials) +
                    (userInput.labor !== null
                      ? userInput.labor
                      : formsData.labor) +
                    (userInput.overhead !== null
                      ? userInput.overhead
                      : formsData.overhead))
                }
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG border-2 border-purpleGrape  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.gross_profit}
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
                onChange={handleRepairChange}
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                value={
                  totalWage +
                  (userInput.repairs_maintenance !== null
                    ? userInput.repairs_maintenance
                    : formsData.repairs_maintenance) +
                  (userInput.depreciation !== null
                    ? userInput.depreciation
                    : formsData.depreciation) +
                  (userInput.interest !== null
                    ? userInput.interest
                    : formsData.interest) +
                  (userInput.other_expenses !== null
                    ? userInput.other_expenses
                    : formsData.other_expenses)
                }
                className="text-right block w-full p-2  text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG border-2 border-purpleGrape  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.total_operating_exp}
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
                value={
                  totalSales -
                  (userInput.return_amount !== null
                    ? userInput.return_amount
                    : formsData.return_amount) -
                  (userInput.discount !== null
                    ? userInput.discount
                    : formsData.discount) -
                  ((userInput.materials !== null
                    ? userInput.materials
                    : formsData.materials) +
                    (userInput.labor !== null
                      ? userInput.labor
                      : formsData.labor) +
                    (userInput.overhead !== null
                      ? userInput.overhead
                      : formsData.overhead)) -
                  (totalWage +
                    (userInput.repairs_maintenance !== null
                      ? userInput.repairs_maintenance
                      : formsData.repairs_maintenance) +
                    (userInput.depreciation !== null
                      ? userInput.depreciation
                      : formsData.depreciation) +
                    (userInput.interest !== null
                      ? userInput.interest
                      : formsData.interest) +
                    (userInput.other_expenses !== null
                      ? userInput.other_expenses
                      : formsData.other_expenses))
                }
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableHeader dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.operating_profit}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                value={
                  totalSales -
                  (userInput.return_amount !== null
                    ? userInput.return_amount
                    : formsData.return_amount) -
                  (userInput.discount !== null
                    ? userInput.discount
                    : formsData.discount) -
                  ((userInput.materials !== null
                    ? userInput.materials
                    : formsData.materials) +
                    (userInput.labor !== null
                      ? userInput.labor
                      : formsData.labor) +
                    (userInput.overhead !== null
                      ? userInput.overhead
                      : formsData.overhead)) -
                  (totalWage +
                    (userInput.repairs_maintenance !== null
                      ? userInput.repairs_maintenance
                      : formsData.repairs_maintenance) +
                    (userInput.depreciation !== null
                      ? userInput.depreciation
                      : formsData.depreciation) +
                    (userInput.interest !== null
                      ? userInput.interest
                      : formsData.interest) +
                    (userInput.other_expenses !== null
                      ? userInput.other_expenses
                      : formsData.other_expenses)) +
                  ((userInput.other_income !== null
                    ? userInput.other_income
                    : formsData.other_income) +
                    (userInput.interest_income !== null
                      ? userInput.interest_income
                      : formsData.interest_income))
                }
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableHeader dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.profit_before_taxes}
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
                className="text-right block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-tableBG dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                value={
                  totalSales -
                  (userInput.return_amount !== null
                    ? userInput.return_amount
                    : formsData.return_amount) -
                  (userInput.discount !== null
                    ? userInput.discount
                    : formsData.discount) +
                  ((userInput.other_income !== null
                    ? userInput.other_income
                    : formsData.other_income) +
                    (userInput.interest_income !== null
                      ? userInput.interest_income
                      : formsData.interest_income)) -
                  ((userInput.materials !== null
                    ? userInput.materials
                    : formsData.materials) +
                    (userInput.labor !== null
                      ? userInput.labor
                      : formsData.labor) +
                    (userInput.overhead !== null
                      ? userInput.overhead
                      : formsData.overhead)) -
                  (totalWage +
                    (userInput.repairs_maintenance !== null
                      ? userInput.repairs_maintenance
                      : formsData.repairs_maintenance) +
                    (userInput.depreciation !== null
                      ? userInput.depreciation
                      : formsData.depreciation) +
                    (userInput.interest !== null
                      ? userInput.interest
                      : formsData.interest) +
                    (userInput.other_expenses !== null
                      ? userInput.other_expenses
                      : formsData.other_expenses)) -
                  (userInput.tax_expense !== null
                    ? userInput.tax_expense
                    : formsData.tax_expense)
                }
                className="text-right rounded-b-lg block w-full p-2  text-sm text-gray-900 border border-gray-300 bg-purpleGrape focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={formsData.net_profit}
                disabled
              />
            </div>

            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <div className="inline-block text-center rounded bg-gray-50 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-tableBG">
                  Submitting...
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center mb-4 w-full bg-white dark:bg-ddbackground">
                  <button
                    type="button"
                    onClick={onGoBackClick}
                    className="inline-block text-center rounded border bg-gray-400 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                    hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-tableBG"
                  >
                    Back to Menu
                  </button>
                  {!isEditing && (
                    <button
                      type="submit"
                      className="w-32 text-center rounded border bg-gray-400 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-tableBG"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                  )}

                  {isEditing && (
                    <button
                      type="submit"
                      className="w-32 text-center rounded bg-gray-50 m-5 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-tableBG"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default DailyFinancialLog;
