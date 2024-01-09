function Pricing() {
  return (
    <>
      <div className="p-4 rounded-lg dark:border-bg-darkPurple ">
        <span className="w-full ">
          <h1 className="text-ddbackground dark:text-gray-300 text-3xl font-poppins mx-auto text-center ">
            Pricing
          </h1>
        </span>
      </div>
      <div className="w-full  flex flex-row lg:flex-row ">
        <div className="w-full flex flex-col lg:flex-row gap-4 bg-gray-400 dark:bg-dbackground p-4 mb-4 rounded-md">
          {/*  Plate Number */}
          <div className="lg:w-1/3">
            <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center ">
              <label htmlFor="work-hour">Work Hour</label>
            </h1>
            <div className="mb-4">
              <select
                id="work-hour"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select work hour</option>
                <option value="normal-hour">Normal</option>
                <option value="overtime-hour">Overtime</option>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select vehicle size</option>
                <option value="normal-hour">S</option>
                <option value="overtime-hour">M</option>
                <option value="normal-hour">L</option>
                <option value="overtime-hour">XL</option>
                <option value="normal-hour">XXL</option>
                <option value="overtime-hour">XL & XXL</option>
              </select>
            </div>
          </div>
          <div className="lg:w-1/3">
            {" "}
            <h1 className="mb-4 text-xl dark:text-gray-300 text-ddbackground text-center">
              <label htmlFor="vehicle-size">Extra Charge</label>
            </h1>
            <div className="w-full">
              <input
                type="text"
                id="vehicle-description"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Enter extra charge"
                required
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
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg rounded-s-gray-100   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="00000"
                  required
                  disabled
                />
              </div>
              <div className="mb-4 w-40">
                <button className="w-32 text-center bg-gray-50 border border-gray-300  rounded-r-lg hover:shadow-shadowPurple text-ddbackground text-sm  focus:ring-blue-500 focus:border-blue-500 p-2.5 px-6 hover:bg-gray-300 dark:hover:bg-darkPurple dark:bg-gray-700  dark:border-gray-600">
                  <span className="dark:border-gray-600  dark:placeholder-gray-400  dark:text-white text-ddbackground dark:focus:ring-blue-500 dark:focus:border-blue-500">
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

export default Pricing;
