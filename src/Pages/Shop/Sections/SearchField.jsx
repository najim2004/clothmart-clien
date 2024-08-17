import { useState } from "react";
import PropTypes from "prop-types";

const SearchField = ({ className, setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Clear the previous timeout if the user types again within 2 seconds
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout to call the onSearch function after 2 seconds of inactivity
    const timeout = setTimeout(() => {
      setSearchQuery(term);
      setIsLoading(false); // Hide loader after the search query is set
    }, 2000);

    setDebounceTimeout(timeout);
    setIsLoading(true); // Show loader when user starts typing
  };

  return (
    <div className={` ${className} w-full flex justify-center`}>
      <div className="lg:w-[500px] relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="bg-gray-50 py-1 w-full px-2 lg:p-2 border border-gray-300 rounded pr-10"
        />
        {isLoading && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <span className="loading loading-dots loading-sm text-gray-500"></span>
          </div>
        )}
      </div>
    </div>
  );
};

SearchField.propTypes = {
  className: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchField;
