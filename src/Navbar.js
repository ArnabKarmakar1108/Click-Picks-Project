import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "./images/logo.png";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  logoBorder: "10px",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Travels",
  link4Text: "Properties",
  link5Text: "Vehicles",
  link6Text: "Helping Hand",
  
  link1Url: "/",
  link2Url: "/shopping",
  link3Url: "/travels",
  link4Url: "/properties",
  link5Url: "/vehicles",
  link6Url: "/helpinghand",
  link1Size: "1.5vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
