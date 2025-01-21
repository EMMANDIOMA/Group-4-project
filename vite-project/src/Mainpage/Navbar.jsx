import React from "react";
import { FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { BiSolidWallet } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <main className="h-[20%] ">
        <div className=" py-2 h-[50px] rounded-full  bg-[#550509] shadow-lg">
          <div className=" flex gap-10 px-4   text-[#550509] ">
            <div className="bg-[whitesmoke] pl-1 rounded-full w-[37px] h-[35px]  ">
              <NavLink to={"/Home"}>
                <FaHouse size={30} />
              </NavLink>
            </div>
            <div className="bg-[whitesmoke] rounded-full   h-[35px] ">
              <NavLink to={"/Paybill"}>
                <RiBillLine className="py-1 px-1" size={38} />
              </NavLink>
            </div>
            <div className="bg-[whitesmoke] rounded-full   h-[35px] ">
              <NavLink to={"/Wallet"}>
                <BiSolidWallet className="py-1 px-1" size={38} />
              </NavLink>
            </div>
            <div className="bg-[whitesmoke] rounded-full   h-[35px] ">
              <NavLink to={"/Setting"}>
                <MdOutlineSettings className="py-1 px-1" size={38} />
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Navbar;
