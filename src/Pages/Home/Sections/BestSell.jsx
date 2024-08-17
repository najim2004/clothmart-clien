import { Link } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard";
import Section from "../../../Components/Section";
import product1 from "../../../assets/louis.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";

const BestSell = () => {
  return (
    <Section className="mt-10 flex flex-col items-center">
      <h3 className="text-[40px] font-bold mx-auto text-center mb-7">
        Best Sell Product
      </h3>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
        <ProductCard img={product1} />
        <ProductCard img={product2} />
        <ProductCard img={product3} />
        <ProductCard img={product4} />
        <ProductCard img={product1} />
        <ProductCard img={product2} />
        <ProductCard img={product3} />
        <ProductCard img={product4} />
      </div>
      <Link
        to={"/shop"}
        className="px-5 py-1 text-lg font-medium border border-black rounded-md mx-auto mt-12"
      >
        Load More
      </Link>
    </Section>
  );
};

export default BestSell;
