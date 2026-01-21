import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const OverviewPage = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);
  const fullText = '❝... Tham nhũng là từ trong Đảng mà ra… ❞';
  const author = '— ĐBQH Dương Trung Quốc';
  const navigate = useNavigate();

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Handle scroll to show question
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100 && !showQuestion) {
        setShowQuestion(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showQuestion]);

  const handleStartExplore = () => {
    navigate('/xay-dung-dang');
  };

  const renderTypewriterText = () => {
    return typewriterText;
  };

  return (
    <div className="min-h-screen bg-black">
      <style>
        {`
          @keyframes fadeOut {
            to {
              opacity: 0;
            }
          }
          
          @keyframes shatter {
            0% {
              opacity: 1;
              transform: translate(0, 0) rotate(0deg) scale(1);
            }
            100% {
              opacity: 0;
              transform: translate(var(--x), var(--y)) rotate(var(--rotation)) scale(0.2);
            }
          }

          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.6;
            }
          }

          .cursor-blink::after {
            content: '|';
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 50% {
              opacity: 1;
            }
            51%, 100% {
              opacity: 0;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
        `}
      </style>

      {/* Main Hero Section - Đặt vấn đề */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image from local public folder */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/image/1.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        {/* Image source credit */}
        <div className="absolute bottom-4 right-4 z-10">
          <a 
            href="https://vietnamnet.vn/tran-tro-cua-dai-bieu-duong-trung-quoc-truoc-khi-roi-quoc-hoi-722643.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-300 transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
          >
            Nguồn ảnh: VietNamNet
          </a>
        </div>

        {/* Decorative glowing elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" style={{ animation: 'pulse-slow 4s infinite' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800/10 rounded-full blur-3xl" style={{ animation: 'pulse-slow 5s infinite 1s' }}></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Typewriter text */}
            <div className="mb-12">
              <h1 
                className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-relaxed text-white min-h-[160px] flex items-center justify-center ${
                  typewriterText.length === fullText.length ? 'cursor-blink' : ''
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {renderTypewriterText()}
              </h1>
              {typewriterText.length === fullText.length && (
                <p className="text-xl md:text-2xl text-gray-300 italic animate-fade-in">
                  {author}
                </p>
              )}
            </div>

            {/* Questions that appear after shatter */}
            <div 
              className={`transition-all duration-1000 ${
                showQuestion 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10 pointer-events-none'
              }`}
            >
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-red-500/30 shadow-2xl mb-8">
                <p className="text-xl md:text-2xl lg:text-3xl text-red-200 mb-6 leading-relaxed">
                  Liệu tham nhũng có phải xuất phát từ chính quyền lực?
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Và việc xây dựng Đảng trong sạch, vững mạnh và xây dựng Nhà nước của dân, do dân, vì dân sẽ gặp những thách thức nào?
                </p>
              </div>

              {/* Call to action button */}
              <button
                onClick={handleStartExplore}
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 transform hover:scale-105"
                style={{ animation: 'float 3s ease-in-out infinite' }}
              >
                Bắt đầu khám phá
                <svg 
                  className="w-6 h-6 ml-3 group-hover:translate-y-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {showQuestion && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OverviewPage;
