import { createContext, useState } from "react";

export const AppContext = createContext();

export const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("Home");
  const setDetailedPage = () => {
    setCurrentPage("Detail");
  };
  const setHomePage = () => {
    setCurrentPage("Home");
  };
  return (
    <AppContext.Provider value={{ currentPage, setHomePage, setDetailedPage }}>
      {children}
    </AppContext.Provider>
  );
};
