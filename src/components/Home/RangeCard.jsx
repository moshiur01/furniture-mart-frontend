import { Link } from "react-router-dom";
const RangeCard = () => {
  return (
    <div className="bg-white py-16 text-gray-600" id="services">
      <div className="mx-auto w-9/12">
        <div className="mb-12 text-center">
          <p className="text-4xl font-bold">Browse the Range</p>
          <p className="text-gray-500">
            Explore our diverse selection of products today
          </p>
        </div>
        <div className="flex flex-col justify-center gap-10 sm:flex-row">
          <Link
            to="/dining"
            className="h-94 w-34 overflow-hidden duration-700 hover:-translate-y-5 hover:border-b-2 hover:border-b-[#054C73]"
          >
            <img src="/src/assets/Image-living room.png" alt="" />
            <p className="mt-6 text-center text-2xl font-bold text-gray-700">
              Dining
            </p>
          </Link>
          <Link
            to="/living"
            className="h-94 w-34 overflow-hidden duration-700 hover:-translate-y-5 hover:border-b-2 hover:border-b-[#054C73]"
          >
            <img src="/src/assets/Mask Group.png" alt="" />
            <p className="mt-6 text-center text-2xl font-bold text-gray-700">
              Living
            </p>
          </Link>
          <Link
            to="/bedRoom"
            className="h-94 w-34 overflow-hidden duration-700 hover:-translate-y-5 hover:border-b-2 hover:border-b-[#054C73]"
          >
            <img src="/src/assets/Mask Group-1.png" alt="" />
            <p className="mt-6 text-center text-2xl font-bold text-gray-700">
              BedRoom
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RangeCard;
