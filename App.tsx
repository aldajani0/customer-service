import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ScriptCard from './components/ScriptCard';
import LoginModal from './components/LoginModal';
import ScriptFormModal from './components/ScriptFormModal';
import { SCRIPTS, CATEGORIES } from './constants';
import { ScriptItem, ToastMessage } from './types';
import { Icons } from './components/Icons';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Admin & Data State
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingScript, setEditingScript] = useState<ScriptItem | undefined>(undefined);
  
  // Initialize scripts from LocalStorage or use default safely
  const [scripts, setScripts] = useState<ScriptItem[]>(() => {
    try {
      const saved = localStorage.getItem('d360_scripts');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Error parsing saved scripts:", error);
      // If error occurs, clear bad data and fallback to default
      localStorage.removeItem('d360_scripts');
    }
    return SCRIPTS;
  });

  // Theme Logic
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Save scripts to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('d360_scripts', JSON.stringify(scripts));
  }, [scripts]);

  // Scroll to top logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter logic
  const filteredScripts = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    
    return scripts.filter((item: ScriptItem) => {
      const matchesCategory = selectedCategory === 'all' || item.categoryId === selectedCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.script.toLowerCase().includes(lowerQuery) ||
        (item.scriptEn && item.scriptEn.toLowerCase().includes(lowerQuery)) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerQuery));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, scripts]);

  const selectedCategoryName = CATEGORIES.find(c => c.id === selectedCategory)?.name || 'الكل';

  // Toast Logic
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast('تم النسخ بنجاح');
    }).catch(() => {
      showToast('فشل النسخ', 'error');
    });
  };

  // Admin Actions
  const handleLogin = () => {
    setIsAdmin(true);
    setIsLoginModalOpen(false);
    showToast('تم تسجيل الدخول كمشرف', 'success');
  };

  const handleLogout = () => {
    setIsAdmin(false);
    showToast('تم تسجيل الخروج', 'info');
  };

  const handleAddScript = (newScriptData: Omit<ScriptItem, 'id'>) => {
    const newScript: ScriptItem = {
      ...newScriptData,
      id: `custom-${Date.now()}` // Generate a unique ID
    };
    setScripts(prev => [newScript, ...prev]);
    showToast('تم إضافة السكربت بنجاح');
  };

  const handleUpdateScript = (updatedScriptData: Omit<ScriptItem, 'id'>) => {
    if (!editingScript) return;
    
    setScripts(prev => prev.map(item => 
      item.id === editingScript.id 
        ? { ...updatedScriptData, id: item.id } 
        : item
    ));
    showToast('تم تعديل السكربت بنجاح');
    setEditingScript(undefined);
  };

  const handleDeleteScript = (id: string) => {
    setScripts(prev => prev.filter(item => item.id !== id));
    showToast('تم حذف السكربت', 'info');
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-pattern transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => {
            setSelectedCategory(id);
            setSearchQuery(''); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0 relative">
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          lastUpdated="Nov 2025"
          isAdmin={isAdmin}
          onLoginClick={() => setIsLoginModalOpen(true)}
          onLogoutClick={handleLogout}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />

        <main className="flex-1 p-4 md:p-8 pb-32">
          <div className="mx-auto max-w-5xl">
            {/* Title Section */}
            <div className="mb-8 flex items-end justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                  {selectedCategory === 'all' ? 'جميع السكربتات' : selectedCategoryName}
                  <span className="flex items-center justify-center min-w-[2rem] h-8 rounded-full bg-orange-100 dark:bg-orange-900/40 px-2 text-sm font-bold text-orange-600 dark:text-orange-400">
                    {filteredScripts.length}
                  </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-medium">
                  {searchQuery ? `نتائج البحث عن "${searchQuery}"` : 'اختر البطاقة لعرض النصوص العربية والإنجليزية'}
                </p>
              </div>
              
              {isAdmin && (
                <button
                    onClick={() => {
                        setEditingScript(undefined);
                        setIsFormModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-orange-700 shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
                >
                    <Icons.Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">إضافة سكربت</span>
                </button>
              )}
            </div>

            {/* Scripts List */}
            <div className="space-y-4">
              {filteredScripts.length > 0 ? (
                filteredScripts.map((script) => (
                  <ScriptCard 
                    key={script.id} 
                    item={script} 
                    onCopy={handleCopy}
                    isAdmin={isAdmin}
                    onEdit={(item) => {
                        setEditingScript(item);
                        setIsFormModalOpen(true);
                    }}
                    onDelete={handleDeleteScript}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-16 text-center transition-all">
                    <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6">
                        <span className="text-4xl opacity-50">🔍</span>
                    </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">لا توجد نتائج مطابقة</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                    لم نتمكن من العثور على ما تبحث عنه. جرب كلمات مفتاحية مختلفة أو تصفح جميع الأقسام.
                  </p>
                  <button 
                    onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
                    className="mt-6 px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-200 dark:hover:border-orange-900 rounded-lg font-bold shadow-sm transition-all active:scale-95"
                  >
                    مسح الفلتر والعودة
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-12 border-t border-slate-100 dark:border-slate-800 pt-6 pb-8 text-center">
                <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center justify-center gap-2">
                   دليل خدمة العملاء © 2025
                   <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                   Aldajani
                </p>
            </div>
          </div>
        </main>
        
        {/* Scroll to Top Button */}
        <button 
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-orange-600 text-white shadow-lg shadow-orange-500/20 transition-all duration-500 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-xl active:scale-95 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <Icons.ArrowUp className="w-6 h-6" />
        </button>
      </div>

      {/* Admin Modals */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLogin={handleLogin} 
      />
      
      <ScriptFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={editingScript ? handleUpdateScript : handleAddScript}
        initialData={editingScript}
      />

      {/* Toast Notification Container */}
      {toasts.length > 0 && (
        <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-3 pointer-events-none">
            {toasts.map((toast) => (
            <div
                key={toast.id}
                className="flex min-w-[300px] animate-[slideIn_0.4s_cubic-bezier(0.16,1,0.3,1)] items-center gap-4 rounded-xl bg-slate-900/90 dark:bg-white/90 backdrop-blur-md px-5 py-4 text-white dark:text-slate-900 shadow-2xl pointer-events-auto border border-slate-700/50 dark:border-slate-200/50"
            >
                <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] ${toast.type === 'error' ? 'bg-red-500 shadow-red-500/50' : 'bg-green-500 shadow-green-500/50'}`}></div>
                <p className="font-medium text-sm tracking-wide">{toast.message}</p>
            </div>
            ))}
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default App;