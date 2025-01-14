import React from "react";
import { NavLink } from "react-router-dom";
function Welcome() {
  return (
    <>
      <main className="h-[100vh] bg-[url('src/images/welcome.svg')]  bg-cover bg-center bg-no-repeat  sm:h-[100vh] lg:h-[50vh] md:h-[100vh] ">
        <div className=" h-[100%] w-[100%] justify-end items-center  pb-16 gap-8 flex flex-col lg:hidden">
          <NavLink
            to={"/Signup"}
            className=" text-white w-[80%] rounded-xl text-1xl font-semibold justify-center items-center   flex  font-inter h-[9%]  bg-[red]  lg:hidden "
          >
            Signup
          </NavLink>
          <NavLink
            to={"/Login"}
            className=" text-black w-[80%] rounded-xl text-1xl font-semibold justify-center items-center   flex  font-inter h-[9%]  bg-[white]  lg:hidden "
          >
            Login
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default Welcome;
