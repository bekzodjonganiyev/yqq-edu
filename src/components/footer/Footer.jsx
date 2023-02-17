import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  MainLogo,
  PhoneIcon,
  TelegramIcon,
  YouTubeIcon,
} from "../../assets/icons";
const Footer = () => {
  return (
    <footer className="bg-black w-full py-10">
      <div className="container mx-auto w-[90%]">
        <Link to="/" className="my-9">
          <MainLogo />
        </Link>
        <br />
        <div className="flex gap-4 items-end justify-between">
          <div className="flex flex-col justify-between gap-[35px]">
            <div className="flex gap-4">
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
          <p className="text-gray-400">
            Guvohnoma: №0987. Berilgan sanasi: 22.06.2015-yil. Muassis: “WEB
            EXPERT” MCHJ. Tahririyat manzili: 100043, Toshkent shahri, K.
            Yormatov koʻchasi, 12-uy. <br /> Elektron manzil: info@kun.uz.{" "}
            <br /> Saytda eʼlon qilinayotgan mualliflik maqolalarida keltirilgan
            fikrlar muallifga tegishli va ular Kun.uz tahririyati nuqtai
            nazarini ifoda etmasligi mumkin.Ⓣ - <br /> maqola va materiallarda
            qo‘yilgan mazkur belgi ularning tijorat va reklama huquqlari asosida
            eʼlon qilinganligini bildiradi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
