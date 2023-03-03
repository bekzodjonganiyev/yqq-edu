import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { RecommendContent, SkeletonPost } from "..";
import { CalendarIcon } from "../../assets/icons";
import { newsActions, UsersContext } from "../../context";

const MoreDetails = () => {
  const { id, category } = useParams();
  const all = useParams();
  const navigate = useNavigate();
  const { newById, error, isLoading } = useContext(UsersContext);

  useEffect(() => {
    newsActions.getNewById(all?.id);
    if (error) {
      navigate("/404");
    }
  }, [id]);

  return (
    <div className=" container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col py-10">
       <div className="lg:w-9/12 w-full">
        <div className="lg:w-9/12 w-full flex flex-wrap gap-5">
          <CalendarIcon inner={true} />{" "}
          <span className="font-bold">{newById.date}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">{newById?.title_uz}</h1>
        <div dangerouslySetInnerHTML={{ __html: newById?.body_uz }} />
      </div>
      <div className="lg:w-3/12 w-full">
        <RecommendContent
          inner={true}
          url={"news/all"}
          category={category}
        />
      </div>
    </div>
  );
};

export default MoreDetails;
