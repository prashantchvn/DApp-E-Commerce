import React, { useState } from "react";
import Search from "../../assets/Icons/search.svg";

function SearchDialog() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <img className="absolute mt-2 pt-1 ml-4" src={Search} />
      <button onClick={ () => { setSearchTerm('')}} className="absolute right-20 mt-3 text-xs tracking-widest mr-4 hover:text-slate-500">CLEAR</button>
      <input
        className="w-full h-12 px-14 py-2 rounded-full focus:border-transparent focus:outline-0 tracking-wider bg-gray-100"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        type="text"
      />
      {/* search result to be added on the search  */}
    </div>
  );
}

export default SearchDialog;
