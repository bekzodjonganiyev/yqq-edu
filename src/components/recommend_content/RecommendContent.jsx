import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { CalendarIcon } from "../../assets/icons";
import videopng from "../../assets/images/video.png";

const RecommendContent = ({
  title = "Namuna uchun sarlavha",
  inner,
  url,
  video,
  category,
  newsId,
  ownRoute,
}) => {
  const date = new Date();
  const minut = String(date.getMinutes()).padStart(2.0),
    hour = String(date.getHours()).padStart(2, 0),
    day = String(date.getDate()).padStart(2, 0),
    month = String(date.getMonth() + 1).padStart(2, 0),
    year = String(date.getFullYear());
  const [allNews, setAllNews] = useState([]);
  async function getDataAll() {
    try {
      const res = await fetch(`http://localhost:4000/api/${url}`, {
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
    getDataAll().then((res) => {
      const filtered = res.data.filter((item) => item.category === category);
      setAllNews(filtered.slice(0, 5));
    });
  }, []);

  return (
    <div className="bg-[#F2F2F2] rounded-xl p-4 hover:cursor-pointer">
      {/* Title htmlFor see recommend */}
      {!inner && <h3 className="text-bold text-3xl mb-4">{title}</h3>}

      {/* Date and short info */}
      {allNews.slice(0, 5).map((item) => (
        <Link to={`/news/details/${category}/${item._id}`} key={item._id}>
          <div className="mb-4">
            <div className="flex justify-between gap-4">
              {video && (
                <div className="relative w-1/2">
                  <LazyLoadImage
                    src={videopng}
                    alt={`Egamnazar`}
                    className={`img-lazy object-cover rounded-md`}
                    effect="blur" // opacity | black-and-white
                  />
                  <span className="glightbox_video">
                    <span className={`play-btn-inner`}></span>
                  </span>
                </div>
              )}
              <div className="">
                <div className="flex items-center gap-2 ">
                  <CalendarIcon />
                  <span>{`${hour}:${minut} / ${day}.${month}.${year}`}</span>
                </div>
                <p className="font-bold text-sm pb-4">{item.nameuz}</p>
              </div>
            </div>

            {!video && <hr className="border-1 border-gray-500" />}
          </div>
        </Link>
      ))}

      {/* See more button */}
      {!inner && (
        // <button  className="rounded bg-[#F06D06] py-2 text-white text-bold w-full">

        // </button>
        <Link
          to={ownRoute}
          className="rounded bg-[#F06D06] py-2 text-white text-bold w-full block text-center"
        >
          Ko'roq yangilklar
        </Link>
      )}
    </div>
  );
};

export default RecommendContent;
