'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/shared/ui/theme-toggle';
import { LoginForm } from '@/features/auth/ui/login-form';

export function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 transition-colors duration-700 overflow-hidden font-sans selection:bg-[#7A001E] selection:text-white">
      {/* High-Resolution Unsplash Background */}
      <motion.div 
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* Dynamic Overlay Filter: Light Mode (White & Burgundy tint) | Dark Mode (Deep Cinematic Dark) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/95 via-white/85 to-[#7A001E]/20 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-900/85 backdrop-blur-[2px] transition-colors duration-700" />

      {/* Ambient Radial Light Orbs (Burgundy #7A001E Accent) */}
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-[#7A001E]/20 dark:bg-[#7A001E]/30 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-slate-900/10 dark:bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Top Right Floating Theme Toggle */}
      <div className="absolute top-6 right-6 z-30">
        <ThemeToggle />
      </div>

      {/* Ultra-Premium Glassmorphism Card (White & Burgundy in Light mode | Dark Glass in Dark mode) */}
      <motion.div 
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[460px] z-10 my-auto"
      >
        <div className="relative rounded-[36px] border border-white/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/[0.45] backdrop-blur-3xl saturate-150 backdrop-contrast-125 p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(122,0,30,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_32px_64px_-16px_rgba(0,0,0,0.7)] shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/10 transition-all duration-500">
          
          {/* Top Edge Specular Reflection */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7A001E]/40 dark:via-white/70 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-[1.5px] bg-gradient-to-b from-[#7A001E]/30 dark:from-white/40 via-transparent to-transparent pointer-events-none" />

          {/* Header & Univalle Burgundy Emblem */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center space-x-3.5">
              {/* Shield Emblem with Burgundy Glass Depth */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7A001E] to-[#990024] opacity-40 dark:opacity-60 blur-sm group-hover:opacity-100 transition duration-500" />
                <div className="relative w-13 h-13 p-2.5 rounded-2xl bg-gradient-to-br from-[#7A001E] via-[#990024] to-[#600018] border border-white/40 flex items-center justify-center text-white shadow-[0_8px_20px_rgba(122,0,30,0.4)] backdrop-blur-xl shrink-0">
                  <svg className="w-7 h-7 filter drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                    <path d="M9 9l6 6" />
                    <path d="M15 9l-6 6" />
                  </svg>
                </div>
              </div>

              <div className="text-left">
                <p className="text-[10px] tracking-[0.22em] font-extrabold text-[#7A001E] dark:text-red-400 uppercase leading-none drop-shadow-sm">
                  UNIVERSIDAD
                </p>
                <h1 className="text-lg font-black text-slate-900 dark:text-white leading-tight font-sans tracking-tight">
                  Univalle Device Controller
                </h1>
              </div>
            </div>

            {/* Subtle Burgundy / White Metallic Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7A001E]/20 dark:via-white/25 to-transparent my-1" />

            {/* Welcome title & subtitle */}
            <div className="space-y-1 pt-1">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Bienvenido de vuelta
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-200/90 max-w-xs mx-auto leading-relaxed font-normal">
                Inicia sesión para continuar con el sistema de gestión de dispositivos.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="mt-6">
            <LoginForm />
          </div>
        </div>

        {/* Footer Info */}
        <p className="text-center text-[11px] text-slate-600 dark:text-slate-300/80 mt-6 font-medium tracking-wide">
          © 2026 Universidad del Valle. Todos los derechos reservados.
        </p>
      </motion.div>
    </div>
  );
}
