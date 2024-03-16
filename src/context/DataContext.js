import React, { createContext, useState, useContext } from "react";
import jsonData from "../data/data.json";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(jsonData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
