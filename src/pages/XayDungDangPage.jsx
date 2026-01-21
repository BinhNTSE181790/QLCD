import React, { useState } from 'react';

const XayDungDangPage = () => {
    const [activeTab, setActiveTab] = useState('intro');

    const tabs = [
        { id: 'intro', label: 'Mở bài' },
        // { id: 'party', label: 'Xây dựng Đảng' },
        { id: 'state', label: 'Nhà nước của dân' },
        { id: 'lawState', label: 'Nhà nước pháp quyền' },
        { id: 'application', label: 'Vận dụng' },
        { id: 'conclusion', label: 'Kết luận' },
    ];

    const renderIntroContent = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Mở bài</h3>
                        <p className="text-gray-500">Tư tưởng Hồ Chí Minh về xây dựng Đảng và Nhà nước</p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Trong tư tưởng Hồ Chí Minh, <strong className="text-red-600">xây dựng Đảng</strong> và <strong className="text-red-600">xây dựng Nhà nước</strong> là hai mặt gắn bó chặt chẽ: Đảng giữ vai trò lãnh đạo thì phải thường xuyên tự chỉnh đốn để luôn "trong sạch, vững mạnh"; Nhà nước là công cụ tổ chức và quản lý xã hội thì phải là Nhà nước <em>của dân, do dân, vì dân</em>, hoạt động theo Hiến pháp và pháp luật, đồng thời luôn gắn bó với nhân dân.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-justify mt-4">
                        Những quan điểm này vừa là <strong>cơ sở lý luận</strong>, vừa là <strong>định hướng thực tiễn</strong> để xây dựng hệ thống chính trị nước ta hiện nay.
                    </p>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border-l-4 border-red-500">
                    <p className="text-sm text-gray-600 italic">
                        <strong>Nguồn:</strong> Giáo trình học phần Tư tưởng Hồ Chí Minh, tr.80–83; tr.90–91
                    </p>
                </div>
            </div>
        </div>
    );

    const renderPartyContent = () => (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">I. Tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch, vững mạnh</h3>
                <p className="text-gray-600">Dựa theo phần "Vận dụng tư tưởng Hồ Chí Minh vào công tác xây dựng Đảng và xây dựng Nhà nước"</p>
            </div>

            {/* 1. Đường lối, chủ trương */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        1
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Đường lối, chủ trương phải đúng đắn và phù hợp thực tiễn</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Đường lối, chủ trương đúng là yếu tố quyết định. Giáo trình nêu rõ: <strong className="text-red-600">"sai một ly có thể đi một dặm"</strong>; do đó đường lối phải dựa trên nền tảng lý luận <em>Mác – Lênin</em> và <em>tư tưởng Hồ Chí Minh</em>, đồng thời phù hợp hoàn cảnh đất nước từng giai đoạn, thời kỳ.
                    </p>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.90</p>
            </div>

            {/* 2. Tổ chức thực hiện */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        2
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Tổ chức thực hiện tốt đường lối; đề cao trách nhiệm nêu gương</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Không chỉ đúng về chủ trương, Đảng phải tổ chức thực hiện thật tốt; thể chế hóa và biến thành hành động tích cực của các tổ chức trong hệ thống chính trị. Giáo trình đặc biệt nhấn mạnh vai trò <strong className="text-red-600">đội ngũ cán bộ</strong>, nhất là cán bộ chiến lược và người đứng đầu; người đứng đầu phải <strong>nêu cao trách nhiệm, làm gương</strong> để mọi người noi theo.
                    </p>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.90</p>
            </div>

            {/* 3. Chỉnh đốn Đảng */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        3
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Chú trọng hơn nữa công tác chỉnh đốn Đảng; thống nhất giữa "nói và làm"</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Giáo trình khẳng định thành công của sự nghiệp đổi mới gắn chặt với chất lượng và sự trong sạch của Đảng. Vì vậy, phải <strong className="text-red-600">thường xuyên chỉnh đốn nội bộ</strong> để Đảng xứng đáng là người cầm quyền; đảng viên xứng đáng vừa là người lãnh đạo, vừa là <em>người đầy tớ thật trung thành của nhân dân</em>.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Đồng thời, cái thiếu nhất hiện nay là <strong className="text-red-600">sự thống nhất giữa nói và làm</strong>; cần quán triệt sâu sắc tư tưởng Hồ Chí Minh về "nói đi đôi với làm", tăng cường kiểm tra, giám sát để Đảng sử dụng và phát huy tốt quyền lực nhân dân giao phó.
                    </p>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.90</p>
            </div>

            {/* 4. Ví dụ minh họa */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        4
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Ví dụ minh họa (quá khứ)</h4>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-4 border-l-4 border-yellow-500">
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Trong giáo trình, một ví dụ gần gũi với sinh viên là trích dẫn bối cảnh Hồ Chí Minh viết <strong className="text-red-600">"Thư gửi học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa (tháng 9-1945)"</strong>, qua đó nhắc nhở tinh thần học tập, rèn luyện để góp phần xây dựng đất nước.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-justify mt-3">
                        Ví dụ này cho thấy vai trò <strong>nêu gương, giáo dục và động viên con người</strong> - yếu tố quan trọng để xây dựng đội ngũ và củng cố tổ chức.
                    </p>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.91</p>
            </div>
        </div>
    );

    const renderStateContent = () => (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">II. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân</h3>
                <p className="text-gray-600">Ba trụ cột trong quan điểm về xây dựng Nhà nước</p>
            </div>

            {/* Nhà nước của nhân dân */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">CỦA DÂN</span>
                        <h4 className="text-xl font-bold text-gray-900">1. Nhà nước của nhân dân</h4>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Theo quan điểm của Hồ Chí Minh, Nhà nước của nhân dân là Nhà nước mà <strong className="text-red-600">tất cả quyền lực trong Nhà nước và trong xã hội đều thuộc về nhân dân</strong>; <em>"dân là chủ"</em>. Nhân dân thực thi quyền lực thông qua <strong>dân chủ trực tiếp</strong> và <strong>dân chủ gián tiếp (đại diện)</strong>.
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-4 border-l-4 border-red-500">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Trong hình thức dân chủ gián tiếp, quyền lực nhà nước là <strong className="text-red-600">"thừa ủy quyền"</strong> của nhân dân; bản thân Nhà nước không tự có quyền lực. Vì thế, cơ quan nhà nước và đội ngũ cán bộ của nó phải là <strong>"công bộc" của nhân dân</strong> - gánh vác việc chung cho dân, không phải để đè đầu dân.
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.80–81; Hồ Chí Minh, Toàn tập, t.4, tr.64–65</p>
            </div>

            {/* Nhà nước do nhân dân */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded">DO DÂN</span>
                        <h4 className="text-xl font-bold text-gray-900">2. Nhà nước do nhân dân</h4>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Nhà nước do nhân dân trước hết là Nhà nước <strong className="text-red-600">do nhân dân lập nên</strong> sau thắng lợi của sự nghiệp cách mạng; nhân dân "cử ra", "tổ chức nên" Nhà nước theo các trình tự dân chủ với quyền bầu cử, phúc quyết…
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-4 border-l-4 border-yellow-500">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Bên cạnh đó, "do nhân dân" còn có nghĩa <strong className="text-red-600">"dân làm chủ"</strong>. Nếu "dân là chủ" xác định vị thế chủ thể tối cao của nhân dân đối với quyền lực nhà nước, thì "dân làm chủ" nhấn mạnh <strong>quyền lợi và nghĩa vụ</strong> của nhân dân với tư cách là người chủ. Nhân dân có quyền lợi làm chủ thì cũng phải có nghĩa vụ làm trọn bổn phận công dân: tuân theo pháp luật, giữ gìn trật tự chung, đóng góp nghĩa vụ, tham gia công việc chung, bảo vệ của công và Tổ quốc…
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.82</p>
            </div>

            {/* Nhà nước vì nhân dân */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">VÌ DÂN</span>
                        <h4 className="text-xl font-bold text-gray-900">3. Nhà nước vì nhân dân</h4>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Nhà nước vì dân là Nhà nước <strong className="text-red-600">phục vụ lợi ích và nguyện vọng của nhân dân</strong>, không có đặc quyền đặc lợi; phải trong sạch, cần kiệm, liêm chính.
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-xl p-4 border-l-4 border-green-500">
                        <p className="text-gray-800 font-medium text-lg text-center">
                            "Việc gì có lợi cho dân thì làm. Việc gì có hại cho dân thì phải tránh"
                        </p>
                        <p className="text-center text-sm text-gray-500 mt-2">— Hồ Chí Minh, Toàn tập, t.4, tr.21</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Để "được lòng dân", cán bộ nhà nước phải biết đặt quyền lợi của dân lên trên hết, có tinh thần <strong className="text-red-600">chí công vô tư</strong>; vừa là "đầy tớ" trung thành, vừa là người lãnh đạo nhân dân - đây là yêu cầu cao về cả <strong>"đức"</strong> và <strong>"tài"</strong>.
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.83</p>
            </div>
        </div>
    );

    const renderLawStateContent = () => (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">III. Nhà nước pháp quyền; nhà nước trong sạch, vững mạnh và kiểm soát quyền lực</h3>
                <p className="text-gray-600">Pháp luật nhân văn và kiểm soát quyền lực</p>
            </div>

            {/* Pháp quyền nhân nghĩa */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Pháp quyền nhân nghĩa</h4>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Giáo trình nhấn mạnh: trong <strong className="text-red-600">pháp quyền nhân nghĩa</strong>, pháp luật có tính nhân văn, khuyến thiện; khi xây dựng và thi hành pháp luật phải dựa trên nền tảng <strong>đạo đức xã hội</strong> và các giá trị đạo đức thấm sâu vào quy định pháp luật - pháp luật phải là <strong className="text-red-600">"pháp luật vì con người"</strong>.
                    </p>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.86</p>
            </div>

            {/* Kiểm soát quyền lực */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Kiểm soát quyền lực</h4>
                </div>
                <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Về kiểm soát quyền lực, giáo trình nêu rõ: <strong className="text-red-600">kiểm soát quyền lực nhà nước là tất yếu</strong>. Quyền lực do nhân dân ủy thác, nhưng khi đã nắm giữ quyền lực, cơ quan và cán bộ nhà nước có thể trở nên <strong>lạm quyền</strong> nếu thiếu kiểm soát.
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-red-50 rounded-xl p-4 border-l-4 border-purple-500">
                        <p className="text-gray-700 leading-relaxed text-justify font-medium">
                            ⚠️ Cảnh báo: Quyền lực nếu không được kiểm soát sẽ dễ dàng bị lạm dụng, dẫn đến tham nhũng và xa rời nhân dân.
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">Nguồn: Giáo trình, tr.86; Hồ Chí Minh, Toàn tập, t.6, tr.437</p>
            </div>
        </div>
    );

    const renderApplicationContent = () => (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">IV. Vận dụng vào xây dựng Nhà nước hiện nay</h3>
                <p className="text-gray-600">Những định hướng vận dụng chủ yếu (theo giáo trình)</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="grid gap-4">
                    {[
                        {
                            icon: '🏛️',
                            title: 'Xây dựng Nhà nước trong sạch, vững mạnh',
                            content: 'Đẩy mạnh hoàn thiện pháp luật gắn với tổ chức thi hành pháp luật để nâng cao hiệu lực, hiệu quả quản lý.'
                        },
                        {
                            icon: '⚖️',
                            title: 'Pháp luật làm công cụ kép',
                            content: 'Bảo đảm pháp luật vừa là công cụ Nhà nước quản lý xã hội, vừa là công cụ để nhân dân làm chủ, kiểm tra, giám sát quyền lực nhà nước.'
                        },
                        {
                            icon: '📜',
                            title: 'Hoàn thiện hệ thống pháp luật',
                            content: 'Tiếp tục hoàn thiện hệ thống pháp luật; tôn trọng, bảo đảm và bảo vệ quyền con người, quyền và nghĩa vụ của công dân.'
                        },
                        {
                            icon: '🔄',
                            title: 'Phân công, phối hợp quyền lực',
                            content: 'Xác định rõ cơ chế phân công, phối hợp thực thi quyền lực nhà nước, nhất là cơ chế kiểm soát quyền lực giữa các cơ quan lập pháp, hành pháp, tư pháp; làm rõ quyền hạn và trách nhiệm của mỗi quyền.'
                        },
                        {
                            icon: '👥',
                            title: 'Xây dựng đội ngũ cán bộ, công chức',
                            content: 'Chú trọng tiêu chí, tiêu chuẩn, cơ chế, chính sách; đẩy mạnh dân chủ hóa công tác cán bộ; quy định rõ trách nhiệm người đứng đầu; tăng kiểm tra, giám sát, kiểm soát việc thực thi công vụ.'
                        },
                        {
                            icon: '📋',
                            title: 'Tuyển chọn và đánh giá',
                            content: 'Triển khai các hình thức tuyển chọn phù hợp như thi tuyển chức danh cán bộ quản lý; hoàn thiện tiêu chí đánh giá và cơ chế kiểm tra, giám sát.'
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-red-50/30 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-2xl">
                                {item.icon}
                            </div>
                            <div>
                                <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">Nguồn: Giáo trình, tr.91</p>
            </div>
        </div>
    );

    const renderConclusionContent = () => (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kết luận</h3>
                <p className="text-gray-600">Tổng kết giá trị bền vững của tư tưởng Hồ Chí Minh</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Tư tưởng Hồ Chí Minh về <strong className="text-red-600">xây dựng Đảng trong sạch, vững mạnh</strong> và <strong className="text-red-600">Nhà nước của dân, do dân, vì dân</strong> có giá trị bền vững.
                    </p>

                    <div className="my-6 grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border-l-4 border-red-500">
                            <h5 className="font-bold text-red-800 mb-2">🏛️ Về Đảng</h5>
                            <p className="text-gray-700 text-sm">
                                Đảng muốn lãnh đạo tốt phải có đường lối đúng, tổ chức thực hiện tốt, thường xuyên chỉnh đốn và thống nhất nói đi đôi với làm.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border-l-4 border-yellow-500">
                            <h5 className="font-bold text-yellow-800 mb-2">🇻🇳 Về Nhà nước</h5>
                            <p className="text-gray-700 text-sm">
                                Nhà nước muốn vững mạnh phải đặt nhân dân ở vị trí chủ thể tối cao của quyền lực, coi cán bộ là công bộc, lấy phục vụ lợi ích nhân dân làm mục tiêu.
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-justify">
                        Nhà nước phải quản lý xã hội bằng <strong>Hiến pháp, pháp luật</strong>, đồng thời bảo đảm <strong>cơ chế kiểm soát quyền lực</strong>. Vận dụng đúng các quan điểm ấy sẽ góp phần xây dựng hệ thống chính trị <em>trong sạch, hiệu lực</em> và được nhân dân tin tưởng.
                    </p>
                </div>
            </div>

            {/* Tài liệu tham khảo */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Tài liệu tham khảo
                </h4>
                <ol className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-red-600">1.</span>
                        <span>Giáo trình học phần Tư tưởng Hồ Chí Minh (bản PDF do người học cung cấp), các trang 80-83, 86, 90-91.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-red-600">2.</span>
                        <span>Hồ Chí Minh, Toàn tập, Nxb Chính trị quốc gia, Hà Nội, 2011 (các trích dẫn theo chú thích trong giáo trình: t.4, t.5, t.6, t.7, t.8, t.9, t.10, t.12).</span>
                    </li>
                </ol>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-yellow-50">
            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
                <div className="container mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Xây dựng Đảng và Nhà nước
                    </h1>
                    <p className="text-xl text-red-100 max-w-3xl mx-auto">
                        Tư tưởng Hồ Chí Minh về xây dựng Đảng trong sạch, vững mạnh và Nhà nước của dân, do dân, vì dân
                    </p>
                </div>
            </section>

            {/* Tabs Navigation */}
            <section className="sticky top-24 z-40 bg-white/95 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex items-center gap-2 px-6 py-5 font-medium whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                                        ? 'text-red-600'
                                        : 'text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-red-600 text-white'
                                            : 'bg-gray-200 text-gray-600'
                                        }`}>
                                        {index + 1}
                                    </span>
                                    {tab.label}
                                </span>
                                {/* Active indicator line */}
                                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 transition-transform duration-300 origin-left ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'
                                    }`}></span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    {activeTab === 'intro' && renderIntroContent()}
                    {activeTab === 'party' && renderPartyContent()}
                    {activeTab === 'state' && renderStateContent()}
                    {activeTab === 'lawState' && renderLawStateContent()}
                    {activeTab === 'application' && renderApplicationContent()}
                    {activeTab === 'conclusion' && renderConclusionContent()}
                </div>
            </section>
        </div>
    );
};

export default XayDungDangPage;
