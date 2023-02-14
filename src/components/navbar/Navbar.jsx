import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DropDownIcon, MainLogo, PhoneIcon } from "../../assets/icons";
import { useAppContext } from "../../context/app.context";

const Navbar = () => {
  const {scrolValue} = useAppContext();
  console.log(scrolValue ?? 0)
  return (
    <nav
      className={`py-4 top-0 w-full ${scrolValue > 0 ? "bg-black" : "backdrop-blur-md"} text-white  transition-opacity absolute`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto container">
        <div className="w-1/6">
          <MainLogo />
        </div>
        <div className="w-3/6 flex justify-between ">
          <Link to="#">So‘ngi yangiliklar</Link>
          <Link to="#">Dolzarb Xabarlar</Link>
          <Link to="#">Foto yangiliklar</Link>
          <Link to="#">Video yangiliklar</Link>
        </div>
        <div className="w-2/6 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span> +998 94 332 00 16</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-900 bg-slate-500 ml-10 p-2.5 rounded">
            Language <DropDownIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
