import React, { useCallback, useState } from "react";
import FsLightbox from "fslightbox-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Gallery from "react-photo-gallery";

// import Carousel, { Modal, ModalGateway } from "react-images";
// import Gallery from "react-photo-gallery";

const ImageGalary = () => {
  const [toggler, setToggler] = useState(false);

  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];
  

  return (
   <>
    <div className="">
      <Gallery
        photos={photos}
        direction={"column"}
        margin="15"
        renderImage={({ index, left, top, key, photo }) => (
          <div key={key} style={{ position: "absolute", left, top }}>
            <LazyLoadImage
              alt={photo.alt}
              effect="blur"
              src={photo.src}
              width={photo.width}
              height={photo.height}
              onClick={() => setToggler(!toggler)} 
              className="rounded-xl"
            />
          </div>
        )}
      />
    </div>
    <FsLightbox
          toggler={toggler}
          sources={photos.map(i => i.src)}
        />
    </>
  );

  //   return (
  //     <>
  //       <div className="flex flex-wrap justify-between">
  //         {a.map((i) => (
  //           <LazyLoadImage
  //             onClick={() => setToggler(!toggler)}
  //             height="auto" width={430}
  //             src={i}
  //             effect="blur"
  //             className="img-lazy rounded-[10px]"
  //           />
  //         ))}
  //       </div>
  //       <FsLightbox
  //         toggler={toggler}
  //         sources={[
  //           "https://i.imgur.com/fsyrScY.jpg",
  //           "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
  //           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  //         ]}
  //       />
  //     </>
  //   );

  //   const photos = [
  //     {
  //       src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  //       width: 4,
  //       height: 3,
  //     },
  //     {
  //       src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  //       width: 1,
  //       height: 1,
  //     },
  //     {
  //       src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  //       width: 3,
  //       height: 4,
  //     },
  //     {
  //       src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  //       width: 3,
  //       height: 4,
  //     },
  //     {
  //       src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  //       width: 3,
  //       height: 4,
  //     },
  //     {
  //       src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  //       width: 4,
  //       height: 3,
  //     },
  //     {
  //       src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  //       width: 3,
  //       height: 4,
  //     },
  //     {
  //       src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  //       width: 4,
  //       height: 3,
  //     },
  //     {
  //       src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  //       width: 4,
  //       height: 3,
  //     },
  //   ];

  //   const [currentImage, setCurrentImage] = useState(0);
  //   const [viewerIsOpen, setViewerIsOpen] = useState(false);

  //   const openLightbox = useCallback((event, { photo, index }) => {
  //     setCurrentImage(index);
  //     setViewerIsOpen(true);
  //   }, []);

  //   const closeLightbox = () => {
  //     setCurrentImage(0);
  //     setViewerIsOpen(false);
  //   };

  //   return (
  //     <div>
  //       <Gallery photos={photos} onClick={openLightbox} direction={"column"} />
  //       <ModalGateway>
  //         {viewerIsOpen ? (
  //           <Modal onClose={closeLightbox}>
  //             <Carousel
  //               currentIndex={currentImage}
  //               views={photos.map((x) => ({
  //                 ...x,
  //                 srcset: x.srcSet,
  //                 caption: x.title,
  //               }))}
  //             />
  //           </Modal>
  //         ) : null}
  //       </ModalGateway>
  //     </div>
  //   );
};

export default ImageGalary;
