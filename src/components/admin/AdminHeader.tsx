import React, { useState } from 'react';
import {
  Search,
  Bell,
  CheckCircle2,
  Calendar,
  ChevronDown,
  Menu,
  ExternalLink,
  Sun,
  Moon,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdminHeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setMobileOpen: (val: boolean) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  isDarkMode,
  setIsDarkMode,
  setMobileOpen,
  searchQuery,
  setSearchQuery,
}) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header
      className={`sticky top-0 z-30 px-4 sm:px-6 py-3.5 border-b transition-colors duration-200 ${
        isDarkMode
          ? 'bg-[#0b0f19]/90 border-slate-800 text-slate-100 backdrop-blur-md'
          : 'bg-white/90 border-slate-200 text-slate-800 backdrop-blur-md'
      }`}
      dir="rtl"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Right Section: Mobile Menu Button & User Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-xl border border-slate-700/30 text-slate-400 hover:bg-slate-700/20"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pr-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="أحمد محمد"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/40"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-[#0b0f19]" />
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-sm font-bold leading-tight">أحمد محمد</div>
              <div className="text-[11px] text-slate-400 font-medium">مدير المنصة</div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>وضع متصل — منصة مسار تعمل بشكل طبيعي</span>
          </div>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-1 max-w-md mx-2">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="البحث في لوحة التحكم..."
              className={`w-full py-2 pr-10 pl-4 text-xs sm:text-sm rounded-xl border transition-all duration-200 focus:outline-none ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500'
                  : 'bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white'
              }`}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Left Section: Quick Tools & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Time Filter */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-700/40 text-xs font-medium cursor-pointer hover:bg-slate-800/40">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>آخر 30 يوماً</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`relative p-2 rounded-xl transition-colors ${
                isDarkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                3
              </span>
            </button>

            {showNotifications && (
              <div
                className={`absolute left-0 mt-2 w-80 rounded-2xl shadow-2xl border p-4 z-50 animate-in fade-in duration-200 ${
                  isDarkMode
                    ? 'bg-[#0f172a] border-slate-800 text-slate-100'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-inherit">
                  <span className="font-bold text-sm">التنبيهات (3)</span>
                  <button className="text-[11px] text-blue-400 hover:underline">
                    تحديد الكل كقروء
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-800/40 cursor-pointer text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="font-semibold">تم نشر موقع جديد بنجاح</p>
                      <span className="text-[10px] text-slate-400">منذ 5 دقائق</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-800/40 cursor-pointer text-xs">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="font-semibold">تذكرة دعم جديدة من أحد العملاء</p>
                      <span className="text-[10px] text-slate-400">منذ 12 دقيقة</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-800/40 cursor-pointer text-xs">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="font-semibold">تم تحديث اشتراك خطة احترافية</p>
                      <span className="text-[10px] text-slate-400">منذ ساعة</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Theme Quick Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-xl transition-colors ${
              isDarkMode
                ? 'bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title="تبديل المظهر"
          >
            {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>

          {/* Visit Main Site Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">زيارة الموقع</span>
          </button>
        </div>
      </div>
    </header>
  );
};
