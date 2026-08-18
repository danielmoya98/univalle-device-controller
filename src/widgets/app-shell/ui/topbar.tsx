'use client';

import * as React from 'react';
import { Menu, Search, Bell, Calendar, Command } from 'lucide-react';
import { ThemeToggle } from '@/shared/ui/theme-toggle';

interface TopbarProps {
  onMenuClick: () => void;
  title?: string;
  subtitle?: string;
}

export function Topbar({ onMenuClick, title = 'Dashboard', subtitle = 'Resumen general del sistema' }: TopbarProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <header className="sticky top-0 z-30 w-full bg-slate-950/75 dark:bg-slate-950/85 backdrop-blur-3xl saturate-150 border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      {/* Top Edge Specular Reflection */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      {/* Left Title & Mobile Menu Button */}
      <div className="flex items-center space-x-3.5">
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
        >
          <Menu className="w-5 h-5" />
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

      {/* Center Search Bar */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
        <div className="relative w-full flex items-center">
          <div className="absolute left-3.5 text-slate-400 pointer-events-none">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar dispositivos, usuarios, aulas..."
            className="w-full rounded-2xl border border-white/15 bg-slate-900/60 backdrop-blur-xl px-4 py-2 pl-10 pr-12 text-xs text-white placeholder-slate-400/80 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 shadow-inner"
          />
          <div className="absolute right-3 text-[10px] font-bold text-slate-400 bg-white/10 px-1.5 py-0.5 rounded-md border border-white/10 flex items-center space-x-0.5">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        {/* Date Selector Badge */}
        <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-white/15 bg-white/[0.06] text-xs font-semibold text-slate-200 backdrop-blur-md">
          <Calendar className="w-3.5 h-3.5 text-red-400" />
          <span>13 May - 19 May 2026</span>
        </div>

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
