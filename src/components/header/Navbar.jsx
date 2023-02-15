import { Link, useLocation } from "react-router-dom";

import { DropDownIcon, MainLogo, PhoneIcon } from "../../assets/icons";
import { useAppContext } from "../../context/app.context";

const Navbar = () => {
  const { pathname } = useLocation();
  const { scrolValue } = useAppContext();
  console.log(scrolValue ?? 0);
  return (
    <nav
      className={`py-4 ${
        scrolValue > 0 || pathname !== "/" ? "bg-black" : "backdrop-blur-2xl"
      } text-white  transition-opacity ${
        pathname === "/" ? "absolute" : ""
      } top-0 w-full`}
    >
      <div className="flex items-center justify-between container mx-auto w-[90%]">
        <div className="w-1/6">
          <Link to="/">
            <MainLogo />
          </Link>
        </div>
        <div className="w-3/6 flex justify-between ">
          <Link to="latest-news">So‘ngi yangiliklar</Link>
          <Link to="latest-news">Dolzarb Xabarlar</Link>
          <Link to="latest-news">Foto yangiliklar</Link>
          <Link to="latest-news">Video yangiliklar</Link>
        </div>
        <div className="w-2/6 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span> +998 94 332 00 16</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-900 bg-language-btn ml-10 p-2.5 rounded">
            Language <DropDownIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
