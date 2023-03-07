import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { UsersContext, smallActions } from "../../context";

import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  VerticalLineIcon,
  YouTubeIcon,
} from "../../assets/icons";
import { imgPrefix } from "../../context/provider";

const Hero = () => {
  const { t } = useTranslation();
  const { banner } = useContext(UsersContext);
  useEffect(() => {
    smallActions.getBanner("banner/get/all");
  }, []);
  const images = banner.map(
    (item) => "url(" + imgPrefix + item.banner_img + ")"
  );
  function randomImg() {
    let a;
    setInterval(() => {a = Math.random()}, 7000)
    console.log(a)
    return a
  }
  console.log(randomImg())
  // function changeBg() {
  //   const heroBg = document.querySelector("#hero-bg");
  //   const bg = images[Math.floor(Math.random() * images.length)];
  //   heroBg.style.backgroundImage = bg;
  // }
  // setInterval(changeBg, 7000);


  return (
    <div
      id="hero-bg"
      className="mx-auto bg-hero bg-origin-content bg-no-repeat bg-cover  w-full h-[800px] sm:h-[300px] md:h-[500px] xl:h-[800px] 2xl:h-screen border"
    >
      {/* HERO TEXT */}
      <div className="mx-auto container w-[90%] flex items-center gap-10 box-border mt-24 xl:flex-row flex-col-reverse">
        {/* SOCIAL MEDIAS */}
        <div className="flex flex-row items-center gap-5 xl:flex-col">
          <VerticalLineIcon />
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <TelegramIcon />
          <VerticalLineIcon />
        </div>

        {/* INTRO TEXT */}
        <div className="2xl:w-[700px]">
          <h1 className="2xl:text-5xl max-xl:text-3xl text-white mb-8 font-bold text-5xl">
            {t("Hero.motto")}
          </h1>
          <p className="text-white text-xl">{t("Hero.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
