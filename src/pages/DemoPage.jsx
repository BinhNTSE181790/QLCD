import React, { useState, useEffect } from 'react';

const DemoPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuCategories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'appetizer', label: 'Khai vị' },
    { id: 'main', label: 'Món chính' },
    { id: 'dessert', label: 'Tráng miệng' },
    { id: 'drink', label: 'Đồ uống' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Gỏi cuốn tôm thịt',
      description: 'Bánh tráng cuốn tôm, thịt, bún, rau sống, chấm mắm nêm',
      price: '65.000đ',
      image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400&h=300&fit=crop',
      category: 'appetizer',
      badge: 'Phổ biến',
    },
    {
      id: 2,
      name: 'Phở bò tái nạm',
      description: 'Nước dùng ninh xương 12h, bánh phở tươi, thịt bò Úc',
      price: '85.000đ',
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
      category: 'main',
      badge: 'Best Seller',
    },
    {
      id: 3,
      name: 'Bún chả Hà Nội',
      description: 'Chả nướng than hoa, bún, rau sống, nước mắm chua ngọt',
      price: '75.000đ',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
      category: 'main',
    },
    {
      id: 4,
      name: 'Chè ba màu',
      description: 'Đậu xanh, đậu đỏ, thạch, nước cốt dừa, đá bào',
      price: '35.000đ',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
      category: 'dessert',
    },
    {
      id: 5,
      name: 'Cà phê sữa đá',
      description: 'Cà phê phin truyền thống, sữa đặc, đá viên',
      price: '29.000đ',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
      category: 'drink',
      badge: 'Signature',
    },
    {
      id: 6,
      name: 'Bánh mì thịt nướng',
      description: 'Bánh mì giòn, thịt nướng, đồ chua, rau mùi, tương ớt',
      price: '45.000đ',
      image: 'https://images.unsplash.com/photo-1600454021728-9e22d1e69b7c?w=400&h=300&fit=crop',
      category: 'main',
    },
    {
      id: 7,
      name: 'Chả giò',
      description: 'Chả giò chiên giòn, nhân thịt heo, tôm, nấm, miến',
      price: '55.000đ',
      image: 'https://images.unsplash.com/photo-1544025162-d76978e8e6a5?w=400&h=300&fit=crop',
      category: 'appetizer',
    },
    {
      id: 8,
      name: 'Trà đào cam sả',
      description: 'Trà oolong, đào tươi, cam vắt, sả tươi, đá viên',
      price: '39.000đ',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
      category: 'drink',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Giao hàng nhanh',
      description: 'Giao trong 30 phút hoặc miễn phí',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Nguyên liệu sạch',
      description: '100% nguyên liệu tươi ngon, có nguồn gốc',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Nấu với tình yêu',
      description: 'Mỗi món đều được chế biến tận tâm',
    },
  ];

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      comment: 'Phở ở đây ngon nhất Sài Gòn! Nước dùng đậm đà, thịt bò tươi ngon.',
    },
    {
      name: 'Trần Thị B',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      comment: 'Giao hàng siêu nhanh, đóng gói cẩn thận. Sẽ ủng hộ thường xuyên!',
    },
    {
      name: 'Lê Văn C',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      comment: 'Bún chả thơm ngon, chả nướng vừa vặn. Rất đáng thử!',
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Floating Glassmorphism Navbar */}
      <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 shadow-lg' 
          : 'bg-white/20'
      } backdrop-blur-md rounded-2xl border border-white/30`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <a 
              href="#" 
              className={`text-2xl font-bold transition-colors duration-200 cursor-pointer ${
                isScrolled ? 'text-orange-600' : 'text-white'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Hương Việt
            </a>
            
            <div className="hidden md:flex items-center gap-1">
              {[
                { href: '#', label: 'Trang chủ' },
                { href: '#menu', label: 'Thực đơn' },
                { href: '#about', label: 'Giới thiệu' },
                { href: '#contact', label: 'Liên hệ' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg'
                  : 'bg-white text-orange-600 hover:bg-orange-50'
              }`}
            >
              Đặt bàn
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-orange-500 rounded-full text-sm font-medium mb-6">
              Nhà hàng Việt Nam
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hương vị
              <br />
              <span className="text-orange-400">quê hương</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Trải nghiệm ẩm thực Việt Nam đích thực với những món ăn được chế biến từ nguyên liệu tươi ngon nhất, mang đến hương vị đặc trưng của ba miền.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="group inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-200 cursor-pointer"
              >
                Xem thực đơn
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-200 cursor-pointer"
              >
                Đặt bàn ngay
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors duration-200 cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-medium">Thực đơn</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Món ăn đặc sắc
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Khám phá những món ăn Việt Nam truyền thống được chế biến theo công thức gia truyền
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-500">{item.price}</span>
                    <button className="p-2 bg-orange-100 hover:bg-orange-500 text-orange-500 hover:text-white rounded-full transition-colors duration-200 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop"
                alt="Restaurant interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Năm kinh nghiệm</div>
              </div>
            </div>
            <div>
              <span className="text-orange-500 font-medium">Về chúng tôi</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Câu chuyện của chúng tôi
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Từ năm 2009, chúng tôi đã mang đến những món ăn Việt Nam đích thực với công thức gia truyền được truyền lại qua nhiều thế hệ. Mỗi món ăn là một câu chuyện, một hành trình về nguồn.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi tự hào sử dụng 100% nguyên liệu tươi sạch, được tuyển chọn kỹ lưỡng từ các vùng miền trên cả nước, để mang đến hương vị ngon nhất cho thực khách.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-gray-600">Món ăn</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">10K+</div>
                  <div className="text-gray-600">Khách hàng</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">4.9</div>
                  <div className="text-gray-600">Đánh giá</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-orange-200 font-medium">Đánh giá</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Khách hàng nói gì
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-orange-500 font-medium">Liên hệ</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Đặt bàn ngay
              </h2>
              <p className="text-gray-600 mb-8">
                Liên hệ với chúng tôi để đặt bàn hoặc đặt tiệc. Chúng tôi sẵn sàng phục vụ bạn!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Địa chỉ</h4>
                    <p className="text-gray-600">123 Nguyễn Huệ, Quận 1, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Điện thoại</h4>
                    <p className="text-gray-600">0901 234 567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Giờ mở cửa</h4>
                    <p className="text-gray-600">7:00 - 22:00 (Hàng ngày)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Họ tên</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="0901 234 567"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Ngày</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Số khách</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all cursor-pointer">
                      <option>2 người</option>
                      <option>3-4 người</option>
                      <option>5-8 người</option>
                      <option>Trên 8 người</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Ghi chú</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                    rows={4}
                    placeholder="Yêu cầu đặc biệt..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-200 cursor-pointer"
                >
                  Đặt bàn ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hương Việt
              </h3>
              <p className="text-gray-400">
                Mang hương vị Việt Nam đến từng bữa ăn của bạn.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors cursor-pointer">Trang chủ</a></li>
                <li><a href="#menu" className="hover:text-orange-400 transition-colors cursor-pointer">Thực đơn</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors cursor-pointer">Đặt bàn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Giờ mở cửa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Thứ 2 - Thứ 6: 7:00 - 22:00</li>
                <li>Thứ 7 - Chủ nhật: 8:00 - 23:00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Theo dõi</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hương Việt. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoPage;
