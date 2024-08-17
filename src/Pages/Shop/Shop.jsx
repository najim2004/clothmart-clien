import { FaFilter } from "react-icons/fa";
import Section from "../../Components/Section";
import SearchField from "./Sections/SearchField";
import { useState, useEffect } from "react";
import FilterSideBar from "../../Components/FilterSideBar";
import AllProducts from "./Sections/AllProducts";
import Pagination from "../../Components/Pagination";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

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
  const [allProductsData, setAllProductsData] = useState();
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

  useEffect(() => {
    if (data) {
      setAllProductsData(data);
    }
  }, [data]);
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
    if (allProductsData?.totalProducts === 0) {
      setCurrentPage(1);
    }
  }, [allProductsData?.totalProducts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  if (error) toast.error("Error fetching products:", error?.message);

  return (
    <Section>
      <Helmet>
        <title>Shop | Cloth Mart</title>
      </Helmet>
      <h3 className="lg:text-[40px] md:text-2xl text-xl font-bold mx-auto text-center my-7">
        Our All Collections
      </h3>
      <div className="flex justify-center gap-5 lg:justify-between items-center h-max">
        <SearchField
          setSearchQuery={setSearchQuery}
          onSearch={onSearch}
          className="lg:flex-grow"
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
      {isLoading && (
        <div className="w-full my-5 flex justify-center items-center">
          <span className="loading loading-dots loading-lg text-gray-500"></span>
        </div>
      )}
      {allProductsData?.totalProducts > 0 ? (
        <>
          <AllProducts className="my-10" data={allProductsData?.products} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(allProductsData.totalProducts / pageSize)}
            onPageChange={onPageChange}
          />
        </>
      ) : (
        !isLoading && (
          <div className="h-[400px] w-full flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-gray-400 mb-4">{":("}</h1>
            <h1 className="text-4xl font-bold text-gray-400">Not Found!</h1>
          </div>
        )
      )}
    </Section>
  );
};

export default Shop;
