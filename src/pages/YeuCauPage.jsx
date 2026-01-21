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
        title: "Tổ chức, thực hiện tốt",
        content:
          "Việc chỉ đưa ra đường lối, chủ trương mà không thực hiện/ thực hiện hời hợt sẽ tạo ra tình trạng tiêu cực ‘quan liêu’. Chỉ khi thực hiện, chỉnh sửa thì những thay đổi mới xuất hiện, mới có thể hướng tới sứ mệnh của Đảng và Nhà nước đã đề ra.",
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
        className="rounded-2xl shadow-xl p-8 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200"
        style={{ width: "100%", overflow: "hidden" }}
      >
        <h3 className="text-3xl font-bold mb-2 flex gap-2 text-red-600">Chỉnh đốn Đảng</h3>
        <p className="text-sm mb-12 leading-relaxed">
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
                stroke="#fbbf24"
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

  // Component cho Sub-session 2: Kiểm soát quyền lực Nhà nước
  const SubSession2 = () => {
    const [showAnswerImportant, setShowAnswerImportant] = useState(false);
    const [showWays, setShowWays] = useState(false);

    return (
      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-red-200">
        <h3 className="text-3xl font-bold text-red-600 mb-6">
          Kiểm soát quyền lực Nhà nước
        </h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Là <strong className="text-red-600">yêu cầu tất yếu</strong> (theo
          quan điểm của chủ tịch Hồ Chí Minh). Việc kiểm soát này để phòng chống
          sự thoái hóa, biến chất trong chính bộ máy nhà nước.
        </p>
        {/* tại sao lại coi đây là yêu cầu tất yếu */}
        <div
          className="bg-white rounded-xl p-5 border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all mb-4 cursor-pointer"
          onClick={() => setShowAnswerImportant(!showAnswerImportant)}
        >
          Tại sao lại coi đây là <strong>yêu cầu tất yếu</strong>?
        </div>
        {showAnswerImportant && (
          <div
            className={`bg-white rounded-xl p-5 border-l-4 border-gray-300 shadow-md hover:shadow-lg transition-all mb-10`}
          >
            <div className="flex items-center gap-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 150 150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
                />
              </svg>
              <p className="text-gray-800 font-medium text-md">
                Quyền lực nhà nước là do nhân dân ủy thác, nhưng khi đã nắm giữ
                quyền lực, bất kì cán bộ nào cũng có nguy cơ trở nên lạm quyền,
                "cậy thế, cậy quyền", quên rằng dân là chủ. Để đảm bảo quyền lực
                tối cao của nhân dân không bị xâm phạm, việc kiểm soát quyền lực
                của Nhà nước là tất yếu.
              </p>
            </div>
          </div>
        )}

        {/* cơ chế kiểm soát */}
        <div
          className="bg-white rounded-xl p-5 border-l-4 border-green-700 shadow-md hover:shadow-lg transition-all mb-4 cursor-pointer"
          onClick={() => setShowWays(!showWays)}
        >
          <strong>Cơ chế kiểm soát</strong> quyền lực Nhà nước
        </div>
        {showWays && (
          <div className="space-y-4">
            {[
              {
                title: "Phát huy vai trò lãnh đạo của Đảng",
                content:
                  "Đảng có quyền và trách nhiệm kiểm soát quyền lực Nhà nước thông qua 1 hệ thống chặt chẽ được vận hành bởi những người có uy tín cao trong bộ máy chính trị.",
              },
              {
                title: "Kiểm soát từ bên trong bộ máy",
                content:
                  "Thực hiện phân công, phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp. Chẳng hạn, Nghị viện (Quốc hội) có quyền kiểm soát và phê bình Chính phủ.",
              },
              {
                title: "Sử dụng Pháp luật làm công cụ kiểm soát",
                content:
                  "Pháp luật là phương tiện  để kiểm soát quyền lực nhà nước, phản ánh ý nguyện của nhân dân và bảo vệ lợi ích của họ.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-5 border-l-4 border-gray-300 shadow-md hover:shadow-lg transition-all mb-2 flex`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 200 200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
                  />
                </svg>
                <div>
                  <p className="text-gray-800 font-bold text-md">
                    {item.title}
                  </p>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Component cho Sub-session 3: Yêu cầu công nghệ
  const SubSession3 = () => {
    const [openItemIndex, setOpenItemIndex] = useState(null);

    const items = [
      {
        title: 'Xác lập vị thế "Dân là chủ"',
        content:
          "Nhà nước của ta là nhà nước của dân. Nhân dân có quyền kiểm soát, phê bình Nhà nước, thậm chí bãi miễn những đại biểu không xứng đáng với sự tín nhiệm. Thậm chí, ngay cả Chính phủ cũng có thể bị đuổi nếu đe dọa/làm hại nhân dân.",
      },
      {
        title: "Hình thức giám sát",
        content:
          'Nhân dân thực hiện quyền lực và giám sát thông qua <strong>dân chủ trực tiếp</strong> và <strong>dân chủ gián tiếp</strong>. Hồ Chí Minh nhấn mạnh: "mọi công tác phải dựa hẳn vào quần chúng, hoan nghênh quần chúng đôn đốc và kiểm tra".',
      },
      {
        title: "Nâng cao năng lực làm chủ của dân",
        content:
          "Để giám sát hiệu quả, cần nâng cao trình độ dân trí, giáo dục ý thức tôn trọng pháp luật và tạo điều kiện thuận lợi để người dân dám nói, dám làm.",
      },
    ];

    const handleToggleItem = (index) => {
      setOpenItemIndex(openItemIndex === index ? null : index);
    };

    return (
      <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl shadow-xl p-8 text-white">
        <h3 className="text-3xl font-bold text-red-600 mb-2">
          Huy động nhân dân tham gia giám sát
        </h3>
        <p className="text-gray-800 text-lg mb-6 leading-relaxed">
          Nhân dân là <strong>chủ thể tối cao của quyền lực</strong>, vì vậy
          việc huy động nhân dân giám sát là yêu cầu quan trọng nhất để ngăn
          chặn tiêu cực
        </p>
        <div className="grid gap-6">
          {items.map((item, index) => (
            <div key={index}>
              <div
                className="bg-red-300 rounded-xl p-6 border-2 border-red-700 hover:border-gray-500 hover:shadow-lg hover:border-5 transition-all cursor-pointer"
                onClick={() => handleToggleItem(index)}
              >
                <div className="flex items-start gap-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16a1 1 0 0 1-.707-1.707L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 16z"
                    />
                  </svg>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  </div>
                </div>
              </div>
              {openItemIndex === index && (
                <div className="bg-white rounded-xl p-6 border-2 border-gray-300 mt-2 shadow-md">
                  <p
                    className="text-gray-800 font-mono text-md"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Component cho Sub-session 4: Yêu cầu nội dung
  const SubSession4 = () => (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl shadow-xl p-8 text-white">
      <h3 className="text-3xl font-bold text-red-600 mb-6">
        Đấu tranh để củng cố niềm tin
      </h3>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        Những hành động chỉnh đốn, kiểm soát và giám sát hướng tới mục tiêu{" "}
        <strong>tẩy trừ các "căn bệnh"</strong> gây mất lòng dân, xây dựng niềm
        tin vững chắc giữa Đảng, Nhà nước và nhân dân.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: 'Tẩy trừ "giặc nội xâm"',
            subtitle:
              "Phải kiên quyết chống tham ô, lãng phí, quan liêu - những thứ giặc nguy hiểm làm suy yếu bộ máy từ bên trong. Đặc biệt, quan liêu còn được coi là bệnh gốc sinh ra các bệnh tham ô, lãng phí.",
          },
          {
            title: "Chống đặc quyền, đặc lợi",
            subtitle:
              'Phải loại bỏ tư tưởng "một người làm quan cả họ được nhờ", tình trạng kéo bè kéo cánh, gây mất đoàn kết nội bộ và làm mất uy tín của Chính phủ.',
          },
          {
            title: "Lấy dân làm gốc",
            subtitle:
              'Mọi hoạt động của Chính phủ phải nhằm mục đích duy nhất là mưu cầu hạnh phúc cho mọi người. Chỉ khi cán bộ thực sự là "công bộc" của dân, biết "lo trước thiên hạ, vui sau thiên hạ", niềm tin của nhân dân vào Đảng và Nhà nước mới được củng cố vững chắc.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200 hover:shadow-lg transition-all text-justify"
          >
            <h4 className="font-bold text-gray-900 mb-1 text-lg text-center">
              {item.title}
            </h4>
            <p className="text-gray-600 text-md">{item.subtitle}</p>
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
            Tổng quan về các yêu cầu cấp bách trong việc Xây dựng Đảng trong
            sạch và phòng chống tham nhũng
          </p>
        </div>
      </section>

      {/* Sub-sessions Navigation */}
      <section className="sticky top-24 z-40 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            {[
              { id: 1, title: "Chỉnh đốn Đảng" },
              { id: 2, title: "Kiểm soát quyền lực Nhà nước" },
              { id: 3, title: "Huy động nhân dân tham gia giám sát" },
              { id: 4, title: "Đấu tranh để củng cố niềm tin" },
            ].map((session, index) => (
              <button
                key={session.id}
                onClick={() => setCurrentSubSession(session.id)}
                className={`relative flex items-center gap-2 px-8 py-5 font-medium whitespace-nowrap transition-all duration-300 ${
                  currentSubSession === session.id
                    ? "text-red-600"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentSubSession === session.id
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {session.title}
                </span>
                {/* Active indicator line */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 transition-transform duration-300 origin-left ${
                    currentSubSession === session.id
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto" style={{ width: "100%" }}>
            {/* Dynamic Session Content - Each sub-session renders its own component */}
            <CurrentSessionComponent />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default YeuCauPage;
