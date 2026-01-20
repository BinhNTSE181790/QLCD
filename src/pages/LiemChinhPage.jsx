import React, { useState } from 'react';

const LiemChinhPage = () => {
  const [activeTab, setActiveTab] = useState('tools');

  const tabs = [
    { id: 'tools', label: 'Công cụ AI đã sử dụng' },
    { id: 'verify', label: 'Kiểm chứng nguồn' },
    { id: 'creative', label: 'Ứng dụng AI sáng tạo' },
    { id: 'commitment', label: 'Cam kết liêm chính' },
  ];

  const aiTools = [
    {
      name: 'GitHub Copilot (Claude)',
      purpose: 'Hỗ trợ viết code và phát triển giao diện',
      prompts: [
        {
          prompt: 'Tạo trang Tổng quan về Phòng Chống Tham Nhũng với vertical timeline, thống kê qua từng thời kỳ, trích dẫn và số liệu có nguồn rõ ràng',
          output: 'Gợi ý cấu trúc component React cơ bản với timeline và cards',
          edits: 'Nhóm tự thiết kế lại toàn bộ UI/UX, nghiên cứu và thu thập số liệu từ nguồn chính thống, viết nội dung, thêm sourceUrl và xác minh từng nguồn trích dẫn'
        },
        {
          prompt: 'Thêm navbar với các menu items',
          output: 'Gợi ý cấu trúc navbar cơ bản',
          edits: 'Nhóm tự thiết kế glassmorphism effect, điều chỉnh màu sắc theo theme đỏ-vàng, thêm responsive và scroll effect'
        },
        {
          prompt: 'Tạo phần nguồn trích dẫn có thể click',
          output: 'Gợi ý cách tạo link với icon',
          edits: 'Nhóm tự tìm kiếm, xác minh và cập nhật URL nguồn chính xác từ các trang web chính phủ'
        }
      ]
    },
    {
      name: 'Tìm kiếm thông tin (Perplexity)',
      purpose: 'Hỗ trợ tìm kiếm thông tin ban đầu',
      prompts: [
        {
          prompt: 'Tìm số liệu thống kê về công tác phòng chống tham nhũng giai đoạn 2012-2024',
          output: 'Gợi ý các nguồn và từ khóa tìm kiếm',
          edits: 'Nhóm tự truy cập trực tiếp các trang web chính thống (Ban Nội chính TW, Ủy ban Kiểm tra TW, Thanh tra Chính phủ) để xác minh và lấy số liệu chính xác'
        }
      ]
    }
  ];

  const sourceVerifications = [
    {
      category: 'Cơ quan Đảng',
      sources: [
        {
          name: 'Ban Nội chính Trung ương',
          url: 'https://noichinh.vn/',
          verified: true,
          usedFor: 'Số liệu vụ án tham nhũng, báo cáo tổng kết 10 năm PCTN'
        },
        {
          name: 'Ủy ban Kiểm tra Trung ương',
          url: 'https://ubkttw.vn/',
          verified: true,
          usedFor: 'Số liệu cán bộ bị kỷ luật, hội nghị tổng kết'
        },
        {
          name: 'Tư liệu Văn kiện Đảng',
          url: 'https://tulieuvankien.dangcongsan.vn/',
          verified: true,
          usedFor: 'Nghị quyết, kết luận của Ban Chấp hành TW'
        }
      ]
    },
    {
      category: 'Cơ quan Nhà nước',
      sources: [
        {
          name: 'Thanh tra Chính phủ',
          url: 'https://thanhtra.gov.vn/',
          verified: true,
          usedFor: 'Số liệu thu hồi tài sản tham nhũng'
        },
        {
          name: 'Quốc hội Việt Nam',
          url: 'https://quochoi.vn/',
          verified: true,
          usedFor: 'Luật Phòng chống tham nhũng 2005, 2018'
        },
        {
          name: 'Thư viện Pháp luật',
          url: 'https://thuvienphapluat.vn/',
          verified: true,
          usedFor: 'Tìm kiếm văn bản luật liên quan đến PCTN'
        },
        {
          name: 'AI pháp luật',
          url: 'https://ai.phapluat.gov.vn/chat',
          verified: true,
          usedFor: 'Hỗ trợ tìm kiếm và trích dẫn văn bản pháp luật liên quan đến PCTN'
        }
      ]
    },
    {
      category: 'Nguồn khác',
      sources: [
        {
          name: 'NXB Chính trị Quốc gia Sự thật',
          url: 'https://www.nxbctqg.org.vn/',
          verified: true,
          usedFor: 'Cuốn sách của Tổng Bí thư về PCTN'
        },
        {
          name: 'Báo Quân đội Nhân dân',
          url: 'https://www.qdnd.vn/',
          verified: true,
          usedFor: 'Hình ảnh Cố Tổng Bí thư Nguyễn Phú Trọng'
        }
      ]
    }
  ];

  const creativeApplications = [
    {
      title: 'Thiết kế giao diện',
      description: 'Nhóm tự thiết kế layout và style, AI chỉ hỗ trợ cấu trúc code cơ bản',
      aiContribution: '40%',
      humanContribution: '60%',
      details: [
        'Nhóm tự nghiên cứu và thiết kế UI/UX từ đầu',
        'Nhóm chọn màu sắc, typography, spacing phù hợp với chủ đề PCTN',
        'Nhóm tự code các hiệu ứng animation và responsive',
        'AI chỉ gợi ý cấu trúc component cơ bản'
      ]
    },
    {
      title: 'Thu thập và tổng hợp nội dung',
      description: 'Nhóm tự nghiên cứu, AI chỉ hỗ trợ tìm kiếm từ khóa ban đầu',
      aiContribution: '25%',
      humanContribution: '75%',
      details: [
        'Nhóm tự truy cập các trang web chính thống để lấy số liệu',
        'Nhóm tự đọc và phân tích các văn bản pháp luật',
        'Nhóm tự viết nội dung bằng ngôn ngữ phù hợp',
        'Nhóm tự xác minh và thêm nguồn trích dẫn chính xác'
      ]
    },
    {
      title: 'Tối ưu trải nghiệm người dùng',
      description: 'Nhóm quyết định toàn bộ flow và interaction',
      aiContribution: '30%',
      humanContribution: '70%',
      details: [
        'Nhóm tự thiết kế flow navigation và user journey',
        'Nhóm tự quyết định cách trình bày thông tin',
        'Nhóm tự test và thu thập feedback',
        'AI chỉ gợi ý một số pattern UX phổ biến'
      ]
    }
  ];

  const commitments = [
    {
      type: 'Cam kết',
      color: 'red',
      items: [
        'Sử dụng AI như công cụ hỗ trợ, không thay thế tư duy và sáng tạo của con người',
        'Minh bạch về việc sử dụng AI trong quá trình phát triển dự án',
        'Luôn ghi nhận nguồn gốc của thông tin và ý tưởng'
      ]
    },
    {
      type: 'Đảm bảo',
      color: 'yellow',
      items: [
        'Mọi số liệu thống kê đều được xác minh từ nguồn chính thống',
        'Các trích dẫn đều có nguồn gốc rõ ràng và có thể kiểm chứng',
        'Nội dung được biên tập và kiểm duyệt bởi thành viên nhóm'
      ]
    },
    {
      type: 'Tuân thủ',
      color: 'green',
      items: [
        'Các nguyên tắc đạo đức trong nghiên cứu học thuật.',
        'Minh bạch trong việc sử dụng công nghệ AI.'
      ]
    }
  ];

  const renderToolsContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Công cụ AI đã sử dụng</h3>
        <p className="text-gray-600">Chi tiết về cách nhóm sử dụng AI trong quá trình phát triển dự án</p>
      </div>
      
      {aiTools.map((tool, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-100 rounded-xl flex items-center justify-center text-white">
              
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
              <p className="text-gray-500 text-sm">{tool.purpose}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {tool.prompts.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">PROMPT</span>
                  </div>
                  <p className="text-gray-700 text-sm italic">"{item.prompt}"</p>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">OUTPUT TỪ AI</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.output}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">CHỈNH SỬA CỦA NHÓM</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.edits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderVerifyContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Kiểm chứng nguồn</h3>
        <p className="text-gray-600">Danh sách các nguồn thông tin đã được xác minh và sử dụng trong dự án</p>
      </div>
      
      {sourceVerifications.map((category, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            {category.category}
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            {category.sources.map((source, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-red-50/30 rounded-xl p-4 border border-gray-100">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-bold text-gray-900">{source.name}</h5>
                  {source.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Đã xác minh
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-3">{source.usedFor}</p>
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700 hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {source.url}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCreativeContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ứng dụng AI sáng tạo</h3>
        <p className="text-gray-600">Cách nhóm kết hợp AI và sáng tạo của con người</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {creativeApplications.map((app, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h4>
            <p className="text-gray-600 text-sm mb-4">{app.description}</p>
            
            {/* Progress bars */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-red-600">AI: {app.aiContribution}</span>
                <span className="text-yellow-600">Con người: {app.humanContribution}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-400 h-full"
                  style={{ width: app.aiContribution }}
                ></div>
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full"
                  style={{ width: app.humanContribution }}
                ></div>
              </div>
            </div>
            
            <ul className="space-y-2">
              {app.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommitmentContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Cam kết liêm chính học thuật</h3>
        <p className="text-gray-600">Những nguyên tắc và cam kết của nhóm trong việc sử dụng AI</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {commitments.map((commitment, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
              commitment.color === 'red' ? 'border-red-200 hover:border-red-400' :
              commitment.color === 'yellow' ? 'border-yellow-200 hover:border-yellow-400' :
              'border-green-200 hover:border-green-400'
            } transition-colors`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                commitment.color === 'red' ? 'bg-red-100' :
                commitment.color === 'yellow' ? 'bg-yellow-100' :
                'bg-green-100'
              }`}>
                {commitment.color === 'red' && (
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {commitment.color === 'yellow' && (
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {commitment.color === 'green' && (
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )}
              </div>
              <h4 className={`text-xl font-bold ${
                commitment.color === 'red' ? 'text-red-600' :
                commitment.color === 'yellow' ? 'text-yellow-600' :
                'text-green-600'
              }`}>{commitment.type}</h4>
            </div>
            
            <ul className="space-y-3">
              {commitment.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    commitment.color === 'red' ? 'text-red-500' :
                    commitment.color === 'yellow' ? 'text-yellow-500' :
                    'text-green-500'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Cam kết Liêm chính
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Minh bạch về việc sử dụng AI và cam kết tuân thủ các nguyên tắc liêm chính trong học thuật
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-24 z-40 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-8 py-5 font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-red-600'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </span>
                  {tab.label}
                </span>
                {/* Active indicator line */}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 transition-transform duration-300 origin-left ${
                  activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {activeTab === 'tools' && renderToolsContent()}
          {activeTab === 'verify' && renderVerifyContent()}
          {activeTab === 'creative' && renderCreativeContent()}
          {activeTab === 'commitment' && renderCommitmentContent()}
        </div>
      </section>
    </div>
  );
};

export default LiemChinhPage;
