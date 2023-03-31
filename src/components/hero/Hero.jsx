import React, { useContext, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
// import styled, { keyframes } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// import {
//   FacebookIcon,
//   InstagramIcon,
//   TelegramIcon,
//   VerticalLineIcon,
//   YouTubeIcon,
// } from "../../assets/icons";
import SpinLoader from "../../assets/images/loadr_spin.gif";

import { UsersContext, smallActions } from "../../context";
import { imgPrefix } from "../../context/provider";

const Hero = () => {
  // const { t } = useTranslation();
  const { banner } = useContext(UsersContext);
  useEffect(() => {
    smallActions.getBanner("banner/get/all");
  }, []);
  // const images = banner.map(
  //   (item) => "url(" + imgPrefix + item.banner_img + ")"
  // );
  //   const change = keyframes`
  //   0% {
  //     background-image: ${images[5]};
  //   }
  //   20% {
  //     background-image: ${images[0]};
  //   }
  //   40% {
  //     background-image: ${images[1]};
  //   }
  //   60% {
  //     background-image: ${images[2]};
  //   }
  //   80% {
  //     background-image: ${images[3]};
  //   }
  //   100% {
  //     background-image: ${images[4]};
  //   }
  // `;
  //   const BgImages = styled.div`
  //     width: 100vw;
  //     backgroundreapeat: no-repeat;
  //     animation: ${change} 20s infinite;
  //   `;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // <BgImages
    //   id="hero-bg"
    //   className="mx-auto bg-origin-content bg-no-repeat bg-cover  w-full h-[800px] sm:h-[300px] md:h-[500px] xl:h-[800px] 2xl:h-screen border"
    // >
    //   {/* HERO TEXT */}
    //   <div className="mx-auto container w-[90%] flex items-center gap-10 box-border mt-24 xl:flex-row flex-col-reverse">
    //     {/* SOCIAL MEDIAS */}
    //     <div className="flex flex-row items-center gap-5 xl:flex-col">
    //       <VerticalLineIcon />
    //       <FacebookIcon />
    //       <InstagramIcon />
    //       <YouTubeIcon />
    //       <TelegramIcon />
    //       <VerticalLineIcon />
    //     </div>

    //     {/* INTRO TEXT */}
    //     <div className="2xl:w-[700px]">
    //       <h1 className="2xl:text-5xl max-xl:text-3xl text-white mb-8 font-bold text-5xl">
    //         {t("Hero.motto")}
    //       </h1>
    //       <p className="text-white text-xl">{t("Hero.description")}</p>
    //     </div>
    //   </div>
    // </BgImages>
    <div>
      <Slider
        {...settings}
        autoplay={true}
        cssEase="linear"
        autoplaySpeed={2000}
        fade={true}
        pauseOnHover={false}
      >
        {banner.map((item) => (
          <div className="w-full" key={item._id}> 
            <LazyLoadImage
              src={imgPrefix + item.banner_img}
              alt={item.title}
              effect={"blur"}
              placeholderSrc={SpinLoader}
              className="w-full img-lazy"
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
