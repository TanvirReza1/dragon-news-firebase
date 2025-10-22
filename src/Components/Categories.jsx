import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categrories = use(categoryPromise);
  console.log(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories({categrories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categrories.map((category) => (
          <NavLink
            key={category.id}
            className="btn border-none bg-base-100 hover:bg-base-300 font-semibold text-accent"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
