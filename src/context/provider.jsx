import { useState } from "react";

import { UsersContext } from "./context";

export let smallActions = null;

export const UsersProvider = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);

  smallActions = {
    handleScroll: (newValue) => {
      setScrollValue(newValue);
    },
  };

  return (
    <UsersContext.Provider value={scrollValue}>
      {children}
    </UsersContext.Provider>
  );
};
