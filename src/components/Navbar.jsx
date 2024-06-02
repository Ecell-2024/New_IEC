import React from "react";
import Logo from"../assets/Home/logo-removebg-preview.png";
import {
  Navbar,
  MobileNav,
  Typography,
  // Collapse,
  // Button,
  IconButton,
  // useCollapse
} from "@material-tailwind/react";

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  // const { collapse, setCollapse } = useCollapse();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center text-xl gap-x-2 p-1 font-medium hover:font-bold"
      >
        {/* Icon */}

        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex text-xl items-center gap-x-2 p-1 font-medium hover:font-bold"
      >
        {/* Icon */}

        <a href="#" className="flex items-center">
          Innovation
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex text-xl items-center gap-x-2 p-1 font-medium hover:font-bold"
      >
        {/* Icon */}

        <a href="#" className="flex items-center">
          Entrepreneurship
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex text-xl items-center gap-x-2 p-1 font-medium hover:font-bold"
      >
        {/* Icon */}

        <a href="#" className="flex items-center">
          Concultancy
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex text-xl items-center gap-x-2 p-1 font-medium hover:font-bold"
      >
        <a href="#" className="flex items-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="top-0 sticky px-4 py-0 lg:py-4 text-black z-20 bg-[#fff]">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          href="#"
          className="mr-4 flex cursor-pointer py-1.5 font-bold"
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-12 mix-blend-hard-light shadow-lg "
          />
          <span className="mx-2 my-4">IEC KIET</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} position=" left">
        <div className="container mx-auto">
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div> */}
        </div>
      </MobileNav>
    </Navbar>
  );
}
