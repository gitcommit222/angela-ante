import { styles } from "../styles";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

import { logo, menu, close } from "../assets";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} py-5 gray-gradient flex justify-between items-center fixed w-full z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3" onClick={() => {
          setActive("")
        }}>
          <img
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <h3 className="text-black-300 font-bold text-[18px] flex">
            Mhar &nbsp;{" "}
            <span className="sm:block hidden">| Mhar Nhel Valentin</span>{" "}
          </h3>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
          ${active === link.title ? "text-black-300" : "text-black-200"}
          hover:text-black-300 text-[18px] font-semibold cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menutoggle"
            className="w-[28] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 gray-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-3">
              {navLinks.map((link) => (
                <li key={link.id} className="flex flex-col">
                  <a
                    href={`#${link.id}`}
                    className="font-semibold hover:font-bold hover:text-black-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
