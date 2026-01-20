import React, { useState, useEffect } from 'react';
import { doc, updateDoc, increment, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { calculateScore } from '../utils/score';

const Quiz = ({ sessionId, playerId, currentQuestion, currentQuestionIndex, isAdmin = false, revealAnswers = false }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [timer, setTimer] = useState(13);
  const [earnedScore, setEarnedScore] = useState(0);

  useEffect(() => {
    // Reset state khi chuyển câu mới
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setTimeSpent(0);
    setTimer(13);
    setEarnedScore(0);
  }, [currentQuestionIndex]);

  useEffect(() => {
    // Dừng timer khi đã submit (cho user) hoặc khi timer = 0
    if (timer === 0 || (!isAdmin && isSubmitted)) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted, timer, isAdmin]);

  const handleTimeout = async () => {
    if (isSubmitted) return;
    
    setIsSubmitted(true);
    
    // Nếu chưa chọn đáp án thì điểm = 0
    if (!selectedAnswer && !isAdmin) {
      const playerRef = doc(db, `sessions/${sessionId}/players/${playerId}`);
      await updateDoc(playerRef, {
        [`answeredQuestions.${currentQuestionIndex}`]: false
      });
    }
  };

  const handleSubmit = async () => {
    if (!selectedAnswer || isSubmitted || isAdmin) return;

    setIsSubmitted(true);
    
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const score = calculateScore(isCorrect, timeSpent);
    setEarnedScore(score);

    try {
      // Lưu đáp án và điểm tạm thời, chưa cộng vào tổng điểm
      const playerRef = doc(db, `sessions/${sessionId}/players/${playerId}`);
      await updateDoc(playerRef, {
        [`answers.${currentQuestionIndex}`]: {
          answer: selectedAnswer,
          isCorrect: isCorrect,
          score: score,
          timeSpent: timeSpent
        },
        [`answeredQuestions.${currentQuestionIndex}`]: true
      });
    } catch (error) {
      console.error('Error saving answer:', error);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 text-lg">Đang tải câu hỏi...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Timer */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600 font-medium">
          Câu {currentQuestionIndex + 1}
        </div>
        <div className={`text-3xl font-bold ${timer <= 5 ? 'text-red-500 animate-pulse' : 'text-purple-600'}`}>
          ⏱️ {timer}s
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentQuestion.correctAnswer;
          
          // Hiện màu kết quả khi revealAnswers = true (cho cả admin và user)
          const shouldReveal = revealAnswers;
          
          let bgColor = 'bg-gray-50 hover:bg-gray-100';
          if (shouldReveal && isCorrect) {
            bgColor = 'bg-green-100 border-green-500';
          } else if (shouldReveal && isSelected && !isCorrect) {
            bgColor = 'bg-red-100 border-red-500';
          } else if (isSelected) {
            bgColor = 'bg-purple-100 border-purple-500';
          }

          return (
            <button
              key={index}
              onClick={() => !isSubmitted && !isAdmin && setSelectedAnswer(option)}
              disabled={isSubmitted || isAdmin}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${
                isSubmitted || isAdmin ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <span className="font-bold text-purple-600 mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="text-gray-800">{option}</span>
            </button>
          );
        })}
      </div>

      {/* Submit Button - Hidden in admin mode */}
      {!isSubmitted && !isAdmin && (
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
            selectedAnswer
              ? 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          🚀 Gửi đáp án
        </button>
      )}

      {/* Waiting for reveal - User has submitted but answers not revealed yet */}
      {isSubmitted && !isAdmin && !revealAnswers && (
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
          <div className="text-center">
            <div className="animate-pulse text-4xl mb-3">⏳</div>
            <p className="text-lg font-bold text-blue-600 mb-2">
              Đã gửi đáp án!
            </p>
            <p className="text-gray-600">
              Chờ công bố kết quả...
            </p>
          </div>
        </div>
      )}

      {/* Result - Show when answers are revealed (for both users and admin) */}
      {revealAnswers && (
        <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
          <div className="text-center mb-4">
            {selectedAnswer === currentQuestion.correctAnswer ? (
              <>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  ✅ Chính xác!{!isAdmin && ` +${earnedScore} điểm`}
                </p>
                {!isAdmin && earnedScore > 100 && (
                  <p className="text-sm text-purple-600">
                    ⚡ Time Bonus: +{earnedScore - 100} điểm
                  </p>
                )}
              </>
            ) : (
              <p className="text-2xl font-bold text-red-600">
                 {isAdmin ? 'Đáp án ' : (selectedAnswer ? '❌ Chưa chính xác!' : '❌ Chưa trả lời!')}
              </p>
            )}
          </div>

          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Đáp án đúng:</p>
            <p className="font-bold text-green-600 mb-3">
              {currentQuestion.correctAnswer}
            </p>
            
            {currentQuestion.explanation && (
              <>
                <p className="text-sm text-gray-600 mb-2">Giải thích:</p>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </>
            )}
          </div>

          {!isAdmin && (
            <p className="text-center text-gray-600 mt-4">
              Đang chờ chuyển câu tiếp theo...
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
