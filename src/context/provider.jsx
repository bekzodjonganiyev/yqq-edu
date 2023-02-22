import { useState } from "react";

import { UsersContext } from "./context";

export let smallActions = null;
export let newsActions = null;

export const UsersProvider = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const [news, setNews] = useState([])

  smallActions = {
    handleScroll: (newValue) => {
      setScrollValue(newValue);
    },
  };

  newsActions = {
    addNews: (body, endpoint) => {
      setNews(...news, body)
    }
  }

  return (
    <UsersContext.Provider value={scrollValue}>
      {children}
    </UsersContext.Provider>
  );
};
