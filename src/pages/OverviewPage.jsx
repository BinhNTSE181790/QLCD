import React, { useState } from 'react';

const OverviewPage = () => {
  const [activeTimeline, setActiveTimeline] = useState(null);

  const statistics = [
    {
      number: '4.000+',
      label: 'Vụ án tham nhũng',
      description: 'được khởi tố từ 2012-2022',
      source: 'Uỷ ban Kiểm tra TW',
      sourceUrl: 'https://ubkttw.vn/danh-muc/tin-tuc-thoi-su/hoi-nghi-toan-quoc-tong-ket-10-nam-cong-tac-phong-chong-tham-nhung-tieu-cuc-giai-doan-2012-2022.html',
    },
    {
      number: '170',
      label: 'Cán bộ diện TW quản lý',
      description: 'bị kỷ luật (2012-2022)',
      source: 'Ủy ban Kiểm tra TW',
      sourceUrl: 'https://ubkttw.vn/danh-muc/tin-tuc-thoi-su/hoi-nghi-toan-quoc-tong-ket-10-nam-cong-tac-phong-chong-tham-nhung-tieu-cuc-giai-doan-2012-2022.html',
    },
    {
      number: '44.000+',
      label: 'Tập thể, cá nhân sai phạm',
      description: '2012-2022',
      source: 'Uỷ ban Kiểm tra TW',
      sourceUrl: 'https://ubkttw.vn/danh-muc/tin-tuc-thoi-su/hoi-nghi-toan-quoc-tong-ket-10-nam-cong-tac-phong-chong-tham-nhung-tieu-cuc-giai-doan-2012-2022.html',
    },
    {
      number: '975.000+',
      label: 'Tỷ đồng thu hồi',
      description: 'tài sản tham nhũng (2012-2022)',
      source: 'Uỷ ban Kiểm tra TW',
      sourceUrl: 'https://ubkttw.vn/danh-muc/tin-tuc-thoi-su/hoi-nghi-toan-quoc-tong-ket-10-nam-cong-tac-phong-chong-tham-nhung-tieu-cuc-giai-doan-2012-2022.html',
    },
  ];

  const timelineEvents = [
    {
      year: '2005',
      title: 'Luật Phòng, chống tham nhũng đầu tiên',
      description: 'Quốc hội thông qua Luật Phòng, chống tham nhũng số 55/2005/QH11, đánh dấu bước ngoặt quan trọng trong công tác lập pháp.',
      type: 'law',
      stats: {
        before: 'Thiếu quy định phòng ngừa tham nhũng, chưa có cơ chế bảo đảm thực hiện chế độ–tiêu chuẩn, thiếu quy định về hành vi cấm, kê khai tài sản và phối hợp giữa các cơ quan.',
        after: 'Luật gồm 8 chương, 92 điều, tăng cường tính pháp lý và bổ sung toàn diện các quy định về phòng, chống tham nhũng so với Pháp lệnh năm 1998.',
      },
      source: 'Sở Nội vụ tỉnh Bình Phước',
      sourceUrl: 'https://binhphuoc.gov.vn/vi/snv/ton-giao/tim-hieu-qua-trinh-hoan-thien-phap-luat-ve-phong-chong-tham-nhung-o-nuoc-ta-341.html',
    },
    {
      year: '2012',
      title: 'Thành lập Ban Chỉ đạo TW về PCTN',
      description: 'Hội nghị TW 5 khóa XI quyết định thành lập Ban Chỉ đạo Trung ương về phòng, chống tham nhũng, do Tổng Bí thư làm Trưởng ban.',
      type: 'organization',
      quote: {
        content: "Phải nhốt quyền lực vào trong lồng cơ chế, pháp luật.",
        author: 'Tổng Bí thư Nguyễn Phú Trọng',
      },
      stats: {
        before: 'Phân tán, thiếu đầu mối chỉ đạo thống nhất',
        after: 'Chỉ đạo tập trung, quyết liệt từ cấp cao nhất',
      },
      source: 'Nghị quyết TW 5 khóa XI',
      sourceUrl: 'https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-xi/ket-luan-so-21-kltw-ngay-2552012-hoi-nghi-lan-thu-5-ban-chap-hanh-trung-uong-dang-khoa-xi-ve-viec-tiep-tuc-thuc-hien-554',
    },
    {
      year: '2016',
      title: 'Đại hội XII - Đẩy mạnh chống tham nhũng',
      description: 'Đại hội XII xác định phòng, chống tham nhũng là nhiệm vụ đặc biệt quan trọng trong công tác xây dựng Đảng.',
      type: 'congress',
      quote: {
        content: "Chống tham nhũng không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.",
        author: 'Tổng Bí thư Nguyễn Phú Trọng',
      },
      stats: {
        // cases: '1.300+ vụ án',
        officials: '110+ cán bộ diện TW quản lý bị xử lý',
        recovery: 'Tỷ lệ thu hồi tài sản đạt 26%',
      },
      source: 'Báo cáo tổng kết nhiệm kỳ XII',
      sourceUrl: 'https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/bao-cao-cua-ban-chap-hanh-trung-uong-dang-khoa-xii-ve-tong-ket-cong-tac-xay-dung-dang-va-thi-hanh-dieu-le-dang-3673',
    },
    {
      year: '2018',
      title: 'Luật PCTN sửa đổi',
      description: 'Quốc hội thông qua Luật Phòng, chống tham nhũng số 36/2018/QH14 với nhiều điểm mới đột phá.',
      type: 'law',
      highlights: [
        'Mở rộng phạm vi điều chỉnh sang khu vực tư',
        'Kiểm soát tài sản, thu nhập của người có chức vụ',
        'Xử lý tài sản không giải trình được nguồn gốc',
      ],
      stats: {
        before: 'Chỉ áp dụng khu vực công',
        after: 'Bao phủ cả khu vực tư nhân',
      },
      source: 'Luật số 36/2018/QH14',
      sourceUrl: 'https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-2018-322049.aspx',
    },
    {
      year: '2022',
      title: 'Tổng kết 10 năm công tác phòng, chống tham nhũng, tiêu cực',
      description: 'Tiếp tục đẩy mạnh đấu tranh PCTN với tinh thần "trên dưới đồng lòng, dọc ngang thông suốt".',
      type: 'congress',
      quote: {
        content: "Đã trót nhúng chàm thì hãy tự gột rửa, hoặc sẽ bị buộc gột rửa.",
        author: 'Tổng Bí thư Nguyễn Phú Trọng',
      },
      stats: {
        cases: '4.000+ vụ khởi tố (2012-2022)',
        officials: '50+ cán bộ cấp cao bị xử lý',
        recovery: '975.000+ tỷ đồng thu hồi',
      },
      source: 'Uỷ ban Kiểm tra TW',
      sourceUrl: 'https://ubkttw.vn/danh-muc/tin-tuc-thoi-su/hoi-nghi-toan-quoc-tong-ket-10-nam-cong-tac-phong-chong-tham-nhung-tieu-cuc-giai-doan-2012-2022.html',
    },
    {
      year: '2023',
      title: 'Cuốn sách "Kiên quyết, kiên trì..."',
      description: 'Ra mắt cuốn sách "Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, góp phần xây dựng Đảng và Nhà nước ta ngày càng trong sạch, vững mạnh".',
      type: 'document',
      quote: {
        content: "Phòng, chống tham nhũng, tiêu cực là cuộc đấu tranh ngay trong chính mỗi con người, trong cơ quan, tổ chức, đơn vị, địa phương mình.",
        author: 'Tổng Bí thư Nguyễn Phú Trọng',
      },
      source: 'NXB Chính trị Quốc gia Sự thật',
      sourceUrl: 'https://stbook.vn/sach-cua-dong-chi-nguyen-phu-trong?code=kien-quyet-kien-tri-dau-tranh-phong-chong-tham-nhung-tieu-cuc-gop-phan-xay-dung-dang-va-nha-nuoc-ta-ngay-cang-trong-sach-vung-manh&id=677',
    },
    {
      year: '2024',
      title: 'Tiếp tục hoàn thiện thể chế',
      description: 'Đẩy mạnh hoàn thiện cơ chế kiểm soát quyền lực, phòng ngừa tham nhũng từ sớm, từ xa.',
      type: 'law',
      highlights: [
        'Quy định về kiểm soát tài sản cán bộ',
        'Cơ chế bảo vệ người tố cáo tham nhũng',
        'Tăng cường công khai, minh bạch',
      ],
      quote: {
        content: "Phòng, chống tham nhũng, tiêu cực là nhiệm vụ vừa cấp bách, vừa lâu dài, phải tiến hành thường xuyên, liên tục với quyết tâm chính trị rất cao.",
        author: 'Ban Chấp hành TW Đảng',
      },
      source: 'Kết luận Hội nghị TW 2024',
      sourceUrl: 'https://ubkttw.vn/danh-muc/tin-tuc-thoi-su/tong-bi-thu-chu-tri-hop-ban-chi-dao-trung-uong-ve-phong-chong-tham-nhung-lang-phi-tieu-cuc.html',
    },
  ];

  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Củng cố niềm tin',
      description: 'Nhân dân tin tưởng vào quyết tâm của Đảng và Nhà nước trong đấu tranh PCTN',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Hoàn thiện pháp luật',
      description: 'Xây dựng hệ thống pháp luật PCTN ngày càng hoàn chỉnh, đồng bộ',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Xử lý nghiêm minh',
      description: 'Không có vùng cấm, không có ngoại lệ trong xử lý tham nhũng',
    },
  ];

  const quotes = [
    {
      content: "Một Đảng, một chế độ mạnh là phải dựa vào dân, được dân tin tưởng, ủng hộ. Đây là điều cốt tử nhất.",
      author: "Tổng Bí thư Nguyễn Phú Trọng",
      context: "Phát biểu tại Hội nghị toàn quốc về PCTN 2018",
    },
    {
      content: "Cái lò đã nóng lên rồi thì củi tươi vào đây cũng phải cháy.",
      author: "Tổng Bí thư Nguyễn Phú Trọng",
      context: "Ví von về quyết tâm chống tham nhũng",
    },
    {
      content: "Tiền bạc lắm để làm gì, chết có mang theo được đâu. Danh dự mới là điều thiêng liêng, cao quý nhất.",
      author: "Tổng Bí thư Nguyễn Phú Trọng",
      context: "Nhắn nhủ cán bộ, đảng viên",
    },
  ];

  const impactData = [
    { year: '2016', cases: 200, recovered: 5000 },
    { year: '2017', cases: 280, recovered: 8500 },
    { year: '2018', cases: 350, recovered: 15000 },
    { year: '2019', cases: 420, recovered: 25000 },
    { year: '2020', cases: 480, recovered: 45000 },
    { year: '2021', cases: 550, recovered: 85000 },
    { year: '2022', cases: 620, recovered: 120000 },
    { year: '2023', cases: 700, recovered: 180000 },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'law': return 'bg-blue-500';
      case 'organization': return 'bg-green-500';
      case 'congress': return 'bg-red-600';
      case 'document': return 'bg-purple-500';
      default: return 'bg-red-600';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'law': return 'Luật pháp';
      case 'organization': return 'Tổ chức';
      case 'congress': return 'Đại hội';
      case 'document': return 'Văn kiện';
      default: return 'Sự kiện';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/12/1/img6346-1764583590395247853388.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/80 to-yellow-900/70"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-yellow-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-yellow-400/20 rounded-full"></div>

        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Củng cố niềm tin
              <br />
              <span className="text-yellow-400">của nhân dân</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Hành trình xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh qua công cuộc phòng, chống tham nhũng, tiêu cực
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#timeline"
                className="group inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold rounded-xl shadow-lg shadow-yellow-500/30 hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                Xem hành trình
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#statistics"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-200 cursor-pointer"
              >
                Thống kê chi tiết
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

      {/* Statistics Section */}
      <section id="statistics" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-red-600 font-medium">Số liệu nổi bật</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Kết quả đấu tranh PCTN
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Những con số minh chứng cho quyết tâm và hiệu quả của công cuộc phòng, chống tham nhũng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-red-100 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm mb-3">{stat.description}</p>
                <a 
                  href={stat.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-red-600 hover:text-red-700 hover:underline transition-colors cursor-pointer group/link"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Nguồn: {stat.source}</span>
                  <svg className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 cursor-pointer border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-red-900 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-red-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quotes */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-medium">Những lời nhắn nhủ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Trích dẫn tiêu biểu
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
              >
                <svg className="w-10 h-10 text-yellow-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">"{quote.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-yellow-400">{quote.author}</div>
                  <div className="text-gray-500 text-sm mt-1">{quote.context}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Timeline Section */}
      <section id="timeline" className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-medium">Hành trình</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Dấu mốc quan trọng
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lược sử các sự kiện, chính sách và thành tựu quan trọng trong công cuộc phòng, chống tham nhũng tại Việt Nam
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-yellow-500 to-red-600 hidden md:block"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
                onMouseEnter={() => setActiveTimeline(index)}
                onMouseLeave={() => setActiveTimeline(null)}
              >
                <div className={`md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div
                    className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      activeTimeline === index ? 'border-red-500 scale-[1.02]' : 'border-transparent'
                    }`}
                  >
                    {/* Year badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl md:text-4xl font-bold text-red-600">{event.year}</span>
                      <span className={`px-3 py-1 ${getTypeColor(event.type)} text-white text-xs font-medium rounded-full`}>
                        {getTypeLabel(event.type)}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                    {/* Quote if exists */}
                    {event.quote && (
                      <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-4 mb-4 border-l-4 border-red-500">
                        <p className="text-gray-700 italic mb-2">"{event.quote.content}"</p>
                        <p className="text-red-600 font-medium text-sm">— {event.quote.author}</p>
                      </div>
                    )}

                    {/* Stats comparison */}
                    {event.stats && (
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {event.stats.before && (
                          <div className="bg-gray-100 rounded-lg p-3">
                            <div className="text-xs text-gray-500 mb-1">TRƯỚC</div>
                            <div className="text-sm font-medium text-gray-700">{event.stats.before}</div>
                          </div>
                        )}
                        {event.stats.after && (
                          <div className="bg-green-50 rounded-lg p-3">
                            <div className="text-xs text-green-600 mb-1">SAU</div>
                            <div className="text-sm font-medium text-green-700">{event.stats.after}</div>
                          </div>
                        )}
                        {event.stats.cases && (
                          <div className="bg-red-50 rounded-lg p-3">
                            <div className="text-xs text-red-600 mb-1">VỤ ÁN</div>
                            <div className="text-sm font-medium text-red-700">{event.stats.cases}</div>
                          </div>
                        )}
                        {event.stats.officials && (
                          <div className="bg-orange-50 rounded-lg p-3">
                            <div className="text-xs text-orange-600 mb-1">CÁN BỘ XỬ LÝ</div>
                            <div className="text-sm font-medium text-orange-700">{event.stats.officials}</div>
                          </div>
                        )}
                        {event.stats.recovery && (
                          <div className="col-span-2 bg-yellow-50 rounded-lg p-3">
                            <div className="text-xs text-yellow-700 mb-1">THU HỒI TÀI SẢN</div>
                            <div className="text-sm font-medium text-yellow-800">{event.stats.recovery}</div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Highlights */}
                    {event.highlights && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Điểm mới:</div>
                        <ul className="space-y-2">
                          {event.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Achievements */}
                    {event.achievements && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Thành tựu:</div>
                        <ul className="space-y-2">
                          {event.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Source */}
                    <a 
                      href={event.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-red-600 hover:text-red-700 pt-4 border-t border-gray-100 hover:underline transition-colors cursor-pointer group/source"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Nguồn: {event.source}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover/source:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-red-600 rounded-full z-10 items-center justify-center">
                  <div className={`w-2 h-2 rounded-full ${activeTimeline === index ? 'bg-red-600 animate-ping' : 'bg-red-600'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Trust Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-yellow-300 font-medium mb-4">Ý nghĩa</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Niềm tin của nhân dân
              </h2>
              <p className="text-red-100 mb-6 leading-relaxed text-lg">
                Công cuộc phòng, chống tham nhũng không chỉ là việc xử lý những sai phạm, mà còn là quá trình xây dựng và củng cố niềm tin của nhân dân vào Đảng, vào chế độ xã hội chủ nghĩa.
              </p>
              <p className="text-red-100 mb-8 leading-relaxed">
                Khi người dân thấy rằng không ai đứng trên pháp luật, kể cả những cán bộ cấp cao, họ tin tưởng hơn vào sự công bằng của xã hội và quyết tâm của lãnh đạo trong việc xây dựng một nhà nước thực sự của dân, do dân, vì dân.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-yellow-400">85%</div>
                  <div className="text-red-100 text-sm">Người dân ủng hộ công cuộc PCTN</div>
                  <div className="text-red-200 text-xs mt-1">Khảo sát PAPI 2023</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-yellow-400">63/63</div>
                  <div className="text-red-100 text-sm">Tỉnh/thành có BCĐ PCTN</div>
                  <div className="text-red-200 text-xs mt-1">Hoàn thành năm 2023</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Ảnh Cố Tổng Bí thư Nguyễn Phú Trọng */}
              <div>
                <img 
                  src="https://i.postimg.cc/MGc9rhyz/tbt.png" 
                  alt="Cố Tổng Bí thư Nguyễn Phú Trọng"
                  className="w-120 h-80 object-cover object-top rounded-2xl"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-white text-xl italic leading-relaxed mb-6">
                  Chống tham nhũng, tiêu cực để xây dựng Đảng ta thật sự trong sạch, vững mạnh; đội ngũ cán bộ, đảng viên thật sự tiên phong, gương mẫu, xứng đáng với sự tin cậy của Nhân dân.
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-white font-bold">Cố Tổng Bí thư Nguyễn Phú Trọng</div>
                    <div className="text-red-200 text-sm">Phát biểu tại Hội nghị toàn quốc 2022</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Mỗi công dân là một chiến sĩ
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Phòng, chống tham nhũng là trách nhiệm của toàn xã hội. Hãy tham gia góp phần xây dựng một Việt Nam trong sạch, công bằng và phát triển.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/luat"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              Tìm hiểu pháp luật PCTN
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/quiz"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              Kiểm tra kiến thức
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                PCTN
              </h3>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-yellow-400 transition-colors cursor-pointer">Tổng quan</a></li>
                <li><a href="/news" className="hover:text-yellow-400 transition-colors cursor-pointer">Tin tức</a></li>
                <li><a href="/luat" className="hover:text-yellow-400 transition-colors cursor-pointer">Pháp luật</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Nguồn tham khảo</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Ban Nội chính Trung ương</li>
                <li>Ủy ban Kiểm tra Trung ương</li>
                <li>Thanh tra Chính phủ</li>
                <li>NXB Chính trị Quốc gia</li>
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
            <p>&copy; 2024 Phòng Chống Tham Nhũng - Vì một Việt Nam trong sạch, vững mạnh.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OverviewPage;
