import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFbdmfFNjKZg4KtBdok4iiIi4hBrWrlaU",
  authDomain: "pctn-ef046.firebaseapp.com",
  projectId: "pctn-ef046",
  storageBucket: "pctn-ef046.firebasestorage.app",
  messagingSenderId: "697151927982",
  appId: "1:697151927982:web:f7024e2ede625e5b269f3f",
  measurementId: "G-FQXB9GKELC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data câu hỏi
const questions = [
  {
    question: "Câu 1: Đây là câu hỏi số 1?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án A",
    explanation: "Giải thích cho câu 1: Đáp án A đúng vì đây là câu hỏi mẫu số 1"
  },
  {
    question: "Câu 2: Đây là câu hỏi số 2?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án B",
    explanation: "Giải thích cho câu 2: Đáp án B đúng vì đây là câu hỏi mẫu số 2"
  },
  {
    question: "Câu 3: Đây là câu hỏi số 3?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án C",
    explanation: "Giải thích cho câu 3: Đáp án C đúng vì đây là câu hỏi mẫu số 3"
  },
  {
    question: "Câu 4: Đây là câu hỏi số 4?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án D",
    explanation: "Giải thích cho câu 4: Đáp án D đúng vì đây là câu hỏi mẫu số 4"
  },
  {
    question: "Câu 5: Đây là câu hỏi số 5?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án A",
    explanation: "Giải thích cho câu 5: Đáp án A đúng vì đây là câu hỏi mẫu số 5"
  },
  {
    question: "Câu 6: Đây là câu hỏi số 6?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án B",
    explanation: "Giải thích cho câu 6: Đáp án B đúng vì đây là câu hỏi mẫu số 6"
  },
  {
    question: "Câu 7: Đây là câu hỏi số 7?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án C",
    explanation: "Giải thích cho câu 7: Đáp án C đúng vì đây là câu hỏi mẫu số 7"
  },
  {
    question: "Câu 8: Đây là câu hỏi số 8?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án D",
    explanation: "Giải thích cho câu 8: Đáp án D đúng vì đây là câu hỏi mẫu số 8"
  },
  {
    question: "Câu 9: Đây là câu hỏi số 9?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án A",
    explanation: "Giải thích cho câu 9: Đáp án A đúng vì đây là câu hỏi mẫu số 9"
  },
  {
    question: "Câu 10: Đây là câu hỏi số 10?",
    options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    correctAnswer: "Đáp án B",
    explanation: "Giải thích cho câu 10: Đáp án B đúng vì đây là câu hỏi mẫu số 10"
  }
];

// Xóa tất cả câu hỏi cũ
async function deleteAllQuestions() {
  console.log('🗑️ Đang xóa câu hỏi cũ...');
  const querySnapshot = await getDocs(collection(db, 'questions'));
  console.log(`📊 Tìm thấy ${querySnapshot.size} câu hỏi cần xóa`);
  
  for (const doc of querySnapshot.docs) {
    await deleteDoc(doc.ref);
  }
  console.log('✅ Đã xóa tất cả câu hỏi cũ');
}

// Import vào Firestore
async function importQuestions() {
  console.log('📝 Bắt đầu thêm câu hỏi mới...');
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    await addDoc(collection(db, 'questions'), q);
    console.log(`✅ Đã thêm câu ${i + 1}/10: ${q.question}`);
  }
  console.log('🎉 Hoàn thành! Đã thêm 10 câu hỏi mẫu');
}

// Chạy script
async function runSetup() {
  try {
    await deleteAllQuestions();
    await importQuestions();
  } catch (error) {
    console.error('❌ Lỗi:', error);
  }
}

runSetup();
