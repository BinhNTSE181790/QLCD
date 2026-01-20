import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsPage from './pages/NewsPage';
import LuatPage from './pages/LuatPage';
import QuizPage from './pages/QuizPage';
import AdminPanel from './pages/AdminPanel';
import DemoPage from './pages/DemoPage';
import OverviewPage from './pages/OverviewPage';
import LiemChinhPage from './pages/LiemChinhPage';
import HoiDapPage from './pages/HoiDapPage';
import XayDungDangPage from './pages/XayDungDangPage';

function AppContent() {
  const location = useLocation();
  const isDemo = location.pathname === '/demo';
  const isAdmin = location.pathname === '/admin';
  const isQuiz = location.pathname === '/quiz';
  const isOverview = location.pathname === '/';

  // Pages that need red background under navbar (except overview which has full hero)
  const needsRedBg = !isDemo && !isAdmin && !isQuiz && !isOverview;
  const bgClass = needsRedBg ? 'bg-gradient-to-r from-red-600 via-red-700 to-red-800' : 'bg-gray-50';

  // Overview page doesn't need top padding (hero goes to top)
  const needsPadding = !isDemo && !isAdmin && !isOverview;

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {!isDemo && !isAdmin && <Navbar />}
      <main className={needsPadding ? 'pt-24' : ''}>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/luat" element={<LuatPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/liem-chinh" element={<LiemChinhPage />} />
          <Route path="/hoi-dap" element={<HoiDapPage />} />
          <Route path="/xay-dung-dang" element={<XayDungDangPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
