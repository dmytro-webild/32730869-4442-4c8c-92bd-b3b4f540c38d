import React, { useState } from 'react';
import type { AdminTab } from '@/types/admin';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { OverviewSection } from '@/components/admin/sections/OverviewSection';
import { AdminSectionsContainer } from '@/components/admin/sections/AdminSectionsContainer';
import { MasarSuperEditor } from '@/components/admin/editor/MasarSuperEditor';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // If in Super Editor mode, render full editor canvas
  if (activeTab === 'editor') {
    return (
      <MasarSuperEditor
        onBackToAdmin={() => setActiveTab('overview')}
        isDarkMode={isDarkMode}
      />
    );
  }

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-200 ${
        isDarkMode ? 'bg-[#080b13] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Sidebar Navigation */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Container Offset by Sidebar width on lg screens */}
      <div className="lg:mr-72 flex flex-col min-h-screen">
        {/* Header Bar */}
        <AdminHeader
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setMobileOpen={setMobileOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Content View */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {activeTab === 'overview' ? (
            <OverviewSection isDarkMode={isDarkMode} setActiveTab={setActiveTab} />
          ) : (
            <AdminSectionsContainer
              activeTab={activeTab}
              isDarkMode={isDarkMode}
              setActiveTab={setActiveTab}
              searchQuery={searchQuery}
            />
          )}
        </main>
      </div>
    </div>
  );
}
