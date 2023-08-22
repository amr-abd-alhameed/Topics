import React from "react";const Title = (props) => {
  return (
    <h1 className={` capitalize text-6xl font-bold ${props.className}`}>
      {props.children}
    </h1>
  );
};

export default Title;
