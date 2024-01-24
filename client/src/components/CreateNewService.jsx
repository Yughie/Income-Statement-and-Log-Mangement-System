import { DarkMode } from "./DarkMode";
import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import Carwash from "./createNewService/Carwash";
import Detailing from "./createNewService/Detailing";
import Promo from "./createNewService/Promo";
import CreateDatePicker from "./createNewService/CreateDatePicker";
import axios from "axios";

function CreateNewService() {
  //const [isSubmitted, setIsSubmitted] = useState({});
  const [date, setDate] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicleDescription, setVehicleDescription] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  //Pricing
  const [workHour, setWorkHour] = useState("");
  const [vehicleSize, setVehicleSize] = useState("");
  const [extraCharge, setExtraCharge] = useState("");

  const handleVehicleType = (e) => {
    setVehicleType(e.target.value);
  };

  useEffect(() => {
    const rawCurrentDate = new Date();
    rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
    const currentDate = rawCurrentDate.toISOString().split("T")[0];
    setDate(currentDate);
  }, []);

  const [formValues, setFormValues] = useState({
    carwash: {
      carwash: false,
      motorwash: false,
      trycyclePriv: false,
      trycyclePub: false,
      wax: false,
      backZero: false,
      buffing: false,
      engineWash: false,
    },
    promo: {
      servicePromo: false,
    },
    detailing: {
      interiorDetailing: false,
      exteriorDetailing: false,
    },
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total whenever formValues change
    calculateTotal(vehicleSize, extraCharge);
  }, [formValues, vehicleSize, extraCharge]);

  const calculateTotal = (size, charge) => {
    let newTotal = 0;

    const chargeValue = parseFloat(charge);

    // Accumulate amounts for selected carwash services
    if (formValues.carwash) {
      if (formValues.carwash.carwash) {
        if (size == "S") {
          newTotal += 120;
        } else if (size == "M") {
          newTotal += 160;
        } else if (size == "L") {
          newTotal += 180;
        } else if (size == "XL") {
          newTotal += 200;
        } else if (size == "XXL") {
          newTotal += 220;
        }
      }
      if (formValues.carwash.motorwash) {
        if (size == "S") {
          newTotal += 120;
        } else if (size == "M") {
          newTotal += 160;
        } else if (size == "L") {
          newTotal += 180;
        } else if (size == "XL") {
          newTotal += 200;
        } else if (size == "XXL") {
          newTotal += 220;
        }
      }
      if (formValues.carwash.trycyclePriv) {
        newTotal += 120;
      }
      if (formValues.carwash.trycyclePub) {
        newTotal += 120;
      }
      if (formValues.carwash.wax) {
        if (size == "S") {
          newTotal += 300;
        } else if (size == "M") {
          newTotal += 420;
        } else if (size == "L") {
          newTotal += 440;
        } else if (size == "XL") {
          newTotal += 500;
        } else if (size == "XXL") {
          newTotal += 550;
        }
      }
      if (formValues.carwash.backZero) {
        if (size == "S") {
          newTotal += 400;
        } else if (size == "M") {
          newTotal += 450;
        } else if (size == "L") {
          newTotal += 500;
        } else if (size == "XL") {
          newTotal += 500;
        } else if (size == "XXL") {
          newTotal += 550;
        }
      }
      if (formValues.carwash.buffing) {
        if (size == "S") {
          newTotal += 500;
        } else if (size == "M") {
          newTotal += 620;
        } else if (size == "L") {
          newTotal += 640;
        } else if (size == "XL") {
          newTotal += 700;
        } else if (size == "XXL") {
          newTotal += 750;
        }
      }
      if (formValues.carwash.engineWash) {
        if (size == "S") {
          newTotal += 400;
        } else if (size == "M") {
          newTotal += 400;
        } else if (size == "L") {
          newTotal += 450;
        } else if (size == "XL") {
          newTotal += 500;
        } else if (size == "XXL") {
          newTotal += 500;
        }
      }
    }
    if (formValues.promo.servicePromo) {
      if (size == "S") {
        newTotal += 1200;
      } else if (size == "M") {
        newTotal += 1500;
      } else if (size == "L") {
        newTotal += 1900;
      } else if (size == "XL") {
        newTotal += 2200;
      } else if (size == "XXL") {
        newTotal += 2400;
      }
    }
    if (formValues.detailing.interiorDetailing) {
      if (size == "S") {
        newTotal += 5000;
      } else if (size == "M") {
        newTotal += 5500;
      } else if (size == "L") {
        newTotal += 5500;
      } else if (size == "XL") {
        newTotal += 6000;
      } else if (size == "XXL") {
        newTotal += 6000;
      }
    }
    if (formValues.detailing.exteriorDetailing) {
      if (size == "S") {
        newTotal += 2500;
      } else if (size == "M") {
        newTotal += 3000;
      } else if (size == "L") {
        newTotal += 3500;
      } else if (size == "XL") {
        newTotal += 5000;
      } else if (size == "XXL") {
        newTotal += 5000;
      }
    }
    if (charge != 0) {
      newTotal += chargeValue;
    }
    setTotal(newTotal);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleWorkHourChange = (e) => {
    setWorkHour(e.target.value);
  };

  const handleVehicleSizeChange = (e) => {
    const newSize = e.target.value;
    setVehicleSize(newSize);
    calculateTotal(newSize, extraCharge);
  };

  const handleExtraChargeChange = (e) => {
    const newCharge = e.target.value;
    setExtraCharge(newCharge);
    calculateTotal(vehicleSize, newCharge);
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (category, serviceName) => {
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [category]: {
          ...prevValues[category],
          [serviceName]: !prevValues[category][serviceName],
        },
      };
    });
  };
 
  {/*}
  const handleMessage = (e) => {
    setIsSubmitted(true)

    console.log("submitted");
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 1500)
  }
  */}

  // Function to handle the overall form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      plateNumber,
      phoneNumber,
      vehicleDescription,
      vehicleType,
      workHour,
      vehicleSize,
      extraCharge,
      selectedServices: formValues,
      total,
    };
    console.log("Form Data:", formData);

    axios
      .post("http://localhost:8081/create-new-service", formData)
      .then((res) => console.log("Inserted Successfully", res.data))
      .catch((err) => console.log("ERROR:", err));
  };

  return (
    <>
      <div className="dark:bg-ddbackground bg-gray-200">
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
          className="fixed top-0 left-0 z-40 w-80 h-screen md:transition-transform -translate-x-full md:translate-x-0"
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
                  className="flex transition duration-300 ease-in-out items-center mt-10 p-4 py-4  dark:text-gray-900 rounded-lg bg-gray-100 border-lightPurple shadow-shadowPurple group"
                >
                  <svg
                    className="w-5 h-5 text-gray-00 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white
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
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
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
                  className="flex transition duration-300 ease-in-out items-center p-4 py-4 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
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

            <span className="flex transition duration-300 ease-in-out absolute bottom-0 min-w-full h-auto items-center items-end py-4 pr-4">
              <a
                href="/"
                className="flex transition duration-300 ease-in-out w-full items-center p-4  text-white  rounded-lg mr-4 dark:text-white hover:bg-gray-100 dark:hover:bg-darkPurple hover:shadow-shadowPurple group"
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

        <div className="p-4 md:ml-80 min-h-screen">
          {/*VEHICLE INFORMATION */}
          <form onSubmit={handleSubmit}>
            <div className="p-4 rounded-lg dark:border-bg-darkPurple ">
              <span className="w-full ">
                <CreateDatePicker value={date} onChange={handleDateChange} />
                <h1 className="text-ddbackground dark:text-gray-300 text-3xl font-poppins mx-auto text-center ">
                  Vehicle Information
                </h1>
              </span>
            </div>
            {/* LARGE Container Vehicle information*/}
            <div className="w-full  flex flex-row lg:flex-row ">
              <div className="w-full flex flex-col lg:flex-row gap-4 bg-gray-300 dark:bg-dbackground p-4 mb-4 rounded-md">
                {/*  Plate Number */}
                <div className="lg:w-1/3">
                  <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center ">
                    <label htmlFor="plate-number">Plate Number</label>
                  </h1>
                  <div className="">
                    <input
                      type="text"
                      id="plate-number"
                      placeholder="Enter plate number"
                      className="bg-gray-50 mb-4 lg:mb-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-dbgContainer1 dark:border-dbgContainer1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                    "
                      value={plateNumber}
                      onChange={(e) =>
                        setPlateNumber(e.target.value.toUpperCase())
                      }
                      required
                    />
                  </div>
                </div>
                {/* Phone Number */}
                <div className="lg:w-1/3">
                  {" "}
                  <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center">
                    <label htmlFor="phone-number">Phone Number</label>
                  </h1>
                  <div className="">
                    <input
                      type="text"
                      id="phone-number"
                      placeholder="Enter phone number"
                      className="bg-gray-50 mb-4 lg:mb-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-dbgContainer1 dark:border-dbgContainer1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                      "
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* Vehicle DESCRIPTION */}
                <div className="lg:w-1/3">
                  <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center ">
                    <label htmlFor="vehicle-description">
                      Vehicle Description
                    </label>
                  </h1>

                  <div className="flex">
                    <div className="w-full">
                      <input
                        type="text"
                        id="vehicle-description"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-dbgContainer1 dark:border-dbgContainer1 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Enter vehicle description"
                        value={vehicleDescription}
                        onChange={(e) => setVehicleDescription(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4 w-40">
                      <select
                        id="vehicleType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-e-0focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-dbgContainer1 dark:border-dbgContainer1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={vehicleType}
                        onChange={handleVehicleType}
                        required
                      >
                        <option value="" disabled defaultValue={""}>
                          Type
                        </option>
                        <option value="Sedan">Sedan</option>
                        <option value="Motorcycle">Motorcycle</option>
                        <option value="Tricycle">Tricycle</option>
                        <option value="SUV">SUV</option>
                        <option value="Other">Others</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SERVICES */}
            <div className="rounded-lg dark:border-bg-darkPurple ">
              <span className="w-full ">
                <h1 className="text-ddbackground dark:text-gray-300 text-3xl font-poppins pb-4 mx-auto text-center ">
                  Services
                </h1>
              </span>
            </div>
            <div className="w-full gap-4 p-4 pb-0 bg-gray-300 dark:bg-dbackground rounded-lg flex flex-col lg:flex-row ">
              {/*  CARWASH */}
              <Carwash
                checkboxValues={formValues.carwash}
                onCheckboxChange={(serviceName) =>
                  handleCheckboxChange("carwash", serviceName)
                }
              />
              {/* Detailing */}
              {/* PROMO */}
              <Promo
                checkboxValues={formValues.promo}
                onCheckboxChange={(serviceName) =>
                  handleCheckboxChange("promo", serviceName)
                }
              />
              <Detailing
                checkboxValues={formValues.detailing}
                onCheckboxChange={(serviceName) =>
                  handleCheckboxChange("detailing", serviceName)
                }
              />
            </div>

            {/*PRICING */}

            {/* PRICING */}
            <div className="p-4 rounded-lg dark:border-bg-darkPurple ">
              <span className="w-full ">
                <h1 className="text-ddbackground dark:text-gray-300 text-3xl font-poppins mx-auto text-center ">
                  Pricing
                </h1>
              </span>
            </div>
            <div className="w-full  flex flex-row lg:flex-row ">
              <div className="w-full flex flex-col lg:flex-row gap-4 bg-gray-300 dark:bg-dbackground p-4 mb-4 rounded-md">
                {/*  Plate Number */}
                <div className="lg:w-1/3">
                  <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center ">
                    <label htmlFor="work-hour">Work Hour</label>
                  </h1>
                  <div className="mb-4">
                    <select
                      id="work-hour"
                      value={workHour}
                      onChange={handleWorkHourChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-dbgContainer1 dark:border-dbgContainer1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" disabled>
                        Select work hour
                      </option>
                      <option value="normal">Normal</option>
                      <option value="overtime">Overtime</option>
                    </select>
                  </div>
                </div>
                {/* Phone Number */}
                <div className="lg:w-1/3">
                  {" "}
                  <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center">
                    <label htmlFor="vehicle-size">Vehicle Size</label>
                  </h1>
                  <div className="mb-4">
                    <select
                      id="vehicle-size"
                      value={vehicleSize}
                      onChange={handleVehicleSizeChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-dbgContainer1 dark:border-dbgContainer1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" disabled>
                        Select vehicle size
                      </option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  {" "}
                  <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center">
                    <label htmlFor="extra-charge">Extra Charge</label>
                  </h1>
                  <div className="w-full">
                    <input
                      type="text"
                      id="extra-charge"
                      value={extraCharge}
                      onChange={handleExtraChargeChange}
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-dbgContainer1 dark:border-dbgContainer1 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Enter extra charge"
                    />
                  </div>
                </div>
                {/* PRICING */}
                <div className="lg:w-1/3">
                  <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center ">
                    <label htmlFor="vehicle-description">Total</label>
                  </h1>

                {/*
                  {isSubmitted ? (
                    <div className="flex justify-center items-center">
                    <div className="inline-block text-center rounded bg-gray-50 m-5  text-ddbackground dark:text-gray-300 text-sm focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 transition-all duration-200 ease-in-out font-bold dark:border-gray-600 dark:bg-tableBG">
                      Submitting...
                    </div>
                  </div>
                  ) : (
                  
                  )} */}

                  <div className="flex">
                    <div className="w-full">
                      <input
                        type="text"
                        id="vehicle-description"
                        value={total || ""}
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-dbgContainer1 dark:border-dbgContainer1 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="00000"
                        disabled
                      />
                    </div>
                    <div className="mb-4 w-40">
                      <button
                        // onClick={handleMessage}
                        type="submit"
                        className="w-32 text-center bg-gray-50 border border-gray-300  rounded-r-lg hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm  focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:bg-purpleGrape dark:bg-dbgContainer1  dark:border-dbgContainer1 font-bold"
                      >
                        Submit
                      </button>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateNewService;
