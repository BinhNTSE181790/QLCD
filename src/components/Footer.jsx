import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Xây dựng Đảng 
              <br className="hidden md:block" />
              và phòng chống tham nhũng
            </h3>
            <p className="text-gray-400 text-sm">
              Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân và vì dân
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-400 transition-colors cursor-pointer">Tổng quan</a></li>
              {/* <li><a href="/news" className="hover:text-yellow-400 transition-colors cursor-pointer">Tin tức</a></li>
              <li><a href="/luat" className="hover:text-yellow-400 transition-colors cursor-pointer">Pháp luật</a></li>
              <li><a href="/hoi-dap" className="hover:text-yellow-400 transition-colors cursor-pointer">Hỏi đáp</a></li> */}
              <li><a href="/xay-dung-dang" className="hover:text-yellow-400 transition-colors cursor-pointer">Xây dựng Đảng</a></li>
              <li><a href="/yeu-cau" className="hover:text-yellow-400 transition-colors cursor-pointer">Yêu cầu</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Nguồn tham khảo</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Ban Nội chính Trung ương</li>
              <li>Ủy ban Kiểm tra Trung ương</li>
              <li>Thanh tra Chính phủ</li>
              <li>NXB Chính trị Quốc gia</li>
              <li>Giáo trình Tư tưởng Hồ Chí Minh - XB 2019</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Đường dây nóng</h4>
            <p className="text-gray-400 text-sm mb-2">Phản ánh tham nhũng, tiêu cực:</p>
            <p className="text-yellow-400 font-bold text-lg">0901116789</p>
            <p className="text-gray-500 text-xs mt-2">(Miễn phí, 24/7)</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2026 - Website được tạo bởi nhóm "Quyền lực và Cám dỗ".</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
