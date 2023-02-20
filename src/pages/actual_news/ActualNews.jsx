import { NewsCard, RecommendContent } from "../../components";

const ActualNews = () => {
  const generateArray = (items) => [...Array.from(Array(items).keys())];
  return (
    <div className="w-full">
      <div className="container mx-auto w-[90%] flex justify-between gap-5 ">
        <div className="w-9/12 flex flex-wrap gap-5">
          {generateArray(11).map((a) => (
            <NewsCard key={a} id={a} video={false} inner={true} />
          ))}
        </div>
        <div className="w-3/12 ">
          <RecommendContent inner={true}/>
        </div>
      </div>
    </div>
  );
};

export default ActualNews;
