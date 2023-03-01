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
    <div className="mx-auto bg-hero bg-origin-content bg-no-repeat bg-cover  w-full h-[800px] sm:h-[300px] md:h-[500px] xl:h-[800px] 2xl:h-screen border border-zinc-500">
      {/* HERO TEXT */}
      <div className="mx-auto container w-[90%] flex items-center gap-10 box-border mt-24 xl:flex-row flex-col-reverse">
        {/* SOCIAL MEDIAS */}
        <div className="flex flex-row items-center gap-5 xl:flex-col">
          <VerticalLineIcon />
          <FacebookIcon  />
          <InstagramIcon />
          <YouTubeIcon />
          <TelegramIcon />
          <VerticalLineIcon  />
        </div>

        {/* INTRO TEXT */}
        <div className="2xl:w-[700px]">
          <h1 className="2xl:text-5xl max-xl:text-3xl text-white mb-8 font-bold text-5xl">
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
