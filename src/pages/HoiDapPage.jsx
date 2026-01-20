import React, { useState, useEffect, useRef } from 'react';
import { pctnKnowledge } from '../data/pctnKnowledge';

const HoiDapPage = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Xin chào! Tôi là trợ lý AI chuyên về **Phòng Chống Tham Nhũng ở Việt Nam**. Tôi có thể giúp bạn tìm hiểu về:\n\n• Khái niệm và đặc điểm của tham nhũng\n• Các hành vi tham nhũng theo Luật PCTN 2018\n• Nguyên nhân và hậu quả của tham nhũng\n• Các biện pháp phòng ngừa tham nhũng\n• Vai trò của giáo dục trong PCTN\n• Xây dựng văn hóa liêm chính\n\nHãy đặt câu hỏi để tôi có thể hỗ trợ bạn!'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // API Key từ biến môi trường
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestedQuestions = [
    'Tham nhũng là gì?',
    'Có bao nhiêu hành vi tham nhũng theo luật?',
    'Hậu quả của tham nhũng là gì?',
    'Sinh viên có vai trò gì trong PCTN?',
    'Văn hóa liêm chính là gì?',
  ];

  const sendMessage = async (messageText = inputValue) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const systemPrompt = `Bạn là một trợ lý AI chuyên về Phòng Chống Tham Nhũng (PCTN) ở Việt Nam. 

QUAN TRỌNG - QUY TẮC BẮT BUỘC:
1. Bạn CHỈ được trả lời các câu hỏi liên quan đến chủ đề Phòng Chống Tham Nhũng ở Việt Nam
2. Nếu câu hỏi KHÔNG liên quan đến PCTN, hãy lịch sự từ chối và hướng dẫn người dùng hỏi về PCTN
3. Sử dụng kiến thức từ tài liệu được cung cấp bên dưới để trả lời
4. Trả lời bằng tiếng Việt, ngắn gọn, dễ hiểu
5. Có thể sử dụng markdown để format câu trả lời
6. Nếu không tìm thấy thông tin trong tài liệu, hãy nói rõ và đưa ra kiến thức chung về PCTN

TÀI LIỆU THAM KHẢO:
${pctnKnowledge}

Câu hỏi của người dùng: ${messageText}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: systemPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          }
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'Lỗi API');
      }

      const assistantMessage = {
        role: 'assistant',
        content: data.candidates?.[0]?.content?.parts?.[0]?.text || 'Xin lỗi, tôi không thể xử lý yêu cầu này.'
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Xin lỗi, đã có lỗi xảy ra: ${error.message}. Vui lòng kiểm tra API key và thử lại.`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content) => {
    // Simple markdown parsing
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^• /gm, '• ')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-yellow-50 flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hỏi đáp về PCTN
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Trợ lý AI giúp bạn tìm hiểu về Phòng Chống Tham Nhũng ở Việt Nam
          </p>
        </div>
      </section>

      {/* Chat Container */}
      <div className="flex-1 container mx-auto px-6 py-6 flex flex-col max-w-4xl">
        {/* Messages */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: 'calc(100vh - 400px)', minHeight: '400px' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    message.role === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
                      <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-500">Trợ lý PCTN</span>
                    </div>
                  )}
                  <div 
                    className="text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                  />
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-6 py-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Câu hỏi gợi ý:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(question)}
                    className="px-3 py-1.5 bg-red-50 text-red-600 text-sm rounded-lg hover:bg-red-100 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập câu hỏi về Phòng Chống Tham Nhũng..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent disabled:bg-gray-100"
              />
              <button
                onClick={() => sendMessage()}
                disabled={isLoading || !inputValue.trim()}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Gửi
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 text-center text-xs text-gray-400">
          <p>Chatbot sử dụng Gemini AI với dữ liệu từ tài liệu giảng dạy PCTN trong Nhà trường</p>
          <p className="mt-1">Chỉ trả lời các câu hỏi liên quan đến Phòng Chống Tham Nhũng ở Việt Nam</p>
        </div>
      </div>
    </div>
  );
};

export default HoiDapPage;
