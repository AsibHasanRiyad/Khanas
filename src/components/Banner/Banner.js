"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@material-tailwind/react";
import Title from "../Shared/Title/Title";

function Banner() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center py-10 gap-10 bg-[#FFF8EE] px-4 md:px-8 lg:px-14 ">
      <div>
        <h1 className=" text-5xl lg:text-7xl font-extrabold text-[#2B425D] leading-[55px] lg:leading-[85px]">
          ENJOY OUR <br /> CHICKEN <span className="text-primary">BURGER</span>{" "}
          <br /> FAST FOOD
        </h1>
        <p className="text-[#2B425D] font-caveat  font-extrabold text-2xl pt-4">
          Bet You can&apos;t eat less
        </p>
        <div className=" mt-6">
          <Button className=" bg-primary" size="lg">
            Order Now
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="https://i.ibb.co/crgY6M1/burger-promo.png"
          alt="Burger"
          width={700}
          height={700}
        ></Image>
      </div>
    </div>
  );
}

export default Banner;
