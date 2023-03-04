import { useState } from "react";

import { UsersContext, ScrollContext } from "./context";

export let newsActions = null;
export let smallActions = null;
export const baseUrl = "http://back.yqqedu.uz/api";
export const imgPrefix = "http://back.yqqedu.uz/";

export const UsersProvider = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const [news, setNews] = useState([]);
  const [newById, setNewById] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  const config = { "Content-type": "application/json" };

  smallActions = {
    handleScroll: (newValue) => {
      setScrollValue(newValue);
    },
  };

  const aka = null;

  newsActions = {
    getNews: async (url) => {
      setIsLoading(true);
      const data = (await fetch(`${baseUrl}/${url}`, { headers: config })).json();
      data.then((res) => {
        if (res.success) {
          setNews(res.data);
        } else {
          setError(true);
          setNews([]);
        }
      });
      setTimeout(() => {
        setIsLoading(false);
        setError(false);
        setAlert(false);
      }, 3000);
    },
    getNewById: async (id) => {
      setIsLoading(true);
      const data = (await fetch(`${baseUrl}/news/${id}`, { headers: config })).json();
      data.then((res) => {
        if (res.success) {
          setNewById(res.data);
          setIsLoading(false);
        } else {
          setError(true);
          setNews({});
        }
      });
    },
    addNews: async (body, url) => {
      setIsLoading(true);
      const data = await fetch(`${baseUrl}/${url}`, {
        method: "POST",
        body,
      }).then((res) => res.json());
      setAlert(true);
      setTimeout(() => {
        setIsLoading(false);
        setError(false);
      }, 1000);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    editNews: async (id, body) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/news/${id}`, { method: "PUT", body })
      ).json();
      data.then((res) => {
        if (res.success) {
          setTimeout(() => {
            setIsLoading(false);
            setModalClose(true);
          }, 2000);
        }
      });
      setTimeout(() => {setModalClose(false)}, 7000)
    },

    deleteNew: async (id) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/news/${id}`, {
          method: "DELETE",
          headers: config,
        })
      ).json();
      const filteredNews = news.filter((item) => item._id !== id);
      setNews(filteredNews);
      setAlert(true);
      setTimeout(() => {
        setIsLoading(false);
        setError(false);
      }, 1000);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },
    closeModal: () => {
      setModalClose(true);
    },
  };

  return (
    <UsersContext.Provider
      value={{
        scrollValue,
        news,
        newById,
        isLoading,
        error,
        alert,
        modalClose,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const ScrollProvider = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);

  smallActions = {
    handleScroll: (newValue) => {
      setScrollValue(newValue);
    },
  };

  return (
    <ScrollContext.Provider value={scrollValue}>
      {children}
    </ScrollContext.Provider>
  );
};
