'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Menu, PanelLeftClose, PanelLeft, Bell } from 'lucide-react';
import { ThemeToggle } from '@/shared/ui/theme-toggle';

interface TopbarProps {
  onMobileMenuClick: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  title?: string;
  subtitle?: string;
}

export function Topbar({
  onMobileMenuClick,
  isCollapsed,
  onToggleCollapse,
  title = 'Dashboard',
  subtitle = 'Resumen general del sistema',
}: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full bg-slate-950/75 dark:bg-slate-950/85 backdrop-blur-3xl saturate-150 border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      {/* Top Edge Specular Reflection */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      {/* Left Title & Sidebar Toggle Buttons */}
      <div className="flex items-center space-x-3.5">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={onMobileMenuClick}
          className="lg:hidden p-2 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop collapse/expand toggle button */}
        <button
          type="button"
          onClick={onToggleCollapse}
          className="hidden lg:flex p-2 rounded-xl border border-white/15 bg-white/[0.08] hover:bg-white/[0.18] text-slate-200 hover:text-white transition-all shadow-sm focus:outline-none"
          title={isCollapsed ? 'Expandir menú lateral' : 'Colapsar menú lateral'}
        >
          {isCollapsed ? (
            <PanelLeft className="w-4 h-4 text-red-400" />
          ) : (
            <PanelLeftClose className="w-4 h-4 text-slate-300" />
          )}
        </button>

        <div>
          <h1 className="text-lg font-black text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-xs text-slate-400 font-medium hidden sm:block">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        {/* Notifications Bell */}
        <button
          type="button"
          onClick={() => alert('Tienes 3 alertas recientes de mantenimiento de dispositivos.')}
          className="relative p-2 rounded-xl border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white transition-colors focus:outline-none backdrop-blur-md"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-[9px] font-extrabold text-white flex items-center justify-center border border-slate-950 shadow-md">
            3
          </span>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
