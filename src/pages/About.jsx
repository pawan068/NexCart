import React from "react";
import { ShoppingBag, Truck, ShieldCheck, Headphones } from "lucide-react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About <span className="text-emerald-600">NexCart</span>
        </h1>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          NexCart is a modern e-commerce platform built to provide a fast,
          secure, and seamless shopping experience. Our goal is to make
          online shopping simple, affordable, and accessible for everyone.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            NexCart was created with a vision to simplify online shopping.
            We believe customers deserve a platform that is easy to use,
            transparent, and packed with quality products.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From electronics and fashion to daily essentials, we strive
            to bring everything you need into one convenient place.
          </p>
        </div>

        <div className="bg-emerald-50 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>✓ High Quality Products</li>
            <li>✓ Affordable Prices</li>
            <li>✓ Secure Payments</li>
            <li>✓ Fast Delivery</li>
            <li>✓ Excellent Customer Support</li>
          </ul>
        </div>

      </div>

      {/* Features Section */}
      <div className="mb-20">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
            <ShoppingBag className="text-emerald-600 mb-4" size={40} />
            <h3 className="font-semibold text-lg mb-2">
              Wide Collection
            </h3>
            <p className="text-gray-600 text-sm">
              Explore products from multiple categories all in one place.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
            <Truck className="text-emerald-600 mb-4" size={40} />
            <h3 className="font-semibold text-lg mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable shipping to your doorstep.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
            <ShieldCheck className="text-emerald-600 mb-4" size={40} />
            <h3 className="font-semibold text-lg mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600 text-sm">
              Safe transactions protected with modern security.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
            <Headphones className="text-emerald-600 mb-4" size={40} />
            <h3 className="font-semibold text-lg mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600 text-sm">
              Dedicated support whenever you need assistance.
            </p>
          </div>

        </div>

      </div>

      {/* Stats Section */}
      <div className="bg-emerald-600 rounded-3xl text-white p-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p>Customers</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p>Products</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">99%</h2>
            <p>Satisfaction</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">24/7</h2>
            <p>Support</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;