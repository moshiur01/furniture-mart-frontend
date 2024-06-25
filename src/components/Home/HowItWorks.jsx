import PurchaseSecurityImg from "../../assets/Purchase-securely.png";
import ShipsFromWarehouseImg from "../../assets/Ships-from-warehouse.png";
import StyleYourRoomImg from "../../assets/Style-your-room.png";

const HowItWorks = () => {
  return (
    <div className="bg-[#F2F5FF] py-16 text-gray-600">
      <div className="mx-auto w-9/12">
        <div className="mb-12 text-center">
          <p className="text-4xl font-bold">How It Works</p>
          <p className="text-gray-500">
            Discover the simplicity behind our innovative system now.
          </p>
        </div>

        <div>
          <div className="flex flex-col justify-center gap-10 sm:flex-row">
            {/* image 1  */}
            <div className="h-94 w-34 overflow-hidden">
              <img src={PurchaseSecurityImg} alt="purchase security" />
              <p className="mt-4 text-center text-2xl font-bold text-gray-700">
                Purchase Security
              </p>
              <p className="mx-auto w-9/12 text-center text-sm">
                Ensure secure transactions with our robust purchase security.
              </p>
            </div>
            {/* image 2 */}
            <div className="h-94 w-34 overflow-hidden">
              <img
                src={ShipsFromWarehouseImg}
                alt="Ship From Warehouse"
                className="sm:mx-auto"
              />
              <p className="mt-4 text-center text-2xl font-bold text-gray-700">
                Ship From Warehouse
              </p>
              <p className="mx-auto w-9/12 text-center text-sm">
                Goods shipped promptly from strategically located warehouses
                nationwide.
              </p>
            </div>

            {/* image 3 */}
            <div className="h-94 w-34 overflow-hidden">
              <img src={StyleYourRoomImg} alt="Style Your Room" />
              <p className="mt-4 text-center text-2xl font-bold text-gray-700">
                Style Your Room
              </p>
              <p className="mx-auto w-9/12 text-center text-sm">
                Revamp your space with stylish room decor today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
