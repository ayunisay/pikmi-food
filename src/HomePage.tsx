import React from 'react';
import FoodCard from './components/FoodCard';
import Carousel from './components/Carousel';
import SearchBar from './components/Searchbar';
import FilterCategory from './components/FilterCategory';
import { menu, MenuItem } from './data/menu';

const HomePage: React.FC = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-2">
      <div className="max-w-7xl mx-auto space-y-8">
        <Carousel/>
        <SearchBar />
        <FilterCategory />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menu.map((item: MenuItem) => (
            <FoodCard 
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
