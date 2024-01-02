import React from "react";
import WelcomeCard from "../components/Welcome/WelcomeCard";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
    <div className="bg-gray-500 text-white p-5">
      <h1 className="font-bold text-5xl">INDX</h1>
    </div>
    <div className="flex flex-col py-5">
      <div className="flex flex-wrap justify-center items-center gap-5 mb-5">
        <WelcomeCard />
        <WelcomeCard />
        <WelcomeCard />
      </div>
      <div className="self-center flex flex-col gap-y-3">
        <Link
          to={"/login"}
          className="px-10 py-2 rounded-md bg-gradient-to-r  text-white shadow-lg from-iconActive to-blue-600"
        >
          Login to INDX
        </Link>
        <Link className="px-10 py-2 rounded-md bg-gradient-to-r  text-white shadow-lg from-iconActive to-blue-600">
          Login to INDX biz
        </Link>
        <Link className="px-10 py-2 rounded-md bg-gradient-to-r  text-white shadow-lg from-iconActive to-blue-600">
          Login to INDX pro
        </Link>
      </div>
    </div></>
  );
};

export default Welcome;
