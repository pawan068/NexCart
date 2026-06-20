
import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, LifeBuoy } from "lucide-react";

const Support = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
{
question: "How do I search for products?",
answer:
"You can use the search bar available on the Products page to quickly find products. Simply type the name of the product you are looking for and NexCart will automatically display matching results. This helps you find products faster without manually browsing through all categories.",
},
{
question: "How do I filter products?",
answer:
"NexCart provides multiple filter options to help you find products more easily. You can filter products by category, price range, and rating. On mobile devices, tap the filter icon to open the filter panel, apply your preferred filters, and instantly view matching products.",
},
{
question: "How do I view product details?",
answer:
"To view complete information about a product, simply click on its product card. You will be redirected to the product details page where you can see the product image, description, category, rating, price, and other useful information before making a purchase decision.",
},
{
question: "How do I add a product to the cart?",
answer:
"Open the product details page and click the Add To Cart button. The selected product will be added to your shopping cart immediately. You can continue shopping and add multiple products before reviewing them on the Cart page.",
},
{
question: "Will my cart be saved after refreshing the page?",
answer:
"Yes. NexCart uses localStorage to save your cart data directly in your browser. This means that refreshing the page or accidentally closing the browser will not remove your cart items. Your selected products will remain available until you manually remove them or clear your browser storage.",
},
{
question: "How do I change product quantity in the cart?",
answer:
"On the Cart page, each product includes quantity controls. Use the plus (+) button to increase the quantity or the minus (-) button to decrease it. The total price is automatically updated whenever the quantity changes.",
},
{
question: "How do I remove a product from the cart?",
answer:
"If you no longer want a product in your cart, simply click the Remove button associated with that item. The product will be instantly removed from your cart and the cart total will be updated automatically.",
},
{
question: "Do I need an account to browse products?",
answer:
"No. NexCart allows visitors to browse products, search items, apply filters, and view product details without creating an account. This makes it easy for users to explore the platform before deciding to sign up.",
},
{
question: "How can I contact NexCart support?",
answer:
"If you have any questions, feedback, or issues while using NexCart, you can visit the Contact page and submit the Contact Us form. Your message will be sent directly to the support team, and we will review your request as soon as possible.",
},
{
question: "Is NexCart mobile friendly?",
answer:
"Yes. NexCart is fully responsive and optimized for mobile phones, tablets, laptops, and desktop devices. Features such as product browsing, filtering, cart management, and navigation are designed to provide a smooth experience across different screen sizes.",
},
];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <LifeBuoy size={50} className="text-emerald-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            NexCart Support Center
          </h1>

          <p className="text-gray-500 mt-3">
            Find answers to the most frequently asked questions.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search help articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>

                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-gray-500">
                No matching questions found.
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Support;

