import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./ShortInfoCard.css"

import { CalendarIcon, VideoPlayerIcon } from "../../assets/icons";

import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/images/img-placeholder.png";

const ShortInfoCard = ({ endpoint, img, dateProps, title, body, video }) => {
  const date = new Date();
  const minut = String(date.getMinutes()).padStart(2.0),
    hour = String(date.getHours()).padStart(2, 0),
    day = String(date.getDate()).padStart(2, 0),
    month = String(date.getMonth() + 1).padStart(2, 0),
    year = String(date.getFullYear());

  return (
    <Link to={endpoint} className="bg-orange-200 p-8 border border-red-600">
      {video ? (
        // <LazyLoadImage
        //   src={img?.src ?? placeholder}
        //   alt={img?.alt ?? "img alt"}
        //   className="img-lazy"
        //   width={img?.width ?? "auto"}
        //   height={img?.height ?? "auto"}
        //   placeholderSrc={placeholder}
        //   effect="blur" // opacity | black-and-white
        // />
        <img src={placeholder}/>
      ) : (
        <div className="relative">
          {/* <LazyLoadImage
            src={img?.src ?? placeholder}
            alt={img?.alt ?? "img alt"}
            className="img-lazy"
            width={img?.width ?? "auto"}
            height={img?.height ?? "auto"}
            placeholderSrc={placeholder}
            effect="blur" // opacity | black-and-white
          /> */}
        <img src={placeholder}/>

          <VideoPlayerIcon />
        </div>
      )}
      <span>
        <CalendarIcon />
        14:11 / 02.02.2023
        {hour}:{minut} / {day}.{month}.{year}
      </span>
      <h2>{title ?? "Main title"}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html:
            body ?? ""
        }}
      />
    </Link>
  );
};

export default ShortInfoCard;
