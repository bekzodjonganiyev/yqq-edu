import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { RecommendContent } from "..";
import { CalendarIcon } from "../../assets/icons";

const MoreDetails = () => {
  const { id } = useParams();
  const all = useParams();
  const navigate = useNavigate();
  const date = new Date();
  const minut = String(date.getMinutes()).padStart(2.0),
    hour = String(date.getHours()).padStart(2, 0),
    day = String(date.getDate()).padStart(2, 0),
    month = String(date.getMonth() + 1).padStart(2, 0),
    year = String(date.getFullYear());
  const [newsById, setNewsById] = useState({});
  async function getDataById(id) {
    try {
      const res = await fetch(`http://localhost:4000/api/news/${id}`);
      return res.json();
    } catch (err) {
      const e = { message: err.message, error: true, success: false };
      return e;
    }
  }

  useEffect(() => {
    getDataById(all?.id).then((res) => {
      if (res.status === 404) {
        navigate("/404");
      } else {
        setNewsById(res.data);
        return;
      }
    });
  }, [id]);
  return (
    <div className=" container mx-auto w-[90%] flex justify-between gap-5 my-10">
      <div className="w-9/12">
        <div className="flex items-center gap-2 mb-8">
          <CalendarIcon inner={true} />{" "}
          <span className="font-bold">{`${hour}:${minut} / ${day}.${month}.${year}`}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">{newsById?.nameuz}</h1>
        <div dangerouslySetInnerHTML={{ __html: newsById?.descriptionuz }} />
      </div>
      <div className="w-3/12">
        <RecommendContent
          inner={true}
          url={"news/all"}
          category={all?.category}
        />
      </div>
    </div>
  );
};

export default MoreDetails;
