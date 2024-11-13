import React from "react";
import Link from "next/link";
import { BiMenu, BiXCircle } from "react-icons/bi";


const Navbar = () => {
 
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu)};



  return (
    <div className="fixed w-full rounded-xl z-10 pt-4">
      <div>
        <div className="bg-white text-slate-950 flex flex-row justify-center p-5 md:px-20 px-2 shadow-md rounded-lg">
          <div className="flex flex-row md:justify-evenly md:items-center cursor-pointer gap-40">
            <div>
              <Link href={"/"} className="">
                <h1 className="text-2xl font-bold">MediCare</h1>
              </Link>
            </div>

            <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
              <Link href={"/"} className="hover:text-slate-400 transition-all">
                Home
              </Link>
              <Link
                href={"/values"}
                className="hover:text-slate-400 transition-all"
              >
                Values
              </Link>
              <Link
                href={"/about"}
                className="hover:text-slate-400 transition-all"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-slate-400 transition-all"
              >
                Contact
              </Link>
              <Link
                href={"/feeds"}
                className="hover:text-slate-400 transition-all"
              >
                Feeds
              </Link>
            </nav>

            <div>
              {menu ? (
                <BiXCircle size={28} OnClick={handleChange} />
              ) : (
                <BiMenu size={28} OnClick={handleChange} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
