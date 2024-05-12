
import React from "react";
import { useSearchParams } from "react-router-dom"
// import Select from "./Select"
import { useState } from "react"

function SortBy() {
   const [sort, setSort] = useState("Ascending");
   const [searchParams, setSearchParams] = useSearchParams();
   const sortBy = searchParams.get("sortBy") || ""
   const handleClick = function (e) {
     searchParams.set("sort", e.target.value);
     setSearchParams(searchParams);
     setSort(e.target.value);
   };

 return (
   <div className="  flex items-center bg-white px-4">
     <span className="text-stone-600">sort:</span>
     <select
       value={sort}
       onChange={handleClick}
       className=" py-1 px-1 md:px-3 border-none outline-none text-stone-900"
     >
       <option value="Ascending">last 6 month</option>
       <option value="Descending">Descending</option>
     </select>
   </div>
 );
}

export default SortBy
