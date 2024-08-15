import PropTypes from "prop-types";
import ILike from "../assets/like.svg";
import IStar from "../assets/star.svg";
const ProductCard = ({ img }) => {
  return (
    <div className="">
      <div className="relative h-[336px] w-full">
        <img src={img} alt="" />
        <button className="bg-white p-2 rounded-full absolute top-3 right-3">
          <img src={ILike} alt="" />
        </button>
        <div className="absolute bg-white p-[6px] bottom-3 left-3 flex gap-1 items-center text-sm font-medium rounded-sm">
          <p className="flex gap-1 items-center">
            4.2 <img className="size-[14px]" src={IStar} alt="" />
          </p>
          |<p>690</p>
        </div>
        <div className="absolute bg-white p-[6px] top-3 left-3 flex gap-1 items-center text-sm font-medium rounded-md">
          <p>$ 999</p>
        </div>
      </div>
      <div className="px-3 mt-1">
        <h3 className="text-lg font-medium">Louis Philippe</h3>
        <p className="text-sm font-medium text-[#717171]">
          Lightly Washed Slim Fit Jeans
        </p>

        <div className="flex justify-between mt-1">
          <p className="text-sm font-medium text-[#717171]">
            man&#39;s {">"} Jeans
          </p>
          <p className="text-sm font-medium text-[#717171]">10 Jun 2024</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string,
};

export default ProductCard;
