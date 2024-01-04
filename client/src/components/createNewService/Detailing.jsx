function Detailing() {
  return (
    <>
      <div className="w-full h-96 lg:w-1/3 lg:mr-4 bg-dbackground p-4 mb-4 rounded-md">
        <h1 className="mb-4 text-xl text-gray-300 text-center">
          <label htmlFor="detailing">Detailing</label>
        </h1>
        <div className="flex flex-col justify-between  text-gray-900 dark:text-gray-300 max-h-80 overflow-auto pb-4">
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
          <div className="flex flex-shrink justify-center gap-4 flex-wrap">
            <button className="flex justify-center bg-gray-50 border border-gray-300 hover:shadow-shadowPurple  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 min-w-32 p-2.5 hover:bg-gray-300 dark:hover:bg-darkPurple dark:bg-gray-700  dark:border-gray-600">
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
            <button className="flex justify-center bg-gray-50 border border-gray-300 hover:shadow-redShadow text-gray-900 text-sm rounded-lg  min-w-32 p-2.5  dark:bg-gray-700 dark:hover:bg-red-800 dark:border-gray-700">
              <span className="dark:border-gray-600  dark:placeholder-gray-400  dark:text-white ">
                Delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailing;
