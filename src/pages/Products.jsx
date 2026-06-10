import React, { useEffect, useState } from 'react'
import { getData } from './../Context/Datacontext'
import Loading from "../assets/Loading.webm"
import FilterSection from './../components/FilterSection'
import ProductCart from './../components/ProductCart'
import {convertToINR  } from "../utils/Currency";

const Products = () => {

  const { data, fetchProducts } = getData()

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [rating , setRating] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [])


  const [filteredProducts, setFilteredProducts] = useState([])

const applyFilters = () => {

  const result = data?.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || product.category === category) &&
    convertToINR(product.price) <= priceRange[1] &&
    product.rating.rate >= rating
  )

  setFilteredProducts(result)
}
useEffect(() => {
  if (data) {
    setFilteredProducts(data)
  }
}, [data])

const clearFilters = () => {
  setSearch("")
  setCategory("All")
  setBrand("All")
  setPriceRange([0, 100000])
  setRating(0)
  setFilteredProducts(data)
}

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">

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
            rating= {rating}
            setRating={setRating}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
          />

          <div className="grid lg:w-[80%] grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

            {filteredProducts?.length > 0 ? (

              filteredProducts.map(product => (
                <ProductCart key={product.id} product={product} />
              ))

            ) : (

              <div className="col-span-full flex items-center justify-center  min-h-[300px]">
                <h2 className="text-xl font-semibold text-gray-500">
                  No Products Found
                </h2>
              </div>

            )}

          </div>

        </div>

      ) : (

        <div className="flex items-center justify-center min-h-[500px]">
          <video className="w-48 md:w-64" muted autoPlay loop playsInline>
            <source src={Loading} type="video/webm" />
          </video>
        </div>

      )}

    </section>
  )
}

export default Products