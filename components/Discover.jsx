import React from "react"; // import { Button } from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import CardI from "./CardI";
import CardII from "./CardII";
import logo from "../assets/images/topics/undraw_Remote_design_team_re_urdx.png";

const Discover = () => {
  return (
    <section className="flex flex-col">
      <div className="first bg-grad h-[70vh] lg:h-[70vh]">
        <div className="mt-[180px] flex flex-col gap-5 justify-center mx-auto items-center container px-4 md:px-11 lg:px-20">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Discover. Learn. Enjoy
          </h1>
          <p className="text-primary text-lg md:text-xl lg:text-2xl font-semibold">
            platform for creatives around the world
          </p>
          <div className="flex gap-4 items-center justify-between rounded-[50px] bg-white py-4 w-full px-[30px] ">
            <span>
              <BsSearch className="text-2xl" />
            </span>
            <input
              className="p-[10px] outline-none text-lg w-full max-w-[550px] text-p-color  md:w-[650px] lg:w-[800px]"
              placeholder="Design, code, Marketing, Finance ..."
            ></input>
            {/* <Button className="flex items-center justify-center rounded-[50px] px-[26px] text-xl text-white bg-secondary-color">
              Search
            </Button> */}
          </div>
        </div>
      </div>
      <div className="second bg-secondary-color h-[120vh] lg:h-[60vh]  rounded-b-[130px]">
        <div className="flex flex-col lg:flex-row gap-5 items-center container -translate-y-28 ">
          <CardI logo={logo} spanBG={"bg-[#00B0FF]"} />
          <CardII />
        </div>
      </div>
    </section>
  );
};

export default Discover;
