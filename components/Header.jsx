import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsBack } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
// import Dropdown from "./Dropdown";
const Header = () => {
  const links = ["home", "how it works ", "faqs", "contact"];
  const [active, setActive] = useState(false);
  const scrollRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollRef.current.style.background = "#80d0c7";
      } else {
        scrollRef.current.style.background = "transparent";
      }
    });
  }, []);
  return (
    <header
      ref={scrollRef}
      className="py-8 z-30 bg-secondary-color lg:bg-transparent fixed top-0 left-0 right-0 "
    >
      <div className="container flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          <BsBack className="text-[34px]" />
          <p className="capitalize font-bold text-4xl text-black">topic</p>
        </div>
        <nav
          className={`text-white-color hidden w-full transition 
          lg:block`}
        >
          <ul className={`flex  gap-5 justify-center uppercase items-center`}>
            <li>
              <Link
                href="/"
                className="hover:text-[#13547a] cursor-pointer transition-colors duration-200"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#faqs"
                className="hover:text-[#13547a] cursor-pointer transition-colors duration-200"
              >
                faqs
              </Link>
            </li>
            <li>
              <Link
                href="#how"
                className="hover:text-[#13547a] cursor-pointer transition-colors duration-200"
              >
                how it works
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-[#13547a] cursor-pointer transition-colors duration-200"
              >
                contact
              </Link>
            </li>

            {/* <li>
              <Dropdown
                active={active}
                textOne={"Pages"}
                textTwo={"listing-topics"}
                textThree={"contact-form"}
              />
            </li> */}
          </ul>
        </nav>

        <div className="flex gap-4">
          <div className="rounded-full bg-white h-12 w-12 flex items-center justify-center">
            <CiUser className="text-[25px]" />
          </div>
          <div className="lg:hidden h-12 w-12 flex items-center justify-center">
            <AiOutlineMenu
              onClick={() => setActive((prev) => !prev)}
              className={`text-[35px] text-white  ${
                active ? "bg-red-500" : "bg-green-500"
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-800 ${
          active ? "flex" : "hidden"
        } bg-secondary-color  text-white-color container flex-col gap-5 w-full active  py-6 text-xl items-start  uppercase`}
      >
        {links.map((link) => (
          <Link
            href="/"
            key={link}
            className="hover:text-[#13547a] inline-block transition-colors duration-200"
          >
            {link}
          </Link>
        ))}{" "}
        {/* <Dropdown
          active={active}
          textOne={"options"}
          textTwo={"Topics Listing"}
          textThree={"Contact Form"}
        /> */}
      </div>
    </header>
  );
};

export default Header;
