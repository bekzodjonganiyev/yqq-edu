import React, { useContext, useEffect, useState } from "react";

import {
  EditForm,
  Form,
  FormHeader,
  SkeletonPost,
  Table,
} from "../../../components";
import { DeleteIcon, EditIcon } from "../../../assets/icons";

import { newsActions, UsersContext } from "../../../context";
const News = () => {
  const { news, vacancys, isLoading, error, alert, modalClose } =
    useContext(UsersContext);
  const [status, setStatus] = useState("read");
  const [onEdit, setOnEdit] = useState("");
  const [url, setUrl] = useState("news/all")

  useEffect(() => {
    newsActions.getNews(url);
  }, [onEdit.open, status, url]);

  const analyseNameTableHead = [
    "T/r",
    "Yangilik nomi",
    "Sanasi",
    "Amallar",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    return (
      <tr key={index} className="cursor-pointer hover:bg-gray-100">
        <td>{index + 1}</td>
        <td>{item.title_uz}</td>
        <td>{item.date}</td>
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
              deleteConfirm && newsActions.deleteNew(item._id);
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
      {modalClose && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-amber-500 rounded-xl z-50 text-white transition-opacity">
          Muvaffaqiyatli yangilindi
        </div>
      )}
      {!isLoading ? (
        <>
          <select
            className="border border-gray-500 rounded p-2"
            onChange={(e) => setUrl(e.target.value)}
          >
            <option value="" hidden>
              ...
            </option>
            <option value="news/all">Bloglar</option>
            <option value="elon/all">Vakansiyalar</option>
          </select>
          <Table
            headData={analyseNameTableHead}
            renderHead={renderHead}
            bodyData={url === "news/all" ? news : vacancys}
            renderBody={renderBody}
            limit={10}
          />
        </>
      ) : (
        [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
      )}
    </>
  );
  
  let formData = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : (
    <>
      {alert && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-green-700 rounded-xl z-50 text-white transition-opacity">
          Malumotlar qo`shildi
        </div>
      )}
      <Form />
    </>
  );

  status === "read"
    ? (content = fetchedContent)
    : status === "create"
    ? (content = formData)
    : (content = null);
  return (
    <div>
      {onEdit.open && (
        <EditForm
          id={onEdit.id}
          closeModal={() => setOnEdit({ open: false })}
          url={url.split("/")[0]}
        />
      )}
      <FormHeader
        title="Yangiliklar"
        event2="Qo'shish"
        handleEvent2={() => setStatus("create")}
        event1="Barcha yangililar"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default News;
