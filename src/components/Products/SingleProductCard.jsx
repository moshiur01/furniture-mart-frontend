/* eslint-disable react/prop-types */
const SingleProductCard = ({ product }) => {
  const { imageURL, name, price, id } = product;
  return (
    <div className="card mx-auto w-96 bg-base-100 shadow-xl" key={id}>
      <figure>
        <img src={imageURL} alt="furniture image" className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>
          <span className="font-semibold">Price: </span>
          <span className="italic">{price} tk</span>{" "}
        </p>

        <div className="card-actions justify-center">
          <button className="btn bg-blue-900 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
