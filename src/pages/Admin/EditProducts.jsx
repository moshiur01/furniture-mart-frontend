import { useLoaderData } from "react-router-dom";

// const EditProducts = () => {
//

//   console.log(data);
//   return <div>EditProducts</div>;
// };

// export default EditProducts;

/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { serverLink } from "../../Config/RouteConfig";

const EditProducts = () => {
  const productData = useLoaderData();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageURL: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormData({
      name: productData?.name,
      price: productData?.price,
      imageURL: productData?.imageURL,
      category: productData?.category,
    });
  }, [productData]);

  //*update data api handler

  const submitHandler = async (e) => {
    e.preventDefault();

    axios
      .patch(`${serverLink}/product/${productData?._id}`, formData)
      .then((res) => {
        if (res?.data?.modifiedCount === 1) {
          window.location.reload();
          toast.success("Product Information updated successfully");
        }
      });
  };

  return (
    <section className="px-5 md:mt-24 md:h-screen xl:px-0">
      <div className="mx-auto max-w-[1170px]">
        <div className="">
          {/* singUP form  */}

          <div className="my-auto rounded-l-lg py-10 lg:pl-16">
            <h3 className="mb-10 text-center text-3xl font-bold leading-9 text-[#054C73]">
              Update Product Information
            </h3>

            <form onSubmit={submitHandler} className="mx-auto w-8/12">
              {/* name  */}
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Product name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  className="focus:border-primaryColor text-headingColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-lg leading-7 placeholder:text-lg placeholder:text-gray-400 focus:outline-blue-500"
                  required
                />
              </div>

              {/* Product price  */}
              <div className="mb-5">
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Product Price"
                  value={formData?.price}
                  onChange={handleInputChange}
                  className="focus:border-primaryColor text-headingColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-lg leading-7 placeholder:text-lg placeholder:text-gray-400 focus:outline-blue-500"
                  required
                />
              </div>

              {/* Image url  */}
              <div className="mb-5">
                <input
                  type="text"
                  name="imageURL"
                  placeholder="Enter Product Image URL"
                  value={formData?.imageURL}
                  onChange={handleInputChange}
                  className="focus:border-primaryColor text-headingColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-lg leading-7 placeholder:text-lg placeholder:text-gray-400 focus:outline-blue-500"
                  required
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <select
                  className="select select-bordered w-full max-w-xs focus:border-hidden focus:outline focus:outline-blue-400"
                  name="category"
                  value={formData?.category}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  <option value="bedRoom">Bed Room</option>
                  <option value="LivingRoom">Living Room</option>
                  <option value="Dining">Dining Room</option>
                </select>
              </div>

              {/* ADD  btn  */}
              <div className="mt-7">
                <button
                  type="submit"
                  className="mb-3 w-full rounded-lg bg-[#054C73] px-4 py-3 text-[18px] leading-[30px] text-white"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProducts;
