"use client";
import BreadCrumb from "@/components/BreadCrumb";

import React from "react";

const page = () => {
  return (
    <section className="pt-[100px] custom-header ">
      <BreadCrumb />

      <div className="bg-section-bg-color py-[100px] ">
        <div className="container text-center flex items-center justify-center pb-[100px]"></div>
      </div>
    </section>
  );
};

export default page;
