import { useEffect, useState } from "react";
import { NewsCard, RecommendContent } from "../../components";

const LatestNews = () => {
  const generateArray = (items) => [...Array.from(Array(items).keys())];
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
    <div className="w-full">
      <div className="container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col">
        <div className="lg:w-9/12 w-full flex flex-wrap gap-5">
          {allNews
            .filter((item) => item.category === "a")
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
          <RecommendContent inner={true} url={"news/all"} category={"a"} />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
