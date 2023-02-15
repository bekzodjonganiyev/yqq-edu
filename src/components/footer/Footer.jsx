import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  VerticalLineIcon,
  YouTubeIcon,
} from "../../assets/icons";
const Footer = () => {
  return (
    <div>
      <div className="flex">
        <VerticalLineIcon />
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
        <TelegramIcon />
        <VerticalLineIcon />
      </div>
    </div>
  );
};

export default Footer;
