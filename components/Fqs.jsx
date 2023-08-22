import React from "react";
import logo from "../assets/images/faq_graphic.jpg";
import Image from "next/image";
// import { AccordionS } from "./Accordion";

const Fqs = () => {
  return (
    <section id="fqs" className="pt-[100px]">
      <div className="container flex items-center gap-4 flex-col lg:flex-row">
        <div>
          <Image className=" h-auto object-cover" src={logo} />
        </div>
        <div>{/* <AccordionS /> */}</div>
      </div>
    </section>
  );
};

export default Fqs;
