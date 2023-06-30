import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const url = "http://localhost:5000";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      // const { drinks } = data;
      if (data) {
        const newCocktails = data.map((item) => {
          const {
            _id,
            name,
            category,
            img,
            instructions,
            glass,
            info,
            ingredients,
          } = item;

          return {
            _id: _id,
            name: name,
            img: img,
            info: info,
            glass: glass,
            ingredients: ingredients,
            instructions: instructions,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
