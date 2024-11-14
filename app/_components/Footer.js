import React from "react";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoSnapchat,
  BiLogoYoutube,
} from "react-icons/bi";
import HeaderBtn from "./Buttons/HeaderBtn";

const Footer = () => {
  return (
    <div>
      <div className="gap-10 bg-slate-950 py-16 ">
        <div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-60 h-52">
            <div className="flex flex-col w-[400px] md:w-[30rem] px-3 justify-evenly text-white gap-6">
              <h2 className="text-3xl font-bold">MediCare</h2>
              <p>
                Our Vision: We strive to be a leader of healthcare innovation
                that delivers the highest quality care while providing
                exceptional patient experiences in a modern and inviting
                environment.
              </p>

              <div className="bg-green-950 items-start md:w-[60rem] grid grid-cols-2 md:flex md:flex-row gap-6 md:gap-20 px-2 md:px-20 mt-2 md:mt-8">
                <div className="flex flex-col">
                  <h3 className="font-bold text-white">Contact Us</h3>
                  <Link
                    href={"/about"}
                    className="font-light text-xm text-white"
                  >
                    About us{" "}
                  </Link>
                  <Link
                    href={"/careers"}
                    className="font-light text-xm text-white"
                  >
                    Careers{" "}
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Press{" "}
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Solutions{" "}
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Book a session{" "}
                  </Link>
                </div>

                <div className="flex flex-col px-30">
                  <h3 className="font-bold text-white">Services</h3>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Fertility & Family Building
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Maternity & Newborn Care
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Parenting & Pediatrics
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Menopaus
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Urgent Care
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Primary Care
                  </Link>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-bold text-white">Resources</h3>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Maven Member Journey
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Resource Center
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Webinars
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Blog
                  </Link>
                  <Link href={"#"} className="font-light text-xm text-white">
                    Client Stories
                  </Link>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="gap-4">
                    <h3 className="font-bold text-white">
                      Find us on social media
                    </h3>
                    <div className="flex flex-row gap-8">
                      <Link
                        href={"#"}
                        className="font-light text-xm text-white"
                      >
                        <BiLogoFacebookCircle />
                      </Link>
                      <Link
                        href={"#"}
                        className="font-light text-xm text-white"
                      >
                        <BiLogoInstagramAlt />
                      </Link>
                      <Link
                        href={"#"}
                        className="font-light text-xm text-white"
                      >
                        <BiLogoSnapchat />
                      </Link>
                      <Link
                        href={"#"}
                        className="font-light text-xm text-white"
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
                        className="bg-white rounded-md"
                        type="text"
                        id="email"
                        name="email"
                      />
                      <label> </label>
                    </form>

                    <div>
                      <HeaderBtn btnTittle={"Subscribe"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
