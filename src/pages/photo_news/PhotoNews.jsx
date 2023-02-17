import { NewsCard } from "../../components";

const PhotoNews = () => {
  const generateArray = (items) => [...Array.from(Array(items).keys())];

  return (
    <div className="w-full">
      <div className="container mx-auto w-[90%] flex flex-wrap gap-5 ">
        {generateArray(11).map((a) => (
          <NewsCard key={a} id={a} video={false} />
        ))}
      </div>
    </div>
  );
};

export default PhotoNews;
