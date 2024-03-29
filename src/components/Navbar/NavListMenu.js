"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const navListMenuItems = [
  {
    title: "Burger",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Pizza",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-semibold text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="text-lg font-semibold"
          >
            <ListItem
              className="flex items-center justify-center gap-2 py-1.5 pr-4 font-semibold text-gray-900 text-lg hover:text-[#CC3233]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Menu
              <div className="hidden lg:block">
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl mt-1 rounded-xl lg:block">
          <ul className="grid grid-cols-2 outline-none gap-y-2 outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="flex items-center p-0 mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="text-lg font-semibold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-[#CC3233]">
          <Link href={"/"}>Home</Link>
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="text-lg font-semibold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-[#CC3233]">
          <Link href={"/aboutUs"}>About Us</Link>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="text-lg font-semibold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-[#CC3233]">
          <Link href={"/contact"}>Contact</Link>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="text-lg font-semibold"
      >
        <ListItem className="flex items-center gap-4 py-2 pr-4 hover:text-[#CC3233]">
          <div>
            <Image
              src={"https://i.ibb.co/0CVC6qY/1.png"}
              height={200}
              width={200}
              alt="Delivery"
              className="w-10 h-10 "
            ></Image>
          </div>
          <div className="text-lg font-bold ">
            <h1>Delivery Order</h1>
            <h1 className="text-primary">123-59794069</h1>
          </div>
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto rounded-none max-w-full px-4 md:px-8 lg:px-14 py-2 lg:py-0 bg-[#FFF8EE] ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-primary text-4xl font-extrabold flex justify-center items-center"
        >
          <Image
            src={
              "https://i.ibb.co/jMnTMtP/362274384-593661016265706-7554991896499251875-n-1.png"
            }
            alt="logo"
            height={100}
            width={100}
            className="w-16 h-16 "
          ></Image>
          <h1 className="ml-3 font-caveat">Khana&apos;s</h1>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button className=" bg-primary" size="lg">
            <Link href={"/signin"}>Sign In</Link>
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex items-center w-full gap-2 flex-nowrap lg:hidden">
          <Button className=" bg-[#CC3233]" size="md" fullWidth>
            <Link href={"/signin"}>Sign In</Link>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
