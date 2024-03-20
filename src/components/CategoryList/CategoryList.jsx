import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl text-center font-semibold my-6">
        Job Category List
      </h2>
      <p className="text-base text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-4 grid-cols-4 my-10">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
