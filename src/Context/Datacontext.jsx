import { createContext, useState, useContext } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetching products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products?limit=150"
      );

      const ProductsData = res.data;
      setData(ProductsData);

    } catch (error) {
      console.log(error);
    }
  };

  // Unique Categories
  const categoryOnlyData = [
    "All",
    ...new Set(data?.map((item) => item.category)),
  ];

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchProducts,
        categoryOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);