import React from "react";

function Title({ title1, title2, title3 }) {
  return (
    <div className=" text-secondary">
      <h1 className=" font-caveat text-2xl font-extrabold">{title1}</h1>
      <h1 className=" font-extrabold text-4xl md:text-5xl leading-[45px] md:leading-[55px]">
        {" "}
        {title2} <span className=" text-primary">{title3}</span>{" "}
      </h1>
    </div>
  );
}

export default Title;
