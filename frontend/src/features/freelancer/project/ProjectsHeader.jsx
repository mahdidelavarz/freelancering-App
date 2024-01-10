import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";

const sortOptions = [
  {
    label: "جدید ترین",
    value: "latest",
  },
  {
    label: "قدیمی ترین",
    value: "earliest",
  },
];
const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  console.log(transformedCategories);
  return (
    <div className="flex items-center justify-between text-slate-700 mb-8">
      <h1 className="font-bold text-lg">لیست پروژه ها</h1>
      <Filter filterField="status" options={statusOptions} />
      <FilterDropDown
        filterField={"category"}
        options={[
          {
            value: "ALL",
            label: "دسته بندی (همه)",
          },
          ...transformedCategories,
        ]}
      />
      <FilterDropDown filterField="sort" options={sortOptions} />
    </div>
  );
}

export default ProjectsHeader;
