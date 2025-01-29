import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";

const Airtime = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    name: "MTN",
    image: "/src/images/MTN.jpg",
  });
  const toogleDropdown = () => SetIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    SetIsOpen(false);
  };
  const options = [
    { name: "MTN", image: "/src/images/MTN.jpg" },
    { name: "AIRTEL", image: "/src/images/AIRTEL.jpg" },
    { name: "GLO", image: "/src/images/GLO.jpg" },
    { name: "9mobile", image: "/src/images/9mobile.jpg" },
  ];

  return (
    <>
      <main className="bg-[#FAF7F2] w-screen  px-6 h-screen">
        <div className=" flex flex-row pt-5 pb-1 gap-28">
          <div className="bg-white  flex justify-center text-xl pl-2 items-center h-[35px]  rounded-full w-[35px]">
            <NavLink to={"/Paybill"}>
              <MdArrowBackIos />
            </NavLink>
          </div>
          <div className="text-xl  text-[#550509] font-bold">Airtime</div>
        </div>
        <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div>
        <section className="pt-10 font-serif font-medium text-xl ">
          <div>
            <p>select amount</p>
          </div>
          <div className="py-4  gap-4 justify-center  flex ">
            <div className="h-[50px] rounded-lg w-[150px] bg-white">
              <p className="text-3xl justify-center  pt-1  flex text-black">
                <p className="pt-1 ">
                  <TbCurrencyNaira />
                </p>
                100
              </p>
            </div>
            <div className="h-[50px]  rounded-lg w-[150px] bg-white">
              <p className="text-3xl justify-center  pt-1  flex text-black">
                <p className="pt-1 ">
                  <TbCurrencyNaira />
                </p>
                200
              </p>
            </div>
            <div className="h-[50px] rounded-lg w-[150px] bg-white">
              <p className="text-3xl justify-center  pt-1  flex text-black">
                <p className="pt-1 ">
                  <TbCurrencyNaira />
                </p>
                500
              </p>
            </div>
          </div>
          <div className="flex pb-6 gap-4 justify-center">
            <div className="h-[50px] rounded-lg w-[150px] bg-white">
              {" "}
              <p className="text-3xl justify-center  pt-1  flex text-black">
                <p className="pt-1 ">
                  <TbCurrencyNaira />
                </p>
                750
              </p>
            </div>
            <div className="h-[50px] rounded-lg w-[150px] bg-white">
              {" "}
              <p className="text-3xl justify-center  pt-1  flex text-black">
                <p className="pt-1 ">
                  <TbCurrencyNaira />
                </p>
                1000
              </p>
            </div>
            <div className="h-[50px] rounded-lg w-[150px] bg-white">
              {" "}
              <p className="text-3xl justify-center  pt-1  flex text-black">
                <p className="pt-1 ">
                  <TbCurrencyNaira />
                </p>
                2000
              </p>
            </div>
          </div>

          <div>
            <p className="py-2">Amount</p>
            <div className=" h-[60px] flex    rounded-lg w-[100%] bg-white ">
              <input
                className="w-[100%]  rounded-xl"
                type="text"
                placeholder="  0.00"
              />
            </div>
          </div>
        </section>
        <section className="flex  gap-8 py-6">
          <div className="font-medium flex flex-col gap-4">
            <p>Select Network</p>
            <div className="h-[50px]  flex px-2  flex-col w-[135px]   bg-white ">
              <div className="flex  justify-end  pt-2  ">
                <div className="flex   " onClick={toogleDropdown}>
                  <div className="flex gap-2 flex-col">
                    <div className="flex px-3 gap-2 text-sm  ">
                      <img
                        className="w-8 rounded-full"
                        src={selectedOption.image}
                        alt={selectedOption.name}
                      />
                      <span className="pt-2">{selectedOption.name}</span>
                    </div>

                    {isOpen && (
                      <div className="flex pl-3  bg-white  w-[175%] box-border  flex-col gap-4">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                          >
                            <div className="flex   gap-2">
                              <img
                                className="w-7 rounded-full"
                                src={option.image}
                                alt={option.name}
                              />
                              <span>{option.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className=" pt-2  pl-8">
                    <FaCaretDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-medium flex flex-col gap-3">
            <p>Phone Number</p>
            <div>
              <input
                className="w-[100%] h-[50px] rounded-lg"
                type="Number"
                placeholder=" 0801 234 5678 "
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Airtime;
