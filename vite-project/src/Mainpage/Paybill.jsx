import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { LuTv } from "react-icons/lu";
import { IoFootballOutline } from "react-icons/io5";

const Paybill = () => {
  return (
    <>
      <main className="px-8 h-[80%]  md:w-[50%] w-screen">
        <div className="py-4 flex justify-center text-xl text-[#550509] font-bold">
          Pay Bills
        </div>
        <div className="flex h-[40px] px-3 rounded-xl w-[100%] bg-white ">
          <div className="pt-3">
            <CiSearch />
          </div>
          <input
            className="w-[100%] rounded-xl"
            type="text"
            placeholder="  search"
          />
        </div>

        <section className="pt-6">
          <div className="flex flex-col gap-2 ">
            <NavLink to={"/Airtime"} className="bg-white flex gap-9 py-2  h-[90px] px-3 rounded-xl w-[100%] ">
              <div className="  flex flex-row  items-center  ">
                <div className=" bg-[#550509] justify-center text-white text-xl  w-8 flex h-[35px] rounded-full items-center ">
                  <FaPhone />
                </div>
              </div>
              <div className="text-sm font-medium flex flex-col gap-1 ">
                <p>Airtime</p>
                <p>
                  Top up your airtime balance with MTN,Airtel,Glo and 9MObile.
                </p>
              </div>
            </NavLink>
            <NavLink to={"/Data"} className="bg-white  flex gap-9 py-1  h-[90px] px-3 rounded-xl w-[100%] ">
              <div className="  flex flex-row  items-center  ">
                <div className=" bg-[#550509] justify-center text-white text-xl  w-8 flex h-[35px] rounded-full items-center ">
                  <FaWifi />
                </div>
              </div>
              <div className="text-sm font-medium flex flex-col gap-1 ">
                <p>Data</p>
                <p>
                  Buy data bundles from variuos network providers for your
                  family an freinds
                </p>
              </div>
            </NavLink>
            <NavLink to={"/Electricity"} className="bg-white  flex gap-9 py-1  h-[90px] px-3 rounded-xl w-[100%] ">
              <div className="  flex flex-row  items-center  ">
                <div className=" bg-[#550509] justify-center text-white text-xl  w-8 flex h-[35px] rounded-full items-center ">
                  <RiLightbulbFlashLine />
                </div>
              </div>
              <div className="text-sm font-medium flex flex-col gap-1 ">
                <p>Electricity</p>
                <p>
                  Pay your prepaid and postpaid electricty bills from various
                  discos
                </p>
              </div>
            </NavLink>
            <NavLink className="bg-white  flex gap-9 py-1  h-[90px] px-3 rounded-xl w-[100%] ">
              <div className="  flex flex-row  items-center  ">
                <div className=" bg-[#550509] justify-center text-white text-xl  w-8 flex h-[35px] rounded-full items-center ">
                  <LuTv />
                </div>
              </div>
              <div className="text-sm font-medium flex flex-col gap-1 ">
                <p>Television</p>
                <p>Pay your DSTV,Star Times,GOTV,or SHOWMAX.</p>
              </div>
            </NavLink>
            <NavLink className="bg-white  flex gap-9 py-1  h-[90px] px-3 rounded-xl w-[100%] ">
              <div className="  flex flex-row  items-center  ">
                <div className=" bg-[#550509] justify-center text-white text-xl  w-8 flex h-[35px] rounded-full items-center ">
                  <IoFootballOutline />
                </div>
              </div>
              <div className="text-sm font-medium flex flex-col gap-1 ">
                <p>Betting</p>
                <p>
                  Top up your SportyBet,Bet9ja,Betano,M-Sport,1x Bet wallet
                  without hassle.
                </p>
              </div>
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default Paybill;
