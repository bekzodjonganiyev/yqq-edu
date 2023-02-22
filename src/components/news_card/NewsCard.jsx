import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./NewsCard.css";

import { CalendarIcon } from "../../assets/icons";

import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/images/img-placeholder.png";

const ShortInfoCard = ({
  endpoint,
  category,
  img,
  dateProps,
  title,
  body,
  video,
  inner
}) => {
  const date = new Date();
  const minut = String(date.getMinutes()).padStart(2.0),
    hour = String(date.getHours()).padStart(2, 0),
    day = String(date.getDate()).padStart(2, 0),
    month = String(date.getMonth() + 1).padStart(2, 0),
    year = String(date.getFullYear());
  return (
    <Link to={`/news/details/${category}/${endpoint}`}>
      <div className={`flex ${inner ? "gap-5" : "flex-col w-[430px]"}`}>
        <div className={` ${inner ? "w-[250px] h-[180px]" : 'w-full h-auto'} mb-2 relative`}>
          <LazyLoadImage
            src={`https://source.unsplash.com/2ShvY8Lf6l0/800x599`}
            alt={`Image Alt`}
            className={`img-lazy ${inner ? "lazy-image-inner" : "lazy-image"} `}
            placeholderSrc={placeholder}
            effect="blur" // opacity | black-and-white
          />
          {video && (
            <span className="glightbox_video">
              <span className={`${inner ? "play-btn-inner" : "play-btn"}`} href="#"></span>
            </span>
          )}
        </div>
        <div className={`${inner ? "w-4/6" : ""}`}>
          <div className="flex items-center gap-2 ">
            <CalendarIcon />{" "}
            <span>{`${hour}:${minut} / ${day}.${month}.${year}`}</span>
          </div>
          <p className={`font-bold mt-2 ${inner ? "text-xl" : "news-title"} `}>
            Xizmatlar sohasi qanday o‘zgardi? – iqtisodchi bilan imkoniyatlar
            haqida suhbat Xizmatlar sohasi qanday o‘zgardi? – iqtisodchi bilan
            imkoniyatlar haqida suhbat Xizmatlar sohasi qanday o‘zgardi? –
            iqtisodchi bilan imkoniyatlar haqida suhbat
          </p>
        </div>
        {}
      </div>
    </Link>
  );
};

export default ShortInfoCard;
