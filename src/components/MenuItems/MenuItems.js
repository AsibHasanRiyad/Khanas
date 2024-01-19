import React from "react";
import Title from "../Shared/Title/Title";
import Image from "next/image";

const MenuItems = () => {
  return (
    <div className="px-4 md:px-8 lg:px-14 py-10 text-secondary">
      <Title title1={"Food Items"} title2={"Popular"} title3={"Menu"} />
      {/* Menu item */}
      {/* Will change later by data map */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        <div className=" flex justify-center items-center gap-10 cursor-pointer hover:shadow-md p-4 rounded-md hover:scale-110 duration-300">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={150}
            width={150}
          />
          <div>
            <h1 className=" text-2xl font-bold hover:text-primary">
              Chicken Burger
            </h1>
            <p className=" text-lg">Shirmp. Squid, Pineapple</p>
            <p className=" text-2xl font-bold">Price: $ 10.00</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10 cursor-pointer hover:shadow-md p-4 rounded-md hover:scale-110 duration-300">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={150}
            width={150}
          />
          <div>
            <h1 className=" text-2xl font-bold hover:text-primary">
              Chicken Burger
            </h1>
            <p className=" text-lg">Shirmp. Squid, Pineapple</p>
            <p className=" text-2xl font-bold">Price: $ 10.00</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10 cursor-pointer hover:shadow-md p-4 rounded-md hover:scale-110 duration-300">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={150}
            width={150}
          />
          <div>
            <h1 className=" text-2xl font-bold hover:text-primary">
              Chicken Burger
            </h1>
            <p className=" text-lg">Shirmp. Squid, Pineapple</p>
            <p className=" text-2xl font-bold">Price: $ 10.00</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10 cursor-pointer hover:shadow-md p-4 rounded-md hover:scale-110 duration-300">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={150}
            width={150}
          />
          <div>
            <h1 className=" text-2xl font-bold hover:text-primary">
              Chicken Burger
            </h1>
            <p className=" text-lg">Shirmp. Squid, Pineapple</p>
            <p className=" text-2xl font-bold">Price: $ 10.00</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10 cursor-pointer hover:shadow-md p-4 rounded-md hover:scale-110 duration-300">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={150}
            width={150}
          />
          <div>
            <h1 className=" text-2xl font-bold hover:text-primary">
              Chicken Burger
            </h1>
            <p className=" text-lg">Shirmp. Squid, Pineapple</p>
            <p className=" text-2xl font-bold">Price: $ 10.00</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10 cursor-pointer hover:shadow-md p-4 rounded-md hover:scale-110 duration-300">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={150}
            width={150}
          />
          <div>
            <h1 className=" text-2xl font-bold hover:text-primary">
              Chicken Burger
            </h1>
            <p className=" text-lg">Shirmp. Squid, Pineapple</p>
            <p className=" text-2xl font-bold">Price: $ 10.00</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10 cursor-pointer hover:shadow-md p-4 rounded-md hover:scale-110 duration-300">
          <Image
            src={"https://i.ibb.co/crgY6M1/burger-promo.png"}
            alt="food"
            height={150}
            width={150}
          />
          <div>
            <h1 className=" text-2xl font-bold hover:text-primary">
              Chicken Burger
            </h1>
            <p className=" text-lg">Shirmp. Squid, Pineapple</p>
            <p className=" text-2xl font-bold">Price: $ 10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
