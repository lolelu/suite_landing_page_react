import React from "react";
import logo from "../Assets/logo.svg";

export default function Logo() {
  return (
    <a className="duration-100 hover:opacity-50" href="#">
      <img src={logo} className=" object-contain" alt="suite-logo" />
    </a>
  );
}
