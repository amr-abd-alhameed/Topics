"use client";
import React from "react";
import Title from "./Title";
import Link from "next/link";
import { usePathname } from "next/navigation";
const BreadCrumb = () => {
  const pathname = usePathname();
  return (
    <section className="custom-header py-20 h-[40vh] text-white ">
      <div className="container mt-[80px]">
        <div className="flex gap-2 font-normal text-xl  mb-3 capitalize">
          <p className="text-prim-color">
            <Link href="/">homePage</Link>
          </p>
          <p className="cursor-pointer">{pathname}</p>
        </div>
        <h2 className=" capitalize text-5xl font-bold">Topics Listing</h2>
      </div>
    </section>
  );
};

export default BreadCrumb;
