import React, { useContext, useEffect } from 'react'
import { DataContext } from './../Context/Datacontext'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderImport from "react-slick"

const Slider = SliderImport.default || SliderImport

const Carousel = () => {
  const { data, fetchProducts } = useContext(DataContext)

  useEffect(() => {
    fetchProducts()
  }, [])

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: false,
  adaptiveHeight: false,
  cssEase: "cubic-bezier(0.45, 0, 0.55, 1)",
};

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => (
          <div key={index}>
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-600 min-h-[550px] md:min-h-[650px]">

              <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                  <span className="inline-block px-4 py-2 mb-5 text-xs md:text-sm font-semibold text-emerald-200 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    {item.category}
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                    Upgrade Your Tech With <span className="text-emerald-300">NexCart</span>
                  </h1>

                  <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                    {item.description?.length > 130 ? item.description.slice(0, 130) + "..." : item.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                    <button className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                      Shop Now
                    </button>

                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer">
                      Explore More
                    </button>

                  </div>

                </div>

                {/* Right Side Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center relative">

                  <div className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-white/10 blur-3xl"></div>

                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8">

                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                      ₹{Math.round(item.price * 85)}
                    </div>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[220px] h-[220px] md:w-[360px] md:h-[360px] object-contain hover:scale-105 transition-all duration-500"
                    />

                  </div>

                </div>

              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel