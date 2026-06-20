
import React, { useEffect, useState } from 'react'
import { getData } from './../Context/Datacontext'
import Loading from "../assets/Loading.webm"
import FilterSection from './../components/FilterSection'
import ProductCart from './../components/ProductCart'
import { convertToINR } from "../utils/Currency"
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const Products = () => {

  const { data, fetchProducts } = getData()

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [rating, setRating] = useState(0)

  const [filteredProducts, setFilteredProducts] = useState([])

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  useEffect(() => {
    fetchProducts()
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (data) {
      setFilteredProducts(data)
    }
  }, [data])

  const applyFilters = () => {

    const result = data?.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category) &&
      convertToINR(product.price) <= priceRange[1] &&
      product.rating.rate >= rating
    )

    setCurrentPage(1)
    setFilteredProducts(result)

  }

  const clearFilters = () => {

    setSearch("")
    setCategory("All")
    setBrand("All")
    setPriceRange([0, 100000])
    setRating(0)

    setCurrentPage(1)
    setFilteredProducts(data)

  }

  // Pagination Logic
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  )

  const lastProductIndex =
    currentPage * productsPerPage

  const firstProductIndex =
    lastProductIndex - productsPerPage

  const currentProducts =
    filteredProducts.slice(
      firstProductIndex,
      lastProductIndex
    )

  const handlePageChange = (page) => {

    setCurrentPage(page)

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }

  return (

    <section className="max-w-7xl dark:bg-[#0f1117] mx-auto px-4 py-8">

      {data?.length > 0 ? (

        <div className="flex flex-col lg:flex-row gap-6">

          <FilterSection
            search={search}
            setSearch={setSearch}
            brand={brand}
            setBrand={setBrand}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            category={category}
            setCategory={setCategory}
            rating={rating}
            setRating={setRating}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
          />

          <div className="flex flex-col lg:w-[80%]">

            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

              {currentProducts?.length > 0 ? (

                currentProducts.map(product => (
                  <ProductCart
                    key={product.id}
                    product={product}
                  />
                ))

              ) : (

                <div className="col-span-full flex items-center justify-center min-h-[300px]">
                  <h2 className="text-xl font-semibold text-gray-500">
                    No Products Found
                  </h2>
                </div>

              )}

            </div>

            {/* Pagination */}

            {filteredProducts.length > productsPerPage && (

              <div className="flex justify-center items-center gap-2 flex-wrap mt-10">

                <button
                  disabled={currentPage === 1}
                  onClick={() =>
                    handlePageChange(currentPage - 1)
                  }
                  className="px-4 py-2 rounded-lg border dark:bg-white cursor-pointer dark:text-black border-gray-300 dark:border-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-600 hover:text-white transition"
                >
                  <ChevronLeft />
                </button>

                {[...Array(totalPages)].map((_, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      handlePageChange(index + 1)
                    }
                    className={`w-10 h-10 rounded-lg border transition

                    ${
                      currentPage === index + 1
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "border-gray-300 dark:border-gray-700 dark:text-white cursor-pointer hover:bg-emerald-600 hover:text-white"
                    }
                    
                    `}
                  >
                    {index + 1}
                  </button>

                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    handlePageChange(currentPage + 1)
                  }
                  className="px-4 py-2 rounded-lg border dark:bg-white dark:text-black cursor-pointer border-gray-300  disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-600 hover:text-white transition"
                >
                  <ChevronRight />
                </button>

              </div>

            )}

          </div>

        </div>

      ) : (

        <div className="flex items-center justify-center min-h-[500px]">

          <video
            className="w-48 md:w-64"
            muted
            autoPlay
            loop
            playsInline
          >
            <source
              src={Loading}
              type="video/webm"
            />
          </video>

        </div>

      )}

    </section>

  )
}

export default Products
