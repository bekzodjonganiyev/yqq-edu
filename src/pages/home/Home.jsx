import { useContext, useEffect, useState, useRef } from "react";

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

import { imgPrefix, smallActions } from "../../context/provider";
import { newsActions, UsersContext } from "../../context";

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const imageElement = imageRef.current;
  //   const animate = (timestamp) => {
  //     imageElement.style.opacity = "0";
  //     imageElement.style.scale = "0.8";
  //     imageElement.style.transition = " 1s";

  //     for (let i = 0; i < 100; i++) {
  //       setTimeout(() => {
  //         imageElement.style.backgroundImage = `url(${images[currentImage]})`;
  //         imageElement.style.opacity = (i + 1) / 10;
  //         imageElement.style.scale = (i + 1) / i - 0.01;
  //         imageElement.style.transition = "opacity 4s";
  //       }, (i + 1) * 50);
  //     }
  //   };
  //   requestAnimationFrame(animate);
  // }, [currentImage]);

  return (
    <div
      ref={imageRef}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

const Home = () => {
  const { t } = useTranslation();
  const { news, banner } = useContext(UsersContext);
  const [alert, setAlert] = useState(localStorage.getItem("alert"));
  const [currentImage, setCurrentImage] = useState(0);
  const imageRef = useRef(null);
  const mock = {
    uz: {
      title: "Men haqimda",
      about:
        "Men Hasanboy Rasulov 1992-yil tug’ilganman. Ma’lumotim oliy. Ushbu saytni maktab o’qituvchilariga, o’quvchilarga va ingliz tili o’rganuvchilarga maslahat, tavsiyalar berib va ma’lumotlar almashib borish uchun tashkil etdim. Sizda har qanday qiziqarli ma’lumotlar, takliflar bo’lsa @hasanboy_uz telegram adressiga yuborishingiz mumkin. Men bilan bog’lanishning men uchun eng qulay usuli bu telegram orqali bog’lanish. Telefon qilinganda yoki SMS yozilganda javob bermasligim ehtimoli yuqori.Sizning murojaatingiz bee’tibor qoldirilmaydi. Savollaringizga qo’ldan kelganicha va bilimim yetganicha javob berishga harakat qilaman.",
      hobbi: {
        title: "Mening sevimli mashg'ulotimlarim:",
        content: [
          "Kitob o’qish",
          "Kitob o’qish",
          "Kitob o’qish",
          "Kitob o’qish",
        ],
      },
    },
    ru: {
      title: "Men haqimda",
      about:
        "Men Hasanboy Rasulov 1992-yil tug’ilganman. Ma’lumotim oliy. Ushbu saytni maktab o’qituvchilariga, o’quvchilarga va ingliz tili o’rganuvchilarga maslahat, tavsiyalar berib va ma’lumotlar almashib borish uchun tashkil etdim. Sizda har qanday qiziqarli ma’lumotlar, takliflar bo’lsa @hasanboy_uz telegram adressiga yuborishingiz mumkin. Men bilan bog’lanishning men uchun eng qulay usuli bu telegram orqali bog’lanish. Telefon qilinganda yoki SMS yozilganda javob bermasligim ehtimoli yuqori.Sizning murojaatingiz bee’tibor qoldirilmaydi. Savollaringizga qo’ldan kelganicha va bilimim yetganicha javob berishga harakat qilaman.",
      hobbi: {
        title: "Mening sevimli mashg'ulotim:",
        content: [
          "Kitob o’qish",
          "Kitob o’qish",
          "Kitob o’qish",
          "Kitob o’qish",
        ],
      },
    },
    en: {
      title: "Men haqimda",
      about:
        "Men Hasanboy Rasulov 1992-yil tug’ilganman. Ma’lumotim oliy. Ushbu saytni maktab o’qituvchilariga, o’quvchilarga va ingliz tili o’rganuvchilarga maslahat, tavsiyalar berib va ma’lumotlar almashib borish uchun tashkil etdim. Sizda har qanday qiziqarli ma’lumotlar, takliflar bo’lsa @hasanboy_uz telegram adressiga yuborishingiz mumkin. Men bilan bog’lanishning men uchun eng qulay usuli bu telegram orqali bog’lanish. Telefon qilinganda yoki SMS yozilganda javob bermasligim ehtimoli yuqori.Sizning murojaatingiz bee’tibor qoldirilmaydi. Savollaringizga qo’ldan kelganicha va bilimim yetganicha javob berishga harakat qilaman.",
      hobbi: {
        title: "Mening sevimli mashg'ulotim:",
        content: [
          "Kitob o’qish",
          "Kitob o’qish",
          "Kitob o’qish",
          "Kitob o’qish",
        ],
      },
    },
  };

  const images = banner.map((item) => imgPrefix + item.banner_img);
  useEffect(() => {
    newsActions.getNews("news/all");
    smallActions.getBanner("banner/get/all");
    localStorage.setItem("alert", true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {!alert && (
        <div className="absolute z-50 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="p-8 bg-[#222] rounded-xl w-[30%] h-[30%] relative flex gap-4 items-center  ">
            <button
              className="absolute right-4 top-4 text-white"
              onClick={() => setAlert(true)}
            >
              X
            </button>
            <h1 className="text-white text-xl">
              <a
                href=""
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
        { banner?.length === 0 && <Hero />}
        {/* <ImageSlider images={images}/> */}
        <div
          ref={imageRef}
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </LazyLoadComponent>

      {/* Latest News */}
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
              height="80%"
              className={`img-lazy`}
              effect="opacity" // opacity | black-and-white
            />
          </div>
          <div className="xl:w-1/2 w-full py-8 box-border">
            <h1 className="text-6xl font-bold mb-8">{mock.uz.title}</h1>
            <p className="mb-8">{mock.uz.about}</p>
            <ul>
              <p className="text-4xl font-bold mb-8">{mock.uz.hobbi.title}</p>
              {mock.uz.hobbi.content.map((i, id) => (
                <li key={id} className="list-inside list-disc mb-4">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* About Me */}

      {/* Video News */}
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
