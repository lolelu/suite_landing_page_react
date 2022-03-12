import React from "react";
import facebookIcon from "../Assets/icon-facebook.svg"
import instagramIcon from "../Assets/icon-instagram.svg"
import twitterIcon from "../Assets/icon-twitter.svg"
import Logo from "../Components/Logo";

const Footer = () => {
    return (
        <footer className="container space-y-8 mx-auto flex justify-center flex-col content-center text-center pt-14 pb-20 sm:flex-row sm:space-y-0 sm:justify-between sm:py-[4.5rem] lg:pt-24">

            <div className="flex align-middle justify-center">
                <Logo />
            </div>


            <p className=" text-base text-gray-dark leading-8 tracking-wide">Copyright - Suite</p>

            <div className=" space-x-7 flex self-center justify-center content-center">
                {SocialLink(facebookIcon, "link-facebook", "#")}
                {SocialLink(twitterIcon, "link-twitter", "#")}
                {SocialLink(instagramIcon, "link-instagram", "#")}

            </div>
        </footer>
    )

    function SocialLink(icon, alt, href) {
        return <a className="flex align-middle justify-center" href={href} ><img className=" object-contain hover:opacity-50 duration-150" src={icon} alt={alt} /></a>;
    }
}

export default Footer;

