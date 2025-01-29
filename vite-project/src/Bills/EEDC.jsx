import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const EEDC = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    name: "EEDC Prepaid",
    image: "/src/images/EEDC.jpg",
  });
  const Dropdown = () => SetIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    SetIsOpen(false);
  };
  const options = [
    { name: "EEDC Postpaid", image: "/src/images/EEDC.jpg" },
    { name: "EEDC Prepaid", image: "/src/images/EEDC.jpg" },
  ];

  return (
    <>
      <main className="bg-[#FAF7F2] w-screen  px-6 h-screen">
        <div className=" flex flex-row pt-5 pb-1 gap-28">
          <div className="bg-white  flex justify-center text-xl pl-2 items-center h-[35px]  rounded-full w-[35px]">
            <NavLink to={"/Electricity"}>
              <MdArrowBackIos />
            </NavLink>
          </div>
          <div className="text-xl  text-[#550509] font-bold">EEDC</div>
        </div>
        <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div>

        <section className="pt-14 flex flex-col gap-4">
          <p>Select package</p>
          <div className="h-[65px] py-1  flex px-2 rounded-lg  flex-col w-full   bg-white ">
            <div className=" flex flex-col " onClick={Dropdown}>
              <div className="flex gap-4 px-5">
                <img
                  className="w-14   border-[#8FEBFF] border-2 rounded-full "
                  src={selectedOption.image}
                  alt=""
                />
                <span className="pt-3">{selectedOption.name}</span>
              </div>
              {isOpen && (
                <div className="flex gap-2 flex-col">
                  {options.map((option, index) => (
                    <div key={index} onClick={() => handleOptionClick(option)}>
                      <div className="flex gap-4">
                        <img
                          className="w-14  border-[#8FEBFF] border-2 rounded-full"
                          src={option.image}
                          alt=""
                        />
                        <span className="pt-4 ">{option.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className=" fixed right-9 pt-4">
                <FaCaretDown />
              </div>
            </div>
          </div>
        </section>
        <div className="flex pt-36 flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p>Meter Number</p>
            <div className="h-[50px]  flex px-2 rounded-lg  flex-col w-full   bg-white ">
              <input
                className="w-full pt-3"
                type="text"
                placeholder="Meter Number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Amount</p>
            <div className="h-[50px]  flex px-2 rounded-lg  flex-col w-full   bg-white ">
              <input className="w-full pt-3" type="text" placeholder="0.00" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EEDC;
