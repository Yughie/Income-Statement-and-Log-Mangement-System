import { DarkMode } from "./DarkMode";
import logo from "../assets/logo.png";
import { useState } from "react";

function CreateNewService() {
  return (
    <>
      <div className="bg-ddbackground">
        {/* Navigator open/close button */}
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm shadow-lg text-gray-500 rounded-lg sm:hidden dark:hover:bg-darkPurple focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-darkPurple dark:focus:ring-gray-600"
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
          className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
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
                  className="flex transition duration-300 ease-in-out items-center mt-10 p-4 py-4 text-gray-100 rounded-lg dark:text-gray-900 bg-gray-100 border-lightPurple shadow-shadowPurple group"
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
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
              <li>
                <a
                  href="./statistics"
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 31 24"
                  >
                    <path
                      d="M20.15 15.5H22.475C22.8625 15.5 23.25 15.1125 23.25 14.725V6.5875C23.25 6.2 22.8625 5.8125 22.475 5.8125H20.15C19.7625 5.8125 19.375 6.2 19.375 6.5875V14.725C19.375 15.1125 19.7625 15.5 20.15 15.5ZM25.9625 15.5H28.2875C28.675 15.5 29.0625 15.1125 29.0625 14.725V0.775C29.0625 0.3875 28.675 0 28.2875 0H25.9625C25.575 0 25.1875 0.3875 25.1875 0.775V14.725C25.1875 15.1125 25.575 15.5 25.9625 15.5ZM8.525 15.5H10.85C11.2375 15.5 11.625 15.1125 11.625 14.725V10.4625C11.625 10.075 11.2375 9.6875 10.85 9.6875H8.525C8.1375 9.6875 7.75 10.075 7.75 10.4625V14.725C7.75 15.1125 8.1375 15.5 8.525 15.5ZM14.3375 15.5H16.6625C17.05 15.5 17.4375 15.1125 17.4375 14.725V2.7125C17.4375 2.325 17.05 1.9375 16.6625 1.9375H14.3375C13.95 1.9375 13.5625 2.325 13.5625 2.7125V14.725C13.5625 15.1125 13.95 15.5 14.3375 15.5ZM30.0312 19.375H3.875V0.96875C3.875 0.433516 3.44148 0 2.90625 0H0.96875C0.433516 0 0 0.433516 0 0.96875V21.3125C0 22.3824 0.867637 23.25 1.9375 23.25H30.0312C30.5665 23.25 31 22.8165 31 22.2812V20.3438C31 19.8085 30.5665 19.375 30.0312 19.375Z"
                      fill="7A30C2"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Statistics
                  </span>
                </a>
              </li>
            </ul>

            <span className="flex transition duration-300 ease-in-out absolute bottom-0 min-w-full h-auto items-center items-end py-4 pr-4">
              <a
                href="#"
                className="flex transition duration-300 ease-in-out w-full items-center p-4  text-gray-900 rounded-lg mr-4 dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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

        <div className="p-6 sm:ml-80 min-h-screen">
          {/*VEHICLE INFORMATION */}
          <div className="p-4 rounded-lg dark:border-bg-darkPurple ">
            <span className="w-full ">
              <h1 className="dark:text-gray-300 text-3xl text-ddbackground font-poppins mx-auto text-center ">
                Vehicle Information
              </h1>
            </span>
          </div>
          {/* LARGE Container Vehicle information*/}
          <div className="w-full flex flex-col lg:flex-row ">
            {/*  Plate Number */}
            <div className="w-full lg:w-1/3 lg:mr-4 bg-dbackground p-4 mb-4 rounded-md">
              <h1 className="mb-4 text-xl text-gray-300 text-center ">
                <label htmlFor="plate-number">Plate Number</label>
              </h1>
              <div className="">
                <input
                  type="text"
                  id="plate-number"
                  placeholder="Enter plate number"
                  className="bg-gray-50 mb-4 lg:mb-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            {/* Phone Number */}
            <div className="w-full lg:w-1/3 lg:mr-4 bg-dbackground p-4 mb-4 rounded-md">
              <h1 className="mb-4 text-xl text-gray-300 text-center">
                <label htmlFor="phone-number">Phone Number</label>
              </h1>
              <div className="">
                <input
                  type="text"
                  id="phone-number"
                  placeholder="Enter phone number"
                  className="bg-gray-50 mb-4 lg:mb-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            {/* Vehicle DESCRIPTION */}
            <div className="w-full lg:w-1/3  bg-dbackground p-4 mb-4 rounded-md">
              <h1 className="mb-4 text-xl text-gray-300 text-center ">
                <label htmlFor="vehicle-description">Vehicle Description</label>
              </h1>
              <form>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="vehicle-description"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Enter vehicle description"
                      required
                    />
                  </div>
                  <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-r-lg border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    type="button"
                  >
                    Vehicle Type{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Car
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Motor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tricycle
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Van
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Others
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* SERVICES */}
          <div className=" rounded-lg dark:border-bg-darkPurple ">
            <span className="w-full ">
              <h1 className="dark:text-gray-300 text-3xl text-ddbackground font-poppins pb-4 mx-auto text-center ">
                Services
              </h1>
            </span>
          </div>

          {/* LARGE Container SERVICES*/}
          <div className="w-full flex flex-col lg:flex-row ">
            {/*  CARWASH */}
            <div className="w-full overflow-y-auto h-96 lg:w-1/3 lg:mr-4 bg-dbackground p-4 mb-4 rounded-md">
              <h1 className="mb-4 text-xl text-gray-300 text-center">
                <label htmlFor="service-carwash">Carwash</label>
              </h1>
              <div className="mb-4">
                <select
                  id="service-carwash"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select Service</option>
                  <option value="carwash">Carwash</option>
                  <option value="motorwash">Motorwash</option>
                  <option value="tricycle-private">Tricycle (Private)</option>
                  <option value="tricycle-public">Tricycle (Public)</option>
                  <option value="wax">Wax</option>
                  <option value="back-2-zero">Back 2 zero</option>
                  <option value="buffing">Buffing</option>
                  <option value="engine-wash">Engine wash</option>
                </select>
              </div>
              <div className="mb-4">
                <select
                  id="service-carwash"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select Service</option>
                  <option value="carwash">Carwash</option>
                  <option value="motorwash">Motorwash</option>
                  <option value="tricycle-private">Tricycle (Private)</option>
                  <option value="tricycle-public">Tricycle (Public)</option>
                  <option value="wax">Wax</option>
                  <option value="back-2-zero">Back 2 zero</option>
                  <option value="buffing">Buffing</option>
                  <option value="engine-wash">Engine wash</option>
                </select>
              </div>
              <div className="mb-4">
                <select
                  id="service-carwash"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select Service</option>
                  <option value="carwash">Carwash</option>
                  <option value="motorwash">Motorwash</option>
                  <option value="tricycle-private">Tricycle (Private)</option>
                  <option value="tricycle-public">Tricycle (Public)</option>
                  <option value="wax">Wax</option>
                  <option value="back-2-zero">Back 2 zero</option>
                  <option value="buffing">Buffing</option>
                  <option value="engine-wash">Engine wash</option>
                </select>
              </div>
              <div className="mb-4">
                <select
                  id="service-carwash"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select Service</option>
                  <option value="carwash">Carwash</option>
                  <option value="motorwash">Motorwash</option>
                  <option value="tricycle-private">Tricycle (Private)</option>
                  <option value="tricycle-public">Tricycle (Public)</option>
                  <option value="wax">Wax</option>
                  <option value="back-2-zero">Back 2 zero</option>
                  <option value="buffing">Buffing</option>
                  <option value="engine-wash">Engine wash</option>
                </select>
              </div>
              <div className="mb-4">
                <select
                  id="service-carwash"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select Service</option>
                  <option value="carwash">Carwash</option>
                  <option value="motorwash">Motorwash</option>
                  <option value="tricycle-private">Tricycle (Private)</option>
                  <option value="tricycle-public">Tricycle (Public)</option>
                  <option value="wax">Wax</option>
                  <option value="back-2-zero">Back 2 zero</option>
                  <option value="buffing">Buffing</option>
                  <option value="engine-wash">Engine wash</option>
                </select>
              </div>
              {/* ADD NEW BUTTON */}
              <button className="flex justify-center bg-gray-50 border border-gray-300 hover:shadow-shadowPurple  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-gray-300 dark:hover:bg-darkPurple dark:bg-gray-700  dark:border-gray-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 w-4"
                >
                  <path
                    d="M18.5714 7.85714H12.1429V1.42857C12.1429 0.639732 11.5031 0 10.7143 0H9.28571C8.49687 0 7.85714 0.639732 7.85714 1.42857V7.85714H1.42857C0.639732 7.85714 0 8.49687 0 9.28571V10.7143C0 11.5031 0.639732 12.1429 1.42857 12.1429H7.85714V18.5714C7.85714 19.3603 8.49687 20 9.28571 20H10.7143C11.5031 20 12.1429 19.3603 12.1429 18.5714V12.1429H18.5714C19.3603 12.1429 20 11.5031 20 10.7143V9.28571C20 8.49687 19.3603 7.85714 18.5714 7.85714Z"
                    fill="#B9BCD0"
                  />
                </svg>
                <span className="dark:border-gray-600  dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Add new
                </span>
              </button>
            </div>
            {/* Phone Number */}
            <div className="w-full overflow-y-auto h-96 lg:w-1/3 lg:mr-4 bg-dbackground p-4 mb-4 rounded-md">
              <h1 className="mb-4 text-xl text-gray-300 text-center">
                <label htmlFor="detailing">Detailing</label>
              </h1>
              <div className="mb-4">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select Detailing</option>
                  <option value="interior">Interior</option>
                  <option value="exterior">Exterior</option>
                </select>
              </div>
              {/* ADD NEW BUTTON */}
              <button className="flex justify-center bg-gray-50 border border-gray-300 hover:shadow-shadowPurple text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-gray-300 dark:hover:bg-darkPurple dark:bg-gray-700 dark:border-gray-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 w-4"
                >
                  <path
                    d="M18.5714 7.85714H12.1429V1.42857C12.1429 0.639732 11.5031 0 10.7143 0H9.28571C8.49687 0 7.85714 0.639732 7.85714 1.42857V7.85714H1.42857C0.639732 7.85714 0 8.49687 0 9.28571V10.7143C0 11.5031 0.639732 12.1429 1.42857 12.1429H7.85714V18.5714C7.85714 19.3603 8.49687 20 9.28571 20H10.7143C11.5031 20 12.1429 19.3603 12.1429 18.5714V12.1429H18.5714C19.3603 12.1429 20 11.5031 20 10.7143V9.28571C20 8.49687 19.3603 7.85714 18.5714 7.85714Z"
                    fill="#B9BCD0"
                  />
                </svg>
                <span className="dark:border-gray-600  dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Add new
                </span>
              </button>
            </div>
            {/* PROMO */}
            <div className="w-full overflow-y-auto h-96 lg:w-1/3  bg-dbackground p-4 mb-4 rounded-md">
              <h1 className="mb-4 text-xl text-gray-300 text-center">
                <label htmlFor="promo">Promo</label>
              </h1>
              <div className="mb-4">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select Promo</option>
                  <option value="engine-wash">Engine wash</option>
                  <option value="wash-vacuum">
                    Wash, vacuum, armor & tire black
                  </option>
                  <option value="asphalt-removal">Asphalt removal</option>
                  <option value="hydrophobic-waxing">Hydrophobic waxing</option>
                  <option value="antibacterial">
                    Back 2 zero / antibacterial chemical
                  </option>
                </select>
              </div>
              {/* ADD NEW BUTTON */}
              <button className="flex justify-center bg-gray-50 border border-gray-300 hover:shadow-shadowPurple text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-gray-300 dark:hover:bg-darkPurple dark:bg-gray-700 dark:border-gray-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 w-4"
                >
                  <path
                    d="M18.5714 7.85714H12.1429V1.42857C12.1429 0.639732 11.5031 0 10.7143 0H9.28571C8.49687 0 7.85714 0.639732 7.85714 1.42857V7.85714H1.42857C0.639732 7.85714 0 8.49687 0 9.28571V10.7143C0 11.5031 0.639732 12.1429 1.42857 12.1429H7.85714V18.5714C7.85714 19.3603 8.49687 20 9.28571 20H10.7143C11.5031 20 12.1429 19.3603 12.1429 18.5714V12.1429H18.5714C19.3603 12.1429 20 11.5031 20 10.7143V9.28571C20 8.49687 19.3603 7.85714 18.5714 7.85714Z"
                    fill="#B9BCD0"
                  />
                </svg>
                <span className="dark:border-gray-600  dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Add new
                </span>
              </button>
            </div>
          </div>

          {/* MORE CHOICES */}
          <div className="lg:flex  ">
            <div className="mb-4 lg:w-3/4 border-2 border-dbackground border-dashed">
              {/*SIZES S M L XL XXL XXL */}
              <div>
                <ul className="flex justify-evenly flex-auto m-4">
                  {/* SMALL */}
                  <li>
                    <input
                      type="radio"
                      id="sizes-small"
                      name="sizes"
                      value="sizes-small"
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="sizes-small"
                      className="inline-flex items-center justify-center w-14 h-12 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white dark:peer-checked:bg-purpleGrape  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-purpleGrape"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">S</div>
                      </div>
                    </label>
                  </li>
                  {/* Medium */}
                  <li>
                    <input
                      type="radio"
                      id="sizes-medium"
                      name="sizes"
                      value="sizes-medium"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="sizes-medium"
                      className="inline-flex items-center justify-center w-14 h-12  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white dark:peer-checked:bg-purpleGrape hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold ">M</div>
                      </div>
                    </label>
                  </li>
                  {/* LARGE */}
                  <li>
                    <input
                      type="radio"
                      id="sizes-large"
                      name="sizes"
                      value="sizes-large"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="sizes-large"
                      className="inline-flex items-center justify-center w-14 h-12  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white dark:peer-checked:bg-purpleGrape hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold ">L</div>
                      </div>
                    </label>
                  </li>
                  {/* EXTRA LARGE */}
                  <li>
                    <input
                      type="radio"
                      id="sizes-xlarge"
                      name="sizes"
                      value="sizes-xlarge"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="sizes-xlarge"
                      className="inline-flex items-center justify-center w-14 h-12  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white dark:peer-checked:bg-purpleGrape hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold ">XL</div>
                      </div>
                    </label>
                  </li>
                  {/* 2 EXTRALARGE */}
                  <li>
                    <input
                      type="radio"
                      id="sizes-xxlarge"
                      name="sizes"
                      value="sizes-xxlarge"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="sizes-xxlarge"
                      className="inline-flex items-center justify-center w-14 h-12  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white dark:peer-checked:bg-purpleGrape hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold ">XXL</div>
                      </div>
                    </label>
                  </li>
                  {/* 3 EXTRA LARGE */}
                  <li>
                    <input
                      type="radio"
                      id="sizes-xxxlarge"
                      name="sizes"
                      value="sizes-xxxlarge"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="sizes-xxxlarge"
                      className="inline-flex items-center justify-center w-14 h-12  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white dark:peer-checked:bg-purpleGrape hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-xs  font-semibold ">
                          XL & XXL
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
              {/*HOUR TIME / Etra charges*/}
              <div className="flex-row lg:flex mb-4">
                {/* Hour Time*/}
                <div className="w-full justify-evenly  lg:w-2/5">
                  <ul className="flex justify-evenly flex-auto mb-4 lg:mb-0">
                    {/* NORMAL HOUR */}
                    <li>
                      <input
                        type="radio"
                        id="hour-normal"
                        name="hour-rate"
                        value="hour-noraml"
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="hour-normal"
                        className="inline-flex items-center justify-center w-24 h-12 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white dark:peer-checked:bg-purpleGrape  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-purpleGrape"
                      >
                        <div className="block">
                          <div className="w-full  text-m font-semibold text-center">
                            Normal Hour
                          </div>
                        </div>
                      </label>
                    </li>
                    {/* OVERTIME HOUR */}
                    <li>
                      <input
                        type="radio"
                        id="hour-overtime"
                        name="hour-rate"
                        value="hour-overtime"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="hour-overtime"
                        className="inline-flex items-center justify-center w-24 h-12 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white dark:peer-checked:bg-purpleGrape hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-m font-semibold text-center">
                            Overtime Hour
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
                {/* Etra charges*/}
                <div className="flex lg:w-3/5 items-center lg:mb-0 justify-center">
                  <h1 className=" mr-4 text-xl text-gray-300 text-center ">
                    <label htmlFor="extra-charges">Extra Chages</label>
                  </h1>
                  <div className="">
                    <input
                      type="text"
                      id="extra-charges"
                      className="bg-gray-50 lg:mb-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TOTAL AND SUBMIT BUTTON */}
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-center">
              <div>
                <h1 className="mb-4 text-3xl text-gray-300">
                  <label htmlFor="extra-charges">Total: 99999</label>
                </h1>
              </div>
              <div>
                <button className="w-32 text-center bg-gray-50 border border-gray-300 hover:shadow-shadowPurple text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 px-6 hover:bg-gray-300 dark:hover:bg-darkPurple dark:bg-gray-700  dark:border-gray-600">
                  <span className="dark:border-gray-600  dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    Submit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNewService;
