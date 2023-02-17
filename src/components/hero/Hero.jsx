import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  VerticalLineIcon,
  YouTubeIcon,
} from "../../assets/icons";

const Hero = () => {
  return (
    <div className="mx-auto bg-hero bg-origin-content bg-no-repeat bg-cover w-full h-[100px] sm:h-[300px] md:h-[500px] xl:h-[800px] 2xl:h-screen">
      {/* HERO TEXT */}
      <div className="py-32 mx-auto container w-[90%] flex items-center gap-10">
        {/* SOCIAL MEDIAS */}
        <div className="flex flex-col items-center gap-5">
          <VerticalLineIcon />
          <FacebookIcon  />
          <InstagramIcon />
          <YouTubeIcon />
          <TelegramIcon />
          <VerticalLineIcon />
        </div>

        {/* INTRO TEXT */}
        <div className="w-[700px]">
          <h1 className="text-5xl text-white mb-8 font-bold">
            Haqiqiy jurnalist bedor bo`lishi kerak… haqiqiy jurnalist{" "}
            vijdonli bo`lishi lozim…
          </h1>
          <p className="text-white text-xl">
            Bugungi kunda ijtimoiy tarmoq foydalanuvchisi borki, o‘zini
            jurnalistman, deb hisoblaydi. Lekin axborot makonida turli xildagi
            feyk va ishonarli ma'lumotlarni saralab, ishonchli ma'lumot yetkazib
            beradigan insonni jurnalist, deb bilaman.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
