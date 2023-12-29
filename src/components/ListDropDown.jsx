import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const ListDropDown = ({ values, open }) => {
  const [show, setShow] = useState(false);

  return (
    <div onClick={() => setShow(!show)} className="relative">
      <div className="flex items-center justify-between cursor-pointer px-3">
        <RxHamburgerMenu />
      </div>
      <div
        onMouseLeave={() => setShow(false)}
        className={`top-10 absolute w-[100px] z-50  rounded border border-slate-100 bg-white p-3 flex flex-col gap-2 transition-opacity ${
          show ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {values.map((item) => {
          return (
            <h1
              key={item}
              onClick={item === "history" ? open : close}
              className="border-b pb-1 border-transparent hover:font-semibold hover:border-slate-100 cursor-pointer"
            >
              {item}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default ListDropDown;
