import { useContext, useEffect } from "react";
import { NewsCard, RecommendContent } from "../../components";
import { imgPrefix } from "../../context/provider";
import { UsersContext, newsActions } from "../../context";

const VideoNews = () => {
  // const generateArray = (items) => [...Array.from(Array(items).keys())];
  const {news} = useContext(UsersContext)

  useEffect(() => {
    newsActions.getNews("news/all")
  }, []);
  return (
    <div className="w-full">
      <h1 className="container mx-auto w-[90%] my-10 font-semibold text-3xl">
        Video yangilillar
      </h1>

      <div className="container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col">
        <div className="lg:w-9/12 w-full flex flex-col gap-5">
          {news
            .filter((item) => item.category === "d")
            .map((subItem) => (
              <NewsCard
                key={subItem._id}
                id={subItem}
                video={true}
                inner={true}
                endpoint={subItem._id}
                category={subItem.category}
                title={subItem.title_uz}
                img={imgPrefix + subItem.photo}
                dateProps={subItem.date}
              />
            ))}
        </div>
        <div className="lg:w-3/12 w-full">
          <RecommendContent inner={true} url={"news/all"} category={"d"} />
        </div>
      </div>
    </div>
  );
};

export default VideoNews;
