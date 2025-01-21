import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Mainpage/Navbar";
import Wallet from "../Mainpage/Wallet";

const Main = () => {
  return (
    <div className="flex justify-between items-center flex-col bg-[#FAF7F2] min-h-screen h-fit">
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Main;
