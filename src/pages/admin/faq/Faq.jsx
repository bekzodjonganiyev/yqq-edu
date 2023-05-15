import React, { useContext, useState, useEffect } from "react";

import { FormHeader, SkeletonPost, Table } from "../../../components";
import { DeleteIcon } from "../../../assets/icons";

import { UsersContext, faqAndMottoActions } from "../../../context";

const Faq = () => {
  const { isLoading, error, faq, alert } = useContext(UsersContext);
  const [status, setStatus] = useState("read");

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      title_uz: e.target.title_uz.value,
      title_ru: e.target.title_ru.value,
      title_en: e.target.title_en.value,
      title_ar: e.target.title_ar.value,
      body_uz: e.target.body_uz.value,
      body_ru: e.target.body_ru.value,
      body_en: e.target.body_en.value,
      body_ar: e.target.body_ar.value,
      category: "a"
    };
    faqAndMottoActions.add(JSON.stringify(obj));
  }
  useEffect(() => {
    faqAndMottoActions.get("a");
  }, [status]);

  const analyseNameTableHead = ["T/r", "Savol", "Javob", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    return (
      <tr key={index} className="cursor-pointer hover:bg-gray-100">
        <td>{index + 1}</td>
        <td>{item.title_uz}</td>
        <td>{item.body_uz}</td>
        <td className="">
          <button
            className="hover:scale-125"
            onClick={() => {
              const deleteConfirm = confirm(
                "Malumotni o'chirishga tayyormisiz? ⚠"
              );
              deleteConfirm && faqAndMottoActions.delete(item._id);
            }}
          >
            <span className="">
              <DeleteIcon />
            </span>
          </button>
        </td>
      </tr>
    );
  };

  let content = null;
  let fetchedContent = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : error ? (
    <h1 className="text-3xl text-center p-10 bg-gray-100">Xatolik ❌</h1>
  ) : (
    <>
      {alert && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-red-700 rounded-xl z-50 text-white transition-opacity">
          Malumot o'chirildi
        </div>
      )}

      <Table
        headData={analyseNameTableHead}
        renderHead={renderHead}
        bodyData={faq}
        renderBody={renderBody}
        limit={10}
      />
    </>
  );

  // FORM HERE
  let form = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : (
    <>
      {alert && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-green-700 rounded-xl z-50 text-white transition-opacity">
          Reference deleted
        </div>
      )}
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between gap-10 items-center">
          <div className="flex flex-col w-full">
            <label htmlFor="title_uz">Title for the poet(UZ)</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_uz"
              name="title_uz"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="body_uz">Commentary on the motto (UZ)</label>
            <textarea
              className=" w-full text-sm text-gray-500 border border-gray-500 rounded cursor-pointer"
              id="body_uz"
              name="body_uz"
            />
          </div>
          <br />

          <div className="flex flex-col w-full">
            <label htmlFor="title_ru">Title for the poet(RU)</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_ru"
              name="title_ru"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="body_ru">Commentary on the motto(RU)</label>
            <textarea
              className=" w-full text-sm text-gray-500 border border-gray-500 rounded cursor-pointer"
              id="body_ru"
              name="body_ru"
            />
          </div>
          <br />

          <div className="flex flex-col w-full">
            <label htmlFor="title_en">Title for the poet(En)</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_en"
              name="title_en"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="body_en">Commentary on the motto(EN)</label>
            <textarea
              className=" w-full text-sm text-gray-500 border border-gray-500 rounded cursor-pointer"
              id="body_en"
              name="body_en"
            />
          </div>
          <br />

          <div className="flex flex-col w-full">
            <label htmlFor="title_ar">Title for the poet(Ar)</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_ar"
              name="title_ar"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="body_ar">Commentary on the motto(AR)</label>
            <textarea
              className=" w-full text-sm text-gray-500 border border-gray-500 rounded cursor-pointer"
              id="body_ar"
              name="body_ar"
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-2 border border-gray-700 rounded hover:bg-gray-800 hover:text-white w-full"
        >
          Save
        </button>
      </form>
    </>
  );
  //FORM HERE

  status === "read"
    ? (content = fetchedContent)
    : status === "create"
    ? (content = form)
    : (content = null);

  return (
    <div>
      <FormHeader
        title="Question answer"
        event2="Add"
        handleEvent2={() => setStatus("create")}
        event1="Oll"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default Faq;
