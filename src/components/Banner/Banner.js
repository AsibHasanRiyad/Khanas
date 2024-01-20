"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 justify-center items-center py-5 lg:py-20 gap-5 lg:gap-10 bg-[#FFF8EE] px-4 md:px-8 lg:px-14 ">
      <div>
        <h1 className=" text-5xl lg:text-7xl font-extrabold text-[#2B425D] leading-[55px] lg:leading-[85px]">
          ENJOY OUR <br /> CHICKEN <span className="text-primary">BURGER</span>{" "}
          <br /> FAST FOOD
        </h1>
        <p className="text-[#2B425D] font-caveat  font-extrabold text-2xl pt-4">
          Bet You can&apos;t eat less
        </p>
        <div className="mt-6 ">
          <Button className=" bg-primary" size="lg">
            Order Now
          </Button>
        </div>
      </div>
      <div>
        <Image
          data-aos="zoom-in"
          src="https://i.ibb.co/crgY6M1/burger-promo.png"
          alt="Burger"
          width={700}
          height={700}
        ></Image>
      </div>
      {/* background images */}
      <div className="absolute left-0 hidden md:block -top-20">
        <Image
          src="https://i.ibb.co/phbPRSv/40.png"
          height={180}
          width={180}
          alt=""
        />
      </div>
      {/* bottom left */}
      <div className="absolute bottom-0 right-0 hidden lg:block -z-20">
        <Image
          src="https://i.ibb.co/mX9vfd3/41.png"
          height={100}
          width={100}
          alt=""
        />
      </div>
      {/* bottom right */}
      <div className="absolute bottom-0 left-0 z-0 hidden lg:block">
        <Image
          src="https://i.ibb.co/Ybpjv0R/5.png"
          height={100}
          width={100}
          alt=""
        />
      </div>
      {/* middle */}

      <div className="animate-moveContinuously hidden md:block absolute top-0 lg:top-20 left-[50%] lg:left-[40%] z-0">
        <Image
          src="https://i.ibb.co/1fjkwh6/t-slice.png"
          height={100}
          width={100}
          alt=""
        />
      </div>
      <div className="animate-moveContinuously hidden md:block absolute bottom-10 lg:bottom-40 left-[40%] z-0 ">
        <Image
          src="https://i.ibb.co/kgrJnSf/113.png"
          height={130}
          width={130}
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
