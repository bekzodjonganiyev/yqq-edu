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
  const body = {
    title: "Example action title",
    sections: [
      {
        section_name_uz: "Section uz",
        section_name_ru: "Section ru",
        section_name_en: "Section en",
        id: 1212,
      },
    ],
    details: [
      {
        body_uz: "Some details for section uz",
        body_ru: "Some details for section ru",
        body_en: "Some details for section en",
        department_id: 1212,
      },
    ],
  };

  async function getDataById(id) {
    try {
      const res = await fetch(`http://localhost:4000/api/news/${id}`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return res.json();
    } catch (err) {
      const e = { message: err.message, error: true, success: false };
      return e;
    }
  }

  async function post() {
    try {
      const res = await fetch(`http://localhost:5000/xalqaro_aloqa/add`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzdhZGFhNzAzYmRmMTNhYTI2ZmViNyIsImlhdCI6MTY3NzE2NDE2NywiZXhwIjoxNjc3MjUwNTY3fQ.ebpqzoOv0SNnFKpQruEfiEWCILUSrutj4CwBCKTpBj0",
        },
        body: JSON.stringify(body),
      });
      return res.json();
    } catch (err) {
      const e = { message: err.message, error: true, success: false };
      return e;
    }
  }

  async function get() {
    try {
      const res = await fetch(`http://localhost:5000/xalqaro_aloqa/all`, {
        headers: {
          "Content-type": "application/json",
          Token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzdhZGFhNzAzYmRmMTNhYTI2ZmViNyIsImlhdCI6MTY3NzE2NDE2NywiZXhwIjoxNjc3MjUwNTY3fQ.ebpqzoOv0SNnFKpQruEfiEWCILUSrutj4CwBCKTpBj0",
        },
      });
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
    <div className=" container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col">
      <div className="w-9/12">
        <div className="lg:w-9/12 w-full flex flex-wrap gap-5">
          <CalendarIcon inner={true} />{" "}
          <span className="font-bold">{`${hour}:${minut} / ${day}.${month}.${year}`}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">{newsById?.nameuz}</h1>
        <div dangerouslySetInnerHTML={{ __html: newsById?.descriptionuz }} />
        <button onClick={post} className="bg-red-400 mr-2">
          Test
        </button>
        <button
          onClick={() => {
            get().then((res) => console.log(res));
          }}
          className="bg-red-400"
        >
          Test get
        </button>
      </div>
      <div className="lg:w-3/12 w-full">
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
