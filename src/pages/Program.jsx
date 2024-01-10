import React from "react";
import ProgramCard from "../components/Program/ProgramCard";
import ProgramList from "../components/Program/ProgramList";

const Program = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* program card  */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className=" col-span-1">
          <ProgramCard />
        </div>
        <div className=" col-span-1">
          <ProgramCard />
        </div>
        <div className=" col-span-1">
          <ProgramCard />
        </div>
      </div>

      {/* program including blogs  */}
      <ProgramList/>
    </div>
  );
};

export default Program;
