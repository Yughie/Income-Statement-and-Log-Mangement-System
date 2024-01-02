function RecentServices() {
  return (
    <>
      <div className="flex justify-between pb-4">
        <div>
          <h1 className="dark:text-gray-300 text-xl text-ddbackground font-poppins">
            Recent Services
          </h1>
        </div>
      </div>
      <div className="flex justify-between  text-gray-900 dark:text-gray-300 overflow-auto custom-scrollbar">
        <div className="w-1/4 text-center ">
          <div className="mb-4">Plate No.</div>
        </div>
        <div className=" w-1/4 text-center">
          <div className="mb-4">Services</div>
        </div>
        <div className="w-1/4 text-center ">
          <div className="mb-4">Date</div>
        </div>
        <div className=" w-1/4 text-center">
          <div className="mb-4">Amount</div>
        </div>
      </div>
      <div className="flex justify-between  text-gray-900 dark:text-gray-300 max-h-80 overflow-auto">
        <div className="w-1/4 text-center ">
          {/*DATA Plate No.*/}
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
          <div>256789</div>
        </div>
        <div className="w-1/4 text-center">
          {/*DATA Services*/}
          <div>256789</div>
        </div>
        <div className="w-1/4 text-center ">
          {/*DATA Date*/}
          <div>256789</div>
        </div>
        <div className="w-1/4 text-center">
          {/*DATA Amount*/}
          <div>256789</div>
        </div>
      </div>
    </>
  );
}

export default RecentServices;
