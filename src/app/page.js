import Banner from "@/components/Banner/Banner";
import { NavbarWithMegaMenu } from "@/components/Navbar/NavListMenu";
import React from "react";

const Home = () => {
  return (
    <div>
      <NavbarWithMegaMenu />

      <div>
        <Banner />
      </div>
    </div>
  );
};

export default Home;
