import { useContext, useEffect } from "react";
import { NewsCard, RecommendContent } from "../../components";
import { newsActions, UsersContext } from "../../context";
import { imgPrefix } from "../../context/provider";

const ActualNews = () => {
  const {news} = useContext(UsersContext)

  useEffect(() => {
    newsActions.getNews("news/all")
  }, []);
  return (
    <div className="w-full">
      <h1 className="container mx-auto w-[90%] my-10 font-semibold text-3xl">
        Dolzarb yangilillar
      </h1>

      <div className="container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col">
        <div className="lg:w-9/12 w-full flex flex-col gap-5">
          {news
            .filter((item) => item.category === "b")
            .map((subItem) => (
              <NewsCard
                key={subItem._id}
                id={subItem}
                video={false}
                inner={true}
                endpoint={subItem._id}
                category={subItem.category}
                img={ imgPrefix+ subItem.photo}
                title={subItem?.title_uz}
                dateProps={subItem.date}
              />
            ))}
        </div>
        <div className="lg:w-3/12 w-full">
          <RecommendContent inner={true} url={"news/all"} category={"b"} />
        </div>
      </div>
    </div>
  );
};

export default ActualNews;
