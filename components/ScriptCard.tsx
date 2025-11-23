import React, { useState } from 'react';
import { ScriptItem } from '../types';
import { Icons } from './Icons';

interface ScriptCardProps {
  item: ScriptItem;
  onCopy: (text: string) => void;
  isAdmin?: boolean;
  onEdit?: (item: ScriptItem) => void;
  onDelete?: (id: string) => void;
}

const ScriptCard: React.FC<ScriptCardProps> = ({ item, onCopy, isAdmin, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [copiedLang, setCopiedLang] = useState<'ar' | 'en' | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, lang: 'ar' | 'en') => {
    e.stopPropagation(); 
    onCopy(text);
    setCopiedLang(lang);
    setTimeout(() => setCopiedLang(null), 2000);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEdit) onEdit(item);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete && window.confirm('هل أنت متأكد من حذف هذا السكربت؟')) {
      onDelete(item.id);
    }
  };

  return (
    <div
      className={`group animate-fade-in overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        expanded 
          ? 'ring-2 ring-orange-500/10 border-orange-200 dark:border-orange-500/30 bg-white dark:bg-slate-900 shadow-xl shadow-orange-100/50 dark:shadow-none' 
          : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg dark:hover:shadow-slate-900/50 hover:border-slate-200 dark:hover:border-slate-700'
      }`}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex cursor-pointer items-center justify-between p-5 sm:p-6"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={`font-bold text-lg transition-colors duration-300 ${expanded ? 'text-orange-600 dark:text-orange-400' : 'text-slate-800 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400'}`}>
                {item.title}
            </h3>
            {isAdmin && (
                <div className="flex gap-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        onClick={handleEditClick}
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        title="تعديل"
                    >
                        <Icons.Edit className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={handleDeleteClick}
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        title="حذف"
                    >
                        <Icons.Trash className="w-4 h-4" />
                    </button>
                </div>
            )}
          </div>
          {!expanded && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-1 font-normal opacity-90">
              {item.script}
            </p>
          )}
        </div>
        <div className={`mr-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${expanded ? 'bg-orange-50 dark:bg-orange-500/10' : 'bg-slate-50 dark:bg-slate-800 group-hover:bg-orange-50 dark:group-hover:bg-slate-700'}`}>
          <Icons.ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${expanded ? 'rotate-180 text-orange-500' : 'text-slate-400 dark:text-slate-500 group-hover:text-orange-500 dark:group-hover:text-slate-300'}`}
          />
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {/* Inner Content Area - slightly darker for depth */}
          <div className="border-t border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 p-5 sm:p-6 pt-4">
            
            <div className="flex flex-col gap-5">
                {/* Arabic Section */}
                <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm dark:shadow-none transition-colors">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> العربية
                        </span>
                    </div>
                    <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-200 font-medium whitespace-pre-wrap">
                        {item.script}
                    </p>
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={(e) => handleCopy(e, item.script, 'ar')}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 active:scale-95 ${
                                copiedLang === 'ar'
                                ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 ring-1 ring-green-200 dark:ring-green-500/20' 
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400 hover:ring-1 hover:ring-orange-200 dark:hover:ring-orange-500/20'
                            }`}
                        >
                            {copiedLang === 'ar' ? (
                                <>
                                <Icons.Check className="w-4 h-4" />
                                <span>تم النسخ</span>
                                </>
                            ) : (
                                <>
                                <Icons.Copy className="w-4 h-4" />
                                <span>نسخ النص</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* English Section */}
                {item.scriptEn && (
                    <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm dark:shadow-none transition-colors" dir="ltr">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> English
                            </span>
                        </div>
                        <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-200 font-medium whitespace-pre-wrap text-left">
                            {item.scriptEn}
                        </p>
                        <div className="mt-4 flex justify-start">
                            <button
                                onClick={(e) => handleCopy(e, item.scriptEn!, 'en')}
                                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 active:scale-95 ${
                                    copiedLang === 'en'
                                    ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 ring-1 ring-green-200 dark:ring-green-500/20' 
                                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400 hover:ring-1 hover:ring-orange-200 dark:hover:ring-orange-500/20'
                                }`}
                            >
                                {copiedLang === 'en' ? (
                                    <>
                                    <Icons.Check className="w-4 h-4" />
                                    <span>Copied</span>
                                    </>
                                ) : (
                                    <>
                                    <Icons.Copy className="w-4 h-4" />
                                    <span>Copy Text</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {item.notes && (
              <div className="mt-6 flex gap-3 text-sm text-slate-600 dark:text-slate-300 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/20">
                <Icons.AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-700 dark:text-amber-500 block mb-1">ملاحظة:</span>
                  <span className="leading-relaxed opacity-90">{item.notes}</span>
                </div>
              </div>
            )}

            {item.tags && item.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptCard;