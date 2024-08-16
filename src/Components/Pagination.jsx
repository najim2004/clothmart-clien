import PropTypes from "prop-types";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  const maxPageNumbersToShow = 5; // Number of page numbers to show in the middle
  const totalPageNumbers = Math.min(totalPages, maxPageNumbersToShow);

  // Calculate the range of page numbers to display
  let startPage = Math.max(
    1,
    currentPage - Math.floor(maxPageNumbersToShow / 2)
  );
  let endPage = Math.min(totalPages, startPage + totalPageNumbers - 1);

  // Adjust startPage if endPage is too high
  if (endPage - startPage + 1 < totalPageNumbers) {
    startPage = Math.max(1, endPage - totalPageNumbers + 1);
  }

  // Populate the array of page numbers to display
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-6">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
        </li>
        {startPage > 1 && (
          <>
            <li>
              <button
                onClick={() => onPageChange(1)}
                className="px-3 py-2 leading-tight border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                1
              </button>
            </li>
            {startPage > 2 && (
              <li>
                <span className="px-3 py-2 leading-tight border text-gray-500 bg-white border-gray-300">
                  ...
                </span>
              </li>
            )}
          </>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-2 leading-tight border ${
                currentPage === number
                  ? "text-white bg-gray-400 border-gray-400"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <li>
                <span className="px-3 py-2 leading-tight border text-gray-500 bg-white border-gray-300">
                  ...
                </span>
              </li>
            )}
            <li>
              <button
                onClick={() => onPageChange(totalPages)}
                className="px-3 py-2 leading-tight border text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                {totalPages}
              </button>
            </li>
          </>
        )}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
