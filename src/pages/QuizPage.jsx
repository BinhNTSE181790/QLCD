import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, onSnapshot, collection, query } from 'firebase/firestore';
import { db } from '../firebase';
import Quiz from '../components/Quiz';
import Leaderboard from '../components/Leaderboard';

const QuizPage = () => {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [hasJoined, setHasJoined] = useState(false);
  const [sessionData, setSessionData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!hasJoined || !sessionId) return;

    // Subscribe to session changes
    const sessionRef = doc(db, 'sessions', sessionId);
    const unsubscribe = onSnapshot(sessionRef, (snapshot) => {
      if (snapshot.exists()) {
        setSessionData(snapshot.data());
      }
    });

    return () => unsubscribe();
  }, [hasJoined, sessionId]);

  useEffect(() => {
    if (!hasJoined) return;

    // Load questions
    const loadQuestions = async () => {
      try {
        const q = query(collection(db, 'questions'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const questionsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setQuestions(questionsData);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    loadQuestions();
  }, [hasJoined]);

  const handleJoin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Check if session exists
      const sessionRef = doc(db, 'sessions', sessionId);
      const sessionSnap = await getDoc(sessionRef);

      if (!sessionSnap.exists()) {
        setError('Room không tồn tại!');
        setLoading(false);
        return;
      }

      // Create player
      const newPlayerId = `player_${Date.now()}`;
      const playerRef = doc(db, `sessions/${sessionId}/players`, newPlayerId);
      
      await setDoc(playerRef, {
        id: newPlayerId,
        name: playerName,
        score: 0,
        answers: [],
        joinedAt: new Date().toISOString(),
        answeredQuestions: {}
      });

      setPlayerId(newPlayerId);
      setHasJoined(true);
      setLoading(false);
    } catch (error) {
      console.error('Error joining room:', error);
      setError('Có lỗi xảy ra khi tham gia. Vui lòng thử lại!');
      setLoading(false);
    }
  };

  if (!hasJoined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-[#DA291C] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  🎯 Tham gia Quiz
                </h1>
                <p className="text-gray-600">
                  Nhập thông tin để bắt đầu
                </p>
              </div>

              <form onSubmit={handleJoin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tên của bạn
                  </label>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#DA291C] focus:outline-none focus:ring-4 focus:ring-yellow-100"
                    placeholder="Nhập tên của bạn"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mã Phòng
                  </label>
                  <input
                    type="text"
                    value={sessionId}
                    onChange={(e) => setSessionId(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#DA291C] focus:outline-none focus:ring-4 focus:ring-yellow-100"
                    placeholder="Nhập mã phòng"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#DA291C] text-[#FFCD00] py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg"
                >
                  {loading ? '⏳ Đang tham gia...' : '🚀 Tham gia ngay'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[sessionData?.currentQuestionIndex];
  const isWaiting = sessionData?.status === 'waiting';
  const isCompleted = sessionData?.status === 'completed';

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Header Info */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#DA291C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                👋 Xin chào, {playerName}!
              </h2>
              <p className="text-gray-600">Phòng: {sessionId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Mã người chơi</p>
              <p className="font-mono text-sm">{playerId.slice(-8)}</p>
            </div>
          </div>
        </div>

        {isWaiting && (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="animate-pulse text-6xl mb-4">⏳</div>
            <h2 className="text-3xl font-bold text-[#DA291C] mb-4" style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}>
              Đang chờ khởi động quiz...
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Vui lòng đợi trong giây lát
            </p>
            <Leaderboard sessionId={sessionId} />
          </div>
        )}

        {isCompleted && (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-[#DA291C] mb-4" >
              Quiz đã kết thúc!
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Cảm ơn bạn đã tham gia
            </p>
            <Leaderboard sessionId={sessionId} />
          </div>
        )}

        {sessionData?.status === 'in-progress' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Quiz
                sessionId={sessionId}
                playerId={playerId}
                currentQuestion={currentQuestion}
                currentQuestionIndex={sessionData.currentQuestionIndex}
                revealAnswers={sessionData.revealAnswers || false}
              />
            </div>
            <div className="lg:col-span-1">
              <Leaderboard sessionId={sessionId} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
