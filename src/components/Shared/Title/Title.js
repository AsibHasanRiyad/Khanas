import React from "react";

function Title({ title1, title2, title3 }) {
  return (
    <div className=" text-secondary">
      <h1 className=" font-caveat text-lg font-extrabold">{title1}</h1>
      <h1 className=" font-extrabold text-5xl">
        {" "}
        {title2} <span className=" text-primary">{title3}</span>{" "}
      </h1>
    </div>
  );
}

export default Title;
