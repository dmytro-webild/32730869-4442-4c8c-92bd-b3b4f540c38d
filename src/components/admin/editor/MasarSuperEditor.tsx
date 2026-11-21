import React, { useState } from 'react';
import {
  Sparkles,
  Monitor,
  Tablet,
  Smartphone,
  Undo,
  Redo,
  Eye,
  Save,
  Rocket,
  ArrowRight,
  Palette,
  Layers,
  Type,
  Image as ImageIcon,
  Cpu,
  Code2,
  ChevronUp,
  ChevronDown,
  Trash2,
  Copy,
  Edit3,
  CheckCircle2,
} from 'lucide-react';

interface MasarSuperEditorProps {
  onBackToAdmin?: () => void;
  isDarkMode?: boolean;
}

export const MasarSuperEditor: React.FC<MasarSuperEditorProps> = ({ onBackToAdmin }) => {
  // Device mode
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'theme' | 'sections' | 'text' | 'media' | 'ai' | 'code'>('sections');
  const [previewMode, setPreviewMode] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>('hero');
  const [publishSuccessToast, setPublishSuccessToast] = useState(false);

  // Editable Site Content State
  const [siteContent, setSiteContent] = useState({
    heroTitle: 'مسار — وكالة تطوير وتصميم المواقع الرقمية والحلول الذكية',
    heroSubtitle: 'نساعد الشركات والناشئة على نمو أعمالهم من خلال تصميم مواقع إلكترونية عصرية وتطبيقات ذات أداء فائق وواجهات استثنائية.',
    heroCtaText: 'اطلب مشروعك الآن',
    primaryColor: '#3b82f6',
    fontFamily: 'Cairo',
    borderRadius: '1rem',
  });

  const [sections, setSections] = useState([
    { id: 'hero', name: 'القسم الرئيسي (Hero Section)', visible: true },
    { id: 'work', name: 'أعمالنا ومشاريعنا (Portfolio Grid)', visible: true },
    { id: 'about', name: 'عن وكالة مسار (About Us)', visible: true },
    { id: 'services', name: 'خدماتنا وحلولنا (Services)', visible: true },
    { id: 'faq', name: 'الأسئلة الشائعة (FAQ Accordion)', visible: true },
    { id: 'contact', name: 'تواصل معنا (Contact Form)', visible: true },
  ]);

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newSections.length) return;
    const temp = newSections[index];
    newSections[index] = newSections[targetIndex];
    newSections[targetIndex] = temp;
    setSections(newSections);
  };

  const deleteSection = (id: string) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const duplicateSection = (index: number) => {
    const sec = sections[index];
    const duplicated = {
      id: `${sec.id}-copy-${Date.now()}`,
      name: `${sec.name} (نسخة)`,
      visible: true,
    };
    const newSections = [...sections];
    newSections.splice(index + 1, 0, duplicated);
    setSections(newSections);
  };

  const handlePublish = () => {
    setPublishSuccessToast(true);
    setTimeout(() => {
      setPublishSuccessToast(false);
    }, 3000);
  };

  return (
    <div className="h-screen flex flex-col bg-[#080b13] text-slate-100 font-sans overflow-hidden" dir="rtl">
      {/* Top Editor Toolbar */}
      <header className="h-14 px-4 bg-[#0d121f] border-b border-slate-800 flex items-center justify-between z-30 shrink-0">
        {/* Right Section: Branding & Back Button */}
        <div className="flex items-center gap-3">
          {onBackToAdmin && (
            <button
              onClick={onBackToAdmin}
              className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors"
              title="العودة للوحة التحكم"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white text-sm shadow-md">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-wide bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MASAR SUPER EDITOR
              </span>
              <span className="hidden sm:inline text-[10px] text-slate-400 font-semibold mr-2">
                — محرر المواقع المرئي
              </span>
            </div>
          </div>
        </div>

        {/* Center Section: Viewport Switcher & Page Dropdown */}
        <div className="flex items-center gap-4">
          <select className="hidden md:block bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 font-medium focus:outline-none">
            <option value="/">الصفحة الرئيسية (/)</option>
            <option value="/work">أعمالنا (/work)</option>
            <option value="/about">عن مسار (/about)</option>
            <option value="/services">الخدمات (/services)</option>
            <option value="/contact">التواصل (/contact)</option>
          </select>

          {/* Device Controls */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                deviceMode === 'desktop' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="شاشة كبيرة"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                deviceMode === 'tablet' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="جهاز لوحي"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                deviceMode === 'mobile' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="هاتف ذكي"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Left Section: Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400" title="تراجع">
            <Undo className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400" title="إعادة">
            <Redo className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
              previewMode
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{previewMode ? 'خروج من المعاينة' : 'معاينة'}</span>
          </button>
          <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold hover:bg-slate-700">
            <Save className="w-3.5 h-3.5" />
            <span>حفظ مسودة</span>
          </button>
          <button
            onClick={handlePublish}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-extrabold shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 active:scale-95 transition-all"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>نشر الموقع</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar (Controls Panel) */}
        {!previewMode && (
          <aside className="w-80 bg-[#0c101b] border-l border-slate-800 flex flex-col shrink-0 z-20">
            {/* Control Tabs Header */}
            <div className="grid grid-cols-6 border-b border-slate-800 text-slate-400 text-xs font-bold bg-[#090d16]">
              {[
                { id: 'sections', icon: Layers, title: 'الأقسام' },
                { id: 'text', icon: Type, title: 'النصوص' },
                { id: 'theme', icon: Palette, title: 'التصميم' },
                { id: 'media', icon: ImageIcon, title: 'الوسائط' },
                { id: 'ai', icon: Cpu, title: 'الذكاء' },
                { id: 'code', icon: Code2, title: 'الكود' },
              ].map((t) => {
                const Icon = t.icon;
                const isActive = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as 'theme' | 'sections' | 'text' | 'media' | 'ai' | 'code')}
                    className={`p-3 flex flex-col items-center justify-center gap-1 transition-colors border-b-2 ${
                      isActive
                        ? 'text-blue-400 border-blue-500 bg-blue-500/10'
                        : 'border-transparent hover:text-slate-200 hover:bg-slate-800/40'
                    }`}
                    title={t.title}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px]">{t.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Panel Body Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-xs">
              {activeTab === 'sections' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="font-bold text-slate-200">ترتيب وبنية الأقسام</span>
                    <span className="text-[10px] text-slate-400">{sections.length} أقسام</span>
                  </div>

                  <div className="space-y-2">
                    {sections.map((sec, idx) => (
                      <div
                        key={sec.id}
                        onClick={() => setSelectedSectionId(sec.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                          selectedSectionId === sec.id
                            ? 'bg-blue-600/20 border-blue-500/60 text-white shadow-md'
                            : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="font-semibold text-xs truncate max-w-[140px]">{sec.name}</span>
                        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => moveSection(idx, 'up')}
                            disabled={idx === 0}
                            className="p-1 hover:bg-slate-700 rounded text-slate-400 disabled:opacity-30"
                            title="للأعلى"
                          >
                            <ChevronUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => moveSection(idx, 'down')}
                            disabled={idx === sections.length - 1}
                            className="p-1 hover:bg-slate-700 rounded text-slate-400 disabled:opacity-30"
                            title="للأسفل"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => duplicateSection(idx)}
                            className="p-1 hover:bg-slate-700 rounded text-slate-400"
                            title="نسخ"
                          >
                            <Copy className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => deleteSection(sec.id)}
                            className="p-1 hover:bg-slate-700 rounded text-rose-400"
                            title="حذف"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 font-bold border border-slate-700 border-dashed flex items-center justify-center gap-2 mt-4">
                    <span>+ أضف قسم جديد للموقع</span>
                  </button>
                </div>
              )}

              {activeTab === 'text' && (
                <div className="space-y-4">
                  <span className="font-bold text-slate-200 block pb-2 border-b border-slate-800">
                    محرر المحتوى والنصوص المباشر
                  </span>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">العنوان الرئيسي (Hero Headline)</label>
                    <textarea
                      rows={3}
                      value={siteContent.heroTitle}
                      onChange={(e) => setSiteContent({ ...siteContent, heroTitle: e.target.value })}
                      className="w-full p-2.5 rounded-xl border bg-slate-900 border-slate-800 text-white text-xs leading-relaxed focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">الوصف الفرعي (Subtext)</label>
                    <textarea
                      rows={4}
                      value={siteContent.heroSubtitle}
                      onChange={(e) => setSiteContent({ ...siteContent, heroSubtitle: e.target.value })}
                      className="w-full p-2.5 rounded-xl border bg-slate-900 border-slate-800 text-white text-xs leading-relaxed focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">نص زر الدعوة للإجراء (CTA Button)</label>
                    <input
                      type="text"
                      value={siteContent.heroCtaText}
                      onChange={(e) => setSiteContent({ ...siteContent, heroCtaText: e.target.value })}
                      className="w-full p-2.5 rounded-xl border bg-slate-900 border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'theme' && (
                <div className="space-y-4">
                  <span className="font-bold text-slate-200 block pb-2 border-b border-slate-800">
                    ألوان وتنسيقات الهوية
                  </span>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-2">اللون الرئيسي المميز</label>
                    <div className="flex gap-2">
                      {['#3b82f6', '#10b981', '#a855f7', '#f59e0b', '#ec4899', '#06b6d4'].map((col) => (
                        <button
                          key={col}
                          onClick={() => setSiteContent({ ...siteContent, primaryColor: col })}
                          style={{ backgroundColor: col }}
                          className={`w-8 h-8 rounded-full transition-transform ${
                            siteContent.primaryColor === col ? 'scale-110 ring-2 ring-white' : ''
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">نوع الخط العربي</label>
                    <select
                      value={siteContent.fontFamily}
                      onChange={(e) => setSiteContent({ ...siteContent, fontFamily: e.target.value })}
                      className="w-full p-2.5 rounded-xl border bg-slate-900 border-slate-800 text-white text-xs"
                    >
                      <option value="Cairo">Cairo (خط مسار القياسي)</option>
                      <option value="Tajawal">Tajawal</option>
                      <option value="Almarai">Almarai</option>
                      <option value="Inter Tight">Inter Tight</option>
                    </select>
                  </div>
                </div>
              )}

              {activeTab === 'media' && (
                <div className="space-y-3">
                  <span className="font-bold text-slate-200 block pb-2 border-b border-slate-800">
                    تبديل الوسائط والصور
                  </span>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-[11px] text-slate-400 block font-bold">صورة القسم الرئيسي</span>
                    <img
                      src="https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp"
                      alt="Avatar"
                      className="w-full h-24 object-cover rounded-lg border border-slate-700"
                    />
                    <button className="w-full py-2 bg-slate-800 text-blue-400 font-bold rounded-lg text-xs">
                      تغيير الصورة
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-3">
                  <span className="font-bold text-slate-200 block pb-2 border-b border-slate-800">
                    مساعد التصميم الذكي (Super AI)
                  </span>
                  <p className="text-[11px] text-slate-400">صف التغيير المطلوب وسيقوم Super Editor بتنفيذه تلقائياً:</p>
                  <textarea
                    rows={4}
                    placeholder="مثال: اجعل نبرة العناوين أكثر حماساً وغير لون خلفية الأزرار لتتناسب مع الهوية..."
                    className="w-full p-2.5 rounded-xl border bg-slate-900 border-slate-800 text-white text-xs"
                  />
                  <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>تطبيق بالذكاء الاصطناعي</span>
                  </button>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="space-y-2">
                  <span className="font-bold text-slate-200 block pb-2 border-b border-slate-800">
                    معاينة كود React / Tailwind
                  </span>
                  <pre className="p-3 rounded-xl bg-slate-950 text-emerald-400 text-[10px] font-mono overflow-x-auto border border-slate-800 leading-relaxed">
{`<section className="py-20">
  <h1 className="text-6xl font-black">
    ${siteContent.heroTitle.slice(0, 30)}...
  </h1>
  <p className="text-slate-400">
    ${siteContent.heroSubtitle.slice(0, 40)}...
  </p>
</section>`}
                  </pre>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* Central Canvas Viewport */}
        <main className="flex-1 bg-[#05070d] flex flex-col items-center justify-center p-4 overflow-y-auto custom-scrollbar relative">
          {/* Canvas Wrapper */}
          <div
            className={`transition-all duration-300 bg-[#0f172a] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden relative ${
              deviceMode === 'desktop'
                ? 'w-full max-w-5xl h-full'
                : deviceMode === 'tablet'
                ? 'w-[768px] h-[90%]'
                : 'w-[375px] h-[90%]'
            }`}
          >
            {/* Live Rendered Canvas Simulation */}
            <div className="h-full overflow-y-auto custom-scrollbar text-white relative">
              {/* Site Floating Header Mock */}
              <nav className="p-4 border-b border-slate-800/80 flex items-center justify-between sticky top-0 bg-[#0f172a]/90 backdrop-blur-md z-10">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs"
                    style={{ backgroundColor: siteContent.primaryColor }}
                  >
                    M
                  </div>
                  <span className="font-bold text-base">مسار | MASAR</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-300">
                  <span>الرئيسية</span>
                  <span>أعمالنا</span>
                  <span>عن مسار</span>
                  <span>خدماتنا</span>
                  <span>تواصل معنا</span>
                </div>
                <button
                  className="px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md"
                  style={{ backgroundColor: siteContent.primaryColor }}
                >
                  {siteContent.heroCtaText}
                </button>
              </nav>

              {/* Render Sections */}
              <div className="divide-y divide-slate-800/40">
                {sections.map((sec) => (
                  <div
                    key={sec.id}
                    onClick={() => setSelectedSectionId(sec.id)}
                    className={`relative p-8 sm:p-14 transition-all group cursor-pointer ${
                      selectedSectionId === sec.id && !previewMode
                        ? 'ring-2 ring-blue-500 bg-blue-500/5'
                        : 'hover:bg-slate-800/20'
                    }`}
                  >
                    {/* Selected Section Badge Toolbar */}
                    {selectedSectionId === sec.id && !previewMode && (
                      <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-600 text-white text-[10px] font-bold shadow-lg animate-in fade-in">
                        <Edit3 className="w-3 h-3" />
                        <span>محدد: {sec.name}</span>
                      </div>
                    )}

                    {sec.id === 'hero' && (
                      <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h1
                          className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white"
                          style={{ fontFamily: siteContent.fontFamily }}
                        >
                          {siteContent.heroTitle}
                        </h1>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                          {siteContent.heroSubtitle}
                        </p>
                        <div className="flex justify-center gap-4 pt-2">
                          <button
                            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white shadow-xl transition-transform hover:scale-105"
                            style={{ backgroundColor: siteContent.primaryColor }}
                          >
                            {siteContent.heroCtaText}
                          </button>
                        </div>
                      </div>
                    )}

                    {sec.id === 'work' && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center">أحدث مشاريع مسار المنفذة</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="h-40 rounded-xl bg-slate-800/80 border border-slate-700 p-4 flex flex-col justify-end">
                            <span className="font-bold text-sm">متجر عطور فاخر</span>
                            <span className="text-xs text-slate-400">تطوير متجر رقمي متكامل</span>
                          </div>
                          <div className="h-40 rounded-xl bg-slate-800/80 border border-slate-700 p-4 flex flex-col justify-end">
                            <span className="font-bold text-sm">منصة عقارات ذكية</span>
                            <span className="text-xs text-slate-400">تطبيق ويب ذكي</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {sec.id !== 'hero' && sec.id !== 'work' && (
                      <div className="py-8 text-center text-slate-400">
                        <h3 className="font-bold text-lg text-slate-200">{sec.name}</h3>
                        <p className="text-xs mt-1">قسم متناسق وتفاعلي جاهز للتحرير والنشر المباشر</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Publish Toast Alert */}
      {publishSuccessToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5" />
          <div>
            <span className="font-bold text-xs sm:text-sm block">تم نشر التعديلات بنجاح!</span>
            <span className="text-[11px] text-emerald-100">الموقع الآن محدث ومباشر على الخوادم.</span>
          </div>
        </div>
      )}
    </div>
  );
};
