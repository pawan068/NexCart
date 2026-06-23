import React,{useState} from 'react'
import { SlidersHorizontal, Star } from 'lucide-react'
import { getData } from './../Context/Datacontext';
import { convertToINR } from "../utils/Currency";
import { SliderImport } from 'react-slick';


const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  rating,
  setRating,
  applyFilters,
  clearFilters
}) => {


  const { categoryOnlyData } = getData()
  const [showFilters, setShowFilters] = useState(false)



  return (

<>

    <div className=" hidden sm:block bg-white rounded-2xl sticky min-[500px]:w-[400px] border dark:bg-[#161b27] border-gray-200 shadow-sm p-5 lg:sticky lg:top-24">

      {/* Header */}
      <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
        <SlidersHorizontal size={20} className="text-emerald-600" />
        <h2 className="text-lg font-semibold dark:text-white text-gray-800">
          Filters
        </h2>
      </div>
      {/* 
      search */}

      <input type="text" placeholder='Search..' onChange={(e) => setSearch(e.target.value)} value={search} className='bg-white p-2 w-full rounded-md border focus:outline-none   border-gray-400' />


      {/* Categories */}
      <div className="mt-6">
        <h3 className="font-semibold dark:text-white text-gray-800 mb-3">
          Categories
        </h3>

        <div className="space-y-3">

          {categoryOnlyData?.map((item, index) => (
            <label
              key={index}
              className="flex items-center dark:text-white gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={item}
                checked={category === item}
                onChange={(e) => setCategory(e.target.value)}
                className="accent-emerald-600"
              />

              <span className="text-sm dark:text-white text-gray-700 capitalize">
                {item}
              </span>
            </label>
          ))}

        </div>
      </div>






      {/* Price */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="font-semibold flex justify-between dark:text-white text-gray-800 mb-3">
          <span>Price Range</span>
          <span>₹{priceRange[1]}</span>
        </h3>

        <input
          type="range"
          min="0"
          max="100000"
          value={priceRange[1]}

          onChange={(e) => { setPriceRange([0, Number(e.target.value)]) }}
          className="w-full cursor-pointer accent-emerald-600"
        />

        <div className="flex justify-between text-sm dark:text-white text-gray-500 mt-2">
          <span>₹0</span>
          <span>₹100000+</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="font-semibold dark:text-white text-gray-800 mb-3">
          Rating
        </h3>

        <div className="space-y-2">

          <button
            onClick={() => setRating(4)}
            className={`block text-sm cursor-pointer ${rating === 4 ? "text-emerald-600 font-semibold" : "text-gray-700 dark:text-white"
              }`}
          >
            ⭐ 4★ & Above
          </button>

          <button
            onClick={() => setRating(3)}
            className={`block text-sm cursor-pointer ${rating === 3 ? "text-emerald-600 font-semibold" : "text-gray-700 dark:text-white"
              }`}
          >
            ⭐ 3★ & Above
          </button>

          <button
            onClick={() => setRating(2)}
            className={`block text-sm cursor-pointer ${rating === 2 ? "text-emerald-600 font-semibold" : "text-gray-700 dark:text-white"
              }`}
          >
            ⭐ 2★ & Above
          </button>

        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-3">

        <button onClick={applyFilters} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition-all duration-300 cursor-pointer">
          Apply Filters
        </button>

        <button onClick={clearFilters} className="border border-gray-300 hover:border-emerald-600 hover:text-emerald-600 dark:text-white text-gray-700 font-medium py-3 rounded-xl transition-all duration-300 cursor-pointer">
          Clear Filters
        </button>

      </div>

    </div>
    






    {/* Mobile View */}





<div className='max-w-[500px]-flex md:hidden'>
<SlidersHorizontal size={30} onClick={() => setShowFilters(true)}  className="text-emerald-600 fixed left-0 top-[60px]  dark:bg-[#161b27] bg-white m-2 cursor-pointer " />
</div>


{showFilters && (
  <div className="fixed inset-0 dark:bg-[#161b27] bg-white z-50 md:hidden">

    <div className="flex justify-end p-4">
      <button
        onClick={() => setShowFilters(false)}
        className="text-2xl dark:text-white font-bold cursor-pointer"
      >
        ✕
      </button>
    </div>



    <div className= "p-4 overflow-y-auto h-[calc(100vh-70px)]">
      

        {/* Header */}
      <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
        <SlidersHorizontal size={20} className="text-emerald-600" />
        <h2 className="text-lg font-semibold dark:text-white text-gray-800">
          Filters
        </h2>
      </div>
      {/* 
      search */}

      <input type="text" placeholder='Search..' onChange={(e) => setSearch(e.target.value)} value={search} className='bg-white p-2 w-full rounded-md border focus:outline-none   border-gray-400' />


      {/* Categories */}
      <div className="mt-6">
        <h3 className="font-semibold dark:text-white text-gray-800 mb-3">
          Categories
        </h3>

        <div className="space-y-3">

          {categoryOnlyData?.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={item}
                checked={category === item}
                onChange={(e) => setCategory(e.target.value)}
                className="accent-emerald-600"
              />

              <span className="text-sm dark:text-white text-gray-700 capitalize">
                {item}
              </span>
            </label>
          ))}

        </div>
      </div>






      {/* Price */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="font-semibold flex justify-between dark:text-white text-gray-800 mb-3">
          <span>Price Range</span>
          <span>₹{priceRange[1]}</span>
        </h3>

        <input
          type="range"
          min="0"
          max="100000"
          value={priceRange[1]}

          onChange={(e) => { setPriceRange([0, Number(e.target.value)]) }}
          className="w-full cursor-pointer accent-emerald-600"
        />

        <div className="flex justify-between text-sm dark:text-white text-gray-500 mt-2">
          <span>₹0</span>
          <span>₹100000+</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="font-semibold dark:text-white text-gray-800 mb-3">
          Rating
        </h3>

        <div className="space-y-2">

          <button
            onClick={() => setRating(4)}
            className={`block text-sm cursor-pointer ${rating === 4 ? "text-emerald-600 font-semibold" : "text-gray-700 dark:text-white"
              }`}
          >
            ⭐ 4★ & Above
          </button>

          <button
            onClick={() => setRating(3)}
            className={`block text-sm cursor-pointer ${rating === 3 ? "text-emerald-600 font-semibold" : "text-gray-700 dark:text-white"
              }`}
          >
            ⭐ 3★ & Above
          </button>

          <button
            onClick={() => setRating(2)}
            className={`block text-sm cursor-pointer ${rating === 2 ? "text-emerald-600 font-semibold" : "text-gray-700 dark:text-white"
              }`}
          >
            ⭐ 2★ & Above
          </button>

        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-3">

        <button onClick={() => {
applyFilters()
setShowFilters(false)
}} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition-all duration-300 cursor-pointer">
          Apply Filters
        </button>

        <button onClick={() => {
clearFilters()
setShowFilters(false)
}} className="border border-gray-300 dark:text-white dark:dorder-white hover:border-emerald-600 hover:text-emerald-600 text-gray-700 font-medium py-3 rounded-xl transition-all duration-300 cursor-pointer">
          Clear Filters
        </button>

      </div>


    </div>

  </div>
)}

    </>




  )


 
}

export default FilterSection