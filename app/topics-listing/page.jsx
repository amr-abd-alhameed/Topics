"use client";import BreadCrumb from "@/components/BreadCrumb";
import CardI from "@/components/CardI";
import React from "react";
import logo1 from "../../assets/images/topics/undraw_Remote_design_team_re_urdx.png";
import logo2 from "../../assets/images/topics/colleagues-working-cozy-office-medium-shot.png";
import logo3 from "../../assets/images/topics/undraw_Redesign_feedback_re_jvm0.png";
import CardII from "@/components/CardII";
const numbers = ["1", "2", "3", "4", "5"];
const img = [logo1, logo2, logo3];
const TopicsListing = () => {
  return (
    <main>
      <section className="">
        <BreadCrumb />
        <div className="container py-[100px]">
          <h3 className="text-center font-semibold text-3xl mb-10">
            Popular Topics
          </h3>
          {img.map((e, index) => (
            <CardI
              key={index}
              logo={e}
              active={"active"}
              spanBG={"bg-red-500"}
            />
          ))}
          {/* <CardI
            key={"one"}
            active="active"
            logo={logo1}
            spanBG={"bg-red-500"}
          />
          <CardI
            key={"two"}
            active="active"
            logo={logo1}
            spanBG={"bg-red-500"}
          />
          <CardI
            key={"three"}
            active="active"
            logo={logo1}
            spanBG={"bg-red-500"}
          /> */}

          <div className="flex items-center gap-2 justify-center capitalize text-xl  text-p-color">
            <p className="rounded-[10px] bg-section-bg-color p-3 py-4 px-5">
              prev
            </p>
            <ul className="flex items-center gap-2">
              {numbers.map((num, index) => (
                <li
                  key={index}
                  className="py-4 px-5 hover:text-white rounded-[10px] first-of-type:text-white first-of-type:bg-secondary-color hover:bg-secondary-color"
                >
                  {num}
                </li>
              ))}
            </ul>
            <p className="rounded-[10px] bg-section-bg-color py-4 px-5">next</p>
          </div>
        </div>
      </section>
      <section className=" py-[100px]">
        <div className="container ">
          <h3 className="text-left font-semibold text-3xl mb-10">
            Trending Topics
          </h3>
          <div className="flex flex-col lg:flex-row gap-5 items-center container -translate-y-28 ">
            <CardI logo={logo1} spanBG={"bg-[#00B0FF]"} />
            <CardII />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TopicsListing;
