import React, { useContext, useEffect, useState } from "react";

import {
  EditForm,
  Form,
  FormHeader,
  SkeletonPost,
  Table,
} from "../../../components";
import { DeleteIcon, EditIcon } from "../../../assets/icons";

import { blogActions, UsersContext } from "../../../context";
const News = () => {
  const { news, isLoading, error, alert, modalClose } =
    useContext(UsersContext);
  const [status, setStatus] = useState("read");
  const [onEdit, setOnEdit] = useState("");

  useEffect(() => {
    blogActions.get();
  }, [onEdit.open, status]);

  const analyseNameTableHead = ["T/r", "Blog nomi", "Sanasi", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    return (
      <tr key={index} className="cursor-pointer hover:bg-gray-100">
        <td>{index + 1}</td>
        <td>{item.title_uz}</td>
        <td>{item.date}</td>
        <td className="">
          {/* <button
            className="mr-4 hover:scale-125"
            onClick={() => {
              setOnEdit({ open: true, id: item._id });
            }}
          >
            <EditIcon />
          </button> */}
          <button
            className="hover:scale-125"
            onClick={() => {
              const deleteConfirm = confirm(
                "Malumotni o'chirishga tayyormisiz? ⚠"
              );
              deleteConfirm && blogActions.delete(item._id);
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
      Note found
    </h1>
  ) : (
    <>
      {alert && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-red-700 rounded-xl z-50 text-white transition-opacity">
          Reference deleted
        </div>
      )}
      {modalClose && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-amber-500 rounded-xl z-50 text-white transition-opacity">
          Successfully updated
        </div>
      )}
      {!isLoading ? (
        <>
          <Table
            headData={analyseNameTableHead}
            renderHead={renderHead}
            bodyData={news}
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
         Information has been added
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
          url="news"
        />
      )}
      <FormHeader
        title="News"
        event2="Add"
        handleEvent2={() => setStatus("create")}
        event1="All news"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default News;
