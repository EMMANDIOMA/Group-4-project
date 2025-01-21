import React from "react";
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <>
      <main className="h-screen bg-[url('src/images/welcome.svg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-end">
        <div className="w-full max-w-md flex flex-col items-center gap-4 pb-8 px-4">
          <NavLink
            to="/Signup"
            className="text-white w-full max-w-[300px] rounded-xl text-lg font-semibold flex justify-center items-center h-12 bg-[red]"
          >
            Signup
          </NavLink>
          <NavLink
            to="/Login"
            className="text-black w-full max-w-[300px] rounded-xl text-lg font-semibold flex justify-center items-center h-12 bg-white border border-gray-300 "
          >
            Login
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default Welcome;
