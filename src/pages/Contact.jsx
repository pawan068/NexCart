import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
} from "lucide-react";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Message Send Successfully")
  }

  const [message, setMessage] = useState("Send Message")

  return (
    <section className="max-w-7xl mx-auto px-4 dark:bg-[#161b27] py-12">

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white mb-12 shadow-xl">

        <h1 className="text-4xl md:text-6xl font-bold">
          Contact NexCart
        </h1>

        <p className="mt-4 text-emerald-50 max-w-2xl mx-auto">
          Have questions, feedback, or need assistance?
          Our team is always here to help you.
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

        <div className="bg-white dark:bg-[#2a3347] rounded-2xl p-5 text-center shadow-sm border">
          <h2 className="text-3xl font-bold text-emerald-600">
            10K+
          </h2>
          <p className="text-gray-600 text-sm dark:text-white">
            Happy Customers
          </p>
        </div>

        <div className="bg-white dark:bg-[#2a3347] rounded-2xl p-5 text-center shadow-sm border">
          <h2 className="text-3xl font-bold text-emerald-600">
            500+
          </h2>
          <p className="text-gray-600 text-sm dark:text-white">
            Products
          </p>
        </div>

        <div className="bg-white dark:bg-[#2a3347] rounded-2xl p-5 text-center shadow-sm border">
          <h2 className="text-3xl font-bold text-emerald-600">
            24/7
          </h2>
          <p className="text-gray-600 text-sm dark:text-white">
            Support
          </p>
        </div>

        <div className="bg-white dark:bg-[#2a3347] rounded-2xl p-5 text-center shadow-sm border">
          <h2 className="text-3xl font-bold text-emerald-600">
            99%
          </h2>
          <p className="text-gray-600 text-sm dark:text-white">
            Satisfaction
          </p>
        </div>

      </div>

      {/* Main Section */}

      <div className="grid lg:grid-cols-5 gap-8">

        {/* Contact Cards */}

        <div className="lg:col-span-2 space-y-5">

          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 dark:from-gray-500  dark:to-gray-800 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100  p-4 rounded-2xl">
                <Phone className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg dark:text-emerald-400 text-gray-800">
                  Call Us
                </h3>

                <p className="text-gray-600 dark:text-white">
                  +91 98765 xxxxx
                </p>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br dark:bg-[#94a3b8] from-emerald-50 to-white border dark:from-gray-500  dark:to-gray-800 border-emerald-100 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">
                <Mail className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg dark:text-emerald-400 text-gray-800">
                  Email Us
                </h3>

                <p className="text-gray-600 dark:text-white">
                  support@nexcart.com
                </p>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br from-emerald-50 dark:bg-[#94a3b8] to-white border dark:from-gray-500  dark:to-gray-800 border-emerald-100 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">
                <MapPin className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg dark:text-emerald-400 text-gray-800">
                  Visit Us
                </h3>

                <p className="text-gray-600 dark:text-white">
                  New Delhi, India
                </p>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br dark:bg-[#94a3b8] from-emerald-50 to-white border dark:from-gray-500  dark:to-gray-800 border-emerald-100 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">
                <Clock className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg dark:text-emerald-400 text-gray-800">
                  Working Hours
                </h3>

                <p className="text-gray-600 dark:text-white">
                  Mon - Sat : 9 AM - 8 PM
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className="lg:col-span-3">

          <div  id="contact-form" className="bg-white border dark:bg-[#1e2535] dark:border-gray-500 border-gray-200 rounded-3xl p-8 shadow-xl">

            <div className="flex items-center gap-3 mb-6">

              <MessageCircle className="text-emerald-600" />

              <h2 className="text-2xl font-bold dark:text-white text-gray-800">
                Send Us A Message
              </h2>

            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
             
            >
              <input
                type="hidden"
                name="access_key"
                value="343cc839-d0af-4911-81d8-12be27aad7c6"
              />

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="border border-gray-300 dark:text-white rounded-xl px-4 py-3"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="border border-gray-300 dark:text-white rounded-xl px-4 py-3"
                />
              </div>

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full border dark:text-white border-gray-300 rounded-xl px-4 py-3"
              />

              <textarea
                rows="6"
                name="message"
                required
                placeholder="Write your message..."
                className="w-full border border-gray-300 dark:text-white rounded-xl px-4 py-3 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r cursor-pointer from-emerald-600 to-emerald-500 text-white py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>

      </div>

      {/* Support Banner */}

      <div className="mt-16 bg-gradient-to-r flex flex-col justify-between items-center from-emerald-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">

        <div className="flex justify-center mb-4">
          <Headphones size={50} />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          Need Immediate Help?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-emerald-50">
          Our support team is available to assist you with
          orders, payments, deliveries, and product-related queries.
        </p>

        <Link to="/support" className="mt-6 bg-white text-emerald-600 px-8 py-3 w-fit  rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer">
          Chat With Support
        </Link>

      </div>

    </section>
  );
};

export default Contact;