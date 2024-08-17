import PropTypes from "prop-types";
import ProductCard from "../../../Components/ProductCard";

const AllProducts = ({ className, data }) => {
  return (
    <div
      className={`${className} grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7`}
    >
      {data?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
};

AllProducts.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default AllProducts;
