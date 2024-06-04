const Banner = () => {
  return (
    // <div className="bannerBg relative">
    //   <div className="absolute inset-0 h-full w-full bg-black/30"></div>
    // </div>

    <div className="bannerBg hero md:min-h-[749px]">
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-start text-neutral-content sm:ml-auto sm:mr-16">
        <div className="flex max-w-md flex-col gap-4 rounded-md bg-[#DFE9F4] p-2 sm:p-6">
          <p className="font-bold text-black">New Arrival</p>
          <h1 className="mb-5 text-5xl font-bold text-[#054C73]">
            Discover Our New Collection
          </h1>
          <p className="mb-5 leading-9 text-black">
            Choose what resonates with your uniqueness Organize every space with
            our timeless furniture collections
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
