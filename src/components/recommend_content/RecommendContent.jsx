import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { CalendarIcon } from "../../assets/icons";
import video from "../../assets/images/video.png";

const fetchedData = [
  {
    _id: Math.random(),
    title: `Toshkentda maktab o‘quvchilarini o‘g‘irlashmoqchi bo‘lishgani haqida
      xabar tarqaldi. IIV rasmiy ma’lumot berdi`,
    img: video,
  },
  {
    _id: Math.random(),
    title: `Toshkentda maktab o‘quvchilarini o‘g‘irlashmoqchi bo‘lishgani haqida
      xabar tarqaldi. IIV rasmiy ma’lumot berdi`,
    img: video,
  },
  {
    _id: Math.random(),
    title: `Toshkentda maktab o‘quvchilarini o‘g‘irlashmoqchi bo‘lishgani haqida
      xabar tarqaldi. IIV rasmiy ma’lumot berdi`,
    img: video,
  },
  {
    _id: Math.random(),
    title: `Toshkentda maktab o‘quvchilarini o‘g‘irlashmoqchi bo‘lishgani haqida
      xabar tarqaldi. IIV rasmiy ma’lumot berdi`,
    img: video,
  },
];

const RecommendContent = ({
  title = "Namuna uchun sarlavha",
  inner,
  url,
  video,
}) => {
  const date = new Date();
  const minut = String(date.getMinutes()).padStart(2.0),
    hour = String(date.getHours()).padStart(2, 0),
    day = String(date.getDate()).padStart(2, 0),
    month = String(date.getMonth() + 1).padStart(2, 0),
    year = String(date.getFullYear());

  return (
    <div className="bg-[#F2F2F2] rounded-xl p-4 hover:cursor-pointer">
      {/* Title for see recommend */}
      {!inner && <h3 className="text-bold text-3xl mb-4">{title}</h3>}

      {/* Date and fhort info */}
      {fetchedData.map((item) => (
        <div key={item._id} className="mb-4">
          <div className="flex justify-between  gap-4">
            {video && (
              <div className="relative">
                <LazyLoadImage
                  src={item.img}
                  alt={`Egamnazar`}
                  className={`img-lazy object-cover rounded-md`}
                  effect="blur" // opacity | black-and-white
                />
                <span className="glightbox_video">
                  <span className={`play-btn-inner`}></span>
                </span>
              </div>
            )}
            <div className="border">
              <div className="flex gap-2 ">
                <CalendarIcon />
                <span>{`${hour}:${minut} / ${day}.${month}.${year}`}</span>
              </div>
              <p className="font-bold text-sm pb-4">
                Toshkentda maktab o‘quvchilarini o‘g‘irlashmoqchi bo‘lishgani haqida xabar tarqaldi. IIV rasmiy ma’lumot berdi
              </p>
            </div>
          </div>

          {!video && <hr className="border-1 border-gray-500" />}
        </div>
      ))}

      {/* See more button */}
      {!inner && (
        <button className="rounded bg-[#F06D06] py-2 text-white text-bold w-full">
          Ko'roq yangilklar
        </button>
      )}
    </div>
  );
};

export default RecommendContent;
