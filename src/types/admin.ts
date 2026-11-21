export type AdminTab =
  | 'overview'
  | 'users'
  | 'websites'
  | 'editor'
  | 'templates'
  | 'media'
  | 'hosting'
  | 'domains'
  | 'plans'
  | 'support'
  | 'notifications'
  | 'ai'
  | 'analytics'
  | 'audit'
  | 'settings';

export interface UserItem {
  id: string;
  name: string;
  email: string;
  role: 'مدير المنصة' | 'مشرف' | 'مطور' | 'عميل';
  status: 'نشط' | 'موقوف' | 'دعوة معلقة';
  projectsCount: number;
  lastActive: string;
  avatar: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  type: 'موقع إلكتروني' | 'تطبيق جوال' | 'متجر رقمي';
  domain: string;
  status: 'نشط' | 'قيد التطوير' | 'متوقف';
  visitors: string;
  lastUpdated: string;
  thumbnail: string;
}

export interface TicketItem {
  id: string;
  user: string;
  subject: string;
  category: 'فني' | 'فواتير' | 'استفسار' | 'تطوير';
  priority: 'عالية' | 'متوسطة' | 'منخفضة';
  status: 'مفتوحة' | 'قيد المعالجة' | 'مغلقة';
  createdAt: string;
}

export interface AuditLogItem {
  id: string;
  user: string;
  action: string;
  target: string;
  ip: string;
  timestamp: string;
  severity: 'معلومة' | 'تحذير' | 'حرج';
}

export interface MediaAsset {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document';
  url: string;
  size: string;
  uploadedAt: string;
}

export interface SystemAlert {
  id: string;
  title: string;
  time: string;
  type: 'success' | 'info' | 'warning' | 'error';
  iconType: 'check' | 'headphones' | 'crown' | 'alert';
}

export interface ActivityItem {
  id: string;
  user: string;
  avatar: string;
  action: string;
  time: string;
}
