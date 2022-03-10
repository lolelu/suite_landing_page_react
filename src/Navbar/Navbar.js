import { Logo } from '../Components/Logo';
import { ButtonTop } from '../Components/ButtonTop';
import React from "react";


const Navbar = () => {

    return (
        <div className=" bg-blue-300 container mx-auto p-3 md:p-9 lg:p-12 flex flex-row justify-between align-middle">
            <Logo />
            {/* Might be refactorable */}
            <ButtonTop text="Request Beta Access" />

        </div>
    )
}

export default Navbar;