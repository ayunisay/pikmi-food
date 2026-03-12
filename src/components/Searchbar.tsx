import React from 'react';
import { Search, MapPin } from "lucide-react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center gap-4 w-full max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap">
        <MapPin className="w-4 h-4 text-blue-500" />
        <span className="text-sm font-medium">Jakarta, Indonesia</span>
      </div>

      {/* Input Search */}
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full p-3 pl-12 text-sm text-gray-900 border border-gray-200 rounded-full bg-white focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
          placeholder="Cari makanan favoritmu..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
