import { DarkMode } from "./DarkMode";
import logo from "../assets/logo.png";
import { useState } from "react";
import IncomeStatementDynamic from "./income-statement/IncomeStatementDynamic";
import DailyFinancialLog from "./income-statement/DailyFinancialLog";
import CompareIncomeStatement from "./income-statement/CompareIncomeStatement";
import DatePicker from "./income-statement/DatePicker";
import ViewFinancialLog from "./income-statement/ViewFinancialLog";

function IncomeStatement() {
  const [showDailyFinancialLog, setShowDailyFinancialLog] = useState(false);
  const [showFinancialLog, setShowFinancialLog] = useState(false);
  const [showCompareIncomeStatement, setShowCompareIncomeStatement] =
    useState(false);

  const handleDailyFinancialLogClick = () => {
    setShowDailyFinancialLog(true);
    setShowFinancialLog(false);
    setShowCompareIncomeStatement(false);
  };

  const handleViewLogClick = () => {
    setShowFinancialLog(true);
    setShowDailyFinancialLog(false);
    setShowCompareIncomeStatement(false);
  };

  const handleCompareIncomeStatementClick = () => {
    setShowCompareIncomeStatement(true);
    setShowFinancialLog(false);
    setShowDailyFinancialLog(false);
  };

  const handleGoBackClick = () => {
    setShowDailyFinancialLog(false);
    setShowFinancialLog(false);
    setShowCompareIncomeStatement(false);
  };

  return (
    <>
      <div className="dark:bg-ddbackground bg-gray-100">
        {/* Navigator open/close button */}
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm shadow-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-darkPurple dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        {/* LOGO  */}
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full md:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-dbackground dark:bg-dbackground">
            <a
              href="#"
              className="flex items-center justify-center ps-2.5 mb-5 mt-5"
            >
              <img src={logo} className="h-16 sm:h-16" alt="Southside Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>

            {/*LIST OF TAB */}
            <ul className="space-y-8 font-medium">
              <li>
                <a
                  href="./create-new-service"
                  className="flex transition duration-300 ease-in-out items-center mt-10 p-4 py-4  rounded-lg dark:text-gray-900 bg-gray-100 border-lightPurple hover:shadow-shadowPurple group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white
                    "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M15.5 0C6.9375 0 0 6.9375 0 15.5C0 24.0625 6.9375 31 15.5 31C24.0625 31 31 24.0625 31 15.5C31 6.9375 24.0625 0 15.5 0ZM24.5 17.25C24.5 17.6625 24.1625 18 23.75 18H18V23.75C18 24.1625 17.6625 24.5 17.25 24.5H13.75C13.3375 24.5 13 24.1625 13 23.75V18H7.25C6.8375 18 6.5 17.6625 6.5 17.25V13.75C6.5 13.3375 6.8375 13 7.25 13H13V7.25C13 6.8375 13.3375 6.5 13.75 6.5H17.25C17.6625 6.5 18 6.8375 18 7.25V13H23.75C24.1625 13 24.5 13.3375 24.5 13.75V17.25Z"
                      fill="#7A30C2"
                    />
                  </svg>

                  <span className="ms-3">Create New Service</span>
                </a>
              </li>
              <li>
                <a
                  href="./dashboard"
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-white rounded-lg dark:text-white dark:hover:bg-darkPurple hover:shadow-shadowPurple dark:hover:shadow-shadowPurple hover:bg-gray-100  group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Dashboard
                  </span>
                  {/*
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-dbg-dbackground bg-gray-100 rounded-full dark:bg-darkPurple dark:text-gray-300">
                    Hello
                  </span>
                  */}
                </a>
              </li>
              <li>
                <a
                  href="./log"
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 31 31"
                  >
                    <path
                      d="M0.751531 8.96247L14.8552 15.3604C15.2669 15.5475 15.7325 15.5475 16.1442 15.3604L30.2479 8.96247C31.2499 8.50777 31.2499 6.99351 30.2479 6.53881L16.1448 0.140313C15.9425 0.0478539 15.7227 0 15.5003 0C15.2779 0 15.0581 0.0478539 14.8558 0.140313L0.751531 6.53821C-0.25051 6.99291 -0.25051 8.50777 0.751531 8.96247ZM30.2485 14.3075L26.7313 12.7133L16.9446 17.1495C16.4869 17.3572 16.0007 17.4625 15.5 17.4625C14.9993 17.4625 14.5137 17.3572 14.0554 17.1495L4.26927 12.7133L0.751531 14.3075C-0.25051 14.7616 -0.25051 16.2752 0.751531 16.7293L14.8552 23.1224C15.2669 23.3088 15.7325 23.3088 16.1442 23.1224L30.2485 16.7293C31.2505 16.2752 31.2505 14.7616 30.2485 14.3075ZM30.2485 22.0452L26.7447 20.4571L16.9446 24.8994C16.4869 25.1071 16.0007 25.2124 15.5 25.2124C14.9993 25.2124 14.5137 25.1071 14.0554 24.8994L4.25595 20.4571L0.751531 22.0452C-0.25051 22.4993 -0.25051 24.013 0.751531 24.4671L14.8552 30.8601C15.2669 31.0466 15.7325 31.0466 16.1442 30.8601L30.2485 24.4671C31.2505 24.013 31.2505 22.4993 30.2485 22.0452Z"
                      fill="7A30C2"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Log</span>
                  {/* 
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                  */}
                </a>
              </li>
              <li>
                <a
                  href="./income-statement"
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple bg-darkPurple shadow-shadowPurple group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                  >
                    <path
                      d="M27.9242 6.64286H4.84375C4.30852 6.64286 3.875 6.14741 3.875 5.53571C3.875 4.92402 4.30852 4.42857 4.84375 4.42857H28.0938C28.629 4.42857 29.0625 3.93312 29.0625 3.32143C29.0625 1.48703 27.7613 0 26.1562 0H3.875C1.73467 0 0 1.98248 0 4.42857V26.5714C0 29.0175 1.73467 31 3.875 31H27.9242C29.6207 31 31 29.5102 31 27.6786V9.96428C31 8.13266 29.6207 6.64286 27.9242 6.64286ZM25.1875 21.0357C24.1176 21.0357 23.25 20.0441 23.25 18.8214C23.25 17.5987 24.1176 16.6071 25.1875 16.6071C26.2574 16.6071 27.125 17.5987 27.125 18.8214C27.125 20.0441 26.2574 21.0357 25.1875 21.0357Z"
                      fill="7A30C2"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Income Statement
                  </span>
                </a>
              </li>
            </ul>

            <span className="flex transition duration-300 ease-in-out absolute bottom-0 min-w-full h-auto items-end py-4 pr-4">
              <a
                href="/"
                className="flex transition duration-300 ease-in-out w-full items-center p-4  text-white rounded-lg mr-4 dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
              </a>
              <DarkMode />
            </span>
          </div>
        </aside>

        <div className="p-4 md:ml-80">
          <div className="p-4  rounded-lg dark:border-bg-darkPurple">
            {/*WEEKLY AVERAGE MONTHLY SALES */}

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <IncomeStatementDynamic />

              {/* Render either buttons or DailyFinancialLog based on state */}
              {showDailyFinancialLog ? (
                <div className="w-full">
                  <DailyFinancialLog onGoBackClick={handleGoBackClick} />
                </div>
              ) : showFinancialLog ? (
                <div className="w-full">
                  <ViewFinancialLog onGoBackClick={handleGoBackClick} />
                </div>
              ) : showCompareIncomeStatement ? (
                <div className="w-full">
                  <CompareIncomeStatement onGoBackClick={handleGoBackClick} />
                </div>
              ) : (
                <div className="w-full min-h-full flex  border-2 border-dashed rounded border-gray-400">
                  <div className="m-auto">
                    <div className="flex flex-col gap-4">
                      <button
                        onClick={handleDailyFinancialLogClick}
                        className="inline-block text-center rounded border bg-gray-400 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                        hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white   dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700
                        "
                      >
                        Daily Financial Log
                      </button>
                      <button
                        onClick={handleViewLogClick}
                        className="inline-block text-center rounded border bg-gray-400 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                        hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700"
                      >
                        View a Financial Log
                      </button>
                      <button
                        onClick={handleCompareIncomeStatementClick}
                        className="inline-block text-center rounded border bg-gray-400 hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold
                        hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:text-white dark:hover:bg-purpleGrape dark:border-gray-600 dark:bg-gray-700"
                      >
                        Compare Another Income Statement
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="w-full"> </div>
              <div className="w-full">
                <DatePicker />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomeStatement;
