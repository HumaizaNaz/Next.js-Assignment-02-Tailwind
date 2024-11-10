import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  return (
    <>
  

      {/* Grid Section */}
      <section id="Projects" className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center justify-center gap-10 mt-10 mb-5">

        {/* Product Card 1 */}
        <div className="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/1.jpg"
              alt="Product"
              width={288}
              height={320}
              className="object-cover rounded-t-xl"
            />
            <div className="px-4 py-3">
              <span className="text-gray-400 mr-3 uppercase text-xs">R & H</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Burger</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Product Card 2 */}
        <div className="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/pizza-with-tomatoes-spaghetti-corn-olives-mushrooms-close-up-dark-background.jpg"
              alt="Product"
              width={288}
              height={320}
              className="object-cover rounded-t-xl"
            />
            <div className="px-4 py-3">
              <span className="text-gray-400 mr-3 uppercase text-xs">R & H</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Product Card 3 */}
        <div className="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/3.jpg"
              alt="Product"
              width={288}
              height={320}
              className="object-cover rounded-t-xl"
            />
            <div className="px-4 py-3">
              <span className="text-gray-400 mr-3 uppercase text-xs">R & H</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Product Card 4 */}
        <div className="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/4.jpg"
              alt="Product"
              width={288}
              height={320}
              className="object-cover rounded-t-xl"
            />
            <div className="px-4 py-3">
              <span className="text-gray-400 mr-3 uppercase text-xs">R & H</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Products;
