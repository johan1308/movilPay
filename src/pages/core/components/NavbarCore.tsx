import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useThemeMovilPay } from "../../../hooks/useTheme";
import { CheckChangeTheme } from "./CheckChangeTheme";
import { Img } from "react-image";
import { useEffect, useState } from "react";

export const NavbarCore = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path?: React.ReactNode;
}) => {
  const { darkMode, toggleDarkMode } = useThemeMovilPay();
  

  return (
    <Navbar
      maxWidth="full"
      className={`${darkMode ? "bg-primaryDark" : "bg-secondary"} shadow-md`}
      style={{ zIndex: 10 }}
    >
      <NavbarBrand>
        <div className="mt-3 hidden sm:flex ">
          <Img
            src={require("../../../assets/img/logotipo movil play letras todo blanco.png")}
            className="h-10 w-38 mb-2 ml-7"
          />
        </div>
        <div className="flex lg:ml-36">{children}</div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <CheckChangeTheme />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
