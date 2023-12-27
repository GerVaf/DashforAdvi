import React from "react";

import ListDropDown from "../ListDropDown";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import ModalTable from "../ModalTable";
const ListTable = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Table Header */}
      <div className="grid grid-cols-12 items-center text-[#344767] dark:text-white dark:border-secondary dark:bg-secondary text-center text-base font-semibold border-b py-3">
        <h1 className="col-span-1">No.</h1>
        <h1 className="col-span-2">Name</h1>
        <h1 className="col-span-1">Date</h1>
        <h1 className="col-span-5">Status</h1>
        <h1 className="col-span-3">Action</h1>
      </div>

      {/* Table Row */}
      <div>
        <div className="grid grid-cols-12 items-center text-center py-5 border-b transition-colors hover:bg-gray-200 dark:border-secondary dark:bg-secondary dark:text-white dark:hover:bg-primary">
          <div className="col-span-1 flex justify-center items-center">1</div>
          <p className="col-span-2">Wai Linn Aung</p>
          <p className="col-span-1">12.3.2023</p>
          <div className="col-span-5 cursor-pointer flex items-center justify-center gap-3">
            <div className=" flex justify-center items-center bg-green-500 rounded-md px-3 text-white">
              publish
            </div>
            <div className=" flex justify-center items-center bg-orange-500 rounded-md px-3 text-white">
              pending
            </div>
            <div className=" flex justify-center items-center bg-red-500 rounded-md px-3 text-white">
              draft
            </div>
          </div>
          <div className="col-span-3 flex items-center justify-center">
            <ListDropDown values={["edit", "history", "delete"]} open={open}/>
          </div>
        </div>
      </div>
      <Modal opened={opened} onClose={close} title="History">
        <ModalTable/>
      </Modal>
    </>
  );
};

export default ListTable;
