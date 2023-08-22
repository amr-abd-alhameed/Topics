import React from "react";import Title from "./Title";
import OverLay from "./OverLay";
import { BsSearch } from "react-icons/bs";
// import { Button } from "@material-tailwind/react";

const Work = () => {
  const aaa = <BsSearch />;
  const data = [
    {
      name: "Search your favourite topic",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?",
      icon: <BsSearch />,
    },
    {
      name: "Bookmark & Keep it for yourself",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?",
      icon: <BsSearch />,
    },
    {
      name: "Read & Enjoy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?",
      icon: <BsSearch />,
    },
  ];
  return (
    <section
      id="how"
      className="work relative  text-white mt-[50px] py-[100px]"
    >
      <OverLay />
      <div className="z-10 relative p-[10px]">
        <Title className={"text-center text-white"}>how it works</Title>
        <div className="mt-8  w-[900px] mx-auto max-w-full">
          <ul>
            {data.map((ele) => (
              <li key={ele.name} className="flex items-start gap-8 mb-10">
                <div className=" bg-secondary-color p-4 rounded-full  ">
                  <span className="text-3xl  flex items-center justify-center  border-4 w-20 h-20 rounded-full">
                    {ele.icon}
                  </span>
                </div>
                <div className="">
                  <h4 className="text-2xl font-semibold mb-4"> {ele.name}</h4>
                  <p className="text-lg font-normal leading-10">{ele.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center flex-col sm:flex-row gap-4 justify-center mt-[3rem]">
          <p className="font-normal  text-xl">Want to learn more?</p>
          {/* <Button className="flex items-center justify-center rounded-[50px] px-[26px] text-xl border-2 border-secondary-color text-white font-normal capitalize bg-transparent w-fit">
            check out youtube
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
