import React, { useState } from 'react';
import { Utensils, Pizza, Coffee, Dessert, Cherry, Sandwich, CookingPot, Soup } from "lucide-react";

const categories = [
  { id: 1, name: 'Semua', icon: <Utensils size={20} /> },
  { id: 2, name: 'Pizza', icon: <Pizza size={20} /> },
  { id: 3, name: 'Minuman', icon: <Coffee size={20} /> },
  { id: 4, name: 'Snack', icon: <Dessert size={20} /> },
  { id: 5, name: 'Buah', icon: <Cherry size={20} /> },
  { id: 6, name: 'Roti', icon: <Sandwich size={20} /> },
  { id: 7, name: 'Korean', icon: <CookingPot size={20} /> },
  { id: 8, name: 'Martabak', icon: <Soup size={20} /> },
];

const FilterCategory = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="flex items-center gap-4 overflow-x-auto px-2 no-scrollbar justify-center">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all whitespace-nowrap ${
            active === cat.id
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
          }`}
        >
          {cat.icon}
          <span className="text-sm font-medium">{cat.name}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterCategory;