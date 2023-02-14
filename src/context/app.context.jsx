import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
const AppContextProvider = ({ children }) => {
  const [scrolValue, setScrolValue] = useState();
  return (
    <AppContext.Provider value={{ scrolValue, setScrolValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
