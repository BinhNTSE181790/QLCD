import React, { useState } from 'react';

const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Tin tức thật từ các nguồn chính thống về PCTN
  const newsData = [
    {
      id: 1,
      title: 'Đồng chí Tổng Bí thư Tô Lâm: Tham nhũng, lãng phí không chỉ có tội mà còn có lỗi rất lớn với Đảng, Nhà nước và Nhân dân',
      description: 'Tổng Bí thư Tô Lâm nhấn mạnh vai trò của công tác phòng, chống tham nhũng trong việc giữ vững niềm tin của nhân dân đối với Đảng và Nhà nước, đồng thời kêu gọi sự kiên quyết, kiên trì trong đấu tranh chống tham nhũng.',
      date: '08/07/2025',
      source: 'Báo Nội Chính',
      url: 'https://noichinh.vn/cong-tac-phong-chong-tham-nhung/202507/dong-chi-tong-bi-thu-to-lam-tham-nhung-lang-phi-khong-chi-co-toi-ma-con-co-loi-rat-lon-voi-dang-nha-nuoc-va-nhan-dan-314824/',
      image: 'https://noichinh.vn/dataimages/202507/original/images736097_BNCTW4.jpg'
    },
    {
      id: 2,
      title: 'Xét xử phúc thẩm vụ án Vạn Thịnh Phát giai đoạn 2: Trương Mỹ Lan cam kết khắc phục hậu quả',
      description: 'Phiên tòa xét xử phúc thẩm giai đoạn 2 vụ án xảy ra tại Công ty Cổ phần Tập đoàn Vạn Thịnh Phát (Tập đoàn Vạn Thịnh Phát) và Ngân hàng Thương mại Cổ phần Sài Gòn (Ngân hàng SCB) kết thúc phần tranh tụng và cho phép các bị cáo được nói lời sau cùng trước khi bước vào phần nghị án của Hội đồng Xét xử.',
      date: '14/04/2025',
      source: 'Quân Dội Nhân Dân',
      url: 'https://www.qdnd.vn/phap-luat/tin-tuc/xet-xu-phuc-tham-vu-an-van-thinh-phat-giai-doan-2-truong-my-lan-cam-ket-khac-phuc-hau-qua-823880',
      image: 'https://file3.qdnd.vn/data/images/0/2025/04/14/upload_2201/truong%20my%20lan.jpg?dpi=150&quality=100&w=870'
    },
    {
      id: 3,
      title: '68 cán bộ diện Trung ương quản lý bị kỷ luật năm 2024',
      description: 'Ủy ban Kiểm tra Trung ương đã thi hành kỷ luật 68 cán bộ diện Trung ương quản lý trong 9 tháng đầu năm 2024, trong đó có nhiều cán bộ cấp cao vi phạm nghiêm trọng các quy định của Đảng và pháp luật Nhà nước.',
      date: '31/12/2024',
      source: 'VNExpress',
      url: 'https://vnexpress.net/68-can-bo-dien-trung-uong-quan-ly-bi-ky-luat-nam-2024-4834144.html',
      image: 'https://i1-vnexpress.vnecdn.net/2024/12/31/462576349-963502709029867-2656-6639-2590-1735642698.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=N6YTzxH10E6AjaxCOTAZ7g'
    },
    {
      id: 4,
      title: 'Chiến lược quốc gia phòng, chống tham nhũng, tiêu cực',
      description: 'Chính phủ vừa ban hành Chiến lược quốc gia phòng, chống tham nhũng, tiêu cực đến năm 2030, nhằm nâng cao hiệu quả công tác phòng, chống tham nhũng, góp phần xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân và vì nhân dân.',
      date: '11/10/2023',
      source: 'Báo chính phủ',
      url: 'https://baochinhphu.vn/chien-luoc-quoc-gia-phong-chong-tham-nhung-tieu-cuc-102231011185034868.htm',
      image: 'https://noichinh.vn/dataimages/202310/original/images731184_CP.jpg'
    },
    {
      id: 5,
      title: 'TP HCM thuộc nhóm dễ nảy sinh vi phạm tham nhũng, lãng phí',
      description: 'Theo Ban Chỉ đạo Trung ương về phòng, chống tham nhũng, lãng phí, TP HCM là một trong những địa phương thuộc nhóm dễ nảy sinh vi phạm về tham nhũng, lãng phí do có quy mô kinh tế lớn, tốc độ phát triển nhanh, nguồn lực xã hội dồi dào.',
      date: '11/11/2025',
      source: 'VNExpress',
      url: 'https://vnexpress.net/tp-hcm-thuoc-nhom-de-nay-sinh-vi-pham-tham-nhung-lang-phi-4962595.html',
      image: 'https://i1-vnexpress.vnecdn.net/2025/11/11/z7211976057544-6640586aa2cc6b7-8930-4723-1762839876.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=Ols31WTyeIVUpfD0edJgLg'
    },
    {
      id: 6,
      title: 'Vĩnh Long tổng kết công tác phòng, chống tham nhũng, lãng phí, tiêu cực nhiệm kỳ 2020-2025',
      description: 'Tỉnh Vĩnh Long đã tổ chức hội nghị tổng kết công tác phòng, chống tham nhũng, lãng phí, tiêu cực nhiệm kỳ 2020-2025, đánh giá những kết quả đạt được và đề ra phương hướng, nhiệm vụ trong thời gian tới nhằm nâng cao hiệu quả công tác này.',
      date: '21/11/2025',
      source: 'Nhân Dân',
      url: 'https://nhandan.vn/vinh-long-tong-ket-cong-tac-phong-chong-tham-nhung-lang-phi-tieu-cuc-nhiem-ky-2020-2025-post924907.html',
      image: 'https://cdn.nhandan.vn/images/196f2304fa578ceb8ea400470da251e9e795d906e43c8e3197759e42f286ebff9dfac584fef343b60acb5063921159374b466a460d9b288af8825e21df981385193b2c6cc05dfb44768b27af2d31917e914273ce64d3ea055d5d8217ffe739af/ndo_tr_anh-1-bi-thu-tinh-uy-trao-bang-khen-cho-nhung-tap-the.jpg'
    },
    {
      id: 7,
      title: 'Không vụ lợi, dám nghĩ dám làm được miễn hình phạt',
      description: 'Tòa án Nhân dân tối cao đã ra quyết định miễn hình phạt cho ông Lê Văn Thọ, nguyên Phó Chủ tịch UBND huyện Yên Thành, tỉnh Nghệ An, do có thành tích xuất sắc trong công tác phòng, chống tham nhũng, tiêu cực và không vụ lợi cá nhân trong quá trình công tác.',
      date: '29/10/2025',
      source: 'Nhân Dân',
      url: 'https://nhandan.vn/khong-vu-loi-dam-nghi-dam-lam-duoc-mien-hinh-phat-post918911.html',
      image: 'https://cdn.nhandan.vn/images/abcff8781330e82e1baaf4ec71848320842b71d806fb611624e943d38fb0c32af6c93b842a422ed62e839bf1ba4f25b5e9e77870eef535a282a4ce4ce47c4154/hinh-toa-toi-cao.jpg'
    },
    {
      id: 8,
      title: 'Hội nghị nâng cao kiến thức nội chính năm 2025 tại Khánh Hòa',
      description: 'Hội nghị nâng cao kiến thức nội chính năm 2025 được tổ chức tại Khánh Hòa nhằm trang bị kiến thức, kỹ năng cho cán bộ, công chức, viên chức trong công tác phòng, chống tham nhũng, tiêu cực và nâng cao hiệu quả công tác nội chính trên địa bàn tỉnh.',
      date: '24/10/2025',
      source: 'Nhân Dân',
      url: 'https://nhandan.vn/hoi-nghi-nang-cao-kien-thuc-noi-chinh-nam-2025-tai-khanh-hoa-post917789.html',
      image: 'https://cdn.nhandan.vn/images/78482db9571856fb0874e380116be121eaabfd9599d096006dae0b5e6bd3314c9e5a77b3dcb217df346e845b5f85f39889c5091886753bcd212713215d86d225a37616cb2f1926b0e69c99b33f569f3e/z7149948595705-a8f3c327754da5f50ecd52cc5aa0baaa.jpg'
    },
    {
      id: 9,
      title: 'Khởi tố, bắt tạm giam cựu Phó Bí thư Tỉnh ủy Đồng Nai',
      description: 'Bà Phan Thị Mỹ Thanh, cựu Phó Bí thư Tỉnh ủy Đồng Nai và nhiều quan chức của tỉnh bị khởi tố với cáo buộc có sai phạm trong vụ án xảy ra tại Công ty cổ phần FreeLand.',
      date: '06/10/2025',
      source: 'Nhân Dân',
      url: 'https://nhandan.vn/khoi-to-bat-tam-giam-cuu-pho-bi-thu-tinh-uy-dong-nai-post913312.html',
      image: 'https://cdn.nhandan.vn/images/d1a3225b967b0eb13148029382e935ef2bbfd23d2e3b6c39c1caa99882020cdcfc833e705c516d75bd5159153cd7c45d8afb22259d0fc29d429eccaeb34511caf58fb4ae34f12184b60b5e52fc10ac0d20f69f8923e9115652a4df87ed9cf349/gen-n-z7087784514485-afbf030787308ae8112efa977a437309-3664.jpg'
    }
  ];


  // Filter news based on active filter and search query
  const filteredNews = newsData.filter(news => {
    const matchesFilter = activeFilter === 'all';
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#DA291C] via-red-600 to-[#DA291C] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#FFCD00] backdrop-blur-sm px-6 py-2 rounded-full font-semibold text-sm mb-6 border border-yellow-400 text-[#DA291C]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <span>TIN TỨC & SỰ KIỆN</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tin Tức Phòng, Chống Tham Nhũng
            </h1>
            
            <p className="text-xl md:text-2xl text-yellow-100 leading-relaxed max-w-3xl mx-auto">
              Cập nhật những thông tin, sự kiện và phân tích chuyên sâu về công tác phòng, chống tham nhũng tại Việt Nam
            </p>
          </div>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48h1440V0c-360 48-720 48-1080 0L0 48z" fill="currentColor" className="text-yellow-50"/>
          </svg>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-10 border-b-2 border-yellow-200">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Tìm kiếm bài viết..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA291C] focus:outline-none focus:ring-4 focus:ring-yellow-100 transition-all"
              />
              <svg className="w-5 h-5 absolute left-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-12">
        {paginatedNews.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Không tìm thấy bài viết nào</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedNews.map((news) => (
                <div
                  key={news.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#DA291C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{news.date}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="font-medium">{news.source}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#DA291C] transition-colors line-clamp-2 leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
                      {news.description}
                    </p>

                    <a 
                      href={news.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#DA291C] font-bold hover:text-red-700 group/btn transition-all"
                    >
                      <span className="relative">
                        Đọc thêm
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DA291C] group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                      <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold hover:bg-yellow-50 hover:border-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                >
                  ← Trước
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-5 py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${
                      currentPage === index + 1
                        ? 'bg-[#DA291C] text-[#FFCD00] shadow-lg shadow-red-300'
                        : 'bg-white border-2 border-gray-200 hover:bg-yellow-50 hover:border-yellow-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold hover:bg-yellow-50 hover:border-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                >
                  Sau →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
