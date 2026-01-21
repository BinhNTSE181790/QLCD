import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_Dd5gdvbKCpycmzKvJBzAA-2P6UDCZv4",
  authDomain: "spst-feb44.firebaseapp.com",
  projectId: "spst-feb44",
  storageBucket: "spst-feb44.firebasestorage.app",
  messagingSenderId: "829442510190",
  appId: "1:829442510190:web:17fc806d5b87fae616457f",
  measurementId: "G-SJL3LYK16V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const questions = [
  {
    id: 'hcm_q1',
    question: 'Một địa phương ban hành chính sách mới và tổ chức lấy ý kiến nhân dân rộng rãi; đồng thời khẳng định mọi quyền lực nhà nước thuộc về nhân dân, Nhà nước chỉ là bộ máy thay mặt dân thực thi quyền lực. Nội dung này thể hiện rõ nhất yếu tố nào?',
    options: [
      'Nhà nước của dân',
      'Nhà nước do dân',
      'Nhà nước vì dân',
      'Nhà nước pháp quyền'
    ],
    correctAnswer: 'Nhà nước của dân',
    explanation: 'Nhấn mạnh chủ thể quyền lực là nhân dân; Nhà nước chỉ là bộ máy thay mặt dân thực thi quyền lực nên thuộc về dân.'
  },
  {
    id: 'hcm_q2',
    question: 'Một tỉnh tổ chức bầu cử đại biểu theo đúng trình tự pháp luật; nhân dân trực tiếp bỏ phiếu lựa chọn người đại diện vào cơ quan quyền lực nhà nước. Tình huống này thể hiện đúng nhất ý nghĩa nào?',
    options: [
      'Nhà nước của dân',
      'Nhà nước do dân',
      'Nhà nước vì dân',
      'Nhà nước trong sạch, vững mạnh'
    ],
    correctAnswer: 'Nhà nước do dân',
    explanation: 'Thể hiện nguồn gốc quyền lực nhà nước do nhân dân trao thông qua bầu cử, dân trực tiếp lựa chọn người đại diện.'
  },
  {
    id: 'hcm_q3',
    question: 'Một cơ quan hành chính rà soát thủ tục, cắt giảm giấy tờ rườm rà, xử lý nghiêm nhũng nhiễu “bôi trơn”, đặt mục tiêu phục vụ người dân là ưu tiên số 1. Điều này phản ánh đúng nhất nội dung nào?',
    options: [
      'Nhà nước của dân',
      'Nhà nước do dân',
      'Nhà nước vì dân',
      'Dân chủ gián tiếp'
    ],
    correctAnswer: 'Nhà nước vì dân',
    explanation: 'Phản ánh mục tiêu hoạt động của Nhà nước là phục vụ lợi ích nhân dân, lấy sự hài lòng của dân làm tiêu chí.'
  },
  {
    id: 'hcm_q4',
    question: 'Phát biểu nào dưới đây phân biệt đúng “dân là chủ” và “dân làm chủ”?',
    options: [
      '“Dân là chủ” nói về nghĩa vụ; “dân làm chủ” nói về quyền lực tối cao',
      '“Dân là chủ” nói về vị thế chủ thể tối cao của nhân dân; “dân làm chủ” nhấn mạnh quyền và nghĩa vụ tham gia quản lý xã hội, thực hiện trách nhiệm công dân',
      '“Dân là chủ” chỉ tồn tại trong dân chủ trực tiếp; “dân làm chủ” chỉ tồn tại trong dân chủ gián tiếp',
      'Hai khái niệm hoàn toàn giống nhau, không có khác biệt'
    ],
    correctAnswer: '“Dân là chủ” nói về vị thế chủ thể tối cao của nhân dân; “dân làm chủ” nhấn mạnh quyền và nghĩa vụ tham gia quản lý xã hội, thực hiện trách nhiệm công dân',
    explanation: '“Dân là chủ” khẳng định vị thế quyền lực tối cao của nhân dân; “dân làm chủ” nhấn mạnh việc thực hiện quyền và trách nhiệm đó trong thực tiễn.'
  },
  {
    id: 'hcm_q5',
    question: 'Một cán bộ nói: “Chúng tôi là cơ quan nhà nước nên có quyền quyết định, dân phải chấp hành vô điều kiện; không cần giải trình.” Theo tư tưởng “quyền lực là thừa ủy quyền của nhân dân”, nhận định phù hợp nhất là:',
    options: [
      'Đúng vì quyền lực nhà nước tự thân đã có sẵn',
      'Đúng vì dân chỉ có quyền bầu, không có quyền giám sát',
      'Sai vì cán bộ/cơ quan nhà nước là công bộc; quyền lực do dân ủy thác nên phải chịu giám sát, giải trình',
      'Sai vì nhà nước không cần quyền lực'
    ],
    correctAnswer: 'Sai vì cán bộ/cơ quan nhà nước là công bộc; quyền lực do dân ủy thác nên phải chịu giám sát, giải trình',
    explanation: 'Cơ quan nhà nước là công bộc của dân, quyền lực do dân ủy thác nên phải chịu giám sát và giải trình.'
  },
  {
    id: 'hcm_q6',
    question: 'Một cơ quan vừa soạn quy định, vừa tự kiểm tra việc thực hiện, vừa tự xử lý vi phạm mà không có cơ chế giám sát độc lập. Nguy cơ lớn nhất cần cảnh báo là gì?',
    options: [
      'Tăng hiệu quả nên không có nguy cơ',
      'Dễ dẫn đến lạm quyền, tùy tiện, “vừa đá bóng vừa thổi còi”',
      'Chỉ làm chậm tiến độ công việc, không liên quan quyền lực',
      'Chỉ gây thiếu nhân lực'
    ],
    correctAnswer: 'Dễ dẫn đến lạm quyền, tùy tiện, “vừa đá bóng vừa thổi còi”',
    explanation: 'Khi tập trung cả ban hành - thực thi - kiểm tra, rất dễ dẫn đến lạm quyền, tùy tiện, thiếu khách quan.'
  },
  {
    id: 'hcm_q7',
    question: 'Phương án nào thể hiện đúng tinh thần phân công, phối hợp và kiểm soát quyền lực giữa lập pháp - hành pháp - tư pháp?',
    options: [
      'Lập pháp ban hành luật; hành pháp tổ chức thi hành; tư pháp xét xử độc lập theo pháp luật; đồng thời có cơ chế giám sát và trách nhiệm giải trình giữa các cơ quan',
      'Hành pháp ban hành luật để tiện điều hành; lập pháp chỉ góp ý; tư pháp phụ thuộc hành pháp để thống nhất chỉ đạo',
      'Tư pháp lãnh đạo lập pháp và hành pháp để tránh xung đột',
      'Một cơ quan nắm toàn bộ 3 quyền để quyết định nhanh'
    ],
    correctAnswer: 'Lập pháp ban hành luật; hành pháp tổ chức thi hành; tư pháp xét xử độc lập theo pháp luật; đồng thời có cơ chế giám sát và trách nhiệm giải trình giữa các cơ quan',
    explanation: 'Ba nhánh quyền lực có chức năng riêng, phối hợp nhưng kiểm soát lẫn nhau, bảo đảm không quyền lực nào bị tuyệt đối hóa.'
  },
  {
    id: 'hcm_q8',
    question: 'Tình huống nào dưới đây thể hiện đúng yêu cầu: pháp luật vừa là công cụ quản lý xã hội, vừa là công cụ để nhân dân làm chủ, kiểm tra, giám sát quyền lực?',
    options: [
      'Ban hành quy định nội bộ, không công khai để dễ điều hành',
      'Công khai quy trình - tiêu chuẩn - thời hạn giải quyết; có kênh tiếp nhận phản ánh; người dân có quyền yêu cầu giải trình và khiếu nại theo luật',
      'Khuyến khích giải quyết bằng “linh hoạt tình cảm” thay vì quy định',
      'Chỉ cần tuyên truyền đạo đức, không cần cơ chế pháp lý'
    ],
    correctAnswer: 'Công khai quy trình - tiêu chuẩn - thời hạn giải quyết; có kênh tiếp nhận phản ánh; người dân có quyền yêu cầu giải trình và khiếu nại theo luật',
    explanation: 'Pháp luật không chỉ quản lý mà còn trao quyền cho dân giám sát, yêu cầu giải trình và khiếu nại, bảo đảm quyền làm chủ thực chất.'
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
