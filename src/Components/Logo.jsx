import React from "react";
import logo from "../Assets/logo.svg"

export default function Logo() {
    return <a className="hover:opacity-50 duration-100" href="#"><img src={logo} className=" object-contain" alt="suite-logo" /></a>;
}
