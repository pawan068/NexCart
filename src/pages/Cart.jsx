import React from "react";
import { getCart } from "../Context/CartContext";
import { convertToINR } from "../utils/currency";
import {
Plus,
Minus,
Trash2,
ShoppingBag,
ArrowRight,
Star,
} from "lucide-react";

const Cart = () => {

const {
cartItems,
increaseQty,
decreaseQty,
removeItem,
} = getCart();

const total = cartItems.reduce(
(acc, item) => acc + item.price * item.quantity,
0
);

const totalItems = cartItems.length
return ( <section className="min-fit-screen bg-gray-50 pb-28 lg:pb-10">


  {/* HEADER */}

  <div className="max-w-7xl mx-auto px-4 py-8">

    <div className="mb-8">

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Shopping Cart
      </h1>

      <p className="text-gray-500 mt-2">
        {totalItems} Items Added To Cart
      </p>

    </div>

    {/* EMPTY CART */}

    {cartItems.length === 0 ? (

      <div className="bg-white rounded-3xl shadow-md p-10 text-center">

        <ShoppingBag
          size={60}
          className="mx-auto text-gray-300"
        />

        <h2 className="text-2xl font-bold text-gray-700 mt-4">
          Your Cart Is Empty
        </h2>

        <p className="text-gray-500 mt-2">
          Add some products to get started.
        </p>

      </div>

    ) : (

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

        {/* CART ITEMS */}

        <div className="space-y-5">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              <div className="flex gap-4 p-4">

                {/* IMAGE */}

                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-emerald-50 to-gray-100 flex items-center justify-center flex-shrink-0">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 md:w-28 md:h-28 object-contain"
                  />

                </div>

                {/* PRODUCT INFO */}

                <div className="flex-1 flex flex-col justify-between min-w-0">

                  <div>

                    <h2 className="font-semibold text-gray-800 text-sm md:text-lg line-clamp-2">
                      {item.title}
                    </h2>

                    <div className="flex items-center gap-2 mt-2">

                      <span className="flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">

                        <Star
                          size={12}
                          fill="currentColor"
                        />

                        {item.rating?.rate}

                      </span>

                      <span className="text-xs text-gray-500">
                        In Stock
                      </span>

                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-emerald-600 mt-3">
                      ₹{convertToINR(item.price)}
                    </h3>

                  </div>

                  {/* QUANTITY + DELETE */}

                  <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center bg-gray-100 rounded-full">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-gray-200 rounded-full transition"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="px-4 font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-gray-200 rounded-full transition"
                      >
                        <Plus size={16} />
                      </button>

                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* DESKTOP SUMMARY */}

        <div className="hidden lg:block">

          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sticky top-24">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{ convertToINR( total.toFixed(2))}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">
                  Free
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>₹0</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold">

                <span>Total</span>

                <span className="text-emerald-600">
                  ₹{convertToINR( total.toFixed(2))}
                </span>

              </div>

            </div>

            <button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition">

              <ShoppingBag size={20} />

              Proceed To Checkout

            </button>

          </div>

        </div>

      </div>

    )}

  </div>

  {/* MOBILE CHECKOUT BAR */}

  {cartItems.length > 0 && (

    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-5px_30px_rgba(0,0,0,0.08)] px-4 py-3 z-50">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs text-gray-500">
            Total Amount
          </p>

          <h2 className="text-2xl font-bold text-emerald-600">
            ₹{convertToINR( total.toFixed(2))}
          </h2>

        </div>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition">

          Checkout

          <ArrowRight size={18} />

        </button>

      </div>

    </div>

  )}

</section>

);
};

export default Cart;
