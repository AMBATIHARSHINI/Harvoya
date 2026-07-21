import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareHotels, setCompareHotels] = useState([]);

  const toggleCompare = (hotel) => {
    const exists = compareHotels.find((item) => item.id === hotel.id);

    if (exists) {
      setCompareHotels(compareHotels.filter((item) => item.id !== hotel.id));
    } else {
      if (compareHotels.length >= 3) {
        alert("You can compare only 3 hotels.");
        return;
      }
      setCompareHotels([...compareHotels, hotel]);
    }
  };

  const isCompared = (id) =>
    compareHotels.some((hotel) => hotel.id === id);

  return (
    <CompareContext.Provider
      value={{
        compareHotels,
        toggleCompare,
        isCompared,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);