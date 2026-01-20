# 🎓 Hệ thống Quiz TDKTNN

Website quiz tương tác realtime với Firebase Firestore, được xây dựng bằng React + Vite + TailwindCSS.

## 📋 Tính năng

### Cho Admin:
- ✅ Tạo và quản lý các phiên quiz
- 🚀 Bắt đầu/Dừng/Kết thúc quiz
- ➡️ Chuyển câu hỏi tiếp theo
- 👥 Theo dõi người chơi realtime
- 🏆 Xem bảng xếp hạng trực tiếp

### Cho Người chơi:
- 🎯 Tham gia quiz bằng mã session
- ❓ Trả lời câu hỏi với timer 20s
- ⚡ Điểm thưởng dựa trên tốc độ
- 🏆 Xem kết quả và bảng xếp hạng realtime

## 🚀 Cài đặt

### 1. Clone project và cài dependencies

```cmd
cd c:\Users\Admin\Desktop\FPT\HCM\PCTN
npm install
```

### 2. Cấu hình Firebase

**Bước 1:** Tạo Firebase project tại https://console.firebase.google.com/

**Bước 2:** Tạo Firestore Database (chế độ test mode)

**Bước 3:** Copy config từ Firebase và tạo file `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:xxxxxxxxxxxxx
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Thêm câu hỏi vào Firestore

Vào Firebase Console → Firestore Database → Tạo collection `questions`

Thêm document với cấu trúc:
```javascript
{
  question: "Nội dung câu hỏi?",
  options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
  correctAnswer: "Đáp án đúng",
  explanation: "Giải thích (optional)"
}
```

**Hoặc** sử dụng script import từ file `HUONG_DAN_QUIZ.md`

### 4. Chạy development server

```cmd
npm run dev
```

Mở trình duyệt tại: http://localhost:5173

## 📁 Cấu trúc Project

```
PCTN/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar
│   │   ├── Quiz.jsx            # Component quiz chính
│   │   └── Leaderboard.jsx     # Bảng xếp hạng
│   ├── pages/
│   │   ├── NewsPage.jsx        # Trang tin tức
│   │   ├── LuatPage.jsx        # Trang luật
│   │   ├── QuizPage.jsx        # Trang quiz người dùng
│   │   └── AdminPanel.jsx      # Trang admin
│   ├── utils/
│   │   └── score.js            # Logic tính điểm
│   ├── firebase.js             # Cấu hình Firebase
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎮 Hướng dẫn sử dụng

### Cho Admin:

1. Truy cập: http://localhost:5173/admin
2. Nhập mã session (VD: `session_001`) và click "Tạo Session"
3. Click vào session vừa tạo
4. Chia sẻ mã session cho học sinh
5. Click "🚀 Start Quiz" để bắt đầu
6. Click "➡️ Next" để chuyển câu
7. Click "🏁 End" để kết thúc

### Cho Người chơi:

1. Truy cập: http://localhost:5173/quiz
2. Nhập tên và mã session
3. Click "🚀 Tham gia ngay"
4. Đợi admin bắt đầu quiz
5. Chọn đáp án và click "🚀 Gửi đáp án"
6. Xem kết quả và chờ câu tiếp theo

## 🔥 Cấu trúc Firebase

### Collection: `questions`
```javascript
{
  question: string,
  options: array<string>,
  correctAnswer: string,
  explanation: string
}
```

### Collection: `sessions`
```javascript
{
  status: "waiting" | "in-progress" | "completed",
  currentQuestionIndex: number,
  createdAt: string,
  totalQuestions: number
}
```

### Sub-collection: `sessions/{sessionId}/players`
```javascript
{
  id: string,
  name: string,
  score: number,
  answers: array,
  joinedAt: string,
  answeredQuestions: object
}
```

## 🎯 Cơ chế tính điểm

- **Điểm cơ bản:** 100 điểm (trả lời đúng)
- **Time Bonus:**
  - 0-5s: +50 điểm
  - 5-10s: +30 điểm
  - 10-15s: +15 điểm
  - 15-20s: +5 điểm
- **Trả lời sai:** 0 điểm

## 📚 Tài liệu chi tiết

Xem file `HUONG_DAN_QUIZ.md` để biết thêm chi tiết về:
- Luồng hoạt động hệ thống
- Hướng dẫn setup Firebase từ đầu
- Các phương pháp thêm câu hỏi
- Testing & Debugging
- Troubleshooting

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** TailwindCSS
- **Routing:** React Router v6
- **Database:** Firebase Firestore
- **Realtime:** Firestore Snapshots

## 📦 Build for Production

```cmd
npm run build
```

Preview production build:
```cmd
npm run preview
```

## 🤝 Hỗ trợ

Nếu gặp vấn đề, vui lòng kiểm tra:
1. File `.env` đã cấu hình đúng chưa
2. Firebase Firestore đã được tạo chưa
3. Collection `questions` đã có dữ liệu chưa
4. Firebase Rules cho phép read/write chưa

---

**Made with ❤️ for TDKTNN**
