import React, { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FormHeader, SkeletonPost } from "../../../components";
import { smallActions, UsersContext } from "../../../context";
import { imgPrefix } from "../../../context/provider";
import placeholder from "../../../assets/images/img-placeholder.png";

const Photos = () => {
  const { photos, alert, isLoading, error } = useContext(UsersContext);
  const [status, setStatus] = useState("read");
  let fetchedContent = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : error ? (
    <h1 className="text-3xl text-center p-10 bg-gray-100">
      Note found
    </h1>
  ) : (
    <div className="w-full flex flex-wrap gap-y-44 gap-x-4">
      {photos.map((item) => (
        <div
          className="w-80 h-32"
          key={item._id}
          onDoubleClick={() => {
            smallActions.deletePhotos(item._id);
          }}
        >
          <LazyLoadImage
            src={imgPrefix + item.photo}
            alt={item.title_uz}
            className={`img-lazy w-80 h-52`}
            beforeLoad={() => <h1>Loading</h1>}
            threshold={100}
            effect="black-and-white" // opacity | black-and-white
          />
          <p className="bg-gray-100 p-2">{item.width} X {item.height}</p>
          <br />
        </div>
      ))}
    </div>
  );

  // FORM HERE
  let form = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : (
    <>
      {alert && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-green-700 rounded-xl z-50 text-white transition-opacity">
          Information has been added
        </div>
      )}
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex items-center gap-10">
          <div className="flex flex-col w-1/2">
            <label htmlFor="photo">Select a picture</label>
            <input
              required
              className=" w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black border border-gray-500 rounded cursor-pointer"
              type="file"
              accept=""
              id="photo"
              name="photo"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="date">date time</label>
            <input
              required
              className=" rounded p-1.5 border border-slate-600"
              type="date"
              accept=""
              id="date"
              name="date"
            />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-col w-1/2">
            <label htmlFor="width">Image width</label>
            <input
              required
              className=" rounded p-1.5 border border-slate-600"
              type="number"
              id="width"
              name="width"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="height">Picture height</label>
            <input
              required
              className=" rounded p-1.5 border border-slate-600"
              type="number"
              id="height"
              name="height"
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

  const content =
    status === "read" ? fetchedContent : status === "create" ? form : null;
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("width", e.target.width.value);
    formData.append("height", e.target.height.value);
    formData.append("photo", e.target.photo.files[0]);
    formData.append("date", e.target.date.value);
    smallActions.addPhotos(formData, "photo/add");
  }

  useEffect(() => {
    smallActions.getPhotos("photo/all");
  }, [status]);
  return (
    <div>
      <FormHeader
        title="Foto News"
        event2="Add"
        handleEvent2={() => setStatus("create")}
        event1="Oll"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default Photos;
