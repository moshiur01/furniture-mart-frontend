import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { serverLink } from "../../Config/RouteConfig";
import { client } from "../../Config/axiosConfig";
import Loading from "../../components/Authentication/Loading";
const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${serverLink}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const deleteHandler = (id) => {
    client.delete(`product/${id}`).then((res) => {
      if (res?.data?.deletedCount) {
        toast.success("Product Deleted successfully");
        setProducts(products.filter((product) => product._id !== id));
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="">
          <tr className="text-center">
            <th className="font-bold">Product Image</th>
            <th className="font-bold">Product Name</th>
            <th className="font-bold">Product Category</th>
            <th className="font-bold">Product Price</th>
            <th className="font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products?.length === 0 ? (
            <div className="">
              {" "}
              <Loading />
            </div>
          ) : (
            <>
              {products?.map((product) => {
                return (
                  <tr className="text-center" key={product?._id}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle h-14 w-14">
                          <img
                            src={product?.imageURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{product?.name}</td>
                    <td>{product?.price}</td>
                    <td className="uppercase">{product?.category}</td>
                    <th>
                      <Link
                        to={`/dashboard/editProduct/${product?._id}`}
                        className="btn btn-ghost btn-xs hover:bg-white"
                      >
                        <FaEdit className="text-2xl text-blue-600" />
                      </Link>
                      <button
                        className="btn btn-ghost btn-xs hover:bg-white"
                        onClick={() => deleteHandler(product?._id)}
                      >
                        <MdDelete className="text-2xl text-red-600" />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
