import logo from "../assets/logo.svg";
import icon_hamburger from "../assets/icon-hamburger.svg";
import icon_close from "../assets/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header_component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const HundelClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header className="w-full flex flex-row items-center justfy-between gap-40 md:gap-36 m-14 md:mx-24">
        <img src={logo} alt="logo" />
        <nav className="hidden md:flex justify-evenly gap-6">
          <a
            href="#pricing"
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)] "
          >
            Pricing
          </a>
          <a
            href="/product_component"
            onClick={HundelClick}
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)]"
          >
            Product
          </a>
          <a
            href="/About_component"
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)]"
          >
            About Us
          </a>
          <a
            href="#careers"
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)]"
          >
            Carrers
          </a>
          <a
            href="#community"
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)]"
          >
            Community
          </a>
        </nav>
        <nav>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <img src={icon_close} alt="" />
            ) : (
              <img src={icon_hamburger} alt="" />
            )}
          </button>
          {isOpen && (
            <div className="md:hidden flex flex-col gap-y-2">
              <a href="#pricing">Pricing</a>
              <a href="#product">Product</a>
              <a href="#about">About Us</a>
              <a href="#careers">Carrers</a>
              <a href="#community">Community</a>
            </div>
          )}
        </nav>
        <button
          type="button"
          className="hidden md:flex border rounded-full bg-[hsl(12,88%,59%)] text-white p-2"
        >
          Get Started
        </button>
      </header>
    </>
  );
};

export default Header_component;
