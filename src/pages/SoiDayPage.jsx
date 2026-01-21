import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const SoiDayPage = () => {
  const [corruptionLevel, setCorruptionLevel] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [treeFallen, setTreeFallen] = useState(false);

  useEffect(() => {
    if (corruptionLevel === 100) {
      setTimeout(() => {
        setTreeFallen(true);
        setTimeout(() => {
          setShowWarning(true);
        }, 1000);
      }, 500);
    } else {
      setTreeFallen(false);
      setShowWarning(false);
    }
  }, [corruptionLevel]);

  const getRootColor = () => {
    if (corruptionLevel < 30) return '#22c55e'; // green
    if (corruptionLevel < 60) return '#eab308'; // yellow
    return '#6b7280'; // gray
  };

  const getTrunkDecay = () => {
    if (corruptionLevel < 20) return 0;
    if (corruptionLevel < 40) return 1;
    if (corruptionLevel < 60) return 2;
    if (corruptionLevel < 80) return 3;
    return 4;
  };

  const getTiltAngle = () => {
    if (corruptionLevel < 50) return 0;
    if (corruptionLevel < 70) return 5;
    if (corruptionLevel < 90) return 15;
    return treeFallen ? 90 : 25;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <style>
        {`
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

          @keyframes crumble {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(0.95);
            }
            100% {
              transform: scale(0.9);
              opacity: 0.5;
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

      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-block mb-6">
            <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider">
              LUẬN ĐIỂM 2
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            "Sợi dây <span className="text-green-400">sinh mệnh</span>"
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed">
            Mối liên hệ giữa <span className="text-green-400 font-bold">Nhân dân</span> và <span className="text-blue-400 font-bold">Nhà nước</span>
          </p>
        </div>
      </section>

      {/* Interactive Tree Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Introduction */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-green-900/30 via-blue-900/30 to-green-900/30 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 max-w-4xl mx-auto">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-3xl font-bold text-white mb-4">Ẩn dụ: Cây cổ thụ</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                <span className="text-green-400 font-bold">Gốc rễ</span> = Nhân dân<br/>
                <span className="text-blue-400 font-bold">Thân cây</span> = Nhà nước
              </p>
            </div>
          </div>

          {/* Tree Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Tree SVG */}
            <div className="relative h-[600px] flex items-center justify-center">
              <div className={`tree-container ${treeFallen ? 'tree-fallen' : ''} ${corruptionLevel > 80 && !treeFallen ? 'tree-shake' : ''}`}
                   style={{ 
                     transform: `rotate(${getTiltAngle()}deg)`,
                     transformOrigin: 'bottom center'
                   }}>
                <svg viewBox="0 0 400 600" className="w-full h-full">
                  {/* Roots */}
                  <g className="root-transition" style={{ fill: getRootColor() }}>
                    {/* Main root system */}
                    <path d="M 200 500 Q 180 520 160 540 L 140 560" stroke={getRootColor()} strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <path d="M 200 500 Q 190 530 180 560" stroke={getRootColor()} strokeWidth="6" fill="none" strokeLinecap="round"/>
                    <path d="M 200 500 Q 210 530 220 560" stroke={getRootColor()} strokeWidth="6" fill="none" strokeLinecap="round"/>
                    <path d="M 200 500 Q 220 520 240 540 L 260 560" stroke={getRootColor()} strokeWidth="8" fill="none" strokeLinecap="round"/>
                    
                    {/* Secondary roots */}
                    <path d="M 160 540 Q 140 550 120 565" stroke={getRootColor()} strokeWidth="4" fill="none" strokeLinecap="round"/>
                    <path d="M 240 540 Q 260 550 280 565" stroke={getRootColor()} strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </g>

                  {/* Root label */}
                  <text x="200" y="590" textAnchor="middle" className="root-transition" 
                        style={{ 
                          fill: getRootColor(),
                          fontSize: '24px',
                          fontWeight: 'bold',
                          filter: `drop-shadow(0 0 8px ${getRootColor()})`
                        }}>
                    NHÂN DÂN
                  </text>

                  {/* Trunk */}
                  <g>
                    <rect x="180" y="200" width="40" height="300" fill="#8b4513" rx="5"/>
                    
                    {/* Decay holes based on corruption level */}
                    {getTrunkDecay() >= 1 && (
                      <ellipse className="hole-appear" cx="195" cy="250" rx="12" ry="15" fill="#2d1810" opacity="0.8"/>
                    )}
                    {getTrunkDecay() >= 2 && (
                      <ellipse className="hole-appear" cx="205" cy="320" rx="15" ry="18" fill="#2d1810" opacity="0.8"/>
                    )}
                    {getTrunkDecay() >= 3 && (
                      <ellipse className="hole-appear" cx="190" cy="400" rx="13" ry="16" fill="#2d1810" opacity="0.8"/>
                    )}
                    {getTrunkDecay() >= 4 && (
                      <>
                        <ellipse className="hole-appear" cx="208" cy="460" rx="14" ry="17" fill="#2d1810" opacity="0.8"/>
                        {/* Cracks */}
                        <path d="M 185 280 L 175 320" stroke="#2d1810" strokeWidth="3" opacity="0.6"/>
                        <path d="M 215 360 L 225 400" stroke="#2d1810" strokeWidth="3" opacity="0.6"/>
                      </>
                    )}
                  </g>

                  {/* Trunk label */}
                  <text x="200" y="360" textAnchor="middle" 
                        style={{ 
                          fill: 'white',
                          fontSize: '20px',
                          fontWeight: 'bold',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
                        }}>
                    NHÀ
                  </text>
                  <text x="200" y="385" textAnchor="middle" 
                        style={{ 
                          fill: 'white',
                          fontSize: '20px',
                          fontWeight: 'bold',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
                        }}>
                    NƯỚC
                  </text>

                  {/* Foliage - opacity reduces with corruption */}
                  <g opacity={Math.max(0.2, 1 - corruptionLevel / 100)}>
                    <ellipse cx="200" cy="150" rx="80" ry="70" fill="#22c55e"/>
                    <ellipse cx="150" cy="180" rx="60" ry="50" fill="#16a34a"/>
                    <ellipse cx="250" cy="180" rx="60" ry="50" fill="#16a34a"/>
                    <ellipse cx="200" cy="100" rx="50" ry="45" fill="#4ade80"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Controls and Info */}
            <div className="space-y-8">
              
              {/* Slider Control */}
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
                    onChange={(e) => setCorruptionLevel(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>Trong sạch</span>
                  <span className="text-3xl font-bold text-white">{corruptionLevel}%</span>
                  <span>Tràn lan</span>
                </div>

                {/* Status indicator */}
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
                  "Dân có quyền <span className="text-red-400 text-5xl">ĐUỔI</span> Chính phủ"
                </p>
                <p className="text-xl text-gray-300">
                  Khi niềm tin bị phá vỡ hoàn toàn,<br/>
                  nhân dân có quyền thay đổi người lãnh đạo
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-left bg-red-950/50 rounded-xl p-4">
                  <svg className="w-8 h-8 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-white text-lg">Rễ khô héo = Dân mất niềm tin</span>
                </div>
                <div className="flex items-center gap-4 text-left bg-red-950/50 rounded-xl p-4">
                  <svg className="w-8 h-8 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-white text-lg">Thân mục rỗng = Nhà nước mất hiệu lực</span>
                </div>
                <div className="flex items-center gap-4 text-left bg-red-950/50 rounded-xl p-4">
                  <svg className="w-8 h-8 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-white text-lg">Cây đổ = Chế độ sụp đổ</span>
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

      <Footer />
    </div>
  );
};

export default SoiDayPage;
