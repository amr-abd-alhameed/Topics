"use client";
import Image from "next/image";
// import { Button } from "@material-tailwind/react";
import React from "react";
const CardI = ({ logo, spanBG, active }) => {
  return (
    <div
      className={`bg-white rounded-2xl ${
        active
          ? "lg:w-[670px] lg:h[248px] md:w-[576px] md:h[308px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-11  mx-auto"
          : "max-h-[550px] min-w-[450px]"
      }  p-7 overflow-hidden hover:-translate-y-4 transition-all duration-200 ${
        active ? "flex flex-col  gap-4" : ""
      }`}
    >
      <div className={``}>
        <div className="flex justify-between items-center">
          <p className="text-3xl text-black font-medium capitalize ">
            web design
          </p>
          <span
            className={`w-7 flex items-center justify-center p-4 rounded-lg h-7 text-white ${spanBG}`}
          >
            14
          </span>
        </div>
        <p className=" mt-5 font-medium text-xl mb-3 capitalize text-p-color">
          when you search for frontend end developers you will notice that{" "}
          <span className="text-prim-color">amr</span> is the best
        </p>

        <div className="">
          <Image src={logo} className=" w-full h-auto object-cover" />
        </div>
      </div>
      {active &&
        {
          /* <Button className="flex items-center justify-center rounded-[50px] px-[26px] text-xl text-white bg-secondary-color w-fit">
          learn more
        </Button> */
        }}
    </div>
  );
};

export default CardI;
