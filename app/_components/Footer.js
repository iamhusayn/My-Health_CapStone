"use client"
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
    <div className="bg-slate-950 text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold">MediCare</h1>
          <p>
            Our Vision: We strive to be a leader of healthcare innovation that
            delivers the highest quality care while providing exceptional
            patient experiences in a modern and inviting environment.
          </p>
        </div>

        <div>
          <h1 className="font-medium text-white pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              About Us
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              Blog
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              Doctors
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              Services
            </Link>
          </nav>
        </div>

        <div>
          <h1 className="font-medium text-white pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              Medical Councelling
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              Fertility & Family Building
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              Maternity & Newborn Care
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              Primary Care
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              Urgent Care
            </Link>
          </nav>
        </div>

        <div>
          <h1 className="font-medium text-white pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              No. 48, Montgomery Road, Yaba.
              Lagos, Nigeria.
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              support@medicare.com
            </Link>
            <Link href={"#"} className="hover:text-slate-400 transition-all">
              01-234-703-326-2834
            </Link>
            
          </nav>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-white">Find us on social media</h3>
            <div className="flex flex-row justify-between gap-2">
              <Link href={"#"} size={28} className="font-light text-xm text-white">
                <BiLogoFacebookCircle />
              </Link>
              <Link href={"#"} size={28} className="font-light text-xm text-white">
                <BiLogoInstagramAlt />
              </Link>
              <Link href={"#"} size={28} className="font-light text-xm text-white">
                <BiLogoSnapchat />
              </Link>
              <Link href={"#"} size={28} className="font-light text-xm text-white">
                <BiLogoYoutube />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3></h3>
            <form className="flex flex-col">
              <label className="text-white">Join our newsletter</label>
              <input
                className="bg-white w-[60%] p-2 rounded-md"
                type="text"
                id="email"
                name="email"
              />
              <label> </label>
            </form>

            
            <ContentBtn btnTittle={"Subscribe"} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
