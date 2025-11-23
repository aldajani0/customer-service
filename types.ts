export interface ScriptItem {
  id: string;
  categoryId: string;
  title: string;
  script: string;
  scriptEn?: string;
  notes?: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string; // We will use string keys to map to icons
}

export type ToastType = 'success' | 'info' | 'error';

export interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}