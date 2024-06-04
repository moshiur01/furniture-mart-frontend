const Footer = () => {
  return (
    <footer className="bg-[#03344f] py-16 text-gray-200">
      <div className="mx-auto w-9/12">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-center">
          <div className="w-1/2 space-y-4">
            <p className="text-xl font-bold">Follow us </p>

            <div className="flex gap-9">
              <img
                src="/src/assets/facebook.png"
                alt=""
                className="w-12 rounded-lg bg-white"
              />
              <img
                src="/src/assets/instagram.png"
                alt=""
                className="w-12 rounded-lg bg-white"
              />
              <img
                src="/src/assets/twitter.png"
                alt=""
                className="w-12 rounded-lg bg-white"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold">Gallery</p>

            <div className="grid grid-cols-4 gap-3">
              <img src="/src/assets/IG-1.jpg" alt="" />
              <img src="/src/assets/IG-2.jpg" alt="" />
              <img src="/src/assets/IG-3.jpg" alt="" />
              <img src="/src/assets/IG-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
