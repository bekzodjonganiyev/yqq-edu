import { LazyLoadImage } from "react-lazy-load-image-component";

import egamnazar from "../../assets/images/egamnazar.png";
import { Hero, NewsCard, ImageGalary } from "../../components";

const Home = () => {
  console.log("App render");
  const generateArray = (items) => [...Array.from(Array(items).keys())];
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
  return (
    <div>
      <Hero />
      {/* Latest News */}
      <div className="container mx-auto w-[90%] flex justify-between gap-5 my-10">
        <div className="w-9/12 flex flex-wrap gap-5">
          {generateArray(2).map((a) => (
            <NewsCard key={a} id={a} video={false} inner={true} />
          ))}
        </div>
        <div className="w-3/12 ">
          {generateArray(2).map((a) => (
            <h1>reklama</h1>
          ))}
        </div>
      </div>
      {/* Latest News */}

      {/* Actual News */}
      <div className="container mx-auto w-[90%]  my-10">
        <div className=" flex flex-auto flex-wrap justify-between">
          {generateArray(3).map((a) => (
            <NewsCard key={a} id={a} video={false} inner={false} />
          ))}
        </div>
      </div>
      {/* Actual News */}

      {/* Image Gallary */}
      <div className="">
        <div className="container mx-auto w-[90%]  my-10">
          <ImageGalary />
        </div>
      </div>
      {/* Image Gallary */}

      {/* About Me */}
      <div className="bg-[#F2F2F2]">
        <div className="container mx-auto w-[90%] my-10 flex gap-10">
          <div className="w-1/3">
            <LazyLoadImage
              src={egamnazar}
              alt={`Egamnazar`}
              width="100%" height="100%"
              className={`img-lazy`}
              effect="blur" // opacity | black-and-white
            />
          </div>
          <div className="w-2/3 py-8 box-border">
            <h1 className="text-6xl font-bold mb-8">{mock.uz.title}</h1>
            <p className="mb-8">{mock.uz.about}</p>
            <ul>
              <p className="text-4xl font-bold mb-8">{mock.uz.hobbi.title}</p>
              {mock.uz.hobbi.content.map((i) => (
                <li className="list-inside list-disc mb-4">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* About Me */}
    </div>
  );
};

export default Home;
