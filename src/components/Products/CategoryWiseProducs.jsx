import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../Config/axiosConfig";
import Loading from "../Authentication/Loading";
import SingleProductCard from "./SingleProductCard";
const CategoryWiseProducts = () => {
  let { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.get(`/products?category=${category}`).then((response) => {
      setProducts(response.data);
    });
  }, [category]);

  return (
    <div className="sm:my-12">
      <div className="py-6 text-center text-3xl font-semibold">
        <h2> Products by Category</h2>
      </div>

      {products?.length === 0 ? (
        <Loading />
      ) : (
        <div className="grid items-center justify-center gap-y-8 sm:grid-cols-4">
          {products?.map((product) => {
            return <SingleProductCard product={product} key={product?._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryWiseProducts;
