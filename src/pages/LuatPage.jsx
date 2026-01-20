import React, { useState, useEffect } from 'react';

const LuatPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Law documents from Google Drive
  const lawDocuments = [
    {
      id: 'luat-36-2018',
      title: 'Luật Phòng, chống tham nhũng của Quốc hội, số 36/2018/QH14',
      shortTitle: 'Luật Phòng, chống tham nhũng của Quốc hội, số 36/2018/QH14',
      dateIssued: '20/11/2018',
      dateEffective: '01/07/2019',
      status: 'Đã sửa đổi',
      type: 'Luật',
      pdfUrl: 'https://drive.google.com/file/d/1S3miNEBw937_nuSdT9Qo7cza8YccH715/preview',
      content: `
        <h2>LUẬT PHÒNG, CHỐNG THAM NHŨNG CỦA QUỐC HỘI, SỐ 36/2018/QH14</h2>
        <p>Luật được Quốc hội khóa XIV thông qua về phòng, chống tham nhũng.</p>
        <p><i>Click nút "Xem PDF đầy đủ" bên dưới để xem toàn bộ nội dung văn bản.</i></p>
      `
    },
    {
      id: 'nghi-dinh-134-2021',
      title: 'Nghị định 134/2021/NĐ-CP của Chính phủ về việc sửa đổi, bổ sung một số điều của Nghị định 59/2019/NĐ-CP ngày 01/7/2019 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật Phòng, chống tham nhũng',
      shortTitle: 'Nghị định 134/2021/NĐ-CP - Sửa đổi, bổ sung Nghị định 59/2019/NĐ-CP',
      dateIssued: '30/12/2021',
      dateEffective: '15/02/2022',
      status: 'Còn Hiệu lực',
      type: 'Nghị định',
      pdfUrl: 'https://drive.google.com/file/d/1chnb8jzwJihBQInPbf6O9E5LYMQ0cMQe/preview',
      content: `
        <h2>NGHỊ ĐỊNH 134/2021/NĐ-CP</h2>
        <h3>Sửa đổi, bổ sung một số điều của Nghị định 59/2019/NĐ-CP ngày 01/7/2019 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật Phòng, chống tham nhũng</h3>
        <p>Nghị định của Chính phủ về việc sửa đổi, bổ sung một số quy định liên quan đến Luật Phòng, chống tham nhũng.</p>
        <p><i>Click nút "Xem PDF đầy đủ" bên dưới để xem toàn bộ nội dung văn bản.</i></p>
      `
    },
    {
      id: 'nghi-dinh-59-2019',
      title: 'Nghị định 59/2019/NĐ-CP của Chính phủ về việc quy định chi tiết một số điều và biện pháp thi hành Luật Phòng, chống tham nhũng',
      shortTitle: 'Nghị định 59/2019/NĐ-CP - Quy định chi tiết Luật Phòng, chống tham nhũng',
      dateIssued: '01/07/2019',
      dateEffective: '15/08/2019',
      status: 'Hết Hiệu lực một phần',
      type: 'Nghị định',
      pdfUrl: 'https://drive.google.com/file/d/1W7I_j1_WBEonGIBObE9ylyXxZkyYEpIX/preview',
      content: `
        <h2>NGHỊ ĐỊNH 59/2019/NĐ-CP</h2>
        <h3>Quy định chi tiết một số điều và biện pháp thi hành Luật Phòng, chống tham nhũng</h3>
        <p>Nghị định của Chính phủ quy định chi tiết về thực hiện Luật Phòng, chống tham nhũng.</p>
        <p><i>Click nút "Xem PDF đầy đủ" bên dưới để xem toàn bộ nội dung văn bản.</i></p>
      `
    },
    {
      id: 'thong-tu-06-2025',
      title: 'Thông tư 06/2025/TT-TTCP của Thanh tra Chính phủ quy định chế độ thông tin, báo cáo công tác thanh tra, tiếp công dân, giải quyết khiếu nại, tố cáo và phòng, chống tham nhũng, tiêu cực',
      shortTitle: 'Thông tư 06/2025/TT-TTCP - Chế độ thông tin, báo cáo công tác thanh tra',
      dateIssued: '29/09/2025',
      dateEffective: '30/09/2025',
      status: 'Còn Hiệu lực',
      type: 'Thông tư',
      pdfUrl: 'https://drive.google.com/file/d/19G-VErqAOc-s25SpiVN-baqScf4QHigM/preview',
      content: `
        <h2>THÔNG TƯ 06/2025/TT-TTCP</h2>
        <h3>Quy định chế độ thông tin, báo cáo công tác thanh tra, tiếp công dân, giải quyết khiếu nại, tố cáo và phòng, chống tham nhũng, tiêu cực</h3>
        <p>Thông tư của Thanh tra Chính phủ về chế độ thông tin và báo cáo trong công tác phòng, chống tham nhũng.</p>
        <p><i>Click nút "Xem PDF đầy đủ" bên dưới để xem toàn bộ nội dung văn bản.</i></p>
      `
    },
    {
      id: 'thong-tu-07-2024',
      title: 'Thông tư 07/2024/TT-TTCP của Thanh tra Chính phủ quy định về thẩm quyền, nội dung thanh tra trách nhiệm thực hiện pháp luật về thanh tra, tiếp công dân, khiếu nại, tố cáo và phòng, chống tham nhũng',
      shortTitle: 'Thông tư 07/2024/TT-TTCP - Thẩm quyền, nội dung thanh tra trách nhiệm',
      dateIssued: '01/07/2024',
      dateEffective: '15/08/2024',
      status: 'Còn Hiệu lực',
      type: 'Thông tư',
      pdfUrl: 'https://drive.google.com/file/d/1UkdJrUlGjdoBrPZp-Mr_yVXuhOCIdAkE/preview',
      content: `
        <h2>THÔNG TƯ 07/2024/TT-TTCP</h2>
        <h3>Quy định về thẩm quyền, nội dung thanh tra trách nhiệm thực hiện pháp luật về thanh tra, tiếp công dân, khiếu nại, tố cáo và phòng, chống tham nhũng</h3>
        <p>Thông tư của Thanh tra Chính phủ về thẩm quyền và nội dung thanh tra.</p>
        <p><i>Click nút "Xem PDF đầy đủ" bên dưới để xem toàn bộ nội dung văn bản.</i></p>
      `
    },
    {
      id: 'huong-dan-10120',
      title: 'Hướng dẫn 10120/HD-BNV của Bộ Nội vụ khen thưởng các tập thể và cá nhân có thành tích xuất sắc trong công tác phòng, chống tham nhũng, lãng phí, tiêu cực giai đoạn 2021-2025',
      shortTitle: 'Hướng dẫn 10120/HD-BNV - Khen thưởng tập thể và cá nhân xuất sắc',
      dateIssued: '02/11/2025',
      dateEffective: '02/11/2025',
      status: 'Còn Hiệu lực',
      type: 'Hướng dẫn',
      pdfUrl: 'https://drive.google.com/file/d/1IBUQ41kGDM7HKo6Z2cKyiGZxMis3BoJW/preview',
      content: `
        <h2>HƯỚNG DẪN 10120/HD-BNV</h2>
        <h3>Khen thưởng các tập thể và cá nhân có thành tích xuất sắc trong công tác phòng, chống tham nhũng, lãng phí, tiêu cực giai đoạn 2021-2025</h3>
        <p>Hướng dẫn của Bộ Nội vụ về việc khen thưởng trong công tác phòng, chống tham nhũng.</p>
        <p><i>Click nút "Xem PDF đầy đủ" bên dưới để xem toàn bộ nội dung văn bản.</i></p>
      `
    },
    {
      id: 'huong-dan-63',
      title: 'Hướng dẫn 63-HD/BCĐTW của Ban Chỉ đạo trung ương về phòng, chống tham nhũng, lãng phí, tiêu cực một số nội dung trọng tâm về công tác phòng, chống lãng phí',
      shortTitle: 'Hướng dẫn 63-HD/BCĐTW - Nội dung trọng tâm về phòng, chống lãng phí',
      dateIssued: '28/04/2025',
      dateEffective: '28/04/2025',
      status: 'Còn Hiệu lực',
      type: 'Hướng dẫn',
      pdfUrl: 'https://drive.google.com/file/d/1t9RvUuVcCFRTSs9im8EKIgxwm-90zvid/preview',
      content: `
        <h2>HƯỚNG DẪN 63-HD/BCĐTW</h2>
        <h3>Về phòng, chống tham nhũng, lãng phí, tiêu cực một số nội dung trọng tâm về công tác phòng, chống lãng phí</h3>
        <p>Hướng dẫn của Ban Chỉ đạo trung ương về các nội dung trọng tâm trong công tác phòng, chống lãng phí.</p>
        <p><i>Click nút "Xem PDF đầy đủ" bên dưới để xem toàn bộ nội dung văn bản.</i></p>
      `
    }
  ];

  // Filter documents based on search
  const filteredDocuments = lawDocuments.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsSidebarOpen(false);
    }
  };

  // Observe sections for active state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    lawDocuments.forEach((doc) => {
      const element = document.getElementById(doc.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#DA291C] via-red-600 to-[#DA291C] text-white py-16 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#FFCD00] backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-sm mb-3 border border-yellow-400 text-[#DA291C]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>VĂN BẢN PHÁP LUẬT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hệ Thống Văn Bản Pháp Luật
            </h1>
            <p className="text-xl text-yellow-100">
              về Phòng, Chống Tham Nhũng
            </p>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden absolute top-4 right-4 bg-[#FFCD00] text-[#DA291C] px-5 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
          >
            📑 Mục lục
          </button>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48h1440V0c-360 48-720 48-1080 0L0 48z" fill="currentColor" className="text-yellow-50"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Mục lục */}
          <aside className={`
            fixed lg:sticky lg:top-8 left-0 h-[calc(100vh-100px)] lg:h-auto lg:max-h-[calc(100vh-100px)] w-80 bg-white rounded-2xl shadow-2xl p-6 z-30 border-2 border-yellow-200
            transition-transform duration-300 overflow-y-auto
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            {/* Close button for mobile */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-[#DA291C] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">📑</span>
                <span className="bg-gradient-to-r from-[#DA291C] to-red-700 bg-clip-text text-transparent">
                  Mục lục
                </span>
              </h2>
              
              {/* Search in sidebar */}
              <div className="relative mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm văn bản..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA291C] focus:outline-none focus:ring-4 focus:ring-yellow-100 text-sm transition-all"
                />
                <svg className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Navigation list */}
            <nav className="space-y-3">
              {filteredDocuments.map((doc, index) => (
                <button
                  key={doc.id}
                  onClick={() => scrollToSection(doc.id)}
                  className={`w-full text-left px-4 py-4 rounded-xl transition-all group transform hover:scale-102 ${
                    activeSection === doc.id
                      ? 'bg-[#DA291C] text-[#FFCD00] font-bold shadow-lg shadow-red-300'
                      : 'hover:bg-yellow-50 text-gray-700 border-2 border-transparent hover:border-yellow-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-sm font-bold mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      activeSection === doc.id ? 'bg-[#FFCD00]/30 text-[#FFCD00]' : 'bg-yellow-100 text-[#DA291C]'
                    }`}>
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold line-clamp-2 leading-tight mb-1">
                        {doc.shortTitle}
                      </p>
                      <p className={`text-xs font-medium ${
                        activeSection === doc.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {doc.type} • {doc.dateIssued}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </aside>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-20"
            />
          )}

          {/* Main content */}
          <main className="flex-1 max-w-4xl">
            {filteredDocuments.length === 0 ? (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <p className="text-gray-500 text-lg">Không tìm thấy văn bản nào</p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredDocuments.map((doc) => (
                  <section
                    key={doc.id}
                    id={doc.id}
                    className="bg-white rounded-2xl shadow-xl p-8 scroll-mt-32 border-2 border-yellow-200 hover:shadow-2xl transition-shadow duration-300"
                  >
                    {/* Document header */}
                    <div className="border-l-4 border-gradient-to-b from-red-600 to-orange-600 pl-6 mb-8" style={{ borderImage: 'linear-gradient(to bottom, #dc2626, #ea580c) 1' }}>
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="bg-[#DA291C] text-[#FFCD00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                          {doc.type}
                        </span>
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                          doc.status === 'Còn Hiệu lực' 
                            ? 'bg-green-100 text-green-700' 
                            : doc.status === 'Đã sửa đổi'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {doc.status}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {doc.title}
                      </h2>
                      
                      <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-4 space-y-3 text-sm border border-yellow-200">
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <div className="flex-1">
                            <span className="font-bold text-gray-700 block mb-1">Ban hành:</span>
                            <span className="text-gray-600">{doc.dateIssued}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#FFCD00] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="flex-1">
                            <span className="font-bold text-gray-700 block mb-1">Áp dụng:</span>
                            <span className="text-gray-600">{doc.dateEffective}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#DA291C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div className="flex-1">
                            <span className="font-bold text-gray-700 block mb-1">Trạng thái hiệu lực:</span>
                            <span className="font-semibold text-gray-900">{doc.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Document content */}
                    <div 
                      className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8"
                      dangerouslySetInnerHTML={{ __html: doc.content }}
                    />

                    {/* Action buttons */}
                    <div className="mt-8 pt-6 border-t-2 border-yellow-200 flex gap-4 flex-wrap">
                      {doc.pdfUrl && (
                        <a
                          href={doc.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-[#DA291C] hover:bg-red-700 text-[#FFCD00] px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <span>Xem PDF đầy đủ</span>
                        </a>
                      )}
                      
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(doc.title);
                          alert('✅ Đã copy tên văn bản!');
                        }}
                        className="inline-flex items-center gap-3 border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 hover:text-[#DA291C] px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Sao chép</span>
                      </button>
                    </div>
                  </section>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default LuatPage;
