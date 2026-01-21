import React, { useState } from 'react';
import Footer from '../components/Footer';

const ThamNhungPage = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [corruptionLevel, setCorruptionLevel] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [treeFallen, setTreeFallen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <style>
        {`
          @keyframes shadowTransform {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hover-shadow-transform {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .quote-appear {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          @keyframes crackExpand {
            0% {
              opacity: 0;
              transform: scale(0);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0.8;
              transform: scale(1);
            }
          }

          @keyframes crackLine {
            from {
              stroke-dashoffset: 1000;
            }
            to {
              stroke-dashoffset: 0;
            }
          }

          .crack-svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .crack-line {
            stroke: #ef4444;
            stroke-width: 2;
            fill: none;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.8));
          }

          .crack-animate .crack-line {
            animation: crackLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .shatter-piece {
            opacity: 0;
            transform-origin: center;
          }

          .crack-animate .shatter-piece {
            animation: crackExpand 1s ease-out forwards;
          }

          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(239, 68, 68, 0.6);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes glitch {
            0% {
              transform: translate(0);
              filter: hue-rotate(0deg);
            }
            20% {
              transform: translate(-5px, 5px);
              filter: hue-rotate(90deg);
            }
            40% {
              transform: translate(-5px, -5px);
              filter: hue-rotate(180deg);
            }
            60% {
              transform: translate(5px, 5px);
              filter: hue-rotate(270deg);
            }
            80% {
              transform: translate(5px, -5px);
              filter: hue-rotate(360deg);
            }
            100% {
              transform: translate(0);
              filter: hue-rotate(0deg);
            }
          }

          @keyframes glitchSkew {
            0% {
              transform: skew(0deg);
            }
            10% {
              transform: skew(-10deg);
            }
            20% {
              transform: skew(10deg);
            }
            30% {
              transform: skew(-5deg);
            }
            40% {
              transform: skew(5deg);
            }
            50% {
              transform: skew(0deg);
            }
          }

          @keyframes textScroll {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 0;
            }
          }

          @keyframes goldenGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(234, 179, 8, 0.4),
                          0 0 40px rgba(234, 179, 8, 0.2),
                          inset 0 0 20px rgba(234, 179, 8, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(234, 179, 8, 0.6),
                          0 0 60px rgba(234, 179, 8, 0.3),
                          inset 0 0 30px rgba(234, 179, 8, 0.2);
            }
          }

          .glitch-active {
            animation: glitch 0.3s infinite, glitchSkew 0.5s infinite;
          }

          .text-matrix {
            font-family: 'Courier New', monospace;
            font-weight: bold;
            text-shadow: 0 0 10px currentColor;
          }

          /* Tree animations */
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
          }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fallDown {
            0% {
              transform: rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: rotate(90deg) translateY(50px);
              opacity: 0.6;
            }
          }

          .tree-container {
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .tree-fallen {
            animation: fallDown 1s ease-in-out forwards;
          }

          .tree-shake {
            animation: shake 0.5s ease-in-out;
          }

          .root-transition {
            transition: all 1s ease-in-out;
          }

          .hole-appear {
            animation: fadeInScale 0.5s ease-out forwards;
          }

          input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            cursor: pointer;
            width: 100%;
          }

          input[type="range"]::-webkit-slider-track {
            background: linear-gradient(to right, 
              #22c55e 0%, 
              #eab308 50%, 
              #ef4444 100%);
            height: 12px;
            border-radius: 6px;
            border: 2px solid rgba(255, 255, 255, 0.2);
          }

          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            background: #dc2626;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.8);
            cursor: grab;
            transition: all 0.2s;
          }

          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.2);
            box-shadow: 0 0 30px rgba(220, 38, 38, 1);
          }

          input[type="range"]::-webkit-slider-thumb:active {
            cursor: grabbing;
            transform: scale(1.1);
          }

          input[type="range"]::-moz-range-track {
            background: linear-gradient(to right, 
              #22c55e 0%, 
              #eab308 50%, 
              #ef4444 100%);
            height: 12px;
            border-radius: 6px;
            border: 2px solid rgba(255, 255, 255, 0.2);
          }

          input[type="range"]::-moz-range-thumb {
            background: #dc2626;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.8);
            cursor: grab;
          }

          .warning-modal {
            animation: fadeInScale 0.6s ease-out forwards;
          }
        `}
      </style>

      {/* Introduction Section - Vì sao tham nhũng đe dọa */}
      <section className="mt-24 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-red-950 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Vì sao tham nhũng
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                đe dọa đến sự tồn vong của chế độ?
              </h2>
            </div>


            {/* 3 Main Points */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  number: "01",
                  title: "Phản bội lý tưởng",
                  description: "Hành động phản bội lại bản chất của chế độ",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )
                },
                {
                  number: "02",
                  title: "Đứt gãy niềm tin",
                  description: "Cắt đứt sợi dây sinh mệnh giữa Đảng và Dân",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  )
                },
                {
                  number: "03",
                  title: "Giặc nội xâm",
                  description: "Khó đánh hơn cả giặc ngoại xâm",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  style={{ animation: `slideIn 0.6s ease-out ${index * 0.2}s both` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl font-bold text-red-500/30 group-hover:text-red-500/50 transition-colors">
                      {item.number}
                    </div>
                    <div className="text-red-500 group-hover:text-red-400 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 p-1 rounded-2xl">
                <div className="bg-black px-8 py-4 rounded-2xl">
                  <p className="text-white text-lg">
                    Khám phá chi tiết 3 luận điểm dưới đây
                  </p>
                </div>
              </div>
              <div className="mt-8 animate-bounce">
                <svg className="w-8 h-8 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Luận điểm 1 */}
      <section className="mt-5 flex-col relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Title */}
        <div className=" left-0 right-0 z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Luận điểm 1
          </h1>
          <p className="mb-5 text-2xl md:text-3xl text-red-500 font-semibold">Tham nhũng là hành động "phản bội" lại bản chất của chế độ          </p>
        </div>

        {/* Split Screen Container */}
        <div className="relative w-full h-screen flex">
          {/* Left Side - Revolutionary Soldier */}
          <div 
            className="relative w-1/2 h-full overflow-hidden group"
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* Background Image - Black and White */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: 'url(/image/người%20chiến%20sĩ.jpg)',
                animation: 'goldenGlow 3s ease-in-out infinite'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              {/* Golden glow overlay */}
              <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay"></div>
            </div>

            {/* Image source credit */}
            <div className="absolute bottom-4 left-4 z-20">
              <a 
                href="https://www.qdnd.vn/van-hoa/van-hoc-nghe-thuat/chien-si-viet-ky-uc-goi-ten-774460" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-300 hover:text-white transition-colors bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
              >
                Nguồn: Báo Quân đội nhân dân
              </a>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform transition-all duration-500 group-hover:scale-105">
              </div>
            </div>
          </div>

          {/* Right Side - Corrupt Official */}
          <div 
            className="relative w-1/2 h-full overflow-hidden group"
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* Background Image - Dark Colors */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-all duration-300 ${
                hoveredSide === 'right' ? 'glitch-active' : ''
              }`}
              style={{
                backgroundImage: 'url(/image/ca-ho-lam-quan-1-1525921827477622794402.webp)',
                filter: hoveredSide === 'right' 
                  ? 'sepia(50%) saturate(120%) brightness(60%) contrast(130%) hue-rotate(-10deg)' 
                  : 'sepia(30%) saturate(80%) brightness(70%) contrast(110%)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
              
              {/* Glitch overlay effect */}
              {hoveredSide === 'right' && (
                <>
                  <div className="absolute inset-0 bg-red-500/20 mix-blend-multiply animate-pulse"></div>
                  <div className="absolute inset-0 opacity-30">
                    {/* Horizontal scan lines */}
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 w-full bg-white/10"
                        style={{
                          position: 'absolute',
                          top: `${i * 5}%`,
                          animation: `glitchSkew ${0.1 + Math.random() * 0.2}s infinite`
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Scrolling Text Matrix Effect */}
            {hoveredSide === 'right' && (
              <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                {['THỰC DÂN', 'PHONG KIẾN', 'VIỆT GIAN', 'THỰC DÂN', 'PHONG KIẾN', 'VIỆT GIAN'].map((text, colIndex) => (
                  <div
                    key={colIndex}
                    className="absolute top-0 bottom-0 flex flex-col justify-start"
                    style={{
                      left: `${10 + colIndex * 15}%`,
                      width: '12%',
                    }}
                  >
                    {[...Array(3)].map((_, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="text-matrix text-red-500 text-xl md:text-2xl font-bold py-4 whitespace-nowrap"
                        style={{
                          animation: `textScroll ${3 + Math.random() * 2}s linear infinite`,
                          animationDelay: `${rowIndex * 0.5 + colIndex * 0.3}s`,
                          opacity: 0.8,
                        }}
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Image source credit */}
            <div className="absolute bottom-4 right-4 z-20">
              <a 
                href="https://dantri.com.vn/thoi-su/chuyen-ca-ho-lam-quan-do-chua-co-luat-chong-tham-nhung-quyen-luc-20180510103838963.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-300 hover:text-white transition-colors bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
              >
                Nguồn: Báo Dân trí
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-500 to-transparent transform -translate-x-1/2 z-30"></div>

        {/* Mirror Crack Effect */}
        <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-25 transition-opacity duration-500 ${
          hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'
        }`}>
 
        </div>

        {/* Center Icon */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="bg-black border-4 border-red-500 rounded-full p-4 shadow-2xl shadow-red-500/50">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
        </div>

      </section>

      {/* Explanation Section - Redesigned */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Quote Header with Animation */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-pulse"></div>
              <svg className="w-16 h-16 text-yellow-500 mx-auto mb-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl text-white font-serif leading-relaxed mb-4 relative z-10 italic">
                "... Bạn đồng minh của thực dân và phong kiến,…<br/>tội lỗi ấy cũng nặng như tội lỗi việt gian, mật thám"
              </blockquote>
              <p className="text-yellow-400 font-bold text-xl relative z-10">— Chủ tịch Hồ Chí Minh</p>
            </div>
          </div>

          {/* Flow Diagram - Đồng minh vô tình */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tại sao là <span className="text-red-500">"Bạn đồng minh"</span>?
            </h2>
            
            <div className="relative">
              {/* SVG Arrows connecting elements */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                  </marker>
                </defs>
                {/* Arrows from enemies to center */}
                <path d="M 360 100 Q 400 50, 450 120" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                </path>
                <path d="M 360 220 Q 400 250, 450 220" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" begin="0.3s"/>
                </path>
                {/* Arrow from tham nhung to center */}
                <path d="M 750 200 L 655 200" stroke="#dc2626" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" begin="0.6s"/>
                </path>
              </svg>

              <div className="grid md:grid-cols-3 gap-6 relative" style={{ zIndex: 2 }}>
                {/* Enemies Cards */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-orange-300">THỰC DÂN</h3>
                    </div>
                    <p className="text-gray-300 text-sm">Kẻ thù bên ngoài</p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-yellow-300">PHONG KIẾN</h3>
                    </div>
                    <p className="text-gray-300 text-sm">Tàn dư cũ</p>
                  </div>

                </div>

                {/* Center Target */}
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-red-900/60 to-black/80 backdrop-blur-sm rounded-3xl p-8 border-4 border-red-500 hover:scale-110 transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-red-500/20 rounded-3xl animate-pulse"></div>
                    <div className="relative z-10 text-center">
                      <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <h3 className="text-2xl font-bold text-red-400 mb-2">SỤP ĐỔ<br/>CHẾ ĐỘ</h3>
                      <p className="text-gray-400 text-sm">Mất độc lập<br/>Trở về kiếp nô lệ</p>
                    </div>
                  </div>
                </div>

                {/* Tham nhung Card */}
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-red-900/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-500/50 hover:border-red-500 transition-all duration-300 hover:scale-105 w-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-red-400">THAM NHŨNG</h3>
                        <p className="text-gray-400 text-sm">Trong bộ máy</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Ngân khố rỗng tuếch</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Bộ máy hư hỏng</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Lòng dân ly tán</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion Box */}
            <div className="mt-8 bg-gradient-to-r from-red-900/30 via-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Hệ quả:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Dù <span className="text-yellow-400 font-semibold">vô tình hay cố ý</span>, tham nhũng đã 
                    <span className="text-red-400 font-bold"> làm suy yếu sức mạnh của chế độ</span>, 
                    tạo điều kiện thuận lợi cho kẻ thù tấn công, 
                    <span className="text-red-400 font-bold"> tiếp tay với kẻ thù để phá hoại từ bên trong</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison: Việt gian vs Tham nhũng */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tại sao <span className="text-orange-500">"Nặng như Việt gian"</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Việt gian Card */}
              <div className="group perspective-1000">
                <div className="relative bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:-rotate-2">
                  <div className="absolute top-4 right-4">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Kẻ thù rõ ràng
                    </div>
                  </div>
                  
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-bold text-orange-300 mb-4">VIỆT GIAN</h3>
                  
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <p><span className="text-white font-bold">Bán nước</span> cho địch</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <p>Phản bội <span className="text-white font-bold">lộ liễu</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tham nhũng Card */}
              <div className="group perspective-1000">
                <div className="relative bg-gradient-to-br from-red-900/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/30 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:rotate-2">
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Nguy hiểm hơn!
                    </div>
                  </div>
                  
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-bold text-red-400 mb-4">THAM NHŨNG</h3>
                  
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <p><span className="text-white font-bold">Bán rẻ niềm tin</span> của nhân dân</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p><span className="text-white font-bold">Bán rẻ công sức</span> kiến thiết đất nước</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <p>Phá hoại <span className="text-white font-bold">từ bên trong</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Conclusion */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-red-900/50 via-gray-900/50 to-red-900/50 backdrop-blur-sm rounded-3xl p-12 border-2 border-red-500/50 text-center">
              <svg className="w-20 h-20 text-red-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Đó rõ ràng là <span className="text-red-400">SỰ PHẢN BỘI</span><br/>
                lại lý tưởng, bản chất
              </h3>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                Một chế độ bị <span className="text-red-400 font-bold">phản bội từ bên trong</span><br/>
                thì <span className="text-yellow-400 font-bold text-3xl">KHÔNG THỂ ĐỨNG VỮNG</span>
              </p>
              <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg animate-pulse">
                Đây là vấn đề TỒN VONG của chế độ
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Luận điểm 2 - "Sợi dây sinh mệnh" */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-green-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider">
                LUẬN ĐIỂM 2
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              "Tham nhũng làm đứt gãy <span className="text-green-400"> sợi dây sinh mệnh</span> giữa Đảng và Dân "
            </h2>

        
          </div>

          {/* Interactive Tree */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Tree SVG */}
            <div className="relative h-[600px] flex items-center justify-center">
              <div className={`tree-container ${treeFallen ? 'tree-fallen' : ''} ${corruptionLevel > 80 && !treeFallen ? 'tree-shake' : ''}`}
                   style={{ 
                     transform: `rotate(${corruptionLevel < 50 ? 0 : corruptionLevel < 70 ? 5 : corruptionLevel < 90 ? 15 : treeFallen ? 90 : 25}deg)`,
                     transformOrigin: 'bottom center',
                     transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                   }}>
                <svg viewBox="0 0 400 600" className="w-full h-full">
                  {/* Roots */}
                  <g className="root-transition" style={{ 
                    fill: corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280'
                  }}>
                    <path d="M 200 500 Q 180 520 160 540 L 140 560" 
                          stroke={corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280'} 
                          strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <path d="M 200 500 Q 190 530 180 560" 
                          stroke={corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280'} 
                          strokeWidth="6" fill="none" strokeLinecap="round"/>
                    <path d="M 200 500 Q 210 530 220 560" 
                          stroke={corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280'} 
                          strokeWidth="6" fill="none" strokeLinecap="round"/>
                    <path d="M 200 500 Q 220 520 240 540 L 260 560" 
                          stroke={corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280'} 
                          strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <path d="M 160 540 Q 140 550 120 565" 
                          stroke={corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280'} 
                          strokeWidth="4" fill="none" strokeLinecap="round"/>
                    <path d="M 240 540 Q 260 550 280 565" 
                          stroke={corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280'} 
                          strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </g>

                  <text x="200" y="590" textAnchor="middle" className="root-transition" 
                        style={{ 
                          fill: corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280',
                          fontSize: '24px',
                          fontWeight: 'bold',
                          filter: `drop-shadow(0 0 8px ${corruptionLevel < 30 ? '#22c55e' : corruptionLevel < 60 ? '#eab308' : '#6b7280'})`
                        }}>
                    NHÂN DÂN
                  </text>

                  {/* Trunk */}
                  <g>
                    <rect x="180" y="200" width="40" height="300" fill="#8b4513" rx="5"/>
                    
                    {corruptionLevel >= 20 && (
                      <ellipse className="hole-appear" cx="195" cy="250" rx="12" ry="15" fill="#2d1810" opacity="0.8"/>
                    )}
                    {corruptionLevel >= 40 && (
                      <ellipse className="hole-appear" cx="205" cy="320" rx="15" ry="18" fill="#2d1810" opacity="0.8"/>
                    )}
                    {corruptionLevel >= 60 && (
                      <ellipse className="hole-appear" cx="190" cy="400" rx="13" ry="16" fill="#2d1810" opacity="0.8"/>
                    )}
                    {corruptionLevel >= 80 && (
                      <>
                        <ellipse className="hole-appear" cx="208" cy="460" rx="14" ry="17" fill="#2d1810" opacity="0.8"/>
                        <path d="M 185 280 L 175 320" stroke="#2d1810" strokeWidth="3" opacity="0.6"/>
                        <path d="M 215 360 L 225 400" stroke="#2d1810" strokeWidth="3" opacity="0.6"/>
                      </>
                    )}
                  </g>

                  <text x="200" y="360" textAnchor="middle" 
                        style={{ fill: 'white', fontSize: '20px', fontWeight: 'bold', 
                                 filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}>
                    NHÀ
                  </text>
                  <text x="200" y="385" textAnchor="middle" 
                        style={{ fill: 'white', fontSize: '20px', fontWeight: 'bold',
                                 filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}>
                    NƯỚC
                  </text>

                  {/* Foliage */}
                  <g opacity={Math.max(0.2, 1 - corruptionLevel / 100)}>
                    <ellipse cx="200" cy="150" rx="80" ry="70" fill="#22c55e"/>
                    <ellipse cx="150" cy="180" rx="60" ry="50" fill="#16a34a"/>
                    <ellipse cx="250" cy="180" rx="60" ry="50" fill="#16a34a"/>
                    <ellipse cx="200" cy="100" rx="50" ry="45" fill="#4ade80"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-900/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/30">
                <div className="flex items-center gap-4 mb-6">
                  <svg className="w-12 h-12 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white">Mức độ Tham nhũng</h3>
                </div>

                <div className="mb-6">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={corruptionLevel}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setCorruptionLevel(value);
                      if (value === 100) {
                        setTimeout(() => {
                          setTreeFallen(true);
                          setTimeout(() => setShowWarning(true), 1000);
                        }, 500);
                      } else {
                        setTreeFallen(false);
                        setShowWarning(false);
                      }
                    }}
                    className="w-full"
                  />
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>Trong sạch</span>
                  <span className="text-3xl font-bold text-white">{corruptionLevel}%</span>
                  <span>Tràn lan</span>
                </div>

                <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${
                      corruptionLevel < 30 ? 'bg-green-500 animate-pulse' :
                      corruptionLevel < 70 ? 'bg-yellow-500 animate-pulse' :
                      'bg-red-500 animate-pulse'
                    }`}></div>
                    <span className="text-white font-semibold">
                      {corruptionLevel < 30 && 'Hệ thống khỏe mạnh'}
                      {corruptionLevel >= 30 && corruptionLevel < 70 && 'Xuất hiện dấu hiệu suy yếu'}
                      {corruptionLevel >= 70 && corruptionLevel < 100 && 'Nguy cơ sụp đổ!'}
                      {corruptionLevel === 100 && 'HỆ THỐNG ĐÃ SUY SỤP!'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Effects Description */}
              <div className="space-y-4">
                <div className={`bg-gradient-to-r from-green-900/20 to-transparent backdrop-blur-sm rounded-xl p-4 border-l-4 ${
                  corruptionLevel < 30 ? 'border-green-500' : 'border-gray-600'
                }`}>
                  <div className="flex items-center gap-3">
                    <svg className={`w-6 h-6 flex-shrink-0 ${corruptionLevel < 30 ? 'text-green-500' : 'text-gray-600'}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={corruptionLevel < 30 ? 'text-green-300' : 'text-gray-500'}>
                      <strong>Rễ xanh tươi:</strong> Nhân dân tin tưởng
                    </span>
                  </div>
                </div>

                <div className={`bg-gradient-to-r from-yellow-900/20 to-transparent backdrop-blur-sm rounded-xl p-4 border-l-4 ${
                  corruptionLevel >= 30 && corruptionLevel < 70 ? 'border-yellow-500' : 'border-gray-600'
                }`}>
                  <div className="flex items-center gap-3">
                    <svg className={`w-6 h-6 flex-shrink-0 ${
                      corruptionLevel >= 30 && corruptionLevel < 70 ? 'text-yellow-500' : 'text-gray-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className={corruptionLevel >= 30 && corruptionLevel < 70 ? 'text-yellow-300' : 'text-gray-500'}>
                      <strong>Lỗ hổng xuất hiện:</strong> Bộ máy suy yếu
                    </span>
                  </div>
                </div>

                <div className={`bg-gradient-to-r from-red-900/20 to-transparent backdrop-blur-sm rounded-xl p-4 border-l-4 ${
                  corruptionLevel >= 70 ? 'border-red-500' : 'border-gray-600'
                }`}>
                  <div className="flex items-center gap-3">
                    <svg className={`w-6 h-6 flex-shrink-0 ${corruptionLevel >= 70 ? 'text-red-500' : 'text-gray-600'}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className={corruptionLevel >= 70 ? 'text-red-300' : 'text-gray-500'}>
                      <strong>Cây nghiêng ngả:</strong> Mất gốc, mất niềm tin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-900/30 via-blue-900/30 to-green-900/30 backdrop-blur-sm rounded-3xl p-10 border-2 border-green-500/30">
              <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl text-white text-center leading-relaxed mb-6" 
                          style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                "Rễ sâu thì cây mới vững,<br/>
                Nước trong thì cá mới nhiều,<br/>
                <span className="text-green-400">Dân tin</span> thì <span className="text-blue-400">nước mới bền</span>"
              </blockquote>
              <p className="text-center text-gray-400 text-lg">— Ngạn ngữ dân gian</p>
            </div>
          </div>

        </div>
      </section>

      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 px-4"
             onClick={() => {
               setShowWarning(false);
               setCorruptionLevel(0);
             }}>
          <div className="warning-modal bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-3xl p-12 max-w-3xl border-4 border-red-500 shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <svg className="w-32 h-32 text-red-500 mx-auto mb-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                CÂY ĐÃ ĐỔ!
              </h2>
              
              <div className="bg-black/40 rounded-2xl p-8 mb-8 border border-yellow-500/50">
                <p className="text-3xl md:text-4xl text-yellow-400 font-bold mb-4">
'Nếu Chính phủ làm hại dân thì dân có quyền <span className="text-red-400 text-5xl">ĐUỔI</span> Chính phủ'                 </p>
          
              </div>

              {/* Explanation Flow */}
              <div className="space-y-6 mb-8">
                
                {/* Main Point - ĐUỔI */}
                <div className="bg-gradient-to-r from-yellow-900/40 via-yellow-800/40 to-yellow-900/40 rounded-2xl p-8 border-2 border-yellow-500/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 text-center">
                 
                    <p className="text-white text-xl leading-relaxed">
                      Chế độ ta <span className="text-green-400 font-bold">tồn tại nhờ sự ủng hộ của dân</span>
                    </p>
                  </div>
                </div>

                {/* Process Flow */}
                <div className="grid md:grid-cols-3 gap-4">
                  
                  {/* Step 1 */}
                  <div className="bg-red-950/50 rounded-xl p-6 border-l-4 border-red-500 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg mb-2">Tham nhũng tràn lan</h4>
                        <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">Cán bộ trục lợi, tham ô</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <svg className="w-12 h-12 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-orange-950/50 rounded-xl p-6 border-l-4 border-orange-500 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg mb-2">Dân mất lòng tin</h4>
                        <svg className="w-12 h-12 text-orange-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">Coi cán bộ là kẻ bóc lột</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <svg className="w-12 h-12 text-yellow-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Result - Split in two cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  
                  {/* Left: Tính chính danh */}
                  <div className="bg-gradient-to-br from-red-900/60 to-red-950/60 rounded-xl p-6 border-2 border-red-500">
                    <div className="text-center mb-4">
                      <svg className="w-16 h-16 text-red-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <h4 className="text-2xl font-bold text-red-400 mb-2">Tính chính danh</h4>
                      <p className="text-white text-lg font-semibold">SỤP ĐỔ</p>
                    </div>
                    <p className="text-gray-300 text-sm text-center">Chế độ mất đi sự hợp pháp trong mắt nhân dân</p>
                  </div>

                  {/* Right: Cây mất gốc */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl p-6 border-2 border-gray-500">
                    <div className="text-center mb-4">
                      <svg className="w-16 h-16 text-gray-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <h4 className="text-2xl font-bold text-gray-400 mb-2">Cây mất gốc</h4>
                      <p className="text-white text-lg font-semibold">DIỆT VONG</p>
                    </div>
                    <p className="text-gray-300 text-sm text-center">Gốc rễ bị lung lay, sự sụp đổ là tất yếu</p>
                  </div>
                </div>

                {/* Final Warning Banner */}
                <div className="bg-gradient-to-r from-black via-red-900 to-black rounded-xl p-6 border border-red-500/50 text-center">
                  <p className="text-2xl text-white font-bold">
                    Khi dân <span className="text-yellow-400">mất niềm tin</span> → 
                    Dân có quyền <span className="text-red-400 text-3xl">"ĐUỔI"</span> chính phủ
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowWarning(false);
                  setCorruptionLevel(0);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Khởi động lại hệ thống
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Section 3: Luận điểm 3 - "Giặc nội xâm" */}
      <section className="relative py-20 bg-gradient-to-b from-black via-red-950/30 to-black">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider">
                LUẬN ĐIỂM 3
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              "<span className="text-orange-400">Giặc nội xâm</span>" khó đánh hơn<br/>
              giặc ngoại xâm
            </h2>
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-red-900/30 via-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30">
              <p className="text-xl text-gray-300 leading-relaxed">
                Bác Hồ gọi tham ô, lãng phí là <span className="text-orange-400 font-bold">'giặc nội xâm'</span>,<br/>
                là <span className="text-red-400 font-bold">'giặc ở trong lòng'</span>
              </p>
            </div>
          </div>

          {/* Comparison: External vs Internal Enemy */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              So sánh: Địch bên ngoài vs Giặc bên trong
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* External Enemy */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                  
                  <div className="text-center mb-6">
                    <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-bold mb-4">
                      Dễ NHẬN DIỆN
                    </div>
                    <svg className="w-20 h-20 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-3xl font-bold text-blue-300 mb-4">GIẶC NGOẠI XÂM</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 bg-blue-950/30 rounded-xl p-4">
                      <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold">Ranh giới rõ ràng</p>
                        <p className="text-blue-200 text-sm">Địch - ta phân minh</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-blue-950/30 rounded-xl p-4">
                      <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold">Toàn dân đoàn kết</p>
                        <p className="text-blue-200 text-sm">Cùng chống giặc ngoại xâm</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-blue-950/30 rounded-xl p-4">
                      <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold">Hành động nhanh chóng</p>
                        <p className="text-blue-200 text-sm">Không vướng mắc tình cảm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internal Enemy */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/30 hover:border-red-500 transition-all duration-300">
                  
                  <div className="text-center mb-6">
                    <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold mb-4">
                      KHÓ PHÁT HIỆN
                    </div>
                    <svg className="w-20 h-20 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <h3 className="text-3xl font-bold text-red-300 mb-4">GIẶC NỘI XÂM</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 bg-red-950/30 rounded-xl p-4">
                      <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold">Ẩn nấp trong hàng ngũ</p>
                        <p className="text-red-200 text-sm">Đồng chí, đồng đội hôm qua</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-red-950/30 rounded-xl p-4">
                      <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold">Dùng cơ chế bảo vệ</p>
                        <p className="text-red-200 text-sm">Nấp sau quy trình, văn bản</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-red-950/30 rounded-xl p-4">
                      <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold">Bào mòn từ bên trong</p>
                        <p className="text-red-200 text-sm">Như mối mọt ăn thầm lặng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow pointing to internal enemy being worse */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-red-500">
                <p className="text-xl font-bold text-white">
                  → <span className="text-red-400">Giặc nội xâm</span> nguy hiểm gấp bội!
                </p>
              </div>
            </div>
          </div>

          {/* 3 "Vỏ bọc" - Interactive Cards */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ba <span className="text-orange-400">"Vỏ bọc"</span> nguy hiểm
            </h3>
            <p className="text-center text-gray-400 text-lg mb-12">
              Tham nhũng khó đánh vì có 3 lớp giáp bảo vệ
            </p>

            <div className="space-y-8">
              
              {/* Vỏ bọc 1: Đồng chí, đồng đội */}
              <div className="group">
                <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-white">1</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h4 className="text-3xl font-bold text-yellow-300">Vỏ bọc: Đồng chí, đồng đội</h4>
                      </div>

                      <div className="bg-black/40 rounded-xl p-6 mb-4">
                        <p className="text-white text-lg leading-relaxed mb-4">
                          Khác với giặc ngoại xâm là những kẻ cướp nước lộ mặt, ranh giới địch - ta rất rõ ràng. 
                          Nhưng <span className="text-orange-400 font-bold">'giặc nội xâm'</span> lại ẩn nấp ngay trong hàng ngũ của chúng ta.
                        </p>
                        <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-900/20 rounded-r-lg">
                          <p className="text-yellow-200 italic">
                            Đánh giặc tham nhũng là cuộc chiến <span className="font-bold">'tự thân'</span> - 
                            phải trừng trị những người hôm qua còn là đồng chí, đồng đội, thậm chí là cấp trên của mình.
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-950/30 rounded-xl p-4 border-l-4 border-red-500">
                        <div className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <div>
                            <p className="text-red-300 font-semibold mb-1">Hệ quả:</p>
                            <p className="text-gray-300 text-sm">
                              Việc phát hiện và xử lý họ là vô cùng nhạy cảm và khó khan. 
                              Dễ rơi vào tình trạng <span className="text-red-400 font-semibold">'bênh vực lớp này, chống lại lớp khác'</span>, 
                              gây mất đoàn kết nội bộ.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vỏ bọc 2: Cơ chế quan liêu */}
              <div className="group">
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-white">2</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h4 className="text-3xl font-bold text-purple-300">Vỏ bọc: Cơ chế quan liêu</h4>
                      </div>

                      <div className="bg-black/40 rounded-xl p-6 mb-4">
                        <p className="text-white text-lg leading-relaxed mb-4">
                          Điều nguy hiểm thứ hai là <span className="text-purple-400 font-bold">'giặc nội xâm'</span> biết cách sử dụng chính 
                          <span className="text-pink-400 font-bold"> quy trình, cơ chế của Nhà nước</span> để bảo vệ mình.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-purple-950/30 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-purple-300 font-semibold">Nấp sau văn bản</span>
                            </div>
                            <p className="text-gray-400 text-sm">Những văn bản hành chính phức tạp</p>
                          </div>

                          <div className="bg-purple-950/30 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-purple-300 font-semibold">Họp đúng quy trình</span>
                            </div>
                            <p className="text-gray-400 text-sm">Nhưng 'không đi sâu sát' thực tế</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-950/30 rounded-xl p-4 border-l-4 border-red-500">
                        <div className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <div>
                            <p className="text-red-300 font-semibold mb-1">Hậu quả:</p>
                            <p className="text-gray-300 text-sm">
                              Tạo ra những <span className="text-red-400 font-semibold">'nhóm lợi ích'</span> - 
                              tệ <span className="text-red-400 font-semibold">'kéo bè, kéo cánh'</span> mà Bác cảnh báo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vỏ bọc 3: Bào mòn từ bên trong */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-900/30 to-red-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-500/30 hover:border-red-500 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-white">3</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-3xl font-bold text-gray-300">Vỏ bọc: Bào mòn từ bên trong</h4>
                      </div>

                      <div className="bg-black/40 rounded-xl p-6 mb-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex-1">
                            <p className="text-white text-lg leading-relaxed">
                              Cuối cùng, nếu không phát hiện sớm, tham nhũng giống như <span className="text-red-400 font-bold">mối mọt</span> làm 
                              <span className="text-gray-400 font-bold"> mục ruỗng chế độ từ bên trong</span>.
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <svg className="w-16 h-16 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                        </div>

                        {/* Visual metaphor - Tree being eaten by termites */}
                        <div className="bg-gradient-to-b from-gray-800 to-black rounded-xl p-6 border border-red-500/30">
                          <div className="flex items-center justify-around">
                            <div className="text-center">
                              <div className="text-4xl mb-2">🌳</div>
                              <p className="text-gray-400 text-sm">Chế độ vững mạnh</p>
                            </div>
                            
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>

                            <div className="text-center">
                              <div className="text-4xl mb-2">🐛</div>
                              <p className="text-orange-400 text-sm font-semibold">Mối mọt ăn thầm</p>
                            </div>

                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>

                            <div className="text-center">
                              <div className="text-4xl mb-2">💥</div>
                              <p className="text-red-400 text-sm font-bold">SỤP ĐỔ</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-950/30 rounded-xl p-4 border-l-4 border-red-500">
                        <div className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <div>
                            <p className="text-red-300 font-semibold mb-1">Nguy cơ:</p>
                            <p className="text-gray-300 text-sm">
                              Đến một lúc nào đó sẽ <span className="text-red-400 font-bold text-base">đe dọa, làm sụp đổ chế độ</span> - 
                              mà ta không kịp phản ứng.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThamNhungPage;
