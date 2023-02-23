import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { DropDownIcon, MainLogo, PhoneIcon } from "../../assets/icons";

import { UsersContext } from "../../context";

const Navbar = () => {
  const { pathname } = useLocation();
  const scrollValue = useContext(UsersContext)
  return (
    <header
      className={`py-4 ${
        scrollValue > 0 || pathname !== "/" ? "bg-black " : "backdrop-blur-2xl"
      }
       text-white  transition-opacity ${
         pathname === "/" ? "absolute w-full" : ""
       }
       ${pathname !== "/" ? "sticky top-0" : ""} w-full  z-10`}
    >
      <div className="flex items-center justify-between container mx-auto w-[90%]">
        <div className="w-1/6">
          <Link to="/">
            <MainLogo />
          </Link>
        </div>
        <div className="w-3/6 flex justify-between ">
          <Link to="latest-news">So‘ngi yangiliklar</Link>
          <Link to="actual-news">Dolzarb Xabarlar</Link>
          <Link to="photo-news">Foto yangiliklar</Link>
          <Link to="video-news">Video yangiliklar</Link>
        </div>
        <div className="w-2/6 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span> +998 94 332 00 16</span>
          </div>
          <div className="flex items-center gap-3 text-black bg-[#F2F2F2] ml-10 p-2.5 rounded cursor-pointer">
            Language <DropDownIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;