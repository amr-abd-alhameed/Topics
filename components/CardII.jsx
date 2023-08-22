import React from "react";// import { Button } from "@material-tailwind/react";
import OverLay from "./OverLay";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
const CardII = () => {
  return (
    <div className="overflow-hidden card-image hover:-translate-y-4 transition-all duration-200 rounded-2xl max-h-[550px] p-7 text-white min-w-[450px] relative">
      <OverLay />
      <div className="z-10 relative ">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-medium capitalize">finance</p>
          <span className="w-7 flex items-center justify-center p-4 rounded-lg h-7 text-white bg-[#00B0FF]">
            25
          </span>
        </div>
        <p className=" mt-5 font-medium text-xl capitalize  ">
          Topic template includes homepage , topics listening page and contact
          form Page and many other sections and this site if fully featured
        </p>
        <div>
          <div className="flex flex-col  justify-between mt-8">
            {/* <Button className="flex items-center justify-center rounded-[50px] px-[26px] text-xl text-white bg-secondary-color w-fit">
              learn more
            </Button> */}
          </div>
          <div className="flex items-center gap-8 mt-48 lg:mt-32 xl:mt-48">
            <p className="font-medium text-xl capitalize">Share</p>
            <div className="flex items-center gap-4">
              <span className="rounded-full p-3 bg-secondary-color cursor-pointer">
                <BsFacebook />
              </span>
              <span className="rounded-full p-3 bg-secondary-color  cursor-pointer">
                <BsTwitter />
              </span>
              <span className="rounded-full p-3 bg-secondary-color cursor-pointer ">
                <BsPinterest />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardII;
