import { Link } from "react-router-dom";

import bedRoomImg from "../../assets/bedroom-img.jpg";
import diningImg from "../../assets/dining-room-img.jpg";
import livingRoomImg from "../../assets/living-room-img.jpg";

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
            to="/products/Dining"
            className="h-94 w-34 basis-4/12 overflow-hidden duration-700 hover:-translate-y-5 hover:border-b-2 hover:border-b-[#054C73]"
          >
            <img src={diningImg} className="rounded-lg" alt="dining image" />
            <p className="mt-6 text-center text-2xl font-bold text-gray-700">
              Dining
            </p>
          </Link>
          <Link
            to="/products/LivingRoom"
            className="h-94 w-34 basis-4/12 overflow-hidden duration-700 hover:-translate-y-5 hover:border-b-2 hover:border-b-[#054C73]"
          >
            <img src={livingRoomImg} className="rounded-lg" alt="" />
            <p className="mt-6 text-center text-2xl font-bold text-gray-700">
              Living
            </p>
          </Link>
          <Link
            to="/products/bedRoom"
            className="h-94 w-34 basis-4/12 overflow-hidden duration-700 hover:-translate-y-5 hover:border-b-2 hover:border-b-[#054C73]"
          >
            <img src={bedRoomImg} className="rounded-lg" alt="" />
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
