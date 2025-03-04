import React, { useState } from "react";

const Categories = () => {
  const [activeId, setActiveId] = useState(1); 

  const categoriesName = [
    { id: 1, title: "Top map" },
    { id: 2, title: "Halal Tourism" },
    { id: 3, title: "Top news" },
    { id: 4, title: "Social media" },
    { id: 5, title: "City & Finance" },
    { id: 6, title: "Destination goal" },
    { id: 7, title: "Weekly goals" },
    { id: 8, title: "Association" },
    { id: 9, title: "প্রকৃতি" },
    { id: 10, title: "ছবি" },
    { id: 11, title: "মতামত" },
    { id: 12, title: "জীবনযাপন" }
  ]; 

  return (
    <div className="my-10 lg:mx-0 mx-4">
      <h2 className="font-bold text-2xl mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categoriesName.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveId(category.id)}
            className={`p-3 rounded-lg text-center font-bold border transition-all ${
              activeId === category.id
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
