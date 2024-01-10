import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-gray-200 p-1 rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              disabled={isActive}
              className={`btn whitespace-nowrap rounded-md px-4 py-2 font-bold duration-300 ${
                isActive && "!bg-purple-900 text-slate-100"
              }`}
              key={value}
              onClick={() => handleClick(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
