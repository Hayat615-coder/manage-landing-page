import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";
import { useState, type FormEvent } from "react";
const Footer_component = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setError(!isValidEmail);
  };

  return (
    <>
      <div
        id="footer"
        className="bg-black flex flex-col-reverse md:flex-row gap-6 items-center justify-between p-12 md:px-28"
      >
        <div className="flex flex-col-reverse md:flex-col gap-20">
          <img src={logo} alt="logo" />
          <ul className="flex flex-row gap-2">
            <li>
              <img
                src={facebook}
                alt="facebook"
                className="hover:bg-[hsl(12,88%,59%)]"
              />
            </li>
            <li>
              <img
                src={youtube}
                alt="youtube"
                className="hover:bg-[hsl(12,88%,59%)]"
              />
            </li>
            <li>
              <img
                src={twitter}
                alt="twitter"
                className="hover:bg-[hsl(12,88%,59%)]"
              />
            </li>
            <li className="hover:bg-[hsl(12,88%,59%)]">
              <img
                src={pinterest}
                alt="pinterest"
                className="hover:bg-[hsl(12,88%,59%)]"
              />
            </li>
            <li>
              <img
                src={instagram}
                alt="instagram"
                className="hover:bg-[hsl(12,88%,59%)]"
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-14">
          <nav className="flex flex-col justify-evenly gap-6">
            <a href="#top" className="text-white hover:text-[hsl(12,88%,59%)] ">
              Home
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-[hsl(12,88%,59%)] "
            >
              Pricing
            </a>
            <a
              href="#product"
              className="text-white hover:text-[hsl(12,88%,59%)]"
            >
              Product
            </a>
            <a
              href="#about"
              className="text-white hover:text-[hsl(12,88%,59%)]"
            >
              About Us
            </a>
          </nav>
          <nav className="flex flex-col justify-evenly gap-6">
            <a
              href="#careers"
              className="text-white hover:text-[hsl(12,88%,59%)]"
            >
              Careers
            </a>
            <a
              href="#footer"
              className="text-white hover:text-[hsl(12,88%,59%)]"
            >
              Community
            </a>
            <a
              href="#community"
              className="text-white hover:text-[hsl(12,88%,59%)]"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-12">
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-row gap-4">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError(false);
                }}
                aria-invalid={error}
                aria-label="Email address"
                aria-describedby={error ? "email-error" : undefined}
                className="border bg-white rounded-3xl p-2 text-[hsl(4,100%,67%)]"
              />
              <button
                type="submit"
                className="text-white bg-[hsl(12,88%,59%)] p-3 rounded-4xl"
              >
                Go
              </button>
            </div>
            {error && (
              <span
                id="email-error"
                className="text-[hsl(4,100%,67%)]"
                role="alert"
              >
                Please insert a valid email
              </span>
            )}
          </form>
          <p className="text-gray-600">Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer_component;
