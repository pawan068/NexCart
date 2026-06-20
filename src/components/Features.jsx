import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100' },
  { icon: Lock, text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy' },
  { icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service' },
]

const Features = () => {
  return (
    <section className="bg-emerald-50 dark:bg-[#161b27] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center p-6 dark:bg-black dark:text-white bg-white rounded-2xl shadow-sm border border-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-emerald-100">
                <feature.icon className="h-7 w-7 text-emerald-600" />
              </div>

              <div className="ml-4">
                <h3 className="text-lg font-semibold dark:text-white text-gray-900">
                  {feature.text}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white mt-1">
                  {feature.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features