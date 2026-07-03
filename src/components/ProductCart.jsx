import React,{useState} from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { convertToINR } from "../utils/Currency";
import { useNavigate } from "react-router-dom";
import { getCart } from "../Context/CartContext";
import { getTheme } from "../Context/ThemeContext";

const ProductCart = ({ product }) => {

  const [added, setAdded] = useState(false)

  const navigate = useNavigate()
  const { addToCart } = getCart();

  return (
    <div className="bg-white border dark:bg-[#161b27] dark:text-white border-gray-200 max-h-[450px] md:max-h-[350px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

      <div onClick={() => navigate(`/product/${product.id}`)} className="bg-gray-50 dark:bg-[#1e232e] p-4 flex items-center justify-center h-[200px] sm:h-40">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-105 transition-all duration-300"
        />
      </div>




      <div className="p-4">

        <h2 className="text-gray-800 overflow-scroll dark:text-white font-semibold text-sm sm:text-base line-clamp-2 min-h-[48px]">
          {product.title}
        </h2>

        
{/* rating */}
<div className="flex items-center gap-2">
  <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
    ⭐ {product.rating.rate}
  </div>

  <span className="text-gray-500 text-sm">
    {product.rating.count} ratings
  </span>
</div>

        <div className="flex items-center justify-between mt-3">

          <p className="text-xl font-bold text-emerald-600">
            ₹{convertToINR(product.price)}
          </p>

          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
            In Stock
          </span>

        </div>

        <button onClick={() => {
          addToCart(product)
          setAdded(true)
        }} className="w-full h-8 mt-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition-all duration-300 cursor-pointer">
          <IoCartOutline size={20} />
          {added?"Added To Cart":"Add To Cart"}
        </button>

      </div>

    </div>
  )
}

export default ProductCart