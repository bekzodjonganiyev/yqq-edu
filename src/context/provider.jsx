import { useState } from "react";

import { UsersContext } from "./context";

export let smallActions = null;
export let newsActions = null;
export const baseUrl = "http://localhost:4000/api";

export const UsersProvider = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const config = {
      "Content-type": "application/json",
    },
  smallActions = {
    handleScroll: (newValue) => {
      setScrollValue(newValue);
    },
  };

  newsActions = {
    getNews: async (url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, { headers: config })
      ).json();
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
    addNews: async (body, url) => {
      setIsLoading(true);
      const data = await fetch(`${baseUrl}/${url}`, {
        method: "POST",
        body,
      }).then((res) => res.json());
      console.log(data);
      setAlert(true);
      setTimeout(() => {
        setIsLoading(false);
        setError(false);
      }, 1000);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
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
      setAlert(true)
      setTimeout(() => {
        setIsLoading(false);
        setError(false);
      }, 1000);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },
  };

  return (
    <UsersContext.Provider
      value={{ scrollValue, news, isLoading, error, alert }}
    >
      {children}
    </UsersContext.Provider>
  );
};
