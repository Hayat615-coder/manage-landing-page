import logo from "../assets/logo.svg";
import icon_hamburger from "../assets/icon-hamburger.svg";
import icon_close from "../assets/icon-close.svg";
import { useState } from "react";
const Header_component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header
        id="home"
        className="w-full flex flex-row items-center justfy-between gap-40 md:gap-36 m-14 md:mx-24"
      >
        <img src={logo} alt="logo" />
        <nav className="hidden md:flex justify-evenly gap-6">
          <a
            href="#pricing"
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)] "
          >
            Pricing
          </a>
          <a
            href="#product"
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)]"
          >
            Product
          </a>
          <a
            href="#about"
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
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <img src={icon_close} alt="" />
            ) : (
              <img src={icon_hamburger} alt="" />
            )}
          </button>
          {isOpen && (
            <div className="md:hidden flex flex-col gap-y-2">
              <a href="#pricing" onClick={closeMenu}>
                Pricing
              </a>
              <a href="#product" onClick={closeMenu}>
                Product
              </a>
              <a href="#about" onClick={closeMenu}>
                About Us
              </a>
              <a href="#careers" onClick={closeMenu}>
                Careers
              </a>
              <a href="#community" onClick={closeMenu}>
                Community
              </a>
            </div>
          )}
        </nav>
        <button
          type="button"
          className="hidden md:flex border rounded-full bg-[hsl(12,88%,59%)] text-white p-2 cursor-pointer hover:shadow shadow-[0px,2px,0,2px]"
        >
          Get Started
        </button>
      </header>
    </>
  );
};

export default Header_component;
