import React from 'react';
import {
  Users,
  UserCheck,
  FolderKanban,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Headphones,
  Crown,
  AlertTriangle,
  Sparkles,
  Activity,
  BellRing,
} from 'lucide-react';
import type { AdminTab } from '@/types/admin';

interface OverviewSectionProps {
  isDarkMode: boolean;
  setActiveTab: (tab: AdminTab) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ isDarkMode, setActiveTab }) => {
  const statCards = [
    {
      title: 'إجمالي المستخدمين',
      value: '12,540',
      change: '+12%',
      color: 'blue',
      icon: Users,
      pathD: 'M0 25 Q30 5, 60 20 T120 15 T180 22 T240 8 T300 20',
      gradientId: 'blueGrad',
    },
    {
      title: 'المستخدمون النشطون',
      value: '8,920',
      change: '+8%',
      color: 'emerald',
      icon: UserCheck,
      pathD: 'M0 22 Q30 15, 60 25 T120 10 T180 18 T240 12 T300 15',
      gradientId: 'emeraldGrad',
    },
    {
      title: 'إجمالي المشاريع',
      value: '2,850',
      change: '+15%',
      color: 'purple',
      icon: FolderKanban,
      pathD: 'M0 28 Q30 18, 60 22 T120 8 T180 15 T240 10 T300 18',
      gradientId: 'purpleGrad',
    },
    {
      title: 'عملايات النشر الناجحة',
      value: '1,890',
      change: '+10%',
      color: 'amber',
      icon: Rocket,
      pathD: 'M0 20 Q30 10, 60 24 T120 12 T180 20 T240 14 T300 22',
      gradientId: 'amberGrad',
    },
  ];

  const alerts = [
    { id: '1', title: 'تم نشر موقع جديد بنجاح', time: 'منذ 5 دقائق', icon: CheckCircle2, color: 'text-emerald-400 bg-emerald-500/20' },
    { id: '2', title: 'تذكرة دعم جديدة من أحد العملاء', time: 'منذ 12 دقيقة', icon: Headphones, color: 'text-blue-400 bg-blue-500/20' },
    { id: '3', title: 'تم تحديث اشتراك خطة احترافية', time: 'منذ ساعة', icon: Crown, color: 'text-amber-400 bg-amber-500/20' },
    { id: '4', title: 'تحذير: ارتفاع في معدل الأخطاء', time: 'منذ ساعتين', icon: AlertTriangle, color: 'text-rose-400 bg-rose-500/20' },
  ];

  const activities = [
    { id: '1', user: 'أحمد محمد', avatar: 'https://images.pexels.com/photos/326316/pexels-photo-326316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', action: 'قام بإنشاء مشروع جديد', time: 'منذ 10 دقائق' },
    { id: '2', user: 'سارة علي', avatar: 'https://images.pexels.com/photos/7254460/pexels-photo-7254460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', action: 'قامت بتعديل قالب', time: 'منذ 20 دقيقة' },
    { id: '3', user: 'محمد عبدالله', avatar: 'https://images.pexels.com/photos/33358637/pexels-photo-33358637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', action: 'قام بنشر تحديث جديد', time: 'منذ ساعة' },
    { id: '4', user: 'علي حسن', avatar: 'https://images.pexels.com/photos/40445459/pexels-photo-40445459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', action: 'تواصل مع الدعم الفني', time: 'منذ ساعتين' },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-2">
            <span>لوحة التحكم الرئيسية</span>
            <span className="text-blue-500 text-xl font-mono">/</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            مرحباً بك في لوحة إدارة منصة مسار - متابعة الأداء والمشاريع والأنشطة لحظة بلحظة
          </p>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl p-5 border transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl shadow-black/40'
                  : 'bg-white border-slate-200 text-slate-800 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-400">{card.title}</span>
                  <div className="text-2xl sm:text-3xl font-black mt-1 tracking-tight">
                    {card.value}
                  </div>
                </div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    card.color === 'blue'
                      ? 'bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/30'
                      : card.color === 'emerald'
                      ? 'bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                      : card.color === 'purple'
                      ? 'bg-purple-500/10 text-purple-400 shadow-lg shadow-purple-500/20 ring-1 ring-purple-500/30'
                      : 'bg-amber-500/10 text-amber-400 shadow-lg shadow-amber-500/20 ring-1 ring-amber-500/30'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs font-bold text-emerald-400">
                <TrendingUp className="w-4 h-4" />
                <span>{card.change}</span>
              </div>

              {/* Sparkline SVG Chart */}
              <div className="mt-3 h-10 w-full overflow-hidden">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 35">
                  <defs>
                    <linearGradient id={card.gradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor={
                          card.color === 'blue'
                            ? '#3b82f6'
                            : card.color === 'emerald'
                            ? '#10b981'
                            : card.color === 'purple'
                            ? '#a855f7'
                            : '#f59e0b'
                        }
                        stopOpacity="0.4"
                      />
                      <stop
                        offset="100%"
                        stopColor={
                          card.color === 'blue'
                            ? '#3b82f6'
                            : card.color === 'emerald'
                            ? '#10b981'
                            : card.color === 'purple'
                            ? '#a855f7'
                            : '#f59e0b'
                        }
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d={`${card.pathD} L300 35 L0 35 Z`}
                    fill={`url(#${card.gradientId})`}
                  />
                  <path
                    d={card.pathD}
                    fill="none"
                    stroke={
                      card.color === 'blue'
                        ? '#3b82f6'
                        : card.color === 'emerald'
                        ? '#10b981'
                        : card.color === 'purple'
                        ? '#a855f7'
                        : '#f59e0b'
                    }
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Line Chart (2 Cols wide) */}
        <div
          className={`lg:col-span-2 rounded-2xl p-6 border ${
            isDarkMode
              ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl'
              : 'bg-white border-slate-200 text-slate-800 shadow-md'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <h2 className="text-base sm:text-lg font-extrabold">نشاط المنصة خلال آخر 30 يوماً</h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-slate-400">المستخدمون</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-slate-400">المشاريع</span>
              </div>
            </div>
          </div>

          {/* Line Chart Representation */}
          <div className="h-64 relative flex flex-col justify-between pt-4">
            {/* Horizontal Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-slate-600/20 text-[10px]">
              <div className="border-b border-inherit flex justify-between"><span>15K</span></div>
              <div className="border-b border-inherit flex justify-between"><span>10K</span></div>
              <div className="border-b border-inherit flex justify-between"><span>5K</span></div>
              <div className="border-b border-inherit flex justify-between"><span>0</span></div>
            </div>

            {/* SVG Line Curves */}
            <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineBlueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="linePurpleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Blue line (Users) */}
              <path
                d="M 0 130 C 50 120, 100 80, 150 90 C 200 100, 250 50, 300 70 C 350 90, 400 30, 450 40 C 500 50, 550 20, 600 30 L 600 200 L 0 200 Z"
                fill="url(#lineBlueGrad)"
              />
              <path
                d="M 0 130 C 50 120, 100 80, 150 90 C 200 100, 250 50, 300 70 C 350 90, 400 30, 450 40 C 500 50, 550 20, 600 30"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
              />

              {/* Purple line (Projects) */}
              <path
                d="M 0 160 C 50 140, 100 110, 150 130 C 200 150, 250 110, 300 120 C 350 130, 400 80, 450 100 C 500 110, 550 70, 600 80 L 600 200 L 0 200 Z"
                fill="url(#linePurpleGrad)"
              />
              <path
                d="M 0 160 C 50 140, 100 110, 150 130 C 200 150, 250 110, 300 120 C 350 130, 400 80, 450 100 C 500 110, 550 70, 600 80"
                fill="none"
                stroke="#a855f7"
                strokeWidth="3"
              />

              {/* Data Dots */}
              <circle cx="150" cy="90" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="300" cy="70" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="450" cy="40" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="600" cy="30" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />

              <circle cx="150" cy="130" r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
              <circle cx="300" cy="120" r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
              <circle cx="450" cy="100" r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
              <circle cx="600" cy="80" r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* X-Axis dates */}
            <div className="flex justify-between text-xs text-slate-400 font-medium pt-2 border-t border-slate-700/30">
              <span>أكتوبر</span>
              <span>7 أكتوبر</span>
              <span>14 أكتوبر</span>
              <span>21 أكتوبر</span>
              <span>30 أكتوبر</span>
            </div>
          </div>
        </div>

        {/* Donut Chart (1 Col) */}
        <div
          className={`rounded-2xl p-6 border flex flex-col justify-between ${
            isDarkMode
              ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl'
              : 'bg-white border-slate-200 text-slate-800 shadow-md'
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold">توزيع المشاريع</h2>
          </div>

          <div className="my-6 flex flex-col items-center justify-center relative">
            {/* Donut Circle */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke={isDarkMode ? '#1e293b' : '#f1f5f9'}
                  strokeWidth="12"
                />
                {/* 60% Blue (websites) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#3b82f6"
                  strokeWidth="12"
                  strokeDasharray="238.7"
                  strokeDashoffset="95.4"
                  strokeLinecap="round"
                />
                {/* 40% Purple (apps) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#a855f7"
                  strokeWidth="12"
                  strokeDasharray="238.7"
                  strokeDashoffset="143.2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black">2,850</span>
                <span className="text-[11px] text-slate-400 font-medium">إجمالي المشاريع</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold p-2 rounded-xl bg-slate-800/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span>مواقع إلكترونية</span>
              </div>
              <span className="text-blue-400 font-bold">60%</span>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold p-2 rounded-xl bg-slate-800/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span>تطبيقات</span>
              </div>
              <span className="text-purple-400 font-bold">40%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Latest Alerts */}
        <div
          className={`rounded-2xl p-5 border flex flex-col justify-between ${
            isDarkMode
              ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl'
              : 'bg-white border-slate-200 text-slate-800 shadow-md'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
            <div className="flex items-center gap-2">
              <BellRing className="w-4 h-4 text-blue-400" />
              <h3 className="font-extrabold text-sm sm:text-base">أحدث التنبيهات</h3>
            </div>
            <button
              onClick={() => setActiveTab('notifications')}
              className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
            >
              <span>عرض الكل</span>
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </button>
          </div>

          <div className="space-y-3.5 my-4">
            {alerts.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-slate-200">{item.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0">{item.time}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 2: Recent Activities */}
        <div
          className={`rounded-2xl p-5 border flex flex-col justify-between ${
            isDarkMode
              ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl'
              : 'bg-white border-slate-200 text-slate-800 shadow-md'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" />
              <h3 className="font-extrabold text-sm sm:text-base">أحدث الأنشطة</h3>
            </div>
            <button
              onClick={() => setActiveTab('audit')}
              className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
            >
              <span>عرض الكل</span>
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </button>
          </div>

          <div className="space-y-3.5 my-4">
            {activities.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.user}
                    className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-700"
                  />
                  <div>
                    <span className="font-bold text-slate-200 block">{item.user}</span>
                    <span className="text-[11px] text-slate-400">{item.action}</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: MASAR SUPER EDITOR Hero Promo */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-blue-400/30 group">
          {/* Background Glows & Pattern */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-all duration-500" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-cyan-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>MASAR SUPER EDITOR</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
              محرر المواقع المرئي الاحترافي
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 mt-2 leading-relaxed">
              قم بتحرير موقعك بكل سهولة وبدون أي أكواد
            </p>
          </div>

          <div className="relative z-10 my-4 flex justify-center">
            {/* Laptop / Visual Editor Mockup Graphic */}
            <div className="w-full max-w-[200px] h-28 bg-slate-900/80 rounded-lg p-2 border border-blue-400/40 backdrop-blur-md shadow-2xl flex flex-col justify-between transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between pb-1 border-b border-slate-700/60">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[8px] text-slate-400 font-mono">editor.masar.app</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-400 tracking-wider">2</div>
                  <span className="text-[9px] text-slate-300 font-bold">Visual Canvas</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('editor')}
            className="relative z-10 w-full py-3 px-4 rounded-xl bg-white text-blue-950 text-xs font-black flex items-center justify-center gap-2 shadow-xl hover:bg-blue-50 transition-all active:scale-95"
          >
            <span>ابدأ الآن</span>
            <ArrowRight className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
