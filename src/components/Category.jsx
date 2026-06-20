import React, { useEffect } from 'react' // 👈 Yahan useEffect add kiya
import { DataContext, getData } from './../Context/Datacontext';
import { getTheme } from "../Context/ThemeContext";

const Category = () => {

    const { data, fetchProducts } = getData();

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property];
        });
        newVal = [...new Set(newVal)]
        return newVal; 
    };

    const CategoryOnlyData = getUniqueCategory(data, "category");
  
      
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
       <div className="bg-emerald-50 dark:bg-[#161b27] flex items-center justify-center dark:rounded-none dark:border-none rounded-xl p-3 ">
  <div className="flex gap-3 overflow-x-auto scrollbar-hide">
    {CategoryOnlyData.map((item, index) => (
      <button
        key={index}
        className="px-5 py-2 rounded-full cursor-pointer dark:bg-black dark:text-white dark:hover:bg-gray-800 bg-white text-emerald-700 border dark:border-none border-emerald-200 font-medium whitespace-nowrap transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600"
      >
        {item}
      </button>
    ))}
  </div>
</div>
    );
};

export default Category;