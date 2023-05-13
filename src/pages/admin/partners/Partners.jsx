import React, { useContext, useState, useEffect } from "react";

import { FormHeader, SkeletonPost, Table } from "../../../components";
import { DeleteIcon } from "../../../assets/icons";

import { UsersContext, partnersActions } from "../../../context";

const Partners = () => {
  const { isLoading, error, partners, alert } = useContext(UsersContext);
  const [status, setStatus] = useState("read");

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      title_uz: e.target.title_uz.value,
      title_ru: "Any text for pass validation ",
      title_en: "Any text for pass validation ",
      body_uz: "Any text for pass validation ",
      body_ru: "Any text for pass validation ",
      body_en: "Any text for pass validation ",
      icon: e.target.icon.value,
    };
    partnersActions.add(JSON.stringify(obj));
  }
  useEffect(() => {
    partnersActions.get();
  }, [status]);

  const analyseNameTableHead = ["T/r", "Logo", "Name", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    return (
      <tr key={index} className="cursor-pointer hover:bg-gray-100">
        <td>{index + 1}</td>
        <td className="flex items-center justify-center">
          <img
            src={item.icon}
            alt="yangier flour trading partner"
            className="w-30 h-20"
          />
        </td>
        <td>{item.title_uz}</td>
        <td className="">
          <button
            className="hover:scale-125"
            onClick={() => {
              const deleteConfirm = confirm(
                "Malumotni o'chirishga tayyormisiz? ⚠"
              );
              deleteConfirm && partnersActions.delete(item._id);
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
        bodyData={partners}
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
            <label htmlFor="title_uz">Hamkor tashkilot nomi</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title_uz"
              name="title_uz"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="icon">Logotip havola kiriting</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="icon"
              name="icon"
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
        title="Savol javob"
        event2="Qo'shish"
        handleEvent2={() => setStatus("create")}
        event1="Barchasi"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default Partners;
