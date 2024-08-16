import { FaFilter } from "react-icons/fa";
import Section from "../../Components/Section";
import SearchField from "./Sections/SearchField";
import { useState } from "react";
import FilterSideBar from "../../Components/FilterSideBar";
import AllProducts from "./Sections/AllProducts";
import Pagination from "../../Components/Paginations";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const axiosPublic = useAxios();
  const [AllProductsData, setAllProductsData] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const response = await axiosPublic.get("/products");
      return response.data;
    },
  });

  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <Section className={""}>
      <h3 className="text-[40px] font-bold mx-auto text-center my-7">
        All Best Product
      </h3>
      <div className="flex justify-between items-center h-max">
        <SearchField
          onSearch={onSearch}
          className="flex-grow flex justify-center items-center"
        />
        <button
          onClick={() => setIsOpenFilter(true)}
          className="flex items-center justify-center text-xl font-semibold gap-2"
        >
          <FaFilter className="text-lg" /> Filter
        </button>
        <FilterSideBar
          className={`${
            isOpenFilter ? "translate-x-0" : "translate-x-full"
          }  duration-500 z-50`}
          setIsOpenFilter={setIsOpenFilter}
        />
      </div>
      <AllProducts className="my-10" data={data} />
      <Pagination />
    </Section>
  );
};

export default Shop;
