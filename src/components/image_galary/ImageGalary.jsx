import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Gallery from "react-photo-gallery";

import placeholder from "../../assets/images/img-placeholder.png";

const ImageGalary = ({ images }) => {
  const [toggler, setToggler] = useState(false);

  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3,
    },
  ];

  return (
    <>
      <Gallery
        photos={images ? images : photos}
        direction="column"
        margin={15}
        renderImage={({ index, left, top, key, photo }) => (
          <div key={key} style={{ position: "absolute", left, top }}>
            <LazyLoadImage
              alt={photo.alt}
              effect="blur"
              src={photo.src}
              width={photo.width}
              height={photo.height}
              onClick={() => setToggler(!toggler)}
              // placeholder={placeholder}
              className="rounded-xl"
            />
          </div>
        )}
      />
      <FsLightbox
        toggler={toggler}
        sources={photos.map((i) => i.src)}
        showThumbsOnMount={false}
      />
    </>
  );
};

export default ImageGalary;
