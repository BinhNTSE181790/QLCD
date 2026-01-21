import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import FlipCard from "../components/FlipCard";

const YeuCauPage = () => {
  const [currentSubSession, setCurrentSubSession] = useState(1);

  // Component cho Sub-session 1: Chỉnh đốn Đảng
  const SubSession1 = () => {
    const [flippedCards, setFlippedCards] = useState([]);

    const cards = [
      {
        id: 1,
        title: "Nhiệm vụ then chốt",
        content:
          "Chỉnh đốn Đảng là nhiệm vụ then chốt để đảm bảo vai trò lãnh đạo và giữ vững bản chất cách mạng.",
        level: 0,
        parent: null,
        x: 500,
        y: 0,
      },
      {
        id: 2,
        title: "Xây dựng Đảng",
        content:
          "Sự nghiệp đổi mới đất nước thành công hay không phụ thuộc vào chất lượng và sự trong sạch của bản thân Đảng. Đảng phải luôn xứng đáng là người lãnh đạo, người đầy tớ thật trung thành của nhân dân.",
        level: 0,
        parent: 1,
        x: 500,
        y: 420,
      },
      {
        id: 3,
        title: "Chỉnh đốn nội bộ",
        content:
          'Đây là việc làm cần thiết để mỗi đảng viên luôn xứng đáng với vai trò (vừa là người lãnh đạo, vừa là đầy tớ trung thành của nhân dân) của mình, làm cho "Đảng luôn là đạo đức, là văn minh."',
        level: 1,
        parent: 2,
        x: 200,
        y: 840,
      },
      {
        id: 4,
        title: "Nêu cao trách nhiệm",
        content:
          "Đội ngũ cán bộ, Đảng viên, đặc biệt là người đứng đầu, phải thực hiện các đường lối, chủ trương mà Đảng và Nhà nước đua ra, phải nêu gương về đạo đức, lối sống và tinh thần trách nhiệm để mọi người noi theo.",
        level: 1,
        parent: 2,
        x: 500,
        y: 840,
      },
      {
        id: 5,
        title: "Kiểm tra và Giám sát",
        content:
          "Đảng phải sử dụng và phát huy hiệu quả quyền lực do nhân dân giao phó để phục vụ sự phát triển của dân tộc, đưa đất nước tiến lên chủ nghĩa xã hội. Cũng phải tạo điều kiện cho nhân dân sử dụng luật pháp - công cụ quyền lực của mình - để kiểm soát, kiểm tra, giám sát Đảng và Nhà Nước.",
        level: 1,
        parent: 2,
        x: 800,
        y: 840,
      },
      {
        id: 6,
        title: "Đường lối, chủ trương đúng đắn",
        content:
          "Phải dựa vào nền tảng lý luận Mác-Lênin và tư tưởng Hồ Chí Minh, quan trọng nhất là phải phù hợp với hoàn cảnh của đất nước tại thời điểm/thời kỳ đó.",
        level: 2,
        parent: 3,
        x: 50,
        y: 1260,
      },
      {
        id: 7,
        title:
          "Tổ chức, thực hiện tốt",
        content:
          "việc chỉ đưa ra đường lối, chủ trương mà không thực hiện/ thực hiện hời hợt sẽ tạo ra tình trạng tiêu cực ‘quan liêu’. Chỉ khi thực hiện, chỉnh sửa thì những thay đổi mới xuất hiện, mới có thể hướng tới sứ mệnh của Đảng và Nhà nước đã đề ra.",
        level: 2,
        parent: 3,
        x: 350,
        y: 1260,
      },
    ];

    const handleCardFlip = (cardId) => {
      // Toggle flip state - allow flipping back and forth
      if (flippedCards.includes(cardId)) {
        setFlippedCards(flippedCards.filter((id) => id !== cardId));
      } else {
        setFlippedCards([...flippedCards, cardId]);
      }
    };

    const cardWidth = 250;
    const cardHeight = 360;

    // Function to draw SVG line between two cards
    const getConnectionLines = () => {
      const lines = [];
      cards.forEach((card) => {
        if (card.parent) {
          const parentCard = cards.find((c) => c.id === card.parent);
          if (parentCard) {
            // Calculate center points of cards
            const x1 = parentCard.x + cardWidth / 2;
            const y1 = parentCard.y + cardHeight;
            const x2 = card.x + cardWidth / 2;
            const y2 = card.y;

            lines.push({
              id: `line-${parentCard.id}-${card.id}`,
              x1,
              y1,
              x2,
              y2,
            });
          }
        }
      });
      return lines;
    };

    return (
      <div
        className="rounded-2xl shadow-xl p-8"
        style={{ width: "100%", overflow: "hidden", backgroundColor: "rgba(234, 8, 8, 0.88)" }}
      >
        <h3 className="text-3xl font-bold mb-2" style={{ color: '#FFD93A' }}>
          Chỉnh đốn Đảng
        </h3>
        <p className="text-sm mb-12 leading-relaxed" style={{ color: '#FFD93A' }}>
          Khám phá các nội dung về chỉnh đốn Đảng bằng cách lật từng thẻ.
        </p>

        <div
          style={{
            position: "relative",
            paddingTop: "40px",
            paddingBottom: "40px",
            width: "100%",
            minHeight: "1700px",
          }}
        >
          {/* SVG for connection lines */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {getConnectionLines().map((line) => (
              <line
                key={line.id}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ))}
          </svg>

          {/* Render all cards with absolute positioning */}
          {cards.map((card) => (
            <FlipCard
              key={card.id}
              card={card}
              isFlipped={flippedCards.includes(card.id)}
              onFlip={handleCardFlip}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
            />
          ))}
        </div>

        <style>{`
          .card-item {
            position: relative;
          }

          .flip-card-3d {
            perspective: 1000px;
            position: relative;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
          }

          .flip-card-3d.is-flipped .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
          }

          .flip-card-front {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          }

          .flip-card-back {
            background: white;
            border: 3px solid #60a5fa;
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    );
  };

  // Component cho Sub-session 2: Yêu cầu phi chức năng
  const SubSession2 = () => (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-purple-200">
      <h3 className="text-3xl font-bold text-purple-600 mb-6">
        Yêu cầu phi chức năng
      </h3>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        Các yêu cầu về hiệu suất, bảo mật, khả năng mở rộng và trải nghiệm người
        dùng của hệ thống.
      </p>
      <div className="space-y-4">
        {[
          {
            icon: "⚡",
            title: "Thời gian tải trang < 3 giây",
            color: "yellow",
          },
          {
            icon: "📱",
            title: "Hỗ trợ đa thiết bị (responsive design)",
            color: "green",
          },
          { icon: "🔒", title: "Bảo mật dữ liệu người dùng", color: "red" },
          {
            icon: "📈",
            title: "Khả năng mở rộng cho 10,000+ người dùng",
            color: "blue",
          },
          {
            icon: "✨",
            title: "Giao diện thân thiện, dễ sử dụng",
            color: "purple",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-5 border-l-4 border-${item.color}-500 shadow-md hover:shadow-lg transition-all`}
          >
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
      <h3 className="text-3xl font-bold text-green-400 mb-6">
        Yêu cầu công nghệ
      </h3>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        Công nghệ và công cụ được sử dụng trong quá trình phát triển dự án.
      </p>
      <div className="grid gap-6">
        {[
          {
            category: "Frontend",
            tech: "React, Vite, TailwindCSS",
            icon: "⚛️",
            color: "cyan",
          },
          {
            category: "Backend",
            tech: "Firebase (Firestore, Authentication)",
            icon: "🔥",
            color: "orange",
          },
          {
            category: "AI/ML",
            tech: "Google Gemini API",
            icon: "🧠",
            color: "purple",
          },
          {
            category: "Deployment",
            tech: "Vercel/Netlify",
            icon: "🚀",
            color: "blue",
          },
          {
            category: "Version Control",
            tech: "Git, GitHub",
            icon: "📦",
            color: "gray",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{item.icon}</span>
              <div className="flex-1">
                <h4 className={`text-xl font-bold text-${item.color}-400 mb-2`}>
                  {item.category}
                </h4>
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
      <h3 className="text-3xl font-bold text-amber-600 mb-6">
        Yêu cầu nội dung
      </h3>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        Các yêu cầu về nội dung và dữ liệu được sử dụng trong hệ thống.
      </p>
      <div className="grid md:grid-cols-5 gap-4">
        {[
          {
            icon: "✅",
            title: "Dữ liệu chính xác",
            subtitle: "Từ nguồn đáng tin cậy",
          },
          {
            icon: "🔄",
            title: "Cập nhật thường xuyên",
            subtitle: "Nội dung mới nhất",
          },
          {
            icon: "📌",
            title: "Trích dẫn nguồn",
            subtitle: "Rõ ràng và chính xác",
          },
          {
            icon: "🇻🇳",
            title: "Tiếng Việt chuẩn",
            subtitle: "Ngôn ngữ chuyên nghiệp",
          },
          {
            icon: "🎓",
            title: "Phù hợp sinh viên",
            subtitle: "Dễ hiểu, dễ tiếp cận",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200 hover:shadow-lg transition-all text-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="font-bold text-gray-900 mb-1 text-sm">
              {item.title}
            </h4>
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
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Những yêu cầu cấp bách
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Tổng quan về các yêu cầu cấp bách trong việc Xây dựng Đảng trong sạch và phòng chống tham nhũng
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
          <div className="mx-auto" style={{ width: "100%" }}>
            {/* Session Navigation Buttons */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <button
                onClick={handlePrevious}
                disabled={currentSubSession === 1}
                className={`p-4 rounded-2xl transition-all ${
                  currentSubSession === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:scale-110"
                }`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                disabled={currentSubSession === sessions.length}
                className={`p-4 rounded-2xl transition-all ${
                  currentSubSession === sessions.length
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:scale-110"
                }`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
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
                      ? "w-12 h-3 bg-red-600"
                      : "w-3 h-3 bg-gray-300 hover:bg-red-300"
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
