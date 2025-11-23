import React from 'react';
import { CATEGORIES } from '../constants';
import { Icons } from './Icons';

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onSelectCategory, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-72 transform bg-white dark:bg-slate-900 shadow-2xl lg:shadow-none transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-slate-100 dark:border-slate-800 flex flex-col`}
      >
        <div className="flex h-24 items-center justify-between px-8 shrink-0">
            <div className="flex items-center justify-center w-full lg:justify-start">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  D360 <span className="text-orange-600 dark:text-orange-500">Bank</span>
                </h1>
            </div>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 absolute left-6 transition-colors">
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1.5 overflow-y-auto flex-1 custom-scrollbar">
          <div className="px-4 mb-3 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            الأقسام
          </div>
          {CATEGORIES.map((cat) => {
            const Icon = Icons[cat.icon as keyof typeof Icons];
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  onClose();
                }}
                className={`relative flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-right text-sm font-medium transition-all duration-200 group ${
                  isSelected
                    ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {isSelected && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-orange-500 rounded-l-full shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                )}
                <Icon className={`w-5 h-5 transition-colors ${isSelected ? 'text-orange-600 dark:text-orange-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;