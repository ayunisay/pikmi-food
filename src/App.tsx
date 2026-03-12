import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './HomePage'; 
import FoodPage from './FoodPage';
import PesananPage from './PesananPage';
import CartPage from './CartPage';
import ProfilePage from './ProfilePage'; 

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="overflow-x-hidden">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/order" element={<PesananPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App;
