import Banner from "@/components/Banner/Banner";
import Delivery from "@/components/Delivery/Delivery";
import MenuItems from "@/components/MenuItems/MenuItems";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <MenuItems />
      <Delivery />
    </div>
  );
};

export default Home;
