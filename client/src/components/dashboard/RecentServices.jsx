function RecentServices({ logsData }) {
  const sortedLogs = Array.isArray(logsData)
    ? logsData.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  // Get only the latest 20 entries
  const latestLogs = sortedLogs.slice(0, 20);
  return (
    <>
      <div className="flex justify-between pb-4">
        <div>
          <h1 className="dark:text-gray-300 text-xl text-ddbackground font-poppins">
            Recent Services
          </h1>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Plate Number
              </th>
              <th scope="col" className="px-6 py-3">
                Service
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(logsData) && logsData.length > 0 ? (
              logsData.map((log) => (
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

                  <td className="px-6 py-4">
                    {log.serviceNames &&
                      log.serviceNames.split(",").map((service, index) => (
                        <span key={index}>
                          {service.trim()}
                          <br />
                        </span>
                      ))}
                  </td>

                  <td className="px-6 py-4">{log.date}</td>
                  <td className="px-6 py-4">{log.total}</td>
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

export default RecentServices;
