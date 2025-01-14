import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [showpassword, setshowpassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const togglepasswordVisibility = () => {
    setshowpassword((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setErrorMessage("Both password fields are required.");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else {
      setErrorMessage("");

      console.log("Form submitted successfully!");
    }
  };

  return (
    <>
      <main className="h-[900px] w-[screen] px-4 bg-[url('src/images/Signup.svg')] sm:h-[100vh] lg:h-[50vh] md:h-[100vh]  bg-cover bg-center bg-no-repeat">
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
        <div className="text-white font-inter flex flex-col justify-center items-center pt-[90px]">
          <p className="text-2xl font-bold ">Create Account </p>
          <p className="pb-6">Lets get started</p>

          <div className=" w-[95%] h-fit   rounded-3xl  bg-gradient-to-r from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.6)]">
            <form action="">
              <div className="flex px-4 py-3 flex-col">
                <div className="flex flex-col gap-2">
                  <label className="text-white" htmlFor="Name">
                    First Name
                  </label>
                  <input
                    className="py-2 px-2 rounded-xl text-[grey]"
                    type="name"
                    placeholder="Enter your name"
                  ></input>
                </div>
                <div className="flex pt-2 flex-col gap-2">
                  <label className="text-white" htmlFor="Name">
                    Last Name
                  </label>
                  <input
                    className="py-2 px-2 rounded-xl text-[grey]"
                    type="name"
                    placeholder="Enter your last name"
                  ></input>
                </div>
                <div className="flex pt-2 flex-col gap-2">
                  <label className="text-white" htmlFor="Number">
                    Phone Number
                  </label>
                  <input
                    className="py-2 px-2 rounded-xl text-[grey]"
                    htmlFor="number"
                    placeholder="Enter your phone no."
                  ></input>
                </div>
                <div className="flex pt-2 flex-col gap-2">
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
                      } absolute right-4  text-black text-2xl font-bold cursor-pointer`}
                      onClick={togglepasswordVisibility}
                    ></i>
                  </div>
                </div>
                <div className="flex flex-col w-[full] pt-2 gap-2">
                  <label className="text-white" htmlFor="password">
                    Confirm password
                  </label>
                  <div className="relative pb-7">
                    <input
                      className="py-2 px-2 rounded-xl w-full text-[grey]"
                      type={showpassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                    />
                    <i
                      className={`bi ${
                        showpassword ? "bi-eye-slash" : "bi-eye"
                      } absolute right-4  text-black text-2xl font-bold cursor-pointer`}
                      onClick={togglepasswordVisibility}
                    ></i>
                  </div>
                </div>
                <div className="text-white font-inter  bg-[red] rounded-xl sm:rounded-xl   text-1xl  flex items-center justify-center h-[40px] w-[100%] font-inter">
                  <NavLink to={"/Onboarding"} className="">
                    Signup
                  </NavLink>
                </div>
                <div className="text-white flex gap-2 justify-center pt-16 font-inter font-bold sm:pt-20">
                  <p>I'm already a user.</p>
                  <NavLink to={"/Login"}>Login</NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
export default Signup;
