import React, { useState, useEffect } from "react";
import Search from "../../assets/Icons/search.svg";
import { debounce } from "lodash";
import { searchResult } from "../../scripts/products";

function SearchDialog() {
  const [query, setQuery] = useState("");
  const [searchRslt, setSearchResult] = useState([])
  const debouncedInputChange = debounce(handleInputChange, 2000);

  async function handleInputChange() {
    // Do something with the input value
    const data = {
      query: query
    }
    await searchResult(data).then((res) => {
      setSearchResult(res.data)
    })
  }

  useEffect(() => {
    return () => {
      debouncedInputChange.cancel();
    };
  }, []);

  return (
    <div>
      <img className="absolute mt-2 pt-1 ml-4" src={Search} />
      <button
        onClick={() => {
          setQuery("");
        }}
        className="absolute right-20 mt-3 text-xs tracking-widest mr-4 hover:text-slate-500"
      >
        CLEAR
      </button>
      <input
        className="w-full h-12 px-14 py-2 rounded-full focus:border-transparent focus:outline-0 tracking-wider bg-gray-100"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          debouncedInputChange()
        }}
        type="text"
      />
      {/* search result to be added on the search  */}
    </div>
  );
}

export default SearchDialog;
