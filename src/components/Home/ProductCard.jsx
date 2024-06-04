import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="cyan-400">
      {/* inspiration collection  */}
      <div className="mx-auto">
        <div className="mx-auto w-9/12">
          {/* heading  */}
          <div className="mb-12 mt-16 text-center">
            <p className="text-4xl font-bold">Inspiration Collection</p>

            <p className="leading-10 text-gray-500">
              Discover our Inspiration Collection for creative and unique
              designs.{" "}
            </p>
          </div>
          {/* img */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10">
            <div className="h-94 w-34 overflow-hidden sm:mt-16 sm:rounded-tl-[6.4rem]">
              <img
                className="scale-100"
                src="/src/assets/Image-living room.png"
                alt="living room img"
              />
            </div>

            <div className="h-94 w-34 overflow-hidden">
              <img
                className=" "
                src="/src/assets/Mask Group.png"
                alt="living room img"
              />
            </div>

            <div className="h-94 w-34 overflow-hidden sm:mt-16">
              <img
                className="sm:rounded-br-[6.4rem]"
                src="/src/assets/Mask Group-1.png"
                alt="living room img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* beauty your space  */}

      <div className="mt-14 bg-[#F2F5FF] py-12 text-gray-600 sm:mt-20 sm:py-16">
        <div className="mx-auto w-9/12">
          <div className="flex flex-col items-center justify-between gap-12 sm:flex-row">
            <div className="space-y-4 sm:w-5/12">
              <p className="text-4xl font-bold">Beautify Your Space</p>
              <p className="pb-6 text-gray-500">
                Enhance your environment with elegant decor, cozy furnishings,
                and vibrant accents, creating a welcoming and aesthetically
                pleasing atmosphere.
              </p>
              <Link
                to="products"
                className="cursor-pointer rounded-full bg-[#054C73] px-6 py-3 text-sm font-semibold uppercase text-white"
              >
                Learn More
              </Link>
            </div>

            <div className="relative z-10 sm:w-5/12">
              <div>
                <img
                  src="/src/assets/beauty-product.jpg"
                  alt=""
                  className="rounded-xl sm:h-3/4 sm:w-4/5"
                />
              </div>
              <div className="absolute top-1/2 -z-10 -translate-y-2/4 sm:right-0">
                <svg
                  width="372"
                  height="374"
                  viewBox="0 0 372 374"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="186"
                    cy="186.995"
                    rx="186"
                    ry="186.855"
                    fill="#09513B"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
