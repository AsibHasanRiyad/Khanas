import Banner from "@/components/Banner/Banner";
import Delivery from "@/components/Delivery/Delivery";
import MenuItems from "@/components/MenuItems/MenuItems";
import { NavbarWithMegaMenu } from "@/components/Navbar/NavListMenu";
import React from "react";

const Home = () => {
  return (
    <div>
      <NavbarWithMegaMenu />
      <Banner />
      <MenuItems />
      <Delivery />
    </div>
  );
};

export default Home;
