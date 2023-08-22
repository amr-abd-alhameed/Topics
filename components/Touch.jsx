import React from "react";
import Title from "./Title";
import logo from "../assets/images/map.png";
import Image from "next/image";

const Touch = () => {
  const data = [
    {
      title: "head office",
      paragraph: "Bay St &, Larkin St, San Francisco, CA 94109, United States",
      phone: "01153298262",
      mail: "amrabdalhameed947@gamil.com",
    },
    {
      title: "cairo office",
      paragraph: "Burj Park, Downtown Dubai, United Arab Emirates",
      phone: "01153298262",
      mail: "amrabdalhameed947@gamil.com",
    },
  ];
  return (
    <section id="contact" className="bg-section-bg-color p-[100px]">
      <Title className={"text-center"}>Get in touch</Title>
      <div className=" mt-10 container text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {data.map((item) => (
          <div className="capitalize text-start " key={item.title}>
            <h3 className="text-2xl mb-5 font-semibold">{item.title}</h3>
            <div className="text-p-color font-normal text-xl">
              <p className="w-[70%] pb-4 border-b-2 border-p-color">
                {item.paragraph}
              </p>
              <p className="mt-3">
                phone:{" "}
                <span className="text-secondary-color">{item.phone}</span>
              </p>
              <p>
                email:
                <span className="text-secondary-color lowercase">
                  {" "}
                  {item.mail}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Touch;
