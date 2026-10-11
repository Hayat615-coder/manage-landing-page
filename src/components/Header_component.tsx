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
        className="w-full flex flex-row items-center justify-between px-6 py-8 md:px-24 relative z-50"
      >
        <img src={logo} alt="logo" />

        <nav className="hidden md:flex justify-evenly gap-6">
          <a
            href="#pricing"
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)]"
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
            Careers
          </a>
          <a
            href="#community"
            className="text-[hsl(233,12%,13%)] hover:text-[hsl(228,39%,23%)]"
          >
            Community
          </a>
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 cursor-pointer"
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
        </div>

        <button
          type="button"
          className="hidden md:flex border rounded-full bg-[hsl(12,88%,59%)] text-white px-6 py-3 cursor-pointer hover:opacity-90 shadow-md"
        >
          Get Started
        </button>
      </header>

      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-gradient-to-b from-transparent to-black/60 md:hidden"
          aria-hidden="true"
        />
      )}

      {isOpen && (
        <nav className="fixed top-24 left-6 right-6 z-50 bg-white py-10 rounded-md shadow-2xl flex flex-col items-center gap-y-6 md:hidden font-bold text-[hsl(228,39%,23%)]">
          <a
            href="#pricing"
            onClick={closeMenu}
            className="hover:text-slate-400 text-lg"
          >
            Pricing
          </a>
          <a
            href="#product"
            onClick={closeMenu}
            className="hover:text-slate-400 text-lg"
          >
            Product
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="hover:text-slate-400 text-lg"
          >
            About Us
          </a>
          <a
            href="#careers"
            onClick={closeMenu}
            className="hover:text-slate-400 text-lg"
          >
            Careers
          </a>
          <a
            href="#community"
            onClick={closeMenu}
            className="hover:text-slate-400 text-lg"
          >
            Community
          </a>
        </nav>
      )}
    </>
  );
};

export default Header_component;
