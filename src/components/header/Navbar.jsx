import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "./Navbar.css";

import { DropDownIcon, MainLogo, PhoneIcon } from "../../assets/icons";
import logo from "../../assets/images/logo.png";
import { UsersContext } from "../../context";

const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { scrollValue } = useContext(UsersContext);
  const [isOpen, setOpen] = useState({ hamburger: false, lang: false });
  const [langTitle, setLangTitle] = useState(localStorage.getItem("langTitle") || "Uz");
  const language = [
    {
      code: "en",
      name: "En",
      conuntry_code: "gb",
    },
    {
      code: "uz",
      name: "Uz",
      conuntry_code: "uz",
    },
    {
      code: "ru",
      name: "Ru",
      conuntry_code: "ru",
    },
  ];

  const toggleHamburger = () => {
    setOpen({ hamburger: !isOpen.hamburger });
  };
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
            <img src={logo} alt="" width={"150"} height={"20"} className="" />
          </Link>
        </div>
        <div
          className={`w-3/6 xl:flex justify-between ${
            isOpen.hamburger
              ? "xl:static absolute top-0 left-0 max-xl:w-full max-xl:h-screen xl:bg-inherit bg-[rgba(0,0,0,0.96)] max-xl:flex max-xl:flex-col max-xl:justify-start max-xl:pt-24"
              : "hidden"
          }`}
        >
          <Link
            to="/"
            className="max-xl:block hidden pl-14 -mt-16 mb-14"
            onClick={() => toggleHamburger()}
          >
            <MainLogo />
          </Link>
          <Link
            to={`${i18next.language}/latest-news`}
            className="max-xl:pl-14 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"
            onClick={() => toggleHamburger()}
          >
            {t("Header.lastNews")}
          </Link>
          <Link
            to={`${i18next.language}/actual-news`}
            className="max-xl:pl-14 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"
            onClick={() => toggleHamburger()}
          >
            {t("Header.actualNews")}
          </Link>
          <Link
            to={`${i18next.language}/photo-news`}
            className="max-xl:pl-14 max-xl:text-[#F06D06]  border-red-900 max-xl:mb-8"
            onClick={() => toggleHamburger()}
          >
            {t("Header.photoNews")}
          </Link>
          <Link
            to={`${i18next.language}/video-news`}
            className="max-xl:pl-14 max-xl:text-[#F06D06]  border-red-900"
            onClick={() => toggleHamburger()}
          >
            {t("Header.videoNews")}
          </Link>
          <div
            className="max-xl:block hidden pl-14 mt-8"
            onClick={() => alert("Bu funksiya ishlab chiqish jarayonida")}
          >
            {" "}
            Uz <DropDownIcon />
          </div>
        </div>
        <div className="w-2/6 flex items-center justify-end gap-3">
          <div className="flex items-center gap-2 max-[779px]:hidden">
            <PhoneIcon />
            <span> +998 94 332 00 16</span>
          </div>
          <div
            className="items-center gap-3 text-black bg-[#F2F2F2] ml-10 p-2.5 rounded cursor-pointer xl:flex hidden relative"
            onClick={() => setOpen({...isOpen, lang: !isOpen.lang})}
          >
            {langTitle} <DropDownIcon />
            {isOpen.lang && (
              <ul className="absolute bg-[#F2F2F2] pb-2 text-black top-10 left-0 w-full rounded">
                {language.map((item) => (
                  <li className="px-2.5" onClick={() => {
                    i18next.changeLanguage(item.code)
                    setLangTitle(item.name)
                    localStorage.setItem("langTitle", item.name)
                  }}>
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="xl:hidden block">
            <Hamburger
              toggled={isOpen.hamburger}
              toggle={() => toggleHamburger()}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
