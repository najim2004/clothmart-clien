import PropTypes from "prop-types";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const FilterSideBar = ({
  className,
  setIsOpenFilter,
  handleApply,
  setFilterOptions,
}) => {
  const axiosPublic = useAxios();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sort, setSort] = useState("");

  const { data: allBrands } = useQuery({
    queryKey: ["allBrands"],
    queryFn: async () => {
      const response = await axiosPublic.get("/all-brans-name");
      return response.data;
    },
  });
  const { data: allCategories } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => {
      const response = await axiosPublic.get("/all-categories");
      return response.data;
    },
  });

  const handleApplyFilter = () => {
    handleApply();
    setFilterOptions({ brand, category, priceRange, sort });
    setIsOpenFilter(false);
  };
  const handleReset = () => {
    handleApply();
    setFilterOptions({ brand: "", category: "", priceRange, sort: "" });
    setBrand("");
    setCategory("");
    setPriceRange([0, 1000]);
    setSort("");
    setIsOpenFilter(false);
  };
  return (
    <div
      className={`${className} fixed top-0 right-0 bg-white h-screen w-[300px] shadow-lg`}
    >
      <div className="flex justify-between items-center mt-3 px-5">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button
          onClick={() => setIsOpenFilter(false)}
          className="text-red-500 font-bold"
        >
          Close
        </button>
      </div>

      <div className="px-5 py-4">
        {/* Sorting Options */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Sort
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
          >
            <option value="">None</option>
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        {/* Brand Selection */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Select Brand
          </label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
          >
            <option value="">All Brands</option>
            {allBrands?.map((brand) => (
              <option key={brand?._id} value={brand?.brandName}>
                {brand?.brandName}
              </option>
            ))}
          </select>
        </div>

        {/* Category Selection */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Select Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
          >
            <option value="">All Categories</option>
            {allCategories?.map((category) => (
              <option key={category?._id} value={category?.categoryName}>
                {category?.categoryName}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Slider */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <div className="mt-3">
            <Slider
              range
              min={0}
              max={1000}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
              trackStyle={[{ backgroundColor: "gray" }]}
              handleStyle={[
                { borderColor: "#4F46E5", backgroundColor: "#F5F5F5" },
              ]}
              railStyle={{ backgroundColor: "#E5E7EB" }}
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-5 gap-5">
          <button
            className="px-3 py-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="px-3 py-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700"
            onClick={handleApplyFilter}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

FilterSideBar.propTypes = {
  className: PropTypes.string,
  setIsOpenFilter: PropTypes.func.isRequired,
  handleApply: PropTypes.func.isRequired,
  setFilterOptions: PropTypes.func.isRequired,
};

export default FilterSideBar;
