import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { ScriptItem, Category } from '../types';
import { CATEGORIES } from '../constants';

interface ScriptFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (script: Omit<ScriptItem, 'id'>) => void;
  initialData?: ScriptItem;
}

const ScriptFormModal: React.FC<ScriptFormModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    title: '',
    script: '',
    scriptEn: '',
    notes: '',
    categoryId: 'quick',
    tags: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        script: initialData.script,
        scriptEn: initialData.scriptEn || '',
        notes: initialData.notes || '',
        categoryId: initialData.categoryId,
        tags: initialData.tags.join(', ')
      });
    } else {
      setFormData({
        title: '',
        script: '',
        scriptEn: '',
        notes: '',
        categoryId: 'quick',
        tags: ''
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t.length > 0)
    });
    onClose();
  };

  // Filter out 'all' from categories for selection
  const selectableCategories = CATEGORIES.filter(c => c.id !== 'all');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900 rounded-2xl shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800 flex flex-col">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {initialData ? 'تعديل السكربت' : 'إضافة سكربت جديد'}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">عنوان السكربت</label>
                <input
                    required
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-white dark:bg-slate-950 dark:text-white"
                    placeholder="مثال: ترحيب بالعميل"
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">القسم</label>
                <select
                    value={formData.categoryId}
                    onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-white dark:bg-slate-950 dark:text-white"
                >
                    {selectableCategories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">النص (العربية)</label>
            <textarea
                required
                rows={4}
                value={formData.script}
                onChange={(e) => setFormData({...formData, script: e.target.value})}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-white dark:bg-slate-950 dark:text-white"
                placeholder="اكتب نص الرد هنا..."
            />
          </div>

          <div className="space-y-2" dir="ltr">
            <div className="flex justify-between">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Script (English)</label>
                <span className="text-xs text-slate-400">Optional</span>
            </div>
            <textarea
                rows={4}
                value={formData.scriptEn}
                onChange={(e) => setFormData({...formData, scriptEn: e.target.value})}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 text-left bg-white dark:bg-slate-950 dark:text-white"
                placeholder="Write the English response here..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">ملاحظات إضافية (اختياري)</label>
            <input
                type="text"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-white dark:bg-slate-950 dark:text-white"
                placeholder="تظهر في مربع تنبيه أصفر"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">الوسوم (Tags)</label>
            <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-white dark:bg-slate-950 dark:text-white"
                placeholder="افصل بين الوسوم بفاصلة، مثال: ترحيب، عام، بداية"
            />
          </div>

          <div className="pt-4 flex gap-3">
            <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
            >
                إلغاء
            </button>
            <button
                type="submit"
                className="flex-1 rounded-xl bg-orange-600 dark:bg-orange-500 py-3 text-sm font-bold text-white transition-all hover:bg-orange-700 dark:hover:bg-orange-600 shadow-lg shadow-orange-500/20 active:scale-95"
            >
                {initialData ? 'حفظ التعديلات' : 'إضافة السكربت'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScriptFormModal;