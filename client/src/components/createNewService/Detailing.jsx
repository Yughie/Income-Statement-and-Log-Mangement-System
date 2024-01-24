const Detailing = ({ checkboxValues, onCheckboxChange }) => {
  const handleCheckboxChange = (category, serviceName) => {
    // Update the state immediately
    onCheckboxChange();

    // Rest of your code for handling checkbox changes (which you already have)
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
  return (
    <>
      <div className="w-full h-96 lg:w-1/3  dark:bg-dbackground bg-gray-300 mb-4 rounded-md">
        <h1 className="mb-4 font-bold text-xl dark:text-gray-300 text-ddbackground text-center">
          <label htmlFor="detailing">Detailing</label>
        </h1>
        <div className="flex flex-col justify-between  text-gray-900 dark:text-gray-300 max-h-80 overflow-auto pb-4">
          <h3 className="mb-2 font-bold text-gray-900 text-lg dark:text-white w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-dbgContainer1 dark:border-dbgContainer2 dark:text-white p-4">
            <input
              id="interior"
              type="checkbox"
              value=""
              className="w-4 mx-4 h-4 mb-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
              checked={checkboxValues.interiorDetailing}
              onChange={() => onCheckboxChange("interiorDetailing")}
            />
            <label htmlFor="interior">INTERIOR</label>
          </h3>
          <ul className="text-gray-900 dark:text-white">
            <li className="w-full border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="interior"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Removing Seats Rear/Front
                </label>
              </div>
            </li>
            <li className="w-full border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="interior"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Washing Drying Using Hydro Vacuum
                </label>
              </div>
            </li>
            <li className="w-full border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="interior"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Cleaning Dashboard, Sidings & Sealing/Applying Chemical
                  Cleanser
                </label>
              </div>
            </li>
            <li className="w-full border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="interior"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Wash, Vacuum, Armor & Tire Black
                </label>
              </div>
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="interior"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Back 2 Zero Antibac
                </label>
              </div>
            </li>
          </ul>
          <h3 className="mb-2 font-bold text-gray-900 text-lg dark:text-white w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-dbgContainer1 dark:border-dbgContainer2 dark:text-white p-4">
            <input
              id="exterior-checkbox"
              type="checkbox"
              value=""
              className="w-4 mx-4 h-4 mb-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              checked={checkboxValues.exteriorDetailing}
              onChange={() => onCheckboxChange("exteriorDetailing")}
            />
            <label htmlFor="exterior-checkbox">EXTERIOR</label>
          </h3>
          <ul className="text-gray-900 dark:text-white">
            <li className="w-full border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="exterior-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Wash
                </label>
              </div>
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="exterior-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Drying
                </label>
              </div>
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="exterior-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Buffing Using Wool Pad/Compound
                </label>
              </div>
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="exterior-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Engine Wash Detailing
                </label>
              </div>
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="exterior-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Polishing/Buffing with Hydrophobic Wax
                </label>
              </div>
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <label
                  htmlFor="exterior-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Wash, Vacuum Armor Oil, Tire Black Detailing
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Detailing;
