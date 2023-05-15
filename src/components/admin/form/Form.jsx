import React, { useContext, useState } from "react";

import "./Form.css";

import { TextEditor } from "../..";
import { blogActions, vacancyActions, UsersContext } from "../../../context";

const Form = ({ title, body, category, date, id }) => {
  const { isLoading, modalClose } = useContext(UsersContext);
  const [editor, setEditor] = useState({
    uz: body ? body.uz : "",
    ru: body ? body.ru : "",
    en: body ? body.en : "",
    ar: body ? body.ar : "",
  });
  const [url, setUrl] = useState("");

  async function postData(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title_uz", e.target.title_uz.value);
    formData.append("title_ru", e.target.title_ru.value);
    formData.append("title_en", e.target.title_en.value);
    formData.append("title_ar", e.target.title_ar.value);
    formData.append("body_uz", editor?.uz);
    formData.append("body_ru", editor?.ru);
    formData.append("body_en", editor?.en);
    formData.append("body_ar", editor?.ar);
    formData.append("photo", e.target.photo.files[0]);
    formData.append("date", e.target.date.value);
    if (id) {
      url === "news"
        ? blogActions.edit(id, formData)
        : vacancyActions.edit(id, formData);
    } else {
      url === "news" ? blogActions.add(formData) : vacancyActions.add(formData);
    }
  }
  return (
    <form className="flex flex-col gap-10" onSubmit={postData}>
      <div className="flex flex-col">
        <label htmlFor="titleUz">News topic UZB</label>
        <input
          required
          className=" rounded-lg p-2 border border-slate-600"
          type="text"
          name="title_uz"
          id="titleUz"
          defaultValue={title && title.uz}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="titleRu">News topic RUS</label>
        <input
          required
          className=" rounded-lg p-2 border border-slate-600"
          type="text"
          name="title_ru"
          id="titleRu"
          defaultValue={title && title.ru}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="titleEn">News topic EN</label>
        <input
          required
          className=" rounded-lg p-2 border border-slate-600"
          type="text"
          name="title_en"
          id="titleEn"
          defaultValue={title && title.en}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="title_ar">News topic AR</label>
        <input
          required
          className=" rounded-lg p-2 border border-slate-600"
          type="text"
          name="title_ar"
          id="title_ar"
          defaultValue={title && title.ar}
        />
      </div>

      <TextEditor
        title={{
          uz: "Yangilik haqida batafsil UZB",
          ru: "Yangilik haqida batafsil RUS",
          en: "Yangilik haqida batafsil EN",
          ar: "Yangilik haqida batafsil AR",
        }}
        name={{ uz: "body_uz", ru: "body_ru", en: "body_en", ar: "body_ar" }}
        value={{
          uz: editor.uz,
          ru: editor.ru,
          en: editor.en,
          ar: editor.ar,
        }}
        handleValue={{
          uz: (e) => setEditor({ ...editor, uz: e }),
          ru: (e) => setEditor({ ...editor, ru: e }),
          en: (e) => setEditor({ ...editor, en: e }),
          ar: (e) => setEditor({ ...editor, ar: e }),
        }}
      />

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label htmlFor="photo" className="mb-2">
            Yangilik mavzusi uchun poster
          </label>
          <input
            required
            type="file"
            name="photo"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black border border-gray-500 rounded cursor-pointer"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mb-2">
            Select the type of news
          </label>
          <select
            name="category"
            id="category"
            className="border border-gray-500 rounded p-2"
            defaultValue={category ? category : ""}
            onChange={(e) => setUrl(e.target.value)}
          >
            <option value="" hidden>
              ...
            </option>
            <option value="news">Add Add vacancy</option>
            <option value="elon">Add vacancy</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2">
            Enter the time of the news
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="block border border-gray-500 rounded p-1"
            defaultValue={date ? date : null}
          />
        </div>
      </div>

      <button className="p-2 border border-gray-700 rounded hover:bg-gray-800 hover:text-white">
        Save
      </button>
    </form>
  );
};

export default Form;
