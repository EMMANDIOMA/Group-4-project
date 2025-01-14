import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showpassword, setshowpassword] = useState(false);
  const togglepasswordVisibility = () => {
    setshowpassword((prev) => !prev);
  };
  return (
    <>
      <main className="h-[800px] w-[screen] bg-[url('src/images/login.svg')] sm:h-[100vh] lg:h-[50vh] md:h-[100vh]   bg-cover bg-center bg-no-repeat">
        <div className="  py-5   px-5 ">
          <div className="bg-white h-[35px]  rounded-full w-[35px]">
            <NavLink
              to={"/"}
              className="flex font-extrabold pt-1 justify-center "
            >
              <i class="bi bi-chevron-left   text-lg"></i>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 justify-center pt-[260px] ">
          <p className="text-white text-2xl font-bold font-inter">
            Welcome Back
          </p>
          <div className=" w-[90%] h-fit px-4 rounded-3xl  bg-gradient-to-r from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.6)]">
            <form action="">
              <div className="flex py-3 flex-col">
                <div className="flex flex-col gap-2">
                  <label className="text-white" htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="py-2 px-2 rounded-xl text-[grey]"
                    type="email"
                    placeholder="Enter your email"
                  ></input>
                </div>
                <div className="flex flex-col w-[full] pt-2  gap-2">
                  <label className="text-white" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="py-2 px-2 rounded-xl w-full   text-[grey]"
                      type={showpassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <i
                      className={`bi ${
                        showpassword ? "bi-eye-slash" : "bi-eye"
                      } absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-2xl font-bold cursor-pointer`}
                      onClick={togglepasswordVisibility}
                    ></i>
                  </div>
                  <NavLink className="text-white pb-4 flex justify-end">
                    forgot password ?
                  </NavLink>
                </div>
                <div className="text-white  bg-[red] rounded-xl sm:rounded-xl   text-1xl font-black flex items-center justify-center h-[40px] w-[100%] font-inter">
                  <NavLink className="">Login</NavLink>
                </div>
                <div className="text-white flex gap-2 justify-center pt-16 font-inter font-bold sm:pt-20">
                  <p>I'm a new user.</p>
                  <NavLink to={"/Signup"}>Signup</NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
export default Login;
