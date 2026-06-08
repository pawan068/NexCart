import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

const ProductCart = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

      <div className="bg-gray-50 p-4 flex items-center justify-center h-52 sm:h-60">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-4">

        <h2 className="text-gray-800 overflow-scroll font-semibold text-sm sm:text-base line-clamp-2 min-h-[48px]">
          {product.title}
        </h2>

        <div className="flex items-center justify-between mt-3">

          <p className="text-xl font-bold text-emerald-600">
            ${product.price}
          </p>

          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
            In Stock
          </span>

        </div>

        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition-all duration-300 cursor-pointer">
          <IoCartOutline size={20} />
          Add to Cart
        </button>

      </div>

    </div>
  )
}

export default ProductCart