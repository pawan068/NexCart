import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mx-2 my-2 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold text-emerald-500">NexCart</h1>
          </Link>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Your one-stop destination for premium electronics, smart gadgets, and cutting-edge technology.
          </p>

          <p className="mt-4 text-sm text-gray-400">
            123 Tech Street, Innovation City
          </p>

          <p className="text-sm text-gray-400">
            support@nexcart.com
          </p>

          <p className="text-sm text-gray-400">
            +91 98765 43210
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Shipping & Returns</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">FAQs</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Order Tracking</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-emerald-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-emerald-400 transition" />
            <FaTwitterSquare className="cursor-pointer hover:text-emerald-400 transition" />
            <FaPinterest className="cursor-pointer hover:text-emerald-400 transition" />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe to receive exclusive offers, latest arrivals and special discounts.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-1 md:px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 border border-green-500 focus:outline-none focus:border-emerald-500"
            />

            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 px-5 rounded-r-lg text-white font-medium transition"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-emerald-500 font-medium">NexCart</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer