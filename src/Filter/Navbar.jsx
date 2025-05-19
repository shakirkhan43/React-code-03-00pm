// components/FilterNavbar.js
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function FilterNavbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          <a href="/">ShopZone</a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden text-3xl text-blue-600 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-800 font-medium text-lg">
          {["Home", "All Products"].map((item, i) => (
            <a
              key={i}
              href={item === "Home" ? "/" : "/products"}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          {/* Cart */}
          <div className="relative">
            <FaShoppingCart className="text-2xl text-blue-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white animate-slide-down space-y-3">
          <a href="/" className="block text-lg font-semibold text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="/products" className="block text-lg font-semibold text-gray-700 hover:text-blue-600">
            All Products
          </a>
          <div className="flex items-center gap-2 text-gray-700 pt-2">
            <FaShoppingCart className="text-xl text-blue-600" />
            <span className="text-base font-medium">Cart: {cartCount}</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default FilterNavbar;
