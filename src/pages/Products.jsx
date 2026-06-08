import React, { useEffect } from 'react'
import { getData } from './../Context/Datacontext'
import FilterSection from './../components/FilterSection'
import Loading from "../assets/Loading.webm"
import ProductCart from './../components/ProductCart';

const Products = () => {
  const { data, fetchProducts } = getData()

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">

      {data?.length > 0 ? (

        <div className="flex flex-col lg:flex-row gap-6">

        
            <FilterSection />
          

          

           

            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

              {data?.map((product, index) => {
               
               return <ProductCart key={index} product={product} />

              })
              }

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