"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import Title from "../Shared/Title/Title";
import Image from "next/image";

const Delivery = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-14 text-secondary">
      {/* heading */}
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-2xl md:text-4xl leading-[40px] font-extrabold text-center text-secondary">
          Super Delicious Beef{" "}
          <span className=" text-primary">
            Burger <br /> $25.00
          </span>{" "}
        </h1>
        <Button className="bg-primary mt-6" size="lg">
          Order Now
        </Button>
      </div>

      {/* delivery details div */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center py-10">
        <div>
          <Title
            title1={"Delivery"}
            title2={"A Moment of Delivered"}
            title3={"On Right Time and Right Place"}
          />
          <p className="py-6">
            {" "}
            Khana&apos;s is a restaurant, bar and coffee roastery located on a
            busy corner site in Farringdon&apos;s Exmouth Market. With glazed
            frontage on two sides of the building, overlooking the market and a
            bustling London inteon
          </p>
          {/* order number */}
          <div className=" flex items-center gap-10">
            <div className="flex items-center gap-4 py-2 pr-4 hover:text-[#CC3233]">
              <div>
                <Image
                  src={"https://i.ibb.co/0CVC6qY/1.png"}
                  height={200}
                  width={200}
                  alt="Delivery"
                  className=" h-14 w-14 md:h-20 md:w-20"
                ></Image>
              </div>
              <div className=" text-lg md:text-2xl font-extrabold">
                <h1>Call Now </h1>
                <h1 className="text-primary">123-59794069</h1>
              </div>
            </div>
            {/* Order now button */}
            <Button className="bg-primary py-3 px-2 md:py-5 md:px-8">
              Order Now
            </Button>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <Image
            src={"https://i.ibb.co/gtgMYgg/bike.png"}
            alt="Delivery Bike"
            height={700}
            width={700}
            className=" w-full md:w-3/4 lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
