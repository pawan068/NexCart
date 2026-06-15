import React,{useState} from "react";
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

const [message,setMessage]=useState("Send Message")

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

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

        <div className="bg-white rounded-2xl p-5 text-center shadow-sm border">
          <h2 className="text-3xl font-bold text-emerald-600">
            10K+
          </h2>
          <p className="text-gray-600 text-sm">
            Happy Customers
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 text-center shadow-sm border">
          <h2 className="text-3xl font-bold text-emerald-600">
            500+
          </h2>
          <p className="text-gray-600 text-sm">
            Products
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 text-center shadow-sm border">
          <h2 className="text-3xl font-bold text-emerald-600">
            24/7
          </h2>
          <p className="text-gray-600 text-sm">
            Support
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 text-center shadow-sm border">
          <h2 className="text-3xl font-bold text-emerald-600">
            99%
          </h2>
          <p className="text-gray-600 text-sm">
            Satisfaction
          </p>
        </div>

      </div>

      {/* Main Section */}

      <div className="grid lg:grid-cols-5 gap-8">

        {/* Contact Cards */}

        <div className="lg:col-span-2 space-y-5">

          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">
                <Phone className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Call Us
                </h3>

                <p className="text-gray-600">
                  +91 98765 xxxxx
                </p>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">
                <Mail className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Email Us
                </h3>

                <p className="text-gray-600">
                  support@nexcart.com
                </p>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">
                <MapPin className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Visit Us
                </h3>

                <p className="text-gray-600">
                  New Delhi, India
                </p>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">
                <Clock className="text-emerald-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Working Hours
                </h3>

                <p className="text-gray-600">
                  Mon - Sat : 9 AM - 8 PM
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className="lg:col-span-3">

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">

            <div className="flex items-center gap-3 mb-6">

              <MessageCircle className="text-emerald-600" />

              <h2 className="text-2xl font-bold text-gray-800">
                Send Us A Message
              </h2>

            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
                />

              </div>

              <input
                type="text"
                required
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
              />

              <textarea
                rows="6"
                required
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-emerald-500"
              />

              <button
                type="submit"
                
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-4 rounded-xl font-semibold hover:scale-[1.01] transition-all duration-300 cursor-pointer"
              >
                {message}
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Support Banner */}

      <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">

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

        <button className="mt-6 bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer">
          Chat With Support
        </button>

      </div>

    </section>
  );
};

export default Contact;