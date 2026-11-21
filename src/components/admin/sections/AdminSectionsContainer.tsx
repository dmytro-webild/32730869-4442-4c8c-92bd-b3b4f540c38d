import React, { useState } from 'react';
import {
  Users,
  Plus,
  CheckCircle2,
  ExternalLink,
  Upload,
  Cloud,
  Check,
  Cpu,
  ShieldCheck,
  RefreshCw,
  Copy,
  Trash2,
  Edit,
  Key,
} from 'lucide-react';
import type { AdminTab, UserItem, ProjectItem, TicketItem, MediaAsset } from '@/types/admin';

interface AdminSectionsContainerProps {
  activeTab: AdminTab;
  isDarkMode: boolean;
  setActiveTab: (tab: AdminTab) => void;
  searchQuery: string;
}

export const AdminSectionsContainer: React.FC<AdminSectionsContainerProps> = ({
  activeTab,
  isDarkMode,
  setActiveTab,
  searchQuery,
}) => {
  // State for interactive features
  const [users, setUsers] = useState<UserItem[]>([
    { id: '1', name: 'أحمد محمد', email: 'ahmed@masar.app', role: 'مدير المنصة', status: 'نشط', projectsCount: 14, lastActive: 'الآن', avatar: 'https://images.pexels.com/photos/29442189/pexels-photo-29442189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: '2', name: 'سارة علي', email: 'sara@masar.app', role: 'مشرف', status: 'نشط', projectsCount: 8, lastActive: 'منذ 5 د', avatar: 'https://images.pexels.com/photos/26965819/pexels-photo-26965819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: '3', name: 'محمد عبدالله', email: 'm.abdullah@client.com', role: 'عميل', status: 'نشط', projectsCount: 2, lastActive: 'منذ 3 ساعات', avatar: 'https://images.pexels.com/photos/18069160/pexels-photo-18069160.png?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: '4', name: 'خالد العمري', email: 'khaled@dev.io', role: 'مطور', status: 'نشط', projectsCount: 6, lastActive: 'أمس', avatar: 'https://images.pexels.com/photos/41100791/pexels-photo-41100791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: '5', name: 'منى السعيد', email: 'mona@tech.sa', role: 'عميل', status: 'دعوة معلقة', projectsCount: 1, lastActive: 'غير نشط', avatar: 'https://images.pexels.com/photos/36120740/pexels-photo-36120740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ]);

  const [projects] = useState<ProjectItem[]>([
    { id: '1', name: 'منصة مسار الرقمية', type: 'موقع إلكتروني', domain: 'masar.app', status: 'نشط', visitors: '145.2K', lastUpdated: 'منذ 10 د', thumbnail: 'https://images.pexels.com/photos/7269696/pexels-photo-7269696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: '2', name: 'متجر العطور الفاخرة', type: 'متجر رقمي', domain: 'perfume.masar.app', status: 'نشط', visitors: '42.8K', lastUpdated: 'منذ ساعة', thumbnail: 'https://images.pexels.com/photos/38285051/pexels-photo-38285051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: '3', name: 'تطبيق الخدمات السريعة', type: 'تطبيق جوال', domain: 'app.services.io', status: 'قيد التطوير', visitors: '12.5K', lastUpdated: 'أمس', thumbnail: 'https://images.pexels.com/photos/29404574/pexels-photo-29404574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { id: '4', name: 'بوابة العقارات الذهبية', type: 'موقع إلكتروني', domain: 'realestate.sa', status: 'نشط', visitors: '89.1K', lastUpdated: 'منذ يومين', thumbnail: 'https://images.pexels.com/photos/1294868/pexels-photo-1294868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ]);

  const [tickets] = useState<TicketItem[]>([
    { id: 'TCK-1092', user: 'محمد عبدالله', subject: 'طلب ربط دومين مخصص', category: 'فني', priority: 'عالية', status: 'مفتوحة', createdAt: 'منذ 15 دقيقة' },
    { id: 'TCK-1091', user: 'سارة علي', subject: 'استفسار عن خطة Enterprise', category: 'فواتير', priority: 'متوسطة', status: 'قيد المعالجة', createdAt: 'منذ ساعة' },
    { id: 'TCK-1090', user: 'علي حسن', subject: 'مشكلة في تحميل الصورة في محرر المواقع', category: 'تطوير', priority: 'منخفضة', status: 'مغلقة', createdAt: 'منذ 3 ساعات' },
  ]);

  const [mediaAssets] = useState<MediaAsset[]>([
    { id: '1', name: 'hero-banner-2026.webp', type: 'image', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80', size: '1.2 MB', uploadedAt: 'منذ ساعة' },
    { id: '2', name: 'brand-logo-white.svg', type: 'image', url: 'https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp', size: '14 KB', uploadedAt: 'أمس' },
    { id: '3', name: 'platform-demo-video.mp4', type: 'video', url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80', size: '24.5 MB', uploadedAt: 'منذ 3 أيام' },
  ]);

  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<UserItem['role']>('عميل');

  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  const cardBgClass = isDarkMode ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl' : 'bg-white border-slate-200 text-slate-800 shadow-md';

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName || !newUserEmail) return;
    const newUser: UserItem = {
      id: String(Date.now()),
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
      status: 'نشط',
      projectsCount: 1,
      lastActive: 'الآن',
      avatar: 'https://images.pexels.com/photos/10335067/pexels-photo-10335067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    };
    setUsers([newUser, ...users]);
    setNewUserName('');
    setNewUserEmail('');
    setShowAddUserModal(false);
  };

  const handleAiGenerate = () => {
    if (!aiPrompt) return;
    setIsAiGenerating(true);
    setTimeout(() => {
      setAiResponse(`تم إنشاء تصميم وبنية قسم "${aiPrompt}" بنجاح! تم استخدام شبكة التجاوب ومكونات مسار القياسية، ويمكنك إدراجه مباشرة في المحرر والمرئيات.`);
      setIsAiGenerating(false);
    }, 1200);
  };

  // Render according to activeTab
  switch (activeTab) {
    case 'users':
      return (
        <div className="space-y-6" dir="rtl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-500" />
                <span>إدارة المستخدمين والصلاحيات</span>
              </h1>
              <p className="text-xs text-slate-400 mt-1">عرض جميع حسابات الأعضاء والمشرفين والعملاء والتحكم بأدوارهم</p>
            </div>
            <button
              onClick={() => setShowAddUserModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg hover:bg-blue-500 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة مستخدم جديد</span>
            </button>
          </div>

          {/* Table Container */}
          <div className={`rounded-2xl border overflow-hidden ${cardBgClass}`}>
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs sm:text-sm">
                <thead className={`border-b ${isDarkMode ? 'bg-slate-800/50 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                  <tr>
                    <th className="p-4 font-bold">المستخدم</th>
                    <th className="p-4 font-bold">البريد الإلكتروني</th>
                    <th className="p-4 font-bold">الدور</th>
                    <th className="p-4 font-bold">الحالة</th>
                    <th className="p-4 font-bold">المشاريع</th>
                    <th className="p-4 font-bold">آخر نشاط</th>
                    <th className="p-4 font-bold">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-inherit">
                  {users
                    .filter((u) => u.name.includes(searchQuery) || u.email.includes(searchQuery))
                    .map((user) => (
                      <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover ring-1 ring-blue-500/30" />
                            <span className="font-bold">{user.name}</span>
                          </div>
                        </td>
                        <td className="p-4 font-mono text-slate-400 text-xs">{user.email}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            user.role === 'مدير المنصة'
                              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                              : user.role === 'مشرف'
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              : user.role === 'مطور'
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                              : 'bg-slate-700/40 text-slate-300'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`flex items-center gap-1.5 text-xs font-bold ${
                            user.status === 'نشط' ? 'text-emerald-400' : 'text-amber-400'
                          }`}>
                            <span className={`w-2 h-2 rounded-full ${user.status === 'نشط' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                            {user.status}
                          </span>
                        </td>
                        <td className="p-4 font-bold">{user.projectsCount}</td>
                        <td className="p-4 text-xs text-slate-400">{user.lastActive}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-lg hover:bg-slate-700/30 text-slate-400 hover:text-white" title="تعديل">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded-lg hover:bg-slate-700/30 text-rose-400" title="حذف">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add User Modal */}
          {showAddUserModal && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
              <div className={`w-full max-w-md rounded-2xl p-6 border shadow-2xl ${cardBgClass}`}>
                <h3 className="text-lg font-bold mb-4">إضافة مستخدم جديد إلى منصة مسار</h3>
                <form onSubmit={handleAddUser} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      value={newUserName}
                      onChange={(e) => setNewUserName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border bg-slate-800/50 border-slate-700 text-white text-xs"
                      placeholder="مثال: خالد العتيبي"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      value={newUserEmail}
                      onChange={(e) => setNewUserEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl border bg-slate-800/50 border-slate-700 text-white text-xs"
                      placeholder="name@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">الصلاحية / الدور</label>
                    <select
                      value={newUserRole}
                      onChange={(e) => setNewUserRole(e.target.value as UserItem['role'])}
                      className="w-full p-2.5 rounded-xl border bg-slate-800 border-slate-700 text-white text-xs"
                    >
                      <option value="عميل">عميل</option>
                      <option value="مطور">مطور</option>
                      <option value="مشرف">مشرف</option>
                      <option value="مدير المنصة">مدير المنصة</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowAddUserModal(false)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-700/50 hover:bg-slate-700 text-slate-300"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md"
                    >
                      حفظ المستخدم
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      );

    case 'websites':
      return (
        <div className="space-y-6" dir="rtl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black">المواقع والتطبيقات المدارة</h1>
              <p className="text-xs text-slate-400 mt-1">إدارة وتحرير كافة المشاريع والتطبيقات المنشورة على سيرفرات مسار</p>
            </div>
            <button
              onClick={() => setActiveTab('editor')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg"
            >
              <Plus className="w-4 h-4" />
              <span>مشروع جديد في Super Editor</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className={`rounded-2xl p-5 border flex flex-col justify-between ${cardBgClass}`}>
                <div className="flex gap-4">
                  <img src={proj.thumbnail} alt={proj.name} className="w-24 h-24 rounded-xl object-cover ring-1 ring-slate-700 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base">{proj.name}</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {proj.status}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono block mt-1">{proj.domain}</span>
                    <div className="flex items-center gap-4 mt-3 text-xs text-slate-300 font-semibold">
                      <span>النوع: {proj.type}</span>
                      <span>الزوار: {proj.visitors}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800">
                  <span className="text-[11px] text-slate-400">آخر تحديث: {proj.lastUpdated}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('editor')}
                      className="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500"
                    >
                      تحرير بالمحرر B
                    </button>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white"
                      title="معاينة"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'templates':
      return (
        <div className="space-y-6" dir="rtl">
          <div>
            <h1 className="text-2xl font-black">مكتبة القوالب والمكونات البصرية</h1>
            <p className="text-xs text-slate-400 mt-1">تشكيلة واسعة من الأقسام الجاهزة (Hero, Features, Testimonials, Pricing) المصممة خصيصاً لمنصة مسار</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'قسم البداية التفاعلي (Hero Section)', desc: 'عنوان كبير مع زري CTA وخلفية جزيئات متطورة', tag: 'Hero' },
              { title: 'شبكة الميزات والخدمات (Services Grid)', desc: 'بطاقات مضيئة مع أيقونات تفاعلية وتأثيرات تحويم', tag: 'Features' },
              { title: 'جدول خطط الأسعار (Pricing Table)', desc: 'مقارنة احترافية للخطط مع مفتاح التحويل الشهري والسنوي', tag: 'Pricing' },
              { title: 'آراء العملاء والشهادات (Testimonials)', desc: 'سلايدر وتقييمات بالنجوم مع صور العملاء', tag: 'Social Proof' },
              { title: 'قسم الأسئلة الشائعة (FAQ Accordion)', desc: 'قائمة أسئلة قابلة للطي بطريقة سلسة', tag: 'FAQ' },
              { title: 'نموذج التواصل السريع (Contact Form)', desc: 'نموذج مدعوم بالخرائط المباشرة وتأكيد الإرسال', tag: 'Contact' },
            ].map((tpl, i) => (
              <div key={i} className={`rounded-2xl p-5 border flex flex-col justify-between ${cardBgClass}`}>
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 mb-3 inline-block">
                    {tpl.tag}
                  </span>
                  <h3 className="font-extrabold text-base mb-2">{tpl.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tpl.desc}</p>
                </div>
                <button
                  onClick={() => setActiveTab('editor')}
                  className="mt-5 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold transition-all"
                >
                  إدراج في محرر مسار
                </button>
              </div>
            ))}
          </div>
        </div>
      );

    case 'media':
      return (
        <div className="space-y-6" dir="rtl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black">مكتبة الوسائط والملفات</h1>
              <p className="text-xs text-slate-400 mt-1">مساحة سحابية لرفع وإدارة الصور والفيديوهات والملفات الخاصة بالمواقع</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg hover:bg-blue-500">
              <Upload className="w-4 h-4" />
              <span>رفع ملف جديد</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mediaAssets.map((asset) => (
              <div key={asset.id} className={`rounded-2xl p-4 border ${cardBgClass}`}>
                <div className="h-40 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center relative mb-3">
                  <img src={asset.url} alt={asset.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] text-white font-mono">
                    {asset.size}
                  </span>
                </div>
                <h4 className="font-bold text-xs truncate">{asset.name}</h4>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span>{asset.uploadedAt}</span>
                  <button className="text-blue-400 hover:underline flex items-center gap-1">
                    <Copy className="w-3 h-3" />
                    <span>نسخ الرابط</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'hosting':
      return (
        <div className="space-y-6" dir="rtl">
          <div>
            <h1 className="text-2xl font-black">النشر والاستضافة السحابية</h1>
            <p className="text-xs text-slate-400 mt-1">مراقبة خوادم مسار، شهادات الأمان SSL، وتدفق البناء التلقائي Vercel / Edge Network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`rounded-2xl p-5 border ${cardBgClass}`}>
              <div className="flex items-center gap-3 mb-3">
                <Cloud className="w-6 h-6 text-blue-400" />
                <h3 className="font-bold text-base">شبكة التوزيع السريع CDN</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4">متصلة بأكثر من 200 مركز بيانات حول العالم لضمان سرعة التحميل الفائقة.</p>
              <div className="flex items-center justify-between text-xs font-bold text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl">
                <span>حالة الشبكة: ممتازة (100%)</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            <div className={`rounded-2xl p-5 border ${cardBgClass}`}>
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <h3 className="font-bold text-base">شهادات الأمان SSL</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4">تشفير تلقائي TLS 1.3 لكافة النطاقات والنطاقات الفرعية المربوطة.</p>
              <div className="flex items-center justify-between text-xs font-bold text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl">
                <span>مفعلة وتتجدد تلقائياً</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            <div className={`rounded-2xl p-5 border ${cardBgClass}`}>
              <div className="flex items-center gap-3 mb-3">
                <RefreshCw className="w-6 h-6 text-purple-400 animate-spin-slow" />
                <h3 className="font-bold text-base">تكامل البناء التلقائي</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4">نشر التحديثات والتعديلات فور إتمام الحفظ من المحرر خلال 3 ثوانٍ.</p>
              <button className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold">
                إعادة بناء المنصة الآن
              </button>
            </div>
          </div>
        </div>
      );

    case 'domains':
      return (
        <div className="space-y-6" dir="rtl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black">إدارة النطاقات (Domains)</h1>
              <p className="text-xs text-slate-400 mt-1">ربط وتوجيه الدومينات الخاصة بالعملاء مع إعدادات سجلات DNS</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold">
              <Plus className="w-4 h-4" />
              <span>ربط دومين جديد</span>
            </button>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${cardBgClass}`}>
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-slate-800/40 border-b border-slate-800">
                <tr>
                  <th className="p-4">النطاق</th>
                  <th className="p-4">المشروع المرتبط</th>
                  <th className="p-4">سجلات DNS</th>
                  <th className="p-4">شهادة SSL</th>
                  <th className="p-4">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-4 font-bold font-mono text-blue-400">masar.app</td>
                  <td className="p-4">منصة مسار الرئيسية</td>
                  <td className="p-4 text-emerald-400 font-bold">A & CNAME مكتمل</td>
                  <td className="p-4 text-emerald-400 font-bold">نشط (Let's Encrypt)</td>
                  <td className="p-4"><span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">متحقق منه</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold font-mono text-blue-400">perfume-store.sa</td>
                  <td className="p-4">متجر العطور الفاخرة</td>
                  <td className="p-4 text-emerald-400 font-bold">A & CNAME مكتمل</td>
                  <td className="p-4 text-emerald-400 font-bold">نشط</td>
                  <td className="p-4"><span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">متحقق منه</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'plans':
      return (
        <div className="space-y-6" dir="rtl">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h1 className="text-3xl font-black">خطط واشتراكات منصة مسار</h1>
            <p className="text-xs text-slate-400">اختر الخطة المناسبة لنشاطك التجاري واستمتع بكافة مميزات المحرر ولوحة التحكم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Starter */}
            <div className={`rounded-2xl p-6 border flex flex-col justify-between ${cardBgClass}`}>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">خطة البداية</span>
                <div className="text-3xl font-black mt-2">199 <span className="text-xs text-slate-400">ر.س / شهرياً</span></div>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> موقع إلكتروني واحد</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> محرر Super Editor المرئي</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> دومين مجاني للسنة الأولى</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> دعم عبر البريد الإلكتروني</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-xs">ترقية الخطة</button>
            </div>

            {/* Pro - Featured */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-blue-600 via-indigo-600 to-blue-900 border border-blue-400/40 text-white shadow-2xl relative flex flex-col justify-between transform md:-translate-y-2">
              <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black">الأكثر طلباً ⭐</span>
              <div>
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">الخطة الاحترافية (PRO)</span>
                <div className="text-4xl font-black mt-2">499 <span className="text-xs text-blue-200">ر.س / شهرياً</span></div>
                <ul className="mt-6 space-y-3 text-xs text-blue-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /> حتى 5 مواقع إلكترونية وتطبيقات</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /> محرر Super Editor + ذكاء اصطناعي</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /> باندويث واستضافة غير محدودة</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /> دعم فني أولوية 24/7</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 rounded-xl bg-white text-blue-950 font-black text-xs shadow-xl hover:bg-blue-50">خطة حالية نشطة</button>
            </div>

            {/* Enterprise */}
            <div className={`rounded-2xl p-6 border flex flex-col justify-between ${cardBgClass}`}>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">خطة الشركات (ENTERPRISE)</span>
                <div className="text-3xl font-black mt-2">1,299 <span className="text-xs text-slate-400">ر.س / شهرياً</span></div>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> عدد لا محدود من المشاريع</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> خادم خاص وسجلات تدقيق خاصة</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> مدير حساب مباشر</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-xs">تواصل مع المبيعات</button>
            </div>
          </div>
        </div>
      );

    case 'support':
      return (
        <div className="space-y-6" dir="rtl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black">تذاكر الدعم الفني والبلاغات</h1>
              <p className="text-xs text-slate-400 mt-1">متابعة تذاكر العملاء والمشكلات التقنية وتتبع الاستفسارات</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold">
              <Plus className="w-4 h-4" />
              <span>إنشاء تذكرة جديدة</span>
            </button>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${cardBgClass}`}>
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-slate-800/40 border-b border-slate-800">
                <tr>
                  <th className="p-4">رقم التذكرة</th>
                  <th className="p-4">العميل</th>
                  <th className="p-4">موضوع التذكرة</th>
                  <th className="p-4">التصنيف</th>
                  <th className="p-4">الأولية</th>
                  <th className="p-4">الحالة</th>
                  <th className="p-4">التاريخ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {tickets.map((tck) => (
                  <tr key={tck.id} className="hover:bg-slate-800/30">
                    <td className="p-4 font-mono font-bold text-blue-400">{tck.id}</td>
                    <td className="p-4 font-bold">{tck.user}</td>
                    <td className="p-4">{tck.subject}</td>
                    <td className="p-4"><span className="px-2 py-0.5 rounded-md bg-slate-800 text-xs">{tck.category}</span></td>
                    <td className="p-4">
                      <span className={`font-bold ${tck.priority === 'عالية' ? 'text-rose-400' : 'text-amber-400'}`}>
                        {tck.priority}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        tck.status === 'مفتوحة'
                          ? 'bg-blue-500/20 text-blue-400'
                          : tck.status === 'قيد المعالجة'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {tck.status}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-400">{tck.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'ai':
      return (
        <div className="space-y-6" dir="rtl">
          <div>
            <h1 className="text-2xl font-black flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span>استوديو الذكاء الاصطناعي (MASAR AI STUDIO)</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">توليد المحتوى، كتابة النصوص التسويقية، وتصميم أقسام موقعك تلقائياً بالذكاء الاصطناعي</p>
          </div>

          <div className={`rounded-2xl p-6 border ${cardBgClass}`}>
            <label className="block text-sm font-extrabold mb-2">أدخل وصفاً تفصيلياً للمطلوب إنشاؤه:</label>
            <textarea
              rows={4}
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="مثال: قم بإنشاء قسم للخدمات يحتوي على 4 بطاقات بأسلوب عصري وألوان أزرق ورمادي لشركة تطوير برمجيات..."
              className="w-full p-4 rounded-xl border bg-slate-800/50 border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAiGenerate}
                disabled={isAiGenerating || !aiPrompt}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-black text-xs shadow-xl flex items-center gap-2 disabled:opacity-50"
              >
                {isAiGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Cpu className="w-4 h-4" />}
                <span>توليد وتطوير بالذكاء الاصطناعي</span>
              </button>
            </div>

            {aiResponse && (
              <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-cyan-500/30 text-cyan-200 text-xs sm:text-sm leading-relaxed animate-in fade-in">
                <div className="font-bold mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>نتيجة الذكاء الاصطناعي:</span>
                </div>
                <p>{aiResponse}</p>
              </div>
            )}
          </div>
        </div>
      );

    case 'analytics':
      return (
        <div className="space-y-6" dir="rtl">
          <div>
            <h1 className="text-2xl font-black">التحليلات التقارير التفصيلية</h1>
            <p className="text-xs text-slate-400 mt-1">تحليلات زيارات الموقع ومعدلات التحويل ومصادر الحركة</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className={`rounded-2xl p-5 border ${cardBgClass}`}>
              <span className="text-xs text-slate-400 font-bold">إجمالي الزيارات الشهرية</span>
              <div className="text-3xl font-black mt-1 text-blue-400">289,450</div>
              <span className="text-[11px] text-emerald-400 font-bold mt-2 block">↑ +24% مقارنة بالشهر الماضي</span>
            </div>
            <div className={`rounded-2xl p-5 border ${cardBgClass}`}>
              <span className="text-xs text-slate-400 font-bold">متوسط بقاء الزائر</span>
              <div className="text-3xl font-black mt-1 text-purple-400">4:32 دقيقة</div>
              <span className="text-[11px] text-emerald-400 font-bold mt-2 block">↑ +15% تفاعل مرتفع</span>
            </div>
            <div className={`rounded-2xl p-5 border ${cardBgClass}`}>
              <span className="text-xs text-slate-400 font-bold">معدل التحويل (Conversion)</span>
              <div className="text-3xl font-black mt-1 text-emerald-400">4.8%</div>
              <span className="text-[11px] text-emerald-400 font-bold mt-2 block">↑ ممتاز</span>
            </div>
          </div>
        </div>
      );

    case 'audit':
      return (
        <div className="space-y-6" dir="rtl">
          <div>
            <h1 className="text-2xl font-black">سجل التدقيق والأمان (Audit Log)</h1>
            <p className="text-xs text-slate-400 mt-1">سجل تفصيلي لكافة الأنشطة والعمليات وتغييرات النظام لضمان الحماية والشفافية</p>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${cardBgClass}`}>
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-800/40 border-b border-slate-800">
                <tr>
                  <th className="p-3.5">المستخدم</th>
                  <th className="p-3.5">العملية المنفذة</th>
                  <th className="p-3.5">الهدف/المورد</th>
                  <th className="p-3.5">عنوان IP</th>
                  <th className="p-3.5">التوقيت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono">
                <tr>
                  <td className="p-3.5 font-sans font-bold">أحمد محمد</td>
                  <td className="p-3.5 text-emerald-400">نشر إصدار جديد من الموقع</td>
                  <td className="p-3.5">masar.app/main</td>
                  <td className="p-3.5 text-slate-400">192.168.1.104</td>
                  <td className="p-3.5 text-slate-400">2026-11-21 14:32:10</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-sans font-bold">سارة علي</td>
                  <td className="p-3.5 text-blue-400">تحديث ألوان الهوية في Super Editor</td>
                  <td className="p-3.5">styles/theme.css</td>
                  <td className="p-3.5 text-slate-400">88.201.44.12</td>
                  <td className="p-3.5 text-slate-400">2026-11-21 14:10:05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'settings':
      return (
        <div className="space-y-6 max-w-3xl" dir="rtl">
          <div>
            <h1 className="text-2xl font-black">إعدادات المنصة الشاملة</h1>
            <p className="text-xs text-slate-400 mt-1">التحكم بإعدادات الموقع، اسم المنصة، الشعار، وإعدادات الربط التقني</p>
          </div>

          <div className={`rounded-2xl p-6 border space-y-5 ${cardBgClass}`}>
            <div>
              <label className="block text-xs font-bold mb-1">اسم المنصة الرسمي</label>
              <input type="text" defaultValue="مسار | MASAR" className="w-full p-2.5 rounded-xl border bg-slate-800 border-slate-700 text-white text-xs" />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1">البريد الإلكتروني للإشعارات</label>
              <input type="email" defaultValue="admin@masar.app" className="w-full p-2.5 rounded-xl border bg-slate-800 border-slate-700 text-white text-xs" />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1">مفتاح API الخاص بـ OpenAI / AI Studio</label>
              <div className="relative">
                <input type="password" defaultValue="sk-proj-masar-2026-xxxxxxxxxxxx" className="w-full p-2.5 rounded-xl border bg-slate-800 border-slate-700 text-white text-xs font-mono" />
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg">
              حفظ التغييرات
            </button>
          </div>
        </div>
      );

    default:
      return null;
  }
};
