import { useContext, useEffect, useState } from "react";

import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import egamnazar from "../../assets/images/egamnazar.png";
import video from "../../assets/images/video.png";
import tgIcon from "../../assets/images/tg_icon.png";
import {
  Hero,
  NewsCard,
  ImageGalary,
  RecommendContent,
} from "../../components";

import { imgPrefix } from "../../context/provider";
import { newsActions, UsersContext } from "../../context";

const Home = () => {
  const { t } = useTranslation();
  const { news } = useContext(UsersContext);
  const [alert, setAlert] = useState(false);
  const mock = {
    uz: {
      title: "Tahririyat haqida",
      about:
        "Yoshlarni qo‘llab-quvvatlash loyihasi 2019-yil o'z faoliyatini boshlagan bo'lib ayni paytda 150 000 nafarndan ziyod kuzatuvchilarga ega. Ushbu loyiha asosan ta'limga oid yangiliklar, muammolar, takliflar va fikr-mulohazalarni jamoatchilikka yetkazish, huquqiy maslahatlar berish faoliyati bilan shug'ullanib keladi. Ushbu loyiha nodavlat tashkilot bo'lib yoshlarni moliyaviy jihatdan qo'llab-quvvatlash xususiyatiga ega emas.",
    },
    ru: {
      title: "Tahririyat haqida",
      about:
        "Yoshlarni qo‘llab-quvvatlash loyihasi 2019-yil o'z faoliyatini boshlagan bo'lib ayni paytda 150 000 nafarndan ziyod kuzatuvchilarga ega. Ushbu loyiha asosan ta'limga oid yangiliklar, muammolar, takliflar va fikr-mulohazalarni jamoatchilikka yetkazish, huquqiy maslahatlar berish faoliyati bilan shug'ullanib keladi. Ushbu loyiha nodavlat tashkilot bo'lib yoshlarni moliyaviy jihatdan qo'llab-quvvatlash xususiyatiga ega emas.",
    },
    en: {
      title: "Tahririyat haqida",
      about:
        "Yoshlarni qo‘llab-quvvatlash loyihasi 2019-yil o'z faoliyatini boshlagan bo'lib ayni paytda 150 000 nafarndan ziyod kuzatuvchilarga ega. Ushbu loyiha asosan ta'limga oid yangiliklar, muammolar, takliflar va fikr-mulohazalarni jamoatchilikka yetkazish, huquqiy maslahatlar berish faoliyati bilan shug'ullanib keladi. Ushbu loyiha nodavlat tashkilot bo'lib yoshlarni moliyaviy jihatdan qo'llab-quvvatlash xususiyatiga ega emas.",
    },
  };

  useEffect(() => {
    newsActions.getNews("news/all");
    setTimeout(() => {
      setAlert(true);
    }, 2000);
  }, []);

  return (
    <div>
      {alert && (
        <div className="absolute z-50 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="p-8 bg-[#222] rounded-xl sm:w-[30%] h-[30%] relative flex gap-4 items-center  ">
            <button
              className="absolute right-4 top-4 text-white"
              onClick={() => setAlert(false)}
            >
              X
            </button>
            <h1 className="text-white text-xl">
              <a
                href="http://t.me/YQQUZB_KANAL"
                target={"_blank"}
                className="underline hover:text-blue-400"
              >
                Telegram kanalimizga
              </a>{" "}
              obuna bo'ling{" "}
            </h1>
            <img src={tgIcon} alt="tg icon" width={40} height="auto" />
          </div>
        </div>
      )}
      <LazyLoadComponent>
        <Hero />
      </LazyLoadComponent>

      {/* Latest News */}
      <h1 className="container mx-auto w-[90%] mt-14 -mb-6 font-semibold text-3xl">
        {t("Header.lastNews")}
      </h1>
      <div className="container mx-auto w-[90%] flex justify-between gap-5 my-10 lg:flex-row flex-col">
        <div className="lg:w-9/12 w-full flex flex-col gap-5 ">
          {news
            .filter((item) => item.category === "a")
            .slice(0, 3)
            .map((subItem) => (
              <NewsCard
                key={subItem._id}
                id={subItem}
                video={false}
                inner={true}
                endpoint={subItem._id}
                category={subItem.category}
                dateProps={subItem.date}
                img={imgPrefix + subItem.photo}
                title={t("NewsCard.title", {
                  news_card_title: `${subItem?.[`title_${i18next.language}`]}`,
                })}
              />
            ))}
        </div>
        <div className="lg:w-3/12 w-full">
          <RecommendContent
            title={t("Header.lastNews")}
            inner={false}
            url={"news/all"}
            category={"a"}
            ownRoute={`/${i18next.language}/latest-news`}
          />
        </div>
      </div>
      {/* Latest News */}

      {/* Actual News */}
      <div className="container mx-auto w-[90%]  my-10">
        <h1 className=" mt-14 mb-4 font-semibold text-3xl">
          {t("Header.actualNews")}
        </h1>
        <div className=" flex flex-wrap justify-between">
          {news
            .filter((item) => item.category === "b")
            .slice(0, 3)
            .map((sebItem) => (
              <NewsCard
                key={sebItem._id}
                id={sebItem}
                video={false}
                inner={false}
                endpoint={sebItem._id}
                category={sebItem.category}
                dateProps={sebItem.date}
                img={imgPrefix + sebItem.photo}
                title={t("NewsCard.title", {
                  news_card_title: `${sebItem?.[`title_${i18next.language}`]}`,
                })}
              />
            ))}
        </div>
      </div>
      {/* Actual News */}

      {/* Image Gallary */}
      <div className="container mx-auto w-[90%] my-10">
        <h1 className=" mt-14 mb-4 font-semibold text-3xl">
          {t("Header.photoNews")}
        </h1>
        <ImageGalary />
      </div>
      {/* Image Gallary */}

      {/* About Me */}
      <div className="bg-[#F2F2F2]">
        <div className="container mx-auto w-[90%] my-10 flex xl:flex-row flex-col gap-10">
          <div className="xl:w-1/2 w-full">
            <LazyLoadImage
              src={egamnazar}
              alt={`Egamnazar`}
              width="100%"
              height="100%"
              className={`img-lazy`}
              effect="opacity" // opacity | black-and-white
            />
          </div>
          <div className="xl:w-1/2 w-full py-8 box-border">
            <h1 className="text-6xl font-bold mb-8">{mock.uz.title}</h1>
            <p className="mb-8">{mock.uz.about}</p>
          </div>
        </div>
      </div>
      {/* About Me */}

      {/* Video News */}
      <h1 className="container mx-auto w-[90%] mt-14 -mb-6 font-semibold text-3xl">
        {t("Header.videoNews")}
      </h1>
      <div className="container mx-auto w-[90%] my-10 flex justify-between gap-10  transition-all">
        <div className="w-2/3 h-[580px] relative md:block hidden ">
          <LazyLoadImage
            src={video}
            alt={`Egamnazar`}
            width="100%"
            height="auto"
            className={`img-lazy w-full h-[580px]  object-cover rounded-xl`}
            effect="opacity" // opacity | black-and-white
          />
          <span className="glightbox_video">
            <span className={`play-btn`} href="#"></span>
          </span>
        </div>
        <div className=" md:w-1/3 w-full h-[580px] overflow-y-scroll">
          <RecommendContent
            inner={false}
            title={t("Header.videoNews")}
            video={true}
            url={"news/all"}
            category={"d"}
            ownRoute={`/${i18next.language}/video-news`}
          />
        </div>
      </div>
      {/* Video News */}
    </div>
  );
};

export default Home;
