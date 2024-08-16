import PropTypes from "prop-types";
import ProductCard from "../../../Components/ProductCard";
import product1 from "../../../assets/louis.png";

const AllProducts = ({ className, data }) => {
  return (
    <div className={`${className} grid grid-cols-1 lg:grid-cols-4 gap-7`}>
      {data?.map((product) => (
        <ProductCard key={product?._id} img={product1} product={product} />
      ))}
    </div>
  );
};

AllProducts.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default AllProducts;
