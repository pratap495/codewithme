import React, { useState } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Courses', href: '#', current: false },
  {
    name: 'Pages',
    current: false,
    dropdown: [
      { name: 'Page 1', href: '#' },
      { name: 'Page 2', href: '#' },
    ],
  },
  { name: 'Contact', href: '#', current: false },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-8 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        {/* Note: The logo path "/src/assets/logo.png" might not work as expected.
            It's often better to import the image file and use it as a variable in the src attribute. */}
        <img src="/src/assets/logo.png" alt="codewithme Logo" className="h-10 w-10 mr-2" />
        <span className="text-2xl font-bold">
          Code<span className="text-blue-500">WithMe</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) =>
          item.dropdown ? (
            <div key={item.name} className="relative group">
              <button className={`${item.current ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'} font-medium flex items-center transition-colors`}>
                {item.name} <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg hidden group-hover:block z-10">
                {item.dropdown.map((subItem) => (
                  <a key={subItem.name} href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{subItem.name}</a>
                ))}
              </div>
            </div>
          ) : (
            <a key={item.name} href={item.href} className={`${item.current ? "text-blue-500" : "text-gray-700 hover:text-blue-500"} font-medium transition-colors`}>
              {item.name}
            </a>
          )
        )}
      </nav>

      {/* Cart & Login */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-blue-200 text-black rounded-full px-2 text-xs">0</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hidden md:block">Login</button>
        {/* Mobile menu button */}
        <button className="md:hidden bg-gray-200 p-3 rounded-full" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-16 right-6 bg-white rounded shadow-lg w-48 flex flex-col space-y-4 p-4 md:hidden z-50">
          {navItems.map((item) => (
            <a key={item.name} href={item.href || '#'} className={`${item.current ? "text-blue-500" : "text-gray-700 hover:text-blue-500"} font-medium transition-colors`}>
              {item.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">Login</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
