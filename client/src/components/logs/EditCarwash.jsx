const EditCarwash = ({ customerData, checkboxValues, onCheckboxChange }) => {
  console.log("EDIT CARWASH:", customerData);
  const handleCheckboxChange = (category, serviceName) => {
    onCheckboxChange(category, serviceName);
    // Update the state in EditCarwash if necessary
  };
  return (
    <>
      <div className="w-full h-96 lg:w-1/3 dark:bg-dbackground bg-gray-300 mb-4 rounded-md">
        <h1 className="mb-4 text-xl font-bold dark:text-gray-300 text-ddbackground text-center">
          <label htmlFor="service-carwash">Carwash</label>
        </h1>
        <div className="flex flex-col justify-between  text-gray-900 dark:text-gray-300 max-h-80 overflow-auto pb-4">
          <ul className="w-full  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="carwash-carwash"
                  checked={customerData.carwash}
                  onChange={() => onCheckboxChange("carwash", "carwash")}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="carwash-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Carwash
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="motorwash-carwash"
                  checked={customerData.motorWash}
                  onChange={() => onCheckboxChange("carwash", "motorWash")}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="motorwash-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Motorwash
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="tricycle-priv-carwash"
                  checked={customerData.trycyclePriv}
                  onChange={() => onCheckboxChange("carwash", "trycyclePriv")}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="tricycle-priv-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tricycle (Private)
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="tricycle-pub-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={customerData.trycyclePub}
                  onChange={() => onCheckboxChange("carwash", "trycyclePub")}
                />
                <label
                  htmlFor="tricycle-pub-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tricycle (Public)
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="wax-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={customerData.wax}
                  onChange={() => onCheckboxChange("carwash", "wax")}
                />
                <label
                  htmlFor="wax-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Wax
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="back-zero-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={customerData.back2Zero}
                  onChange={() => onCheckboxChange("carwash", "back2Zero")}
                />
                <label
                  htmlFor="back-zero-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Back 2 Zero
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="buffing-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={customerData.buffing}
                  onChange={() => onCheckboxChange("carwash", "buffing")}
                />
                <label
                  htmlFor="buffing-carwash"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Buffing
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="engine-wash-carwash"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={customerData.engineWash}
                  onChange={() => onCheckboxChange("carwash", "engineWash")}
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

export default EditCarwash;
