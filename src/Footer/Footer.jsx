import React from "react";
import facebookIcon from "../Assets/icon-facebook.svg";
import instagramIcon from "../Assets/icon-instagram.svg";
import twitterIcon from "../Assets/icon-twitter.svg";
import Logo from "../Components/Logo";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col content-center justify-center space-y-8 pt-14 pb-20 text-center sm:flex-row sm:justify-between sm:space-y-0 sm:py-[4.5rem] lg:pt-24">
      <div className="flex justify-center align-middle">
        <Logo />
      </div>

      <p className=" text-base leading-8 tracking-wide text-gray-dark">
        Copyright - Suite
      </p>

      <div className=" flex content-center justify-center space-x-7 self-center">
        {SocialLink(facebookIcon, "link-facebook", "#")}
        {SocialLink(twitterIcon, "link-twitter", "#")}
        {SocialLink(instagramIcon, "link-instagram", "#")}
      </div>
    </footer>
  );

  function SocialLink(icon, alt, href) {
    return (
      <a className="flex justify-center align-middle" href={href}>
        <img
          className=" object-contain duration-150 hover:opacity-50"
          src={icon}
          alt={alt}
        />
      </a>
    );
  }
};

export default Footer;
