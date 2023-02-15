import { createContext, useContext, useState } from "react";

export const useAppContext = () => useContext(AppContext);

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [scrolValue, setScrolValue] = useState();
  return (
    <AppContext.Provider value={{ scrolValue, setScrolValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
