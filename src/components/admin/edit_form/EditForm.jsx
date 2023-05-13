import React, { useContext, useEffect } from "react";
import { Form, SkeletonPost } from "../..";
import { vacancyActions, UsersContext, blogActions } from "../../../context";

const EditForm = ({ id, closeModal, url }) => {
  const { vacancyById, newById, isLoading, error, alert, modalClose } =
    useContext(UsersContext);
  useEffect(() => {
    if (url === "elon") {
      vacancyActions.getById(id);
    } else {
      blogActions.getById(id);
    }
  }, [id, url]);

  if (modalClose) {
    closeModal();
  }

  let content = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : (
    <Form
      title={{
        uz: url === "elon" ? vacancyById.title_uz : newById.title_uz,
        ru: url === "elon" ? vacancyById.title_ru : newById.title_ru,
        en: url === "elon" ? vacancyById.title_en : newById.title_en,
        ar: url === "elon" ? vacancyById.title_ar : newById.title_ar,
      }}
      body={{ 
        uz: url === "elon" ? vacancyById.body_uz : newById.body_uz, 
        ru: url === "elon" ? vacancyById.body_ru : newById.body_ru, 
        en: url === "elon" ? vacancyById.body_en : newById.body_en,
        ar: url === "elon" ? vacancyById.body_ar : newById.body_ar,
      }}
      category={url}
      date={ url === "elon" ? vacancyById.date : newById.date}
      id={id}
    />
  );

  return (
    <div className="absolute top-0 left-0 z-50 h-screen w-screen bg-white p-10 overflow-y-scroll">
      <div className="container mx-auto w-[90%]">
        <button
          onClick={() => closeModal()}
          className="text-lg bg-gray-100 rounded-full w-10 h-10 float-right  hover:bg-gray-800 hover:text-white"
        >
          X
        </button>
        <br />
        <br />
        {content}
      </div>
    </div>
  );
};

export default EditForm;
