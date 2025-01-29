import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";

const Electricity = () => {
  return (
    <>
      <main className="bg-[#FAF7F2] w-screen  px-6 h-screen">
        <div className=" flex flex-row pt-5 pb-1 gap-28">
          <div className="bg-white  flex justify-center text-xl pl-2 items-center h-[35px]  rounded-full w-[35px]">
            <NavLink to={"/Paybill"}>
              <MdArrowBackIos />
            </NavLink>
          </div>
          <div className="text-xl  text-[#550509] font-bold">Electricity</div>
        </div>
        <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div>
        <section>
          <div className="pt-14">
            <p>Select Provider</p>
          </div>
          <div className="flex flex-col pt-5 gap-3">
            <NavLink to={"/EEDC"} className="h-[70px] flex px-2  bg-white rounded-lg w-full">
              <div className="flex py-2 gap-3">
                <img
                  className=" w-14 border-[#8FEBFF] border-2 rounded-full"
                  src="src/images/EEDC.jpg"
                  alt=""
                />
                <p className="pt-3">EEDC</p>
              </div>
            </NavLink>
            <div className="h-[70px] px-2 bg-white rounded-lg w-full">
              <div className="flex py-2 gap-3">
                <img
                  className=" w-14 border-[#8FEBFF] border-2 rounded-full"
                  src="src/images/APL.jpg"
                  alt=""
                />
                <p className="pt-3 ">APL Electric</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Electricity;
