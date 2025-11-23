import React, { useState } from 'react';
import { Icons } from './Icons';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Fay.12') { // Password
      onLogin(password);
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-sm overflow-hidden bg-white dark:bg-slate-900 rounded-2xl shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">تسجيل دخول المشرف</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-bold text-slate-600 dark:text-slate-400">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  className={`block w-full rounded-xl border py-3.5 px-4 text-sm focus:outline-none focus:ring-4 transition-all bg-white dark:bg-slate-950 dark:text-white ${
                    error 
                      ? 'border-red-300 dark:border-red-900/50 focus:border-red-500 focus:ring-red-500/10' 
                      : 'border-slate-200 dark:border-slate-800 focus:border-orange-500 dark:focus:border-orange-500 focus:ring-orange-500/10'
                  }`}
                  placeholder="••••••••"
                  autoFocus
                />
              </div>
              {error && (
                <p className="mt-2 text-xs text-red-500 dark:text-red-400 font-bold animate-pulse">
                  كلمة المرور غير صحيحة
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-600 dark:bg-orange-500 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-700 dark:hover:bg-orange-600 active:scale-95 shadow-lg shadow-orange-500/20"
            >
              <Icons.Unlock className="w-4 h-4" />
              دخول
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;