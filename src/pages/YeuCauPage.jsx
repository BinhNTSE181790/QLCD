import React, { useState } from 'react';
import Footer from '../components/Footer';

const YeuCauPage = () => {
  const [currentSubSession, setCurrentSubSession] = useState(1);

  // Component cho Sub-session 1: Yêu cầu chức năng
  const SubSession1 = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
      <h3 className="text-3xl font-bold text-blue-600 mb-6">Yêu cầu chức năng</h3>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        Mô tả các yêu cầu chức năng của hệ thống, bao gồm các tính năng chính, quy trình nghiệp vụ, và các chức năng cần thiết để đáp ứng mục tiêu của dự án.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { icon: '👤', title: 'Quản lý người dùng và phân quyền', desc: 'Hệ thống xác thực và phân quyền truy cập' },
          { icon: '📝', title: 'Hệ thống quiz và đánh giá kiến thức', desc: 'Tạo và quản lý bài kiểm tra trực tuyến' },
          { icon: '🤖', title: 'Chatbot AI tư vấn về PCTN', desc: 'Trợ lý AI hỗ trợ giải đáp thắc mắc' },
          { icon: '📰', title: 'Quản lý nội dung tin tức và pháp luật', desc: 'Cập nhật và quản lý thông tin PCTN' },
          { icon: '📊', title: 'Báo cáo và thống kê truy cập', desc: 'Theo dõi và phân tích hoạt động người dùng' }
        ].map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Component cho Sub-session 2: Yêu cầu phi chức năng
  const SubSession2 = () => (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-purple-200">
      <h3 className="text-3xl font-bold text-purple-600 mb-6">Yêu cầu phi chức năng</h3>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        Các yêu cầu về hiệu suất, bảo mật, khả năng mở rộng và trải nghiệm người dùng của hệ thống.
      </p>
      <div className="space-y-4">
        {[
          { icon: '⚡', title: 'Thời gian tải trang < 3 giây', color: 'yellow' },
          { icon: '📱', title: 'Hỗ trợ đa thiết bị (responsive design)', color: 'green' },
          { icon: '🔒', title: 'Bảo mật dữ liệu người dùng', color: 'red' },
          { icon: '📈', title: 'Khả năng mở rộng cho 10,000+ người dùng', color: 'blue' },
          { icon: '✨', title: 'Giao diện thân thiện, dễ sử dụng', color: 'purple' }
        ].map((item, index) => (
          <div key={index} className={`bg-white rounded-xl p-5 border-l-4 border-${item.color}-500 shadow-md hover:shadow-lg transition-all`}>
            <div className="flex items-center gap-4">
              <span className="text-3xl">{item.icon}</span>
              <p className="text-gray-800 font-medium text-lg">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Component cho Sub-session 3: Yêu cầu công nghệ
  const SubSession3 = () => (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-700 text-white">
      <h3 className="text-3xl font-bold text-green-400 mb-6">Yêu cầu công nghệ</h3>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        Công nghệ và công cụ được sử dụng trong quá trình phát triển dự án.
      </p>
      <div className="grid gap-6">
        {[
          { category: 'Frontend', tech: 'React, Vite, TailwindCSS', icon: '⚛️', color: 'cyan' },
          { category: 'Backend', tech: 'Firebase (Firestore, Authentication)', icon: '🔥', color: 'orange' },
          { category: 'AI/ML', tech: 'Google Gemini API', icon: '🧠', color: 'purple' },
          { category: 'Deployment', tech: 'Vercel/Netlify', icon: '🚀', color: 'blue' },
          { category: 'Version Control', tech: 'Git, GitHub', icon: '📦', color: 'gray' }
        ].map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-4xl">{item.icon}</span>
              <div className="flex-1">
                <h4 className={`text-xl font-bold text-${item.color}-400 mb-2`}>{item.category}</h4>
                <p className="text-gray-300 font-mono text-sm">{item.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Component cho Sub-session 4: Yêu cầu nội dung
  const SubSession4 = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200">
      <h3 className="text-3xl font-bold text-amber-600 mb-6">Yêu cầu nội dung</h3>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        Các yêu cầu về nội dung và dữ liệu được sử dụng trong hệ thống.
      </p>
      <div className="grid md:grid-cols-5 gap-4">
        {[
          { icon: '✅', title: 'Dữ liệu chính xác', subtitle: 'Từ nguồn đáng tin cậy' },
          { icon: '🔄', title: 'Cập nhật thường xuyên', subtitle: 'Nội dung mới nhất' },
          { icon: '📌', title: 'Trích dẫn nguồn', subtitle: 'Rõ ràng và chính xác' },
          { icon: '🇻🇳', title: 'Tiếng Việt chuẩn', subtitle: 'Ngôn ngữ chuyên nghiệp' },
          { icon: '🎓', title: 'Phù hợp sinh viên', subtitle: 'Dễ hiểu, dễ tiếp cận' }
        ].map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200 hover:shadow-lg transition-all text-center">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>
            <p className="text-gray-600 text-xs">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const sessions = [SubSession1, SubSession2, SubSession3, SubSession4];
  const CurrentSessionComponent = sessions[currentSubSession - 1];

  const handlePrevious = () => {
    if (currentSubSession > 1) {
      setCurrentSubSession(currentSubSession - 1);
    }
  };

  const handleNext = () => {
    if (currentSubSession < sessions.length) {
      setCurrentSubSession(currentSubSession + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Yêu cầu Dự án
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Tổng quan về các yêu cầu chức năng, phi chức năng, công nghệ và nội dung của hệ thống
          </p>
        </div>
      </section>

      {/* Session Introduction */}
      {/* <section className="py-12 bg-white border-b-4 border-red-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Giới thiệu về Yêu cầu</h2>
                <p className="text-gray-600 mt-1">Tài liệu yêu cầu chi tiết cho dự án PCTN</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Dự án <span className="font-bold text-red-600">Hệ thống Tuyên truyền và Đào tạo về Phòng Chống Tham Nhũng</span> được phát triển với mục tiêu:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Nâng cao nhận thức về tham nhũng và phòng chống tham nhũng trong sinh viên</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Cung cấp kiến thức pháp luật và chính sách liên quan đến PCTN</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Tạo nền tảng tương tác cho việc học tập và kiểm tra kiến thức</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Xây dựng văn hóa liêm chính trong môi trường giáo dục</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Sub-sessions Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Session Navigation Buttons */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <button
                onClick={handlePrevious}
                disabled={currentSubSession === 1}
                className={`p-4 rounded-2xl transition-all ${
                  currentSubSession === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:scale-110'
                }`}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                disabled={currentSubSession === sessions.length}
                className={`p-4 rounded-2xl transition-all ${
                  currentSubSession === sessions.length
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:scale-110'
                }`}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dynamic Session Content - Each sub-session renders its own component */}
            <div className="mb-8">
              <CurrentSessionComponent />
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {sessions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSubSession(index + 1)}
                  className={`transition-all ${
                    currentSubSession === index + 1
                      ? 'w-12 h-3 bg-red-600'
                      : 'w-3 h-3 bg-gray-300 hover:bg-red-300'
                  } rounded-full`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default YeuCauPage;
