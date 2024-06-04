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
    </div>
  );
};

export default ProductCard;
