import { FaFilter } from "react-icons/fa";
import Section from "../../Components/Section";
import SearchField from "./Sections/SearchField";
import { useState, useEffect } from "react";
import FilterSideBar from "../../Components/FilterSideBar";
import AllProducts from "./Sections/AllProducts";
import Pagination from "../../Components/Pagination";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const axiosPublic = useAxios();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    brand: "",
    category: "",
    priceRange: [0, 1000],
    sort: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  const fetchProducts = async () => {
    const response = await axiosPublic.get("/products", {
      params: {
        page: currentPage,
        limit: pageSize,
        search: searchQuery,
        filters: filterOptions,
      },
    });
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["allProducts", currentPage, searchQuery, filterOptions],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  const handleApply = () => {
    setCurrentPage(1);
  };

  const onSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (data?.totalProducts === 0) {
      setCurrentPage(1);
    }
  }, [data?.totalProducts]);
  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <Section>
      <h3 className="text-[40px] font-bold mx-auto text-center my-7">
        All Best Products
      </h3>
      <div className="flex justify-between items-center h-max">
        <SearchField
          setSearchQuery={setSearchQuery}
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
          setFilterOptions={setFilterOptions}
          handleApply={handleApply}
          className={`${
            isOpenFilter ? "translate-x-0" : "translate-x-full"
          } duration-500 z-50`}
          setIsOpenFilter={setIsOpenFilter}
        />
      </div>
      {data?.totalProducts > 0 && (
        <>
          <AllProducts className="my-10" data={data?.products} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.totalProducts / pageSize)}
            onPageChange={onPageChange}
          />
        </>
      )}
    </Section>
  );
};

export default Shop;
