const Carwash = ({ checkboxValues, onCheckboxChange }) => {
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
      <div className="w-full h-96 lg:w-1/3 dark:bg-dbackground bg-gray-300 mb-4 rounded-md">
        <h1 className="mb-4 text-xl font-bold dark:text-gray-300 text-ddbackground text-center">
          <label htmlFor="service-carwash">Carwash</label>
        </h1>
        <div className="flex flex-col justify-between  text-gray-900 dark:text-gray-300 max-h-80 overflow-auto pb-4">
          <ul className="w-full  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-dbgContainer1 dark:border-dbgContainer2 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <input
                  id="carwash-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={checkboxValues.carwash}
                  onChange={() => onCheckboxChange("carwash")}
                />
                <label
                  htmlFor="carwash-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Carwash
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <input
                  id="motorwash-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={checkboxValues.motorwash}
                  onChange={() => onCheckboxChange("motorwash")}
                />
                <label
                  htmlFor="motorwash-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Motorwash
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <input
                  id="trycycle-priv-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={checkboxValues.trycyclePriv}
                  onChange={() => onCheckboxChange("trycyclePriv")}
                />
                <label
                  htmlFor="trycycle-priv-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tricycle (Private)
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <input
                  id="tricycle-pub-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={checkboxValues.trycyclePub}
                  onChange={() => onCheckboxChange("trycyclePub")}
                />
                <label
                  htmlFor="tricycle-pub-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tricycle (Public)
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <input
                  id="wax-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={checkboxValues.wax}
                  onChange={() => onCheckboxChange("wax")}
                />
                <label
                  htmlFor="wax-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Wax
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <input
                  id="back-zero-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={checkboxValues.backZero}
                  onChange={() => onCheckboxChange("backZero")}
                />
                <label
                  htmlFor="back-zero-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Back 2 Zero
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <input
                  id="buffing-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={checkboxValues.buffing}
                  onChange={() => onCheckboxChange("buffing")}
                />
                <label
                  htmlFor="buffing-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Buffing
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-dbgContainer2">
              <div className="flex items-center ps-3">
                <input
                  id="engine-wash-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={checkboxValues.engineWash}
                  onChange={() => onCheckboxChange("engineWash")}
                />
                <label
                  htmlFor="engine-wash-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Engine Wash
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Carwash;
