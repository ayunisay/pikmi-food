import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { BsCart2, BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  // Fungsi helper untuk styling link
  const linkStyle = ({ isActive }) => 
    isActive 
      ? "text-2xl font-bold text-blue-500 border-b-2 border-blue-500 pb-1" // Style kalau aktif
      : "text-2xl font-bold text-gray-700 hover:text-blue-500 transition-all"; // Style kalau biasa

  return (
    <nav className="navbar shadow-sm bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-1">
            <NavLink to="/" className="flex items-center py-4">
              <img src="/src/assets/img/logo.png" alt="Logo" className="h-12 w-auto"/>
            </NavLink>
          </div>

          {/* Menu Section */}
          <div className="flex-1 flex justify-center gap-12">
            <NavLink to="/" className={linkStyle}>
                Home
            </NavLink>
            <NavLink to="/food" className={linkStyle}>
                Food
            </NavLink>
            <NavLink to="/pesanan" className={linkStyle}>
                Pesanan
            </NavLink>
          </div>

          {/* Icon Section */}
          <div className="flex-1 flex justify-end gap-8">
            <NavLink to="/cart">
            <BsCart2 className="text-3xl text-gray-700 hover:text-blue-500"/>
            </NavLink>
            <NavLink to="/profile">
              <BsPersonCircle className="text-3xl text-gray-700 hover:text-blue-500"/>
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;