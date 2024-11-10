'use client'
import React, { useState } from 'react'

const Accordion: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null)

  // Toggle accordion visibility
  const handleToggle = (id: string) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Accordion Container */}
      <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        
        {/* Accordion Item 1 */}
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full font-medium rtl:text-right border-b border-gray-200 bg-pink-500 text-black gap-3 py-4 px-5 sm:px-8 md:px-12"
            onClick={() => handleToggle("1")}
            aria-expanded={expanded === "1"}
            aria-controls="accordion-flush-body-1"
          >
            <span>What Fast Food Options Do We Offer?</span>
            <svg
              className={`w-4 h-4 ${expanded === "1" ? "rotate-180" : ""} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        {expanded === "1" && (
          <div id="accordion-flush-body-1" className="py-5 border-b border-gray-200">
            <p className="mb-2 text-black">We offer a wide range of delicious fast food options including burgers, fries, pizzas, and fresh salads, all made with the highest quality ingredients.</p>
            <p className="text-black">Explore our full menu to find your favorite meal. <a href="/products" className="text-pink-600 hover:underline text-center">Explore Our Full Menu</a></p>
          </div>
        )}

        {/* Accordion Item 2 */}
        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            onClick={() => handleToggle("2")}
            aria-expanded={expanded === "2"}
            aria-controls="accordion-flush-body-2"
          >
            <span>Do We Offer Vegan Options?</span>
            <svg
              className={`w-4 h-4 ${expanded === "2" ? "rotate-180" : ""} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        {expanded === "2" && (
          <div id="accordion-flush-body-2" className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Yes! We offer a variety of vegan-friendly options including plant-based burgers, wraps, and fresh veggie salads that are both delicious and nutritious.</p>
            <p className="text-gray-500 dark:text-gray-400">Check out our <a href="/menu#vegan" className="text-pink-600 hover:underline">Vegan Menu</a> for more options.</p>
          </div>
        )}

        {/* Accordion Item 3 */}
        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            onClick={() => handleToggle("3")}
            aria-expanded={expanded === "3"}
            aria-controls="accordion-flush-body-3"
          >
            <span>How Do I Order for Delivery?</span>
            <svg
              className={`w-4 h-4 ${expanded === "3" ? "rotate-180" : ""} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        {expanded === "3" && (
          <div id="accordion-flush-body-3" className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">You can easily place an order for delivery through our mobile app or website. We offer fast delivery to your door, so you can enjoy your favorite meals from the comfort of your home.</p>
            <p className="text-gray-500 dark:text-gray-400">Download the app or visit our <a href="/delivery" className="text-pink-600 hover:underline">Delivery Page</a> to order now.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion
