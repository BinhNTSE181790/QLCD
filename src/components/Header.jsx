import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Tổng quan' },
    { path: '/news', label: 'Tin tức' },
    { path: '/luat', label: 'Pháp luật' },
    { path: '/hoi-dap', label: 'Hỏi đáp' },
    { path: '/liem-chinh', label: 'Liêm chính' },

  ];

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 shadow-lg' 
        : 'bg-white/80'
    } backdrop-blur-md rounded-2xl border border-white/30`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/" 
            className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            PCTN
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                  location.pathname === item.path
                    ? 'bg-red-500 text-white shadow-md'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="/quiz"
            className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Tham gia Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
