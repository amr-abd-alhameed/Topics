import React from "react";import Link from "next/link";
import Title from "@/components/Title";

const Topics = ({ children }) => {
  const Links = ["design", "marketing", "finance", "music", "education"];
  return (
    <section id="browse">
      <Title className={"text-center"}>Browse Topics</Title>
      <div className="my-6">
        <nav>
          <ul className="flex gap-4 items-center justify-center">
            {Links.map((link) => (
              <li key={link} className="cursor-pointer">
                <Link href={`/${link}`}> {link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Topics;
