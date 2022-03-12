import Logo from '../Components/Logo';
import ButtonTop from '../Components/ButtonTop';
import React from "react";


const Navbar = (props) => {

    return (
        <nav className=" bg-blue-300 container mx-auto py-3 md:py-9 lg:py-12 flex flex-row justify-between align-middle">
            {props.children}
        </nav>
    )
}

export default Navbar;