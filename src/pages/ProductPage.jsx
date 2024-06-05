import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { client } from "../Config/axiosConfig";
import Loading from "../components/Authentication/Loading";
import SingleProductCard from "../components/Products/SingleProductCard";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = async (category, searchQuery) => {
    setIsLoading(true);

    try {
      const response = await client.get("/products", {
        params: {
          category: category || undefined,
          searchTerm: searchQuery || undefined,
        },
      });
      setProducts(response.data);
    } catch (error) {
      //   console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(category, searchQuery);
  }, [category, searchQuery]);

  const handleSearch = () => {
    fetchProducts(category, searchQuery);
  };

  return (
    <div className="sm:my-12">
      <div className="py-6 text-center text-3xl font-semibold">
        <h2>All Products</h2>
      </div>

      <div className="mx-14 my-4 flex justify-between gap-4">
        {/* select area  */}
        <div className="flex items-center justify-between gap-4">
          <select
            className="select select-bordered w-full max-w-xs focus:border-hidden focus:outline focus:outline-blue-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="bedRoom">Bed Room</option>
            <option value="LivingRoom">Living Room</option>
            <option value="Dining">Drawing Room</option>
          </select>

          <div>
            <button
              className="h-[48px] w-24 rounded-lg bg-blue-900 font-semibold text-white"
              onClick={() => setCategory("")}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="form-control relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-36 pl-10 focus:border-hidden focus:outline focus:outline-blue-400 md:w-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-4 ml-3 mt-3" onClick={handleSearch}>
            <IoIosSearch className="size-6" />
          </button>
        </div>
      </div>

      {isLoading && <Loading />}
      <div className="grid items-center justify-center gap-y-8 sm:grid-cols-4">
        {products?.map((product) => {
          return <SingleProductCard product={product} key={product?._id} />;
        })}
      </div>
    </div>
  );
};

export default ProductPage;
