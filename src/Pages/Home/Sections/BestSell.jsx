import { Link } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard";
import Section from "../../../Components/Section";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const BestSell = () => {
  const axiosPublic = useAxios();
  // Fetch best sell products from API
  const { data: products } = useQuery({
    queryKey: ["bestSell"],
    queryFn: async () => {
      const response = await axiosPublic.get("/products");
      return response?.data?.products;
    },
  });
  return (
    <Section className="mt-10 flex flex-col items-center">
      <h3 className="text-[40px] font-bold mx-auto text-center mb-7">
        Best Sell Product
      </h3>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {products?.slice(0, 8).map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
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
