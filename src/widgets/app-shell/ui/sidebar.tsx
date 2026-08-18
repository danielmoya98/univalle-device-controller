'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Monitor,
  Users,
  MapPin,
  Building2,
  FolderTree,
  Tag,
  Layers,
  ClipboardList,
  Wrench,
  History,
  BarChart3,
  Download,
  Settings,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { logoutAction } from '@/features/auth/api/login-action';

interface SidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  user: {
    name: string;
    email: string;
    role: string;
  };
}

interface NavGroup {
  title: string;
  items: {
    name: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
  }[];
}

const navGroups: NavGroup[] = [
  {
    title: 'GESTIÓN',
    items: [
      { name: 'Dispositivos', href: '/dashboard/devices', icon: Monitor },
      { name: 'Usuarios', href: '/dashboard/users', icon: Users },
      { name: 'Aulas / Bloques', href: '/dashboard/locations', icon: MapPin },
      { name: 'Ubicaciones', href: '/dashboard/blocks', icon: Building2 },
    ],
  },
  {
    title: 'INVENTARIO',
    items: [
      { name: 'Categorías', href: '/dashboard/categories', icon: FolderTree },
      { name: 'Marcas', href: '/dashboard/brands', icon: Tag },
      { name: 'Modelos', href: '/dashboard/models', icon: Layers },
    ],
  },
  {
    title: 'MANTENIMIENTO',
    items: [
      { name: 'Rondas del Viernes', href: '/dashboard/inspections', icon: ClipboardList, badge: 'Nuevo' },
      { name: 'Recambios', href: '/dashboard/replacements', icon: Wrench },
      { name: 'Historial', href: '/dashboard/history', icon: History },
    ],
  },
  {
    title: 'REPORTES',
    items: [
      { name: 'Resumen', href: '/dashboard/reports', icon: BarChart3 },
      { name: 'Exportaciones', href: '/dashboard/exports', icon: Download },
    ],
  },
  {
    title: 'SISTEMA',
    items: [
      { name: 'Configuración', href: '/dashboard/settings', icon: Settings },
      { name: 'Roles y Permisos', href: '/dashboard/roles', icon: ShieldCheck },
    ],
  },
];

export function Sidebar({
  isMobileOpen,
  onMobileClose,
  isCollapsed,
  onToggleCollapse,
  user,
}: SidebarProps) {
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onMobileClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Framer Motion Container */}
      <motion.aside
        animate={{
          width: isCollapsed ? 80 : 280,
          x: typeof window !== 'undefined' && window.innerWidth < 1024 ? (isMobileOpen ? 0 : -300) : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 32,
          mass: 0.8,
        }}
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-slate-950/80 dark:bg-slate-950/90 backdrop-blur-3xl saturate-150 border-r border-white/10 shadow-[8px_0_32px_rgba(0,0,0,0.6)] overflow-hidden`}
      >
        {/* Top Edge Specular Reflection */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

        {/* Brand Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between shrink-0 h-18">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#7A001E] via-[#990024] to-[#600018] p-0.5 shadow-[0_4px_15px_rgba(122,0,30,0.5)] flex items-center justify-center text-white shrink-0 border border-white/30">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="truncate whitespace-nowrap"
                >
                  <p className="text-[9px] tracking-[0.2em] font-extrabold text-red-400 uppercase leading-none">
                    UNIVERSIDAD
                  </p>
                  <h1 className="text-sm font-extrabold text-white tracking-tight leading-tight">
                    Univalle Device
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Collapse Toggle Button */}
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden lg:flex p-1.5 rounded-xl border border-white/15 bg-white/[0.08] hover:bg-white/[0.18] text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none shrink-0"
            title={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.div>
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-none">
          {/* Main Dashboard Link */}
          <div>
            <Link
              href="/dashboard"
              onClick={() => onMobileClose()}
              title={isCollapsed ? 'Dashboard' : undefined}
              className={`group relative flex items-center ${
                isCollapsed ? 'justify-center px-0 py-2.5' : 'space-x-3 px-3.5 py-2.5'
              } rounded-2xl text-xs font-semibold transition-all duration-300 ${
                pathname === '/dashboard'
                  ? 'bg-gradient-to-r from-[#7A001E] to-[#990024] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_8px_20px_rgba(122,0,30,0.4)] border border-white/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/10 border border-transparent'
              }`}
            >
              <LayoutDashboard className="w-5 h-5 text-white shrink-0" />

              <AnimatePresence mode="wait">
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="truncate whitespace-nowrap"
                  >
                    Dashboard
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Nav Groups */}
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-1.5">
              {!isCollapsed ? (
                <p className="px-3 text-[10px] font-extrabold tracking-[0.18em] text-slate-400 uppercase">
                  {group.title}
                </p>
              ) : (
                <div className="w-full h-px bg-white/10 my-2" />
              )}

              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => onMobileClose()}
                    title={isCollapsed ? item.name : undefined}
                    className={`group relative flex items-center ${
                      isCollapsed ? 'justify-center px-0 py-2.5' : 'justify-between px-3.5 py-2'
                    } rounded-2xl text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-[#7A001E]/90 text-white shadow-md border border-white/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.08] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-red-400'}`} />
                      
                      <AnimatePresence mode="wait">
                        {!isCollapsed && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="truncate whitespace-nowrap"
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {!isCollapsed && item.badge && (
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* User Profile Footer */}
        <div className="p-3 border-t border-white/10 shrink-0 bg-slate-950/60 backdrop-blur-md">
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className={`w-full flex items-center ${
                isCollapsed ? 'justify-center p-2' : 'justify-between p-2.5'
              } rounded-2xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/15 transition-all text-left group`}
              title={isCollapsed ? `${user.name} (${user.role})` : undefined}
            >
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7A001E] to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 border border-white/30 shadow-sm">
                  {user.name ? user.name.slice(0, 2).toUpperCase() : 'AD'}
                </div>

                <AnimatePresence mode="wait">
                  {!isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="truncate whitespace-nowrap"
                    >
                      <p className="text-xs font-bold text-white truncate">{user.name}</p>
                      <p className="text-[10px] font-semibold text-red-400 uppercase tracking-wider">
                        {user.role}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {!isCollapsed && (
                <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
              )}
            </button>

            {/* Logout Dropdown menu */}
            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-0 right-0 mb-2 p-2 rounded-2xl bg-slate-900/95 border border-white/20 backdrop-blur-2xl shadow-2xl z-50 space-y-1"
                >
                  <form action={async () => { await logoutAction(); window.location.href = '/login'; }}>
                    <button
                      type="submit"
                      className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:bg-rose-500/20 hover:text-rose-100 transition-colors"
                    >
                      <LogOut className="w-4 h-4 text-rose-400" />
                      <span>Cerrar sesión</span>
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
