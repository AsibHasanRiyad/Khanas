import React from "react";
import Title from "../Shared/Title/Title";
import Image from "next/image";

const MenuItems = () => {
  return (
    <div
      data-aos="fade-right"
      className="px-4 py-10 md:px-8 lg:px-14 text-secondary"
    >
      <Title title1={"Food Items"} title2={"Popular"} title3={"Menu"} />
      {/* Menu item */}
      {/* Will change later by data map */}
      <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 lg:grid-cols-3">
        {/* 1 */}
        <div className="flex items-center justify-center gap-10 p-4 duration-300 rounded-md cursor-pointer hover:shadow-2xl hover:shadow-gray-300 hover:scale-105">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={100}
            width={100}
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
          <div>
            <h1 className="text-lg font-bold lg:text-2xl hover:text-primary">
              Chicken Burger
            </h1>
            <p className="text-base lg:text-lg">Shirmp. Squid, Pineapple</p>
            <p className="text-lg font-bold lg:text-2xl">Price: $ 10.00</p>
          </div>
        </div>
        {/* 1 */}
        <div className="flex items-center justify-center gap-10 p-4 duration-300 rounded-md cursor-pointer hover:shadow-md hover:scale-105">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={100}
            width={100}
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
          <div>
            <h1 className="text-lg font-bold lg:text-2xl hover:text-primary">
              Chicken Burger
            </h1>
            <p className="text-base lg:text-lg">Shirmp. Squid, Pineapple</p>
            <p className="text-lg font-bold lg:text-2xl">Price: $ 10.00</p>
          </div>
        </div>
        {/* 1 */}
        <div className="flex items-center justify-center gap-10 p-4 duration-300 rounded-md cursor-pointer hover:shadow-md hover:scale-105">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={100}
            width={100}
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
          <div>
            <h1 className="text-lg font-bold lg:text-2xl hover:text-primary">
              Chicken Burger
            </h1>
            <p className="text-base lg:text-lg">Shirmp. Squid, Pineapple</p>
            <p className="text-lg font-bold lg:text-2xl">Price: $ 10.00</p>
          </div>
        </div>
        {/* 1 */}
        <div className="flex items-center justify-center gap-10 p-4 duration-300 rounded-md cursor-pointer hover:shadow-md hover:scale-105">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={100}
            width={100}
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
          <div>
            <h1 className="text-lg font-bold lg:text-2xl hover:text-primary">
              Chicken Burger
            </h1>
            <p className="text-base lg:text-lg">Shirmp. Squid, Pineapple</p>
            <p className="text-lg font-bold lg:text-2xl">Price: $ 10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
