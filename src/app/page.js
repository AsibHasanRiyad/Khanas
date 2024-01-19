import Banner from "@/components/Banner/Banner";
import MenuItems from "@/components/MenuItems/MenuItems";
import { NavbarWithMegaMenu } from "@/components/Navbar/NavListMenu";
import React from "react";

const Home = () => {
  return (
    <div>
      <NavbarWithMegaMenu />
      <Banner />
      <MenuItems />
    </div>
  );
};

export default Home;
