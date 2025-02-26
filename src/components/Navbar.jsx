import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.9 }
    );

    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id);
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white font-semibold" : "text-gray-300"
              } hover:text-white text-lg transition-colors cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`w-8 h-8 cursor-pointer transition-transform duration-300 transform ${toggle ? "rotate-90" : "rotate-0"}`}
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 right-4 bg-gray-900 rounded-lg shadow-xl p-5 w-48 transform transition-all duration-300 ease-in-out ${
            toggle ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-white text-lg font-medium cursor-pointer hover:text-gray-300 transition ${
                  active === nav.id ? "text-blue-800" : ""
                }`}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
