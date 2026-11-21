import React from 'react';
import {
  LayoutDashboard,
  Users,
  LayoutGrid,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Cloud,
  Globe,
  Crown,
  Headphones,
  Bell,
  Cpu,
  BarChart3,
  ShieldCheck,
  Settings,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import type { AdminTab } from '@/types/admin';

interface AdminSidebarProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (val: boolean) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
  mobileOpen,
  setMobileOpen,
}) => {
  const menuItems: { id: AdminTab; label: string; icon: React.ComponentType<{ className?: string }>; highlight?: boolean }[] = [
    { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
    { id: 'users', label: 'المستخدمون', icon: Users },
    { id: 'websites', label: 'المواقع والتطبيقات', icon: LayoutGrid },
    { id: 'editor', label: 'MASAR SUPER EDITOR', icon: Sparkles, highlight: true },
    { id: 'templates', label: 'القوالب والمكونات', icon: Layers },
    { id: 'media', label: 'مكتبة الوسائط', icon: ImageIcon },
    { id: 'hosting', label: 'النشر والاستضافة', icon: Cloud },
    { id: 'domains', label: 'النطاقات', icon: Globe },
    { id: 'plans', label: 'الخطط والاشتراكات', icon: Crown },
    { id: 'support', label: 'الدعم والبلاغات', icon: Headphones },
    { id: 'notifications', label: 'الإشعارات', icon: Bell },
    { id: 'ai', label: 'الذكاء الاصطناعي', icon: Cpu },
    { id: 'analytics', label: 'التحليلات والتقارير', icon: BarChart3 },
    { id: 'audit', label: 'سجل التدقيق', icon: ShieldCheck },
    { id: 'settings', label: 'إعدادات المنصة', icon: Settings },
  ];

  const handleSelect = (tab: AdminTab) => {
    setActiveTab(tab);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-72 flex flex-col justify-between transition-transform duration-300 ease-in-out border-l ${
          isDarkMode
            ? 'bg-[#0b0f19] border-slate-800 text-slate-200'
            : 'bg-white border-slate-200 text-slate-800'
        } ${mobileOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
        dir="rtl"
      >
        {/* Top Header / Logo */}
        <div className="p-5 flex items-center justify-between border-b border-inherit">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
              2
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                MASAR
              </span>
              <span className="block text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
                ADMIN PANEL
              </span>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-slate-700/20 text-slate-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isHighlight = item.highlight;

            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? isDarkMode
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : isHighlight
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-blue-900/40 to-indigo-900/30 text-blue-300 border border-blue-500/30 hover:border-blue-400'
                      : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                    : isDarkMode
                    ? 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      isActive
                        ? 'text-white'
                        : isHighlight
                        ? 'text-blue-400'
                        : isDarkMode
                        ? 'text-slate-400'
                        : 'text-slate-500'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {isHighlight && !isActive && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
                    جديد
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Theme Toggle */}
        <div className="p-4 border-t border-inherit flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400">الوضع المظلم</span>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
              isDarkMode ? 'bg-blue-600' : 'bg-slate-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${
                isDarkMode ? 'translate-x-[-22px]' : 'translate-x-[-2px]'
              }`}
            >
              {isDarkMode ? (
                <Moon className="w-2.5 h-2.5 text-blue-900" />
              ) : (
                <Sun className="w-2.5 h-2.5 text-amber-500" />
              )}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};
