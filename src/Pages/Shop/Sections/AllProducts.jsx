import PropTypes from "prop-types";
import ProductCard from "../../../Components/ProductCard";
import product1 from "../../../assets/louis.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";

const AllProducts = ({ className }) => {
  return (
    <div className={`${className} grid grid-cols-1 lg:grid-cols-4 gap-7`}>
      <ProductCard img={product1} />
      <ProductCard img={product2} />
      <ProductCard img={product3} />
      <ProductCard img={product4} />
      <ProductCard img={product1} />
      <ProductCard img={product2} />
      <ProductCard img={product3} />
      <ProductCard img={product4} />
    </div>
  );
};

AllProducts.propTypes = {
  className: PropTypes.string.isRequired,
};

export default AllProducts;
