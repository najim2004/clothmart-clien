import PropTypes from "prop-types";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FilterSideBar = ({ className, setIsOpenFilter }) => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortPrice, setSortPrice] = useState("");
  const [sortDate, setSortDate] = useState("");

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
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            <option value="brand3">Brand 3</option>
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
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
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

        {/* Sorting Options */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Sort By Price
          </label>
          <select
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
          >
            <option value="">None</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Sort By Date
          </label>
          <select
            value={sortDate}
            onChange={(e) => setSortDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 py-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
          >
            <option value="">None</option>
            <option value="newest_first">Newest First</option>
            <option value="oldest_first">Oldest First</option>
          </select>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-5">
          <button
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={() => {
              // Logic to apply filters
            }}
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
};

export default FilterSideBar;
