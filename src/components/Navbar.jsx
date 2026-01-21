import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset click count after 3 seconds of inactivity
  useEffect(() => {
    if (logoClickCount > 0 && logoClickCount < 5) {
      const timer = setTimeout(() => setLogoClickCount(0), 3000);
      return () => clearTimeout(timer);
    }
  }, [logoClickCount]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);
    if (newCount >= 5) {
      setLogoClickCount(0);
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  const navItems = [
    { path: '/', label: 'Tổng quan' },
    // { path: '/news', label: 'Tin tức' },
    // { path: '/luat', label: 'Pháp luật' },
    // { path: '/quiz', label: 'Kiểm tra' },
    // { path: '/hoi-dap', label: 'Hỏi đáp' },
    { path: '/xay-dung-dang', label: 'Xây dựng Đảng' },
    { path: '/tham-nhung', label: 'Tham nhũng' },
    { path: '/yeu-cau', label: 'Yêu cầu' },
    { path: '/liem-chinh', label: 'Liêm chính' },
  ];

  const navBgClass = isScrolled
    ? 'bg-white/95 shadow-lg'
    : 'bg-white/80';

  const getNavItemClass = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? 'bg-red-500 text-white shadow-md'
      : 'text-gray-700 hover:text-red-600 hover:bg-red-50';
  };

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${navBgClass} backdrop-blur-md rounded-2xl border border-white/30`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <button
            onClick={handleLogoClick}
            className="text-2xl font-bold text-red-600 transition-colors duration-200 cursor-pointer hover:text-red-700"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Quyền lực và cám dỗ
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 cursor-pointer ${getNavItemClass(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="/quiz"
            className="px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 cursor-pointer bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg"
          >
            Tham gia Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
