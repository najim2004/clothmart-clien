import PropTypes from "prop-types";
import ILike from "../assets/like.svg";
import IStar from "../assets/star.svg";

const formatDate = (isoString) => {
  const date = new Date(isoString);

  // Define options for formatting
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  // Format the date
  return date.toLocaleDateString("en-GB", options);
};
const ProductCard = ({ product }) => {
  return (
    <div className="">
      <div className="relative h-[226px] max-w-[226px] flex justify-center items-center bg-[#F7F7F7] mx-auto overflow-hidden">
        <img
          className="h-full max-w-[226px]"
          src={product?.productImage}
          alt=""
        />
        <button className="bg-white p-1 size-7  lg:p-2 rounded-full absolute top-3 right-3">
          <img className="size-full" src={ILike} alt="" />
        </button>
        <div className="absolute bg-white p-1 bottom-3 left-3 flex gap-1 items-center text-sm font-medium rounded-sm">
          <p className="flex gap-1 items-center">
            {product?.ratings}{" "}
            <img className="size-[14px]" src={IStar} alt="" />
          </p>
          {/* |<p>690</p> */}
        </div>
        <div className="absolute bg-white p-1 top-3 left-3 flex gap-1 items-center text-sm font-medium rounded-md">
          <p>$ {product?.price}</p>
        </div>
      </div>
      <div className="px-3 mt-1">
        <h3 className="text-lg font-medium text-center lg:text-start">
          {product?.productName}
        </h3>
        <p className="text-sm font-medium text-[#717171] text-center lg:text-justify">
          {product?.description}
        </p>
        <div className="flex justify-between mt-1 flex-col lg:flex-row items-center text-sm font-medium">
          <p>
            {product?.brand}
            {" / "}
            {product?.category}
          </p>
          <p>{formatDate(product?.creationDate)}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string,
  product: PropTypes.object,
};

export default ProductCard;
