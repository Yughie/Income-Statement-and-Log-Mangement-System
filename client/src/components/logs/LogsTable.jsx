function LogsTable({ logsData }) {
  const formatDate = (isoDateString) => {
    const dateObject = new Date(isoDateString);
    return dateObject.toLocaleDateString(); // Use toLocaleDateString for a localized date format
  };

  // Sort logsData array based on CustomerID in descending order
  const sortedLogsData = [...logsData].sort((a, b) => b.date - a.date);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Plate Number
              </th>
              <th scope="col" className="px-6 py-3">
                Vehicle Type
              </th>
              <th scope="col" className="px-6 py-3">
                Vehicle Description
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Services
              </th>
              <th scope="col" className="px-6 py-3">
                EXTRA CHARGE
              </th>
              <th scope="col" className="px-6 py-3">
                Total Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Time and Date
              </th>
              <th scope="col" className="px-6 py-3">
                Option
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(sortedLogsData) && sortedLogsData.length > 0 ? (
              sortedLogsData.map((log) => (
                <tr
                  key={log.CustomerID}
                  className="odd:bg-gray-200 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {log.plateNumber}
                  </th>
                  <td className="px-6 py-4">{log.vehicleType}</td>
                  <td className="px-6 py-4">{log.vehicleDescription}</td>
                  <td className="px-6 py-4">{log.phoneNumber}</td>
                  <td className="px-6 py-4">
                    {log.serviceNames &&
                      log.serviceNames.split(",").map((service, index) => (
                        <span key={index}>
                          {service.trim()}
                          <br />
                        </span>
                      ))}
                  </td>

                  <td className="px-6 py-4">{log.extraCharge}</td>
                  <td className="px-6 py-4">{log.total}</td>
                  <td className="px-6 py-4">{formatDate(log.date)}</td>
                  <td className="px-6 py-4 flex items-center justify-center gap-4">
                    {/*EDIT BUTTON*/}
                    <button className="">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="27" height="27" rx="13.5" fill="#60FF66" />
                        <path
                          d="M17.2464 6.07501L15.3846 7.93689L19.1083 11.6606L20.9702 9.79876L17.2464 6.07501ZM13.5227 9.79876L6.0752 17.2463V20.97H9.79895L17.2464 13.5225L13.5227 9.79876Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    {/*DELETE BUTTON*/}
                    <button>
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="27" height="27" rx="13.5" fill="#FF4343" />
                        <path
                          d="M12.4588 4.72501C11.2884 4.72501 10.3309 5.68254 10.3309 6.85286H8.20305C7.03273 6.85286 6.0752 7.8104 6.0752 8.98072H20.9702C20.9702 7.8104 20.0127 6.85286 18.8423 6.85286H16.7145C16.7145 5.68254 15.7569 4.72501 14.5866 4.72501H12.4588ZM8.20305 11.1086V21.3436C8.20305 21.5776 8.37328 21.7479 8.60735 21.7479H18.4593C18.6934 21.7479 18.8636 21.5776 18.8636 21.3436V11.1086H16.7358V18.5561C16.7358 19.1519 16.2676 19.62 15.6718 19.62C15.076 19.62 14.6079 19.1519 14.6079 18.5561V11.1086H12.48V18.5561C12.48 19.1519 12.0119 19.62 11.4161 19.62C10.8203 19.62 10.3522 19.1519 10.3522 18.5561V11.1086H8.22433H8.20305Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LogsTable;
