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
const ProductCard = ({ img, product }) => {
  return (
    <div className="">
      <div className="relative h-[260px] md:h-[336px] lg:h-[336px] w-full shadow-lg">
        <img className="size-full" src={img} alt="" />
        <button className="bg-white p-2 rounded-full absolute top-3 right-3">
          <img src={ILike} alt="" />
        </button>
        <div className="absolute bg-white p-[6px] bottom-3 left-3 flex gap-1 items-center text-sm font-medium rounded-sm">
          <p className="flex gap-1 items-center">
            {product?.ratings}{" "}
            <img className="size-[14px]" src={IStar} alt="" />
          </p>
          {/* |<p>690</p> */}
        </div>
        <div className="absolute bg-white p-[6px] top-3 left-3 flex gap-1 items-center text-sm font-medium rounded-md">
          <p>$ {product?.price}</p>
        </div>
      </div>
      <div className="px-3 mt-1">
        <h3 className="text-lg font-medium text-center lg:text-start">
          {product?.productName}
        </h3>

        <div className="flex justify-between mt-1 flex-col lg:flex-row items-center text-sm font-medium">
          <p>
            {/* man&#39;s {">"} Jeans */}
            {product?.category}
          </p>
          <p>{formatDate(product?.creationDate)}</p>
        </div>
        <p className="text-sm font-medium text-[#717171] text-center lg:text-justify">
          {product?.description}
        </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string,
  product: PropTypes.object,
};

export default ProductCard;
