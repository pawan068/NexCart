import React from 'react'
import { useNavigate } from "react-router-dom";
import { getTheme } from "../Context/ThemeContext";
const MidBanner = () => {

  const navigate = useNavigate()

  return (
    <div className="bg-white dark:bg-black py-5 md:py-20 px-4 md:px-6">
      <div
        className="relative max-w-7xl mx-auto min-h-[500px] md:h-[650px] rounded-3xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg')",
          backgroundPosition: "center",
           backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40 flex items-center">
          <div className="max-w-3xl px-5 md:px-12 lg:px-16">

            <span className="inline-block px-4 py-2 mb-4 md:mb-6 text-xs md:text-sm font-semibold text-emerald-300 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              Next Generation Shopping
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6">
              Upgrade Your Lifestyle With <span className="text-emerald-400">NexCart</span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 max-w-2xl">
              Discover premium electronics, smart gadgets, and cutting-edge technology at unbeatable prices. Experience fast delivery, secure payments, and top-rated products.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button  onClick={() => {navigate("/products")
                window.scrollTo(0,0)}
              } className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300">
                Shop Now
              </button>

              <button onClick={()=> {navigate("/about")
                window.scrollTo(0,0)}
              } className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300">
                Explore Deals
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner