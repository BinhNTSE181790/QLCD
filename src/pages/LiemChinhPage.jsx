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
      purpose: 'Hỗ trợ viết code và phát triển giao diện tương tác',
      prompts: [
        {
          prompt: 'Tạo trang về tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch, vững mạnh với cấu trúc phân rõ các phần: Đảng, Nhà nước, vận dụng, có nguồn trích dẫn từ giáo trình',
          output: 'Gợi ý cấu trúc component React với tab navigation và layout cơ bản',
          edits: 'Nhóm tự nghiên cứu giáo trình Tư tưởng Hồ Chí Minh (tr.80-83, 90-91), trích dẫn chính xác các quan điểm, thiết kế UI/UX theo theme đỏ-vàng phù hợp chủ đề, bổ sung đầy đủ nguồn tài liệu'
        },
        {
          prompt: 'Tạo component thẻ lật (flip card) để hiển thị nội dung về chỉnh đốn Đảng, mỗi thẻ có 2 mặt',
          output: 'Gợi ý cấu trúc component flip card với animation CSS cơ bản',
          edits: 'Nhóm tự thiết kế flow tương tác: thẻ xuất hiện dần sau khi lật, điều chỉnh animation, màu sắc, viết toàn bộ nội dung về chỉnh đốn Đảng, kiểm soát quyền lực dựa trên tư tưởng Hồ Chí Minh'
        },
        {
          prompt: 'Tạo phần phân tích tỷ lệ đóng góp AI vs con người với progress bar',
          output: 'Gợi ý component progress bar hai màu cơ bản',
          edits: 'Nhóm tự đánh giá chi tiết tỷ lệ đóng góp trong từng khía cạnh (thiết kế: 40% AI - 60% người, nội dung: 25% AI - 75% người), viết mô tả cụ thể cho từng phần'
        }
      ]
    },
    {
      name: 'Công cụ tìm kiếm AI (Perplexity)',
      purpose: 'Hỗ trợ tìm kiếm thông tin và từ khóa ban đầu',
      prompts: [
        {
          prompt: 'Tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch vững mạnh',
          output: 'Gợi ý tham khảo giáo trình Tư tưởng Hồ Chí Minh và các tác phẩm của Người',
          edits: 'Nhóm tự nghiên cứu giáo trình chi tiết, trích dẫn đúng trang sách, phân tích và diễn đạt lại bằng ngôn ngữ phù hợp với sinh viên'
        },
        {
          prompt: 'Tìm hiểu về cơ chế kiểm soát quyền lực nhà nước theo pháp luật Việt Nam',
          output: 'Gợi ý tra cứu Hiến pháp 2013, Luật PCTN 2018, các nghị quyết của Đảng',
          edits: 'Nhóm tự truy cập Thư viện Pháp luật, AI Pháp luật, đọc và trích dẫn chính xác các điều luật, nghị quyết liên quan'
        }
      ]
    }
  ];

  const sourceVerifications = [
    {
      category: 'Tài liệu học thuật chính thống',
      sources: [
        {
          name: 'Giáo trình Tư tưởng Hồ Chí Minh',
          url: 'https://www.nxbctqg.org.vn/',
          verified: true,
          usedFor: 'Nguồn chính: Tư tưởng về xây dựng Đảng (tr.80-83), xây dựng Nhà nước (tr.90-91), vận dụng vào thực tiễn'
        },
        {
          name: 'Tác phẩm Hồ Chí Minh toàn tập',
          url: 'https://www.nxbctqg.org.vn/',
          verified: true,
          usedFor: 'Trích dẫn các bài viết, bài nói của Chủ tịch Hồ Chí Minh về xây dựng Đảng, Nhà nước, đạo đức cách mạng'
        }
      ]
    },
    {
      category: 'Văn bản pháp luật và cơ quan nhà nước',
      sources: [
        {
          name: 'Hiến pháp 2013',
          url: 'https://thuvienphapluat.vn/',
          verified: true,
          usedFor: 'Quy định về Nhà nước của dân, do dân, vì dân; quyền lực nhân dân; cơ chế kiểm soát quyền lực'
        },
        {
          name: 'Luật Phòng chống tham nhũng 2018',
          url: 'https://thuvienphapluat.vn/',
          verified: true,
          usedFor: 'Khung pháp lý về PCTN; trách nhiệm của cơ quan, tổ chức, cá nhân; cơ chế phòng ngừa và xử lý tham nhũng'
        },
        {
          name: 'AI Pháp luật Việt Nam',
          url: 'https://ai.phapluat.gov.vn/chat',
          verified: true,
          usedFor: 'Công cụ hỗ trợ tìm kiếm nhanh văn bản pháp luật, nghị quyết liên quan đến xây dựng Đảng, PCTN, kiểm soát quyền lực'
        },
        {
          name: 'Quốc hội Việt Nam',
          url: 'https://quochoi.vn/',
          verified: true,
          usedFor: 'Hoạt động giám sát của Quốc hội; chất vấn và trả lời chất vấn; vai trò đại diện nhân dân trong kiểm soát quyền lực'
        }
      ]
    },
    {
      category: 'Nguồn tham khảo bổ sung',
      sources: [
        {
          name: 'NXB Chính trị Quốc gia Sự thật',
          url: 'https://www.nxbctqg.org.vn/',
          verified: true,
          usedFor: 'Các ấn phẩm về xây dựng Đảng, PCTN, tư tưởng Hồ Chí Minh; sách "Một số vấn đề lý luận và thực tiễn về CNXH và con đường đi lên CNXH ở Việt Nam"'
        },
        {
          name: 'Tạp chí Cộng sản',
          url: 'https://www.tapchicongsan.org.vn/',
          verified: true,
          usedFor: 'Các bài viết phân tích về xây dựng Đảng, kiểm soát quyền lực, vận dụng tư tưởng Hồ Chí Minh trong giai đoạn hiện nay'
        }
      ]
    }
  ];

  const creativeApplications = [
    {
      title: 'Nghiên cứu nội dung học thuật',
      description: 'Nhóm tự nghiên cứu giáo trình và tài liệu, AI chỉ hỗ trợ tìm kiếm từ khóa',
      aiContribution: '40%',
      humanContribution: '60%',
      details: [
        'Nhóm tự đọc, nghiên cứu giáo trình Tư tưởng Hồ Chí Minh (tr.80-91)',
        'Nhóm tự phân tích và hiểu sâu các quan điểm về xây dựng Đảng, Nhà nước',
        'Nhóm tự trích dẫn 4hính xác từ tài liệu gốc, ghi rõ trang sách',
        'AI chỉ gợi ý từ khóa và nguồn tham khảo ban đầu',
        'Nhóm tự liên hệ thực tiễn với tình hình PCTN hiện nay'
      ]
    },
    {
      title: 'Thu thập và xác minh dữ liệu',
      description: 'Nhóm tự thu thập số liệu từ nguồn chính thống, AI chỉ gợi ý nguồn',
      aiContribution: '25%',
      humanContribution: '75%',
      details: [
        'Nhóm tự truy cập các trang web: Ban Nội chính TW, UBKTTW, Thanh tra CP',
        'Nhóm tự đọc các báo cáo, nghị quyết, văn bản pháp luật',
        'Nhóm tự lấy số liệu về vụ án tham nhũng, cán bộ bị kỷ luật',
        'Nhóm tự xác minh tính chính xác và cập nhật của thông tin',
        'AI chỉ gợi ý các trang web có thể tham khảo'
      ]
    },
    {
      title: 'Thiết kế giao diện tương tác',
      description: 'Nhóm tự thiết kế UI/UX và hiệu ứng, AI hỗ trợ cấu trúc code',
      aiContribution: '40%',
      humanContribution: '60%',
      details: [
        'Nhóm tự thiết kế layout, màu sắc theo theme đỏ-vàng',
        'Nhóm tự thiết kế flow: thẻ lật xuất hiện dần (flip cards)',
        'Nhóm tự quyết định cách trình bày nội dung phù hợp với người đọc',
        'AI gợi ý cấu trúc React component và CSS animation cơ bản',
        'Nhóm tự điều chỉnh animation, responsive và tối ưu UX'
      ]
    }
  ];

  const commitments = [
    {
      type: 'Cam kết liêm chính học thuật',
      color: 'red',
      items: [
        'Sử dụng AI như công cụ hỗ trợ kỹ thuật, không thay thế tư duy phản biện và sáng tạo nội dung học thuật',
        'Tất cả nội dung học thuật đều do nhóm tự nghiên cứu từ giáo trình và tài liệu chính thống',
        'Minh bạch 100% về việc sử dụng AI: ghi rõ prompt, output và chỉnh sửa',
        'Không sao chép (copy-paste) nội dung từ bất kỳ nguồn nào mà không trích dẫn',
        'Luôn ghi rõ nguồn gốc thông tin: tên tài liệu, tác giả, trang sách, URL'
      ]
    },
    {
      type: 'Đảm bảo chất lượng',
      color: 'yellow',
      items: [
        'Mọi trích dẫn về tư tưởng Hồ Chí Minh đều từ giáo trình chính thống (tr.80-91)',
        'Số liệu về tham nhũng được lấy từ Ban Nội chính TW, UBKTTW, Thanh tra CP',
        'Các phân tích và vận dụng đều dựa trên nền tảng lý luận vững chắc',
        'Nội dung được thảo luận, kiểm tra chéo giữa các thành viên nhóm',
        'Đảm bảo tính chính xác, khoa học và phù hợp với định hướng của Đảng và Nhà nước'
      ]
    },
    {
      type: 'Tuân thủ nguyên tắc',
      color: 'green',
      items: [
        'Tuân thủ quy định về đạo đức nghiên cứu khoa học của Bộ GD&ĐT',
        'Tuân thủ quy định về liêm chính học thuật của trường Đại học',
        'Minh bạch về tỷ lệ đóng góp của AI và con người trong từng khâu',
        'Sẵn sàng cung cấp đầy đủ tài liệu, nguồn tham khảo khi được yêu cầu',
        'Chịu trách nhiệm hoàn toàn về tính chính xác của nội dung trình bày'
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
