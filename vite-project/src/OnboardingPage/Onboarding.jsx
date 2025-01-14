import React from "react";
import Koinstack from "../images/Koinstack.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Onboarding() {
  return (
    <>
      <main className="h-[800px] w-[screen] bg-[url('src/images/Background.svg')] sm:h-[100vh] lg:h-[50vh] md:h-[100vh]   bg-cover bg-center bg-no-repeat">
        <div className="py-4 px-4">
          <img src={Koinstack} alt="" width="50%" />
        </div>

        <section className="pt-[380px] font-bold  ">
          <div className="flex font-inter text-3xl text-white items-center flex-col">
            <h1>Welcome to</h1>
            <h1>Koinstack</h1>
          </div>
          <div className="flex font-inter items-center text-white flex-col">
            <p>Your gateway to a seamless</p>
            <p>payment experience</p>
          </div>
        </section>

        <div className="text-white flex justify-end pt-[180px]">
          <NavLink to="/Carousel" className="flex items-center space-x-[-16px]">
            <MdOutlineKeyboardArrowRight size={40} color="white" />
            <MdOutlineKeyboardArrowRight size={40} color="E6DAD4" />
            <MdOutlineKeyboardArrowRight size={40} color="C9B2A6" />
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default Onboarding;
