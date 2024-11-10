import React from 'react'

import  Fastfoodinfo from '@/component/Fastfoodinfo'

const Section = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('/res.jpg')] bg-pink-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-6xl"> Taste the Best Fast Food in Town!</h1>
          <p className="mb-8 text-lg font-normal text-pink-500 lg:text-xl sm:px-16 lg:px-48"> Craving for delicious burgers, pizzas, fries, and more? Were here to serve you the tastiest fast food, made fresh just for you!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pink-500 hover:bg-white
             focus:ring-4 focus:ring-blue-300 hover:text-pink-500 dark:focus:ring-blue-900">
            Order Now
            </a>

            <a href="#" className="inline-flex justify-center  items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:text-pink-500 hover:border-pink-500 focus:ring-4 focus:ring-gray-400">
            View Menu
            </a>  
          </div>
        </div>
      </section>
      <section className='py-[100px]'>
        <div className='flex justify-center'>
        <Fastfoodinfo/>
        </div>
   

      </section>
    </div>
  )
}

export default Section
