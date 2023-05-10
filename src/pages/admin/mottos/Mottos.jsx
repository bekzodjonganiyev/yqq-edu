import React, { useContext, useEffect, useState } from "react";

import { EditForm, FormHeader, SkeletonPost, Table } from "../../../components";
import { DeleteIcon, EditIcon } from "../../../assets/icons";

import { userActions, UsersContext } from "../../../context";
const News = () => {
  const { users, isLoading, error, alert } = useContext(UsersContext);
  const [status, setStatus] = useState("read");

  const analyseNameTableHead = [
    "T/r",
    "Ismi",
    "telefon raqami",
    "Paroli",
    "Amallar",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    return (
      <tr key={index} className="cursor-pointer hover:bg-gray-100">
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.password}</td>
        <td className="">
          <button
            className="mr-4 hover:scale-125"
            onClick={() => {
              setOnEdit({ open: true, id: item._id });
            }}
          >
            <EditIcon />
          </button>
          <button
            className="hover:scale-125"
            onClick={() => {
              const deleteConfirm = confirm(
                "Malumotni o'chirishga tayyormisiz? ⚠"
              );
              deleteConfirm && userActions.deleteUser(item._id);
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

  function handleSubmit(e) {
    e.preventDefault()
    const fmData = new FormData()
    fmData.append("title_uz". e.target.title_uz.value)
    fmData.append("title_ru". e.target.title_ru.value)
    fmData.append("title_en". e.target.title_en.value)
    fmData.append("title_ar". e.target.title_ar.value)
    fmData.append("body_uz". e.target.body_uz.value)
    fmData.append("body_ru". e.target.body_ru.value)
    fmData.append("body_en". e.target.body_en.value)
    fmData.append("body_ar". e.target.body_ar.value)
  }

  // useEffect(() => {
  //   userActions.getUsers("user/users");
  // }, []);

  let content = null;
  let fetchedContent = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : error ? (
    <h1 className="text-3xl text-center p-10 bg-gray-100">
      Malumotlar topilmadi
    </h1>
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
        bodyData={[]}
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
          Malumotlar qo`shildi
        </div>
      )}
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between gap-10 items-center">
          <div className="flex flex-col w-full">
            <label htmlFor="title_uz">Shoir uchun sarlavha(UZ)</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_uz"
              name="title_uz"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="body_uz">Shiorning sharhi(UZ)</label>
            <textarea
              className=" w-full text-sm text-gray-500 border border-gray-500 rounded cursor-pointer"
              id="body_uz"
              name="body_uz"
            />
          </div>
          <br />

          <div className="flex flex-col w-full">
            <label htmlFor="title_ru">Shoir uchun sarlavha(RU)</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_ru"
              name="title_ru"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="body_ru">Shiorning sharhi(RU)</label>
            <textarea
              className=" w-full text-sm text-gray-500 border border-gray-500 rounded cursor-pointer"
              id="body_ru"
              name="body_ru"
            />
          </div>
          <br />

          <div className="flex flex-col w-full">
            <label htmlFor="title_en">Shoir uchun sarlavha(EN)</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_en"
              name="title_en"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="body_en">Shiorning sharhi(EN)</label>
            <textarea
              className=" w-full text-sm text-gray-500 border border-gray-500 rounded cursor-pointer"
              id="body_en"
              name="body_en"
            />
          </div>
          <br />

          <div className="flex flex-col w-full">
            <label htmlFor="title_ar">Shoir uchun sarlavha(AR)</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_ar"
              name="title_ar"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="body_ar">Shiorning sharhi(AR)</label>
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
          Saqlash
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
        title="Shiorlar"
        event2="Qo'shish"
        handleEvent2={() => setStatus("create")}
        event1="Barchasi"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default News;
