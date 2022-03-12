import Logo from "../Components/Logo";
import ButtonTop from "../Components/ButtonTop";
import React from "react";

const Navbar = (props) => {
  return (
    <nav className="container mx-auto flex flex-row justify-between py-3 align-middle md:py-9 lg:py-12">
      {props.children}
    </nav>
  );
};

export default Navbar;
