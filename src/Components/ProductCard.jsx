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
      <div className="relative h-[336px] w-full shadow-lg">
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
        <h3 className="text-lg font-medium">{product?.productName}</h3>
        <p className="text-sm font-medium text-[#717171]">
          {product?.description}
        </p>

        <div className="flex justify-between mt-1">
          <p className="text-sm font-medium text-[#717171]">
            {/* man&#39;s {">"} Jeans */}
            {product?.category}
          </p>
          <p className="text-sm font-medium text-[#717171]">
            {formatDate(product?.creationDate)}
          </p>
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
