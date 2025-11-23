import React from 'react';
import { Icons } from './Icons';

interface HeaderProps {
  onMenuClick: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  lastUpdated: string;
  isAdmin: boolean;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onMenuClick, 
  searchQuery, 
  onSearchChange, 
  lastUpdated, 
  isAdmin, 
  onLoginClick, 
  onLogoutClick,
  isDarkMode,
  onToggleTheme
}) => {
  return (
    <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 transition-all">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:hidden">
                <button onClick={onMenuClick} className="p-2 -mr-2 text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-xl transition-colors">
                    <Icons.Menu className="w-6 h-6" />
                </button>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  D360 <span className="text-orange-600 dark:text-orange-500">Bank</span>
                </h1>
            </div>
            
            <div className="hidden md:block">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">دليل خدمة العملاء</h1>
                <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">محدث: {lastUpdated}</p>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none md:w-96 group">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 transition-colors text-slate-400 group-focus-within:text-orange-500">
              <Icons.Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              className="block w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 py-3 pr-11 pl-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/20 transition-all shadow-sm dark:shadow-inner"
              placeholder="ابحث عن سؤال، خدمة، أو كلمة مفتاحية..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          
          <button
            onClick={onToggleTheme}
            className="p-3 rounded-2xl transition-all shadow-sm border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            title={isDarkMode ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
          >
             {isDarkMode ? <Icons.Sun className="w-5 h-5" /> : <Icons.Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={isAdmin ? onLogoutClick : onLoginClick}
            className={`p-3 rounded-2xl transition-all shadow-sm border ${
              isAdmin 
              ? 'bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-500/20' 
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
            title={isAdmin ? "تسجيل خروج" : "تسجيل دخول مشرف"}
          >
            {isAdmin ? <Icons.LogOut className="w-5 h-5" /> : <Icons.Lock className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;