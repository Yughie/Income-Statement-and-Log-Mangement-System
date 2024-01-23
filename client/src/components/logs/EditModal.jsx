import React, { useState, useEffect } from "react";

import EditCarwash from "./EditCarwash";
import EditPromo from "./EditPromo";
import EditDetailing from "./EditDetailing";

const EditModal = ({ customerData, onClose }) => {
  if (!customerData) return null;

  const formatDate = (isoDate) => {
    const yyyy = isoDate.substring(0, 4);
    const mm = isoDate.substring(5, 7);
    const dd = isoDate.substring(8, 10);
    return `${yyyy}-${mm}-${dd}`;
  };
  const [editedCustomerData, setEditedCustomerData] = useState(
    customerData || null
  );
  const [date, setDate] = useState(
    customerData.date ? formatDate(customerData.date) : ""
  );

  const [plateNumber, setPlateNumber] = useState(
    editedCustomerData.plateNumber || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    customerData.phoneNumber || ""
  );
  const [vehicleDescription, setVehicleDescription] = useState(
    customerData.vehicleDescription || ""
  );
  const [vehicleType, setVehicleType] = useState(
    customerData.vehicleType || ""
  );

  //Pricing
  const [workHour, setWorkHour] = useState(customerData.workHour || "");
  const [vehicleSize, setVehicleSize] = useState(
    customerData.vehicleSizing || ""
  );
  const [extraCharge, setExtraCharge] = useState(
    customerData.extraCharge || ""
  );
  const [total, setTotal] = useState();

  const initialFormValues = {
    carwash: {
      Carwash: false,
      Motorwash: false,
      "Tricycle (Private)": false,
      "Tricycle (Public)": false,
      Wax: false,
      "Back 2 Zero": false,
      Buffing: false,
      "Engine Wash": false,
    },
    promo: {
      "Promo Package": false,
    },
    detailing: {
      "Interior Detailing": false,
      "Exterior Detailing": false,
    },
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    // Populate formValues with data from customerData
    if (customerData.serviceNames) {
      const servicesArray = customerData.serviceNames.split(",");
      const updatedFormValues = { ...initialFormValues };

      servicesArray.forEach((service) => {
        // Determine the category (carwash, promo, detailing) of the service
        let category;
        const trimmedService = service.trim(); // Trim extra whitespace

        if (trimmedService === "Promo Package") {
          category = "promo";
        } else if (
          trimmedService.startsWith("Interior Detailing") ||
          trimmedService.startsWith("Exterior Detailing")
        ) {
          category = "detailing";
        } else {
          category = "carwash";
        }

        // Update the corresponding checkbox value to true
        updatedFormValues[category][trimmedService] = true;

        console.log("HELLO" + category + trimmedService);
      });

      // Update the state with the populated formValues
      setFormValues(updatedFormValues);
    }
  }, [customerData]);

  useEffect(() => {
    // Calculate the total whenever formValues change
    calculateTotal(vehicleSize, extraCharge);
  }, [formValues, vehicleSize, extraCharge]);

  console.log(customerData);

  const calculateTotal = (size, charge) => {
    let newTotal = 0;

    const chargeValue = parseFloat(charge);

    // Accumulate amounts for selected carwash services
    if (formValues.carwash) {
      if (formValues.carwash.Carwash) {
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
      if (formValues.carwash.Motorwash) {
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
      if (formValues.carwash["Tricycle (Private)"]) {
        newTotal += 120;
      }
      if (formValues.carwash["Tricycle (Public)"]) {
        newTotal += 120;
      }
      if (formValues.carwash.Wax) {
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
      if (formValues.carwash["Back 2 Zero"]) {
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
      if (formValues.carwash.Buffing) {
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
      if (formValues.carwash["Engine Wash"]) {
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
    if (formValues.promo["Promo Package"]) {
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
    if (formValues.detailing["Interior Detailing"]) {
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
    if (formValues.detailing["Exterior Detailing"]) {
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
    // Convert UTC date to local date
    const utcDate = new Date(event.target.value);
    const formattedDate = formatDate(utcDate.toISOString()); // Convert to ISO format and then use your formatDate function

    setDate(formattedDate);
  };

  const handleWorkHourChange = (e) => {
    setWorkHour(e.target.value);
  };

  const handleVehicleSizeChange = (e) => {
    const newSize = e.target.value;
    setVehicleSize(newSize);
    calculateTotal(newSize, extraCharge);
  };
  const handleVehicleType = (e) => {
    setVehicleType(e.target.value);
  };

  const handleExtraChargeChange = (e) => {
    const newCharge = e.target.value;
    setExtraCharge(newCharge);
    calculateTotal(vehicleSize, newCharge);
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (category, serviceName) => {
    console.log("Checkbox changed:", serviceName);

    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [category]: {
          ...(prevValues[category] || {}), // Ensure prevValues[category] is defined
          [serviceName]: !prevValues[category]?.[serviceName], // Use optional chaining
        },
      };
    });
  };

  const handleUpdate = () => {
    // Assuming you have an API endpoint for updating data
    console.log(
      "Updating data for customer with ID:",
      editedCustomerData.CustomerID
    );

    const requestBody = {
      date: date, // Use the updated state value
      plateNumber: plateNumber, // Use the updated state value
      phoneNumber: phoneNumber, // Use the updated state value
      vehicleDescription: vehicleDescription, // Use the updated state value
      vehicleType: vehicleType, // Use the updated state value
      workHour: workHour, // Use the updated state value
      vehicleSizing: vehicleSize, // Use the updated state value
      extraCharge: extraCharge, // Use the updated state value
      total: total, // Use the updated state value
      // Include other necessary fields
    };

    console.log("Request Body:", requestBody); // Log the updated request body

    fetch(
      `http://localhost:8081/update-endpoint/${editedCustomerData.CustomerID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to update data for customer with ID ${editedCustomerData.CustomerID}`
          );
        }
        return response.json();
      })
      .then((updatedData) => {
        setEditedCustomerData(updatedData);
        console.log("Data updated successfully:", updatedData);
      })
      .catch((error) => console.error("Error updating data:", error));

    console.log(
      "Updating data for customer with ID:",
      editedCustomerData.CustomerID
    );
  };

  return (
    <div className="modal">
      {/* Modal content */}
      <div className="fixed top-0 left-0 right-0 flex  justify-center bg-ddbackground bg-opacity-80  h-full z-50">
        <div className="relative m-4 overflow-auto md:w-11/12">
          {" "}
          {/* Adjust max-w-lg */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Edit
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-default"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className=" mt-4 rounded-lg dark:border-bg-darkPurple">
                <span className="w-full">
                  {/*******DATE PICKER */}
                  <div className="flex items-center justify-center  lg:justify-end  mb-4 h-full">
                    <div className="relative  w-72 ">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </div>
                      <input
                        data-datepicker="true"
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                        value={date}
                        onChange={handleDateChange}
                        required
                      />
                    </div>
                  </div>

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
                        className="bg-gray-50 mb-4 lg:mb-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
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
                        className="bg-gray-50 mb-4 lg:mb-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
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
                          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                          placeholder="Enter vehicle description"
                          value={vehicleDescription}
                          onChange={(e) =>
                            setVehicleDescription(e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="mb-4 w-40">
                        <select
                          id="vehicleType"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-e-0focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            </div>
            <div className="w-full gap-4 p-4 pb-0 bg-gray-300 dark:bg-dbackground rounded-lg flex flex-col lg:flex-row ">
              <EditCarwash
                checkboxValues={formValues.carwash}
                onCheckboxChange={handleCheckboxChange}
              />
              <EditPromo
                checkboxValues={formValues.promo}
                onCheckboxChange={handleCheckboxChange}
              />
              <EditDetailing
                checkboxValues={formValues.detailing}
                onCheckboxChange={handleCheckboxChange}
              />
            </div>
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Enter extra charge"
                    />
                  </div>
                </div>
                {/* PRICING */}
                <div className="lg:w-1/3">
                  <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center ">
                    <label htmlFor="vehicle-description">Total</label>
                  </h1>

                  <div className="flex">
                    <div className="w-full">
                      <input
                        type="text"
                        id="vehicle-description"
                        value={total || ""}
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="00000"
                        disabled
                      />
                    </div>
                    <div className="mb-4 w-40">
                      <button
                        type="submit"
                        className="w-32 text-center bg-gray-50 border border-gray-300  rounded-r-lg hover:shadow-shadowPurple text-ddbackground dark:text-gray-300 text-sm  focus:ring-purpleGrape focus:border-purpleGrape p-2.5 px-6 hover:text-white hover:bg-purpleGrape hover:border-purpleGrape dark:hover:bg-purpleGrape dark:bg-gray-700  dark:border-gray-600 font-bold"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/******************FFFFUUUUUUUUUUUUNCTION************************/}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                onClick={onClose}
                type="button"
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
