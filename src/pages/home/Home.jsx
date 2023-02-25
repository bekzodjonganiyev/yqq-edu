import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import egamnazar from "../../assets/images/egamnazar.png";
import video from "../../assets/images/video.png";
import {
  Hero,
  NewsCard,
  ImageGalary,
  RecommendContent,
} from "../../components";

const Home = () => {
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
  const [allNews, setAllNews] = useState([]);
  async function getDataAll() {
    try {
      const res = await fetch(`http://localhost:4000/api/news/all`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return res.json();
    } catch (err) {
      const e = { message: err.message, error: true, success: false };
      return e;
    }
  }

  useEffect(() => {
    getDataAll().then((res) => setAllNews(res.data));
  }, []);
  return (
    <div>
      <Hero />

      {/* Latest News */}
      <div className="container mx-auto w-[90%] flex justify-between gap-5 my-10 lg:flex-row flex-col">
        <div className="lg:w-9/12 w-full flex flex-wrap gap-5 ">
          {allNews
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
              />
            ))}
        </div>
        <div className="lg:w-3/12 w-full">
          <RecommendContent
            title="So'ngi yangiliklar"
            inner={false}
            url={"news/all"}
            category={"a"}
            ownRoute={"/latest-news"}
          />
        </div>
      </div>
      {/* Latest News */}

      {/* Actual News */}
      <div className="container mx-auto w-[90%]  my-10">
        <div className=" flex flex-wrap justify-between">
          {allNews
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
        <div className="container mx-auto w-[90%] my-10 flex gap-10">
          <div className="w-1/3">
            <LazyLoadImage
              src={egamnazar}
              alt={`Egamnazar`}
              width="100%"
              height="100%"
              className={`img-lazy`}
              effect="blur" // opacity | black-and-white
            />
          </div>
          <div className="w-2/3 py-8 box-border">
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
            effect="blur" // opacity | black-and-white
          />
          <span className="glightbox_video">
            <span className={`play-btn`} href="#"></span>
          </span>
        </div>
        <div className=" md:w-1/3 w-full h-[580px] overflow-y-scroll">
          <RecommendContent
            inner={false}
            title={"Video yangiliklar"}
            video={true}
            url={"news/all"}
            category={"d"}
            ownRoute={"/video-news"}
          />
        </div>
      </div>
      {/* Video News */}
    </div>
  );
};

export default Home;
