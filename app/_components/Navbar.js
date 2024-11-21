"use client";

import React from "react";
import Link from "next/link";
import { BiMenu, BiXCircle } from "react-icons/bi";
import { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10 pt-4">
      <div>
        <div className="bg-white text-slate-950 flex flex-row justify-center p-5 md:px-20 px-2 shadow-md rounded-lg">
          <div className="flex flex-row md:justify-evenly md:items-center cursor-pointer gap-40">
            <div>
              <Link href="/" className="">
                <h1 className="text-2xl font-bold">MediCare</h1>
              </Link>
            </div>

            <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
              <Link href="/" className="hover:text-slate-400 transition-all">
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-slate-400 transition-all"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="hover:text-slate-400 transition-all"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-slate-400 transition-all"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="hover:text-slate-400 transition-all"
              >
                Blog
              </Link>
            </nav>

            <div className="lg:hidden flex items-center">
              {menu ? (
                <BiXCircle size={28} onClick={handleChange} />
              ) : (
                <BiMenu size={28} onClick={handleChange} />
              )}
            </div>
          </div>

          <div
            className={`${
              menu ? "translate-x-0" : "translate-x-full"
            } lg:hidden flex flex-col absolute bg-slate-950 text-white left-0 top-16 font-semibold text-base text-center pt-12 pb-4 gap-4 w-full h-fit transition-transform duration-200`}>
            <Link href="/" className="hover:text-slate-400 transition-all">
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-slate-400 transition-all">
              Services
            </Link>
            <Link href="/about" className="hover:text-slate-400 transition-all">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-400 transition-all">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-slate-400 transition-all">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
