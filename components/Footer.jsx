import Link from "next/link";import React from "react";
import { BsBack } from "react-icons/bs";
// import Dropdown from "./Dropdown";

const Footer = () => {
  const dataOne = ["home", "how it works", "faqs", "contact"];
  return (
    <footer className="py-[100px]">
      <div className="container flex flex-wrap justify-between flex-col md:flex-row gap-7 ">
        <div className="flex items-start gap-4">
          <BsBack className="text-[34px]" />
          <p className="capitalize font-bold text-4xl text-black">topic</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-prim-color text-[22px]">
            Resources
          </h5>
          <ul className="grid grid-cols-1  gap-[20px]">
            {dataOne.map((e) => (
              <li key={e}>
                <Link
                  href={`/${e}`}
                  className=" hover:text-black text-secondary-color transition-all duration-200 uppercase text-base"
                >
                  {e}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-prim-color text-[22px]">
            Information
          </h5>
          <ul className="grid grid-cols-1  gap-[20px]">
            <li>
              <Link
                href={`/`}
                className=" hover:text-black text-secondary-color transition-all duration-200 uppercase text-base"
              >
                01153298262
              </Link>
            </li>
            <li>
              <Link
                href={`/`}
                className=" hover:text-black text-secondary-color transition-all duration-200  text-base"
              >
                amrabdalhameed947@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-[30px]">
            {/* <Dropdown
              className={" bg-secondary-color rounded-lg p-2"}
              textOne={"english"}
              textTwo={"Topics Listing"}
              textThree={"Contact Form"}
            /> */}
          </div>
          <div className="text-xl font-normal">
            <p className="capitalize">
              copyright 2023{" "}
              <Link
                href={"https://linkedin.com/in/amrabdelhameed/"}
                className="text-prim-color font-semibold"
              >
                dev amr
              </Link>{" "}
              <br />
              all rights are reserved
            </p>
            <p className="capitalize mt-6">
              developer:{" "}
              <Link
                href={"https://linkedin.com/in/amrabdelhameed/"}
                className="text-prim-color font-semibold"
              >
                Amr
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
