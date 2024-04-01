const Search = () => {
  return (
    <div className="relative w-[250px] 2xl:w-[450px]">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        type="text"
        id="Search"
        placeholder="O que procuras?"
        className="w-full py-4 border-none rounded-lg shadow-sm focus:outline-none focus:ring-0 bg-orange-50 pe-10 sm:text-sm"
      />

      <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};
export default Search;
