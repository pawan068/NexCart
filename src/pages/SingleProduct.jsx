import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../Context/Datacontext";
import { convertToINR } from "../utils/Currency";
import { getTheme } from "../Context/ThemeContext";
import { getCart } from './../Context/CartContext';
import{useNavigate} from 'react-router-dom'

import{
  Star,
  ShoppingCart,
  Zap,
  Truck,
  ShieldCheck,
  RotateCcw,
  Plus,
  Minus,
} from "lucide-react";



const SingleProduct = () => {

  const navigate= useNavigate()

  const [added , setAdded]= useState(false)


  const { id } = useParams();
  const { data } = getData();

  const [quantity, setQuantity] = useState(1);

  const product = data?.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-500">
          Product Not Found
        </h2>
      </div>
    );
  }

  const originalPrice = Math.round(
    convertToINR(product.price) * 1.35
  );

  const discount = Math.round(
    ((originalPrice - convertToINR(product.price)) /
      originalPrice) *
      100
  );

  const {addToCart}= getCart();

  return (
    <section className="max-w-7xl dark:bg-[#0f1117] mx-auto px-4 py-10">

      <div className="bg-white border dark:bg-[#1e2535] border-gray-200 rounded-3xl shadow-lg overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-10 p-6 md:p-10">

          {/* IMAGE SECTION */}

          <div className="bg-gradient-to-br from-gray-50 to-gray-100  dark:bg-gradient-to-br dark:from-gray-300 via-gray-400 dark:to-gray-500 rounded-3xl p-8 flex items-center justify-center">

            <img
              src={product.image}
              alt={product.title}
              className="h-[350px] md:h-[450px] object-contain hover:scale-105 transition-all duration-300"
            />

          </div>

          {/* DETAILS SECTION */}

          <div>

            <span className="inline-block bg-emerald-100  text-emerald-700 px-4 py-1 rounded-full text-sm capitalize font-medium">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mt-4 leading-tight">
              {product.title}
            </h1>

            {/* RATING */}

            <div className="flex items-center gap-3 mt-5">

              <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                <Star size={14} fill="white" />
                {product.rating.rate}
              </div>

              <span className="text-gray-500">
                {product.rating.count} Reviews
              </span>

            </div>

            {/* PRICE */}

            <div className="mt-6">

              <div className="flex items-center gap-4 flex-wrap">

                <span className="text-4xl font-bold text-emerald-600">
                  ₹{convertToINR(product.price)}
                </span>

                <span className="line-through text-gray-400 text-xl">
                  ₹{originalPrice}
                </span>

                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {discount}% OFF
                </span>

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Inclusive of all taxes
              </p>

            </div>

            {/* STOCK */}

            <div className="mt-5">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                ✓ In Stock
              </span>
            </div>

            {/* DESCRIPTION */}

            <div className="mt-8">

              <h3 className="font-semibold text-xl text-gray-800 mb-3">
                Product Description
              </h3>

              <p className="text-gray-600 dark:text-white leading-relaxed">
                {product.description}
              </p>

            </div>

            {/* QUANTITY */}

            <div className="mt-8">

              <h3 className="font-semibold dark:text-white text-gray-800 mb-3">
                Quantity
              </h3>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="w-10 h-10 rounded-lg cursor-pointer border flex items-center justify-center dark:text-white dark:border-white dark:hover:bg-transparent hover:bg-gray-100"
                >
                  <Minus size={18} />
                </button>

                <span className="font-bold dark:text-white text-xl w-8 text-center">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-10 h-10 rounded-lg border cursor-pointer flex items-center justify-center dark:text-white dark:border-white dark:hover:bg-transparent hover:bg-gray-100"
                >
                  <Plus size={18} />
                </button>

              </div>

            </div>

            {/* ACTION BUTTONS */}

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <button onClick={()=>{
              addToCart(product)
                setAdded(true)
              window.scrollTo(0,0)}
              } className="flex items-center justify-center gap-2 bg-emerald-600 cursor-pointer border hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold transition-all">

                <ShoppingCart size={20} />
                {added?"Added To Cart":"Add To Cart"}

              </button>

              <button  onClick={() =>{ navigate("/contact")
                window.scrollTo(0,0)}
              }  className="flex items-center justify-center cursor-pointer gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-4 rounded-xl font-semibold transition-all">

                <Zap size={20} />
                Contact us

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* FEATURE CARDS */}

      <div className="grid md:grid-cols-3 gap-5 mt-10">

        <div className="bg-white dark:bg-[#161b27] dark:text-white border rounded-2xl p-6 text-center shadow-sm">

          <Truck
            size={35}
            className="mx-auto  text-emerald-600"
          />

          <h3 className="font-semibold dark:text-white mt-3 text-gray-800">
            Free Delivery
          </h3>

          <p className="text-sm dark:text-white text-gray-500 mt-2">
            Fast and secure delivery
          </p>

        </div>

        <div className="bg-white dark:bg-[#161b27] dark:text-white border rounded-2xl p-6 text-center shadow-sm">

          <RotateCcw
            size={35}
            className="mx-auto  text-emerald-600"
          />

          <h3 className="font-semibold dark:text-white mt-3 text-gray-800">
            Easy Returns
          </h3>

          <p className="text-sm dark:text-white text-gray-500 mt-2">
            Hassle-free return policy
          </p>

        </div>

        <div className="bg-white dark:bg-[#161b27] dark:text-white border rounded-2xl p-6 text-center shadow-sm">

          <ShieldCheck
            size={35}
            className="mx-auto  text-emerald-600"
          />

          <h3 className="font-semibold dark:text-white mt-3 text-gray-800">
            Secure Payment
          </h3>

          <p className="text-sm dark:text-white text-gray-500 mt-2">
            100% protected checkout
          </p>

        </div>

      </div>

    </section>
  );
};

export default SingleProduct;
