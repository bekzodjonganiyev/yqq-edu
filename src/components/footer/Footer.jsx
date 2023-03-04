import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  MainLogo,
  PhoneIcon,
  TelegramIcon,
  YouTubeIcon,
} from "../../assets/icons";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black w-full py-10">
      <div className="container mx-auto w-[90%] lg:block flex justify-between items-center max-md:flex-col">
        <Link to="/" className="my-9 block">
        <img src={logo} alt="" width={"150"} height={"20"} className="" />
        </Link>
        <div className="flex gap-4 items-end justify-between ">
          <div className="flex lg:flex-col flex-row-reverse lg:gap-[35px] gap-28 max-md:flex-col max-md:gap-10 max-md:items-center">
            <div className="flex lg:gap-4 gap-10">
              <FacebookIcon color="white" />
              <InstagramIcon color="white" />
              <YouTubeIcon color="white" />
              <TelegramIcon color="white" />
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <span className="text-white"> +998 94 332 00 16</span>
            </div>
          </div>
          <p
            className="text-[#F2F2F2] lg:block hidden"
            dangerouslySetInnerHTML={{
              __html: t("Footer.info"),
            }}
          ></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
