"use client";
import React from "react";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoSnapchat,
  BiLogoYoutube,
} from "react-icons/bi";
import ContentBtn from "./Buttons/ContentBtn";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-8 lg:px-32 px-5 bg-slate-950 text-white mt-8 lg:mt-0">
        <div className="w-full lg:w-1/4">
          <h1 className="text-3xl font-bold">MediCare</h1>
          <p>
            Our Vision: We strive to be a leader of healthcare innovation that
            delivers the highest quality care while providing exceptional
            patient experiences in a modern and inviting environment.
          </p>
        </div>

        <div className="flex flex-row justify-start gap-20 lg:gap-20">
          <div>
            <h1 className="font-bold text-white pb-4 pt-5 lg:pt-0">About Us</h1>
            <nav className="flex flex-col gap-2">
              <Link href={"#"} className="hover:text-slate-400 transition-all">
                About
              </Link>
              <Link
                href={"/about"}
                className="hover:text-slate-400 transition-all"
              >
                Blog
              </Link>
              <Link
                href={"/doctors"}
                className="hover:text-slate-400 transition-all"
              >
                Doctors
              </Link>
              <Link
                href={"/services"}
                className="hover:text-slate-400 transition-all"
              >
                Services
              </Link>
              <Link
                href={"/career"}
                className="hover:text-slate-400 transition-all"
              >
                Career
              </Link>
            </nav>
          </div>

          <div className="max-w-min">
            <h1 className="font-bold text-white pb-4 pt-5 lg:pt-0">
              Contact Us
            </h1>
            <nav className="flex flex-col gap-2">
              <p>No. 48, Montgomery Road, Yaba. Lagos, Nigeria.</p>
              <p>support@medicare.com</p>
              <p>01-234-703-326-2834</p>
            </nav>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-white">Find us on social media</h3>
            <div className="flex flex-row gap-2">
              <Link
                href={"#"}
                size={10}
                className="font-light text-3xl text-white"
              >
                <BiLogoFacebookCircle />
              </Link>
              <Link
                href={"#"}
                size={10}
                className="font-light text-3xl text-white"
              >
                <BiLogoInstagramAlt />
              </Link>
              <Link
                href={"#"}
                size={10}
                className="font-light text-3xl text-white"
              >
                <BiLogoSnapchat />
              </Link>
              <Link
                href={"#"}
                size={10}
                className="font-light text-3xl text-white"
              >
                <BiLogoYoutube />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3></h3>
            <form className="flex flex-col">
              <label className="text-white">Join our newsletter</label>
              <input
                className="bg-white w-[60%] lg:w-full p-2 rounded-md"
                type="text"
                id="email"
                name="email"
              />
              <label> </label>
            </form>

            <ContentBtn btnTittle="Subscribe" className="w-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
