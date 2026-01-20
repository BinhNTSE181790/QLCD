import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTdQlQzJ-1GXQRxH2fRNrMI1iJBTOKHzg",
  authDomain: "pctn-ef046.firebaseapp.com",
  projectId: "pctn-ef046",
  storageBucket: "pctn-ef046.firebasestorage.app",
  messagingSenderId: "758737513159",
  appId: "1:758737513159:web:2e1b2d08d4fb93d26d54b9",
  measurementId: "G-BLY26R1SQK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const questions = [
  {
    id: 'hcm_q1',
    question: 'Theo tài liệu, sự "mục nát", "suy tàn" của chế độ xã hội cũ được biểu hiện trước hết ở yếu tố nào?',
    options: [
      'Sự yếu kém trong điều hành, quản lý xã hội của nhà nước',
      'Sự tha hoá đạo đức, lối sống hưởng lạc của quan chức',
      'Sự phát triển mạnh mẽ của các thế lực chống đối',
      'Sự khủng hoảng kinh tế và cạn kiệt tài nguyên'
    ],
    correctAnswer: 'Sự tha hoá đạo đức, lối sống hưởng lạc của quan chức',
    explanation: 'Sự "mục nát", "suy tàn" được biểu hiện trước hết bằng sự tha hoá đạo đức, lối sống hưởng lạc, vô trách nhiệm, thiếu kỷ cương, nhũng nhiễu nhân dân của tầng lớp quan chức.'
  },
  {
    id: 'hcm_q2',
    question: 'Chủ tịch Hồ Chí Minh đã so sánh mức độ nguy hiểm của tham ô, lãng phí, quan liêu với loại kẻ thù nào?',
    options: [
      'Kẻ thù ngoại xâm có vũ khí hiện đại',
      'Giặc đói và giặc dốt',
      'Kẻ thù không mang gươm súng nhưng nằm ngay trong tổ chức',
      'Các thế lực phản động lưu vong'
    ],
    correctAnswer: 'Kẻ thù không mang gươm súng nhưng nằm ngay trong tổ chức',
    explanation: 'Bác Hồ nói kẻ thù này khá nguy hiểm vì nó không mang gươm mang súng mà nằm trong tổ chức của ta để làm hỏng công việc của ta.'
  },
  {
    id: 'hcm_q3',
    question: 'Nghị quyết số 14 ngày 15/5/1996 của Bộ Chính trị nhận định tham nhũng gây ra hậu quả chính trị nghiêm trọng nhất là gì?',
    options: [
      'Làm chậm quá trình công nghiệp hóa, hiện đại hóa',
      'Uy hiếp sự tồn vong của chế độ',
      'Làm suy giảm uy tín của Việt Nam trên trường quốc tế',
      'Gây thất thoát lớn ngân sách quốc gia'
    ],
    correctAnswer: 'Uy hiếp sự tồn vong của chế độ',
    explanation: 'Nghị quyết nhận định tham nhũng làm xói mòn bản chất Đảng và Nhà nước, tiếp tay cho thế lực thù địch, uy hiếp sự tồn vong của chế độ.'
  },
  {
    id: 'hcm_q4',
    question: 'Chiến lược quốc gia phòng, chống tham nhũng đến năm 2020 xác định tham nhũng là "vật cản lớn" cho yếu tố nào?',
    options: [
      'Thành công của công cuộc đổi mới',
      'Sự hội nhập kinh tế quốc tế',
      'Quá trình cải cách hành chính',
      'Sự nghiệp giáo dục và đào tạo'
    ],
    correctAnswer: 'Thành công của công cuộc đổi mới',
    explanation: 'Chính phủ nhận định tham nhũng trở thành vật cản lớn cho thành công của công cuộc đổi mới, cho sức chiến đấu của Đảng.'
  },
  {
    id: 'hcm_q5',
    question: 'Theo tài liệu, tham nhũng ảnh hưởng đến người dân về mặt kinh tế thông qua cơ chế nào?',
    options: [
      'Người dân phải đóng thuế thu nhập cao hơn',
      'Giá cả hàng hoá, dịch vụ bị cộng thêm các khoản "tiêu cực phí"',
      'Lãi suất ngân hàng tăng cao do lạm phát',
      'Cắt giảm các phúc lợi xã hội công cộng'
    ],
    correctAnswer: 'Giá cả hàng hoá, dịch vụ bị cộng thêm các khoản "tiêu cực phí"',
    explanation: 'Người dân thiệt hại vì phải trả thêm tiền khi mua hàng hoá, dịch vụ do giá cả đã được cộng thêm các khoản chi phí, "tiêu cực phí" của nhà sản xuất.'
  },
  {
    id: 'hcm_q6',
    question: 'Cụm từ nào sau đây được tài liệu liệt kê là biểu hiện của việc các giá trị đạo đức truyền thống bị xâm hại?',
    options: [
      'Tư duy nhiệm kỳ',
      'Văn hoá phong bì',
      'Lợi ích nhóm',
      'Sân sau'
    ],
    correctAnswer: 'Văn hoá phong bì',
    explanation: 'Tài liệu liệt kê các cụm từ như "văn hoá phong bì", "chạy dự án", "chạy chức", "chạy tội" đã không còn xa lạ.'
  },
  {
    id: 'hcm_q7',
    question: 'Theo tài liệu, nguyên nhân chủ yếu khiến người dân cảm thấy bất lực, không muốn đấu tranh với tham nhũng là gì?',
    options: [
      'Sự trả thù tàn bạo của kẻ tham nhũng',
      'Sự yếu kém trong quản lý và chỉ đạo của cơ quan nhà nước',
      'Thiếu cơ chế bảo vệ người tố cáo',
      'Người dân thiếu kiến thức pháp luật'
    ],
    correctAnswer: 'Sự yếu kém trong quản lý và chỉ đạo của cơ quan nhà nước',
    explanation: 'Nguyên nhân chủ yếu là sự yếu kém trong quản lý, điều hành xã hội, chỉ đạo, triển khai cuộc đấu tranh chống tham nhũng của cơ quan có thẩm quyền.'
  },
  {
    id: 'hcm_q8',
    question: 'Quan hệ giữa "phòng" và "chống" tham nhũng được xác định như thế nào trong phương châm chỉ đạo của Đảng và Nhà nước?',
    options: [
      'Chống là nhiệm vụ cấp bách hàng đầu',
      'Phòng và chống là hai mặt song song ngang hàng',
      'Lấy phòng ngừa là chính',
      'Ưu tiên thu hồi tài sản hơn là xử lý hình sự'
    ],
    correctAnswer: 'Lấy phòng ngừa là chính',
    explanation: 'Phương châm là lấy phòng ngừa là chính nhưng đấu tranh kiên quyết, không khoan nhượng.'
  },
  {
    id: 'hcm_q9',
    question: 'Tài liệu đề cập đến việc tham nhũng đã tấn công sang các lĩnh vực vốn được xã hội tôn vinh là lĩnh vực nào?',
    options: [
      'Văn hóa và Nghệ thuật',
      'Y tế và Giáo dục',
      'Khoa học và Công nghệ',
      'Thể dục và Thể thao'
    ],
    correctAnswer: 'Y tế và Giáo dục',
    explanation: 'Tham nhũng đã tấn công mạnh mẽ sang cả những lĩnh vực vốn được cả xã hội tôn vinh, kính trọng là y tế và giáo dục.'
  },
  {
    id: 'hcm_q10',
    question: 'Để phòng ngừa tham nhũng, trách nhiệm đặc biệt của người đứng đầu cơ quan, tổ chức là gì?',
    options: [
      'Tăng lương cho cán bộ nhân viên',
      'Thường xuyên nhắc nhở, giáo dục và xử lý nghiêm vi phạm',
      'Tổ chức các cuộc thi tìm hiểu pháp luật hàng năm',
      'Ký cam kết thi đua với cấp trên'
    ],
    correctAnswer: 'Thường xuyên nhắc nhở, giáo dục và xử lý nghiêm vi phạm',
    explanation: 'Người đứng đầu phải thường xuyên nhắc nhở, giáo dục cán bộ đồng thời xử lý nghiêm minh các hành vi tham nhũng.'
  },
  {
    id: 'hcm_q11',
    question: 'Tham nhũng được ví là "thứ giặc" gì theo lời Chủ tịch Hồ Chí Minh trích trong tài liệu?',
    options: [
      'Giặc nội xâm',
      'Giặc ở trong lòng',
      'Giặc giấu mặt',
      'Giặc ngoại xâm'
    ],
    correctAnswer: 'Giặc ở trong lòng',
    explanation: 'Bác Hồ nói: Tham ô, lãng phí, quan liêu là một thứ "giặc ở trong lòng".'
  },
  {
    id: 'hcm_q12',
    question: 'Tài liệu nhận định tham nhũng làm cho nền kinh tế đất nước rơi vào tình trạng nào?',
    options: [
      'Khủng hoảng thừa',
      'Tụt hậu ngày càng xa so với khu vực và thế giới',
      'Lạm phát phi mã',
      'Phụ thuộc hoàn toàn vào nước ngoài'
    ],
    correctAnswer: 'Tụt hậu ngày càng xa so với khu vực và thế giới',
    explanation: 'Tham nhũng làm chậm nhịp tăng trưởng, làm cho nền kinh tế rơi vào tình trạng tụt hậu ngày càng xa so với các nước trong khu vực và thế giới.'
  }
];

async function deleteAllQuestions() {
  try {
    const querySnapshot = await getDocs(collection(db, 'questions'));
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log(`✅ Đã xóa ${querySnapshot.size} câu hỏi cũ`);
  } catch (error) {
    console.error('❌ Lỗi khi xóa câu hỏi:', error);
  }
}

async function importQuestions() {
  try {
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      await setDoc(doc(db, 'questions', question.id), question);
      console.log(`✅ Đã thêm câu ${i + 1}/${questions.length}: ${question.id}`);
    }
    console.log('\n🎉 Hoàn thành! Đã thêm tất cả 15 câu hỏi mới.');
  } catch (error) {
    console.error('❌ Lỗi khi thêm câu hỏi:', error);
  }
}

async function main() {
  console.log('🔄 Bắt đầu xóa câu hỏi cũ...\n');
  await deleteAllQuestions();
  
  console.log('\n🔄 Bắt đầu thêm 15 câu hỏi mới...\n');
  await importQuestions();
  
  console.log('\n✅ Xong! Hãy kiểm tra Firebase Console.');
  process.exit(0);
}

main();
