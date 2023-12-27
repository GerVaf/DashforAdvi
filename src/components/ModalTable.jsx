import React from "react";

const ModalTable = () => {
  return (
    <>
      {/* Table Header */}
      <div className="grid grid-cols-12 items-center text-[#344767] dark:text-white dark:border-secondary dark:bg-secondary text-center text-base font-semibold border-b py-3">
        <h1 className="col-span-1">No.</h1>
        <h1 className="col-span-2">Time</h1>
        <h1 className="col-span-1">Action</h1>
        <h1 className="col-span-5">Status</h1>
        <h1 className="col-span-3">Note</h1>
      </div>

      {/* Table Row */}
      <div>
        <div className="grid grid-cols-12 items-center text-center py-5 border-b transition-colors hover:bg-gray-200 dark:border-secondary dark:bg-secondary dark:text-white dark:hover:bg-primary">
          <div className="col-span-1 flex justify-center items-center">1</div>
          <p className="col-span-2">123123</p>
          <p className="col-span-1">action</p>
          <div className="col-span-5 cursor-pointer flex items-center justify-center gap-3">
            blah
          </div>
          <div className="col-span-3 flex items-center justify-center">
            note herer
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTable;
