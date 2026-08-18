'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/shared/ui/theme-toggle';
import { LoginForm } from '@/features/auth/ui/login-form';

export function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 transition-colors duration-700 overflow-hidden font-sans selection:bg-red-500 selection:text-white">
      {/* Cinematic Background Image with Slow Ambient Zoom */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-950/80 to-slate-900/85 backdrop-blur-[3px]" />

      {/* Dynamic Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Floating Glass Theme Toggle Top Right */}
      <div className="absolute top-6 right-6 z-30">
        <ThemeToggle />
      </div>

      {/* Ultra-Premium Glassmorphism Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[460px] z-10 my-auto"
      >
        <div className="relative rounded-[36px] border border-white/20 dark:border-white/15 bg-white/[0.08] dark:bg-slate-900/[0.45] backdrop-blur-3xl p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] shadow-black/40 overflow-hidden transition-all duration-500">
          
          {/* Top Glass Specular Reflection Highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none" />

          {/* Institution Header & Logo */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center space-x-3.5">
              {/* Shield Logo Emblem with Glass Effect */}
              <div className="w-13 h-13 p-2.5 rounded-2xl bg-gradient-to-br from-red-600/30 via-rose-600/20 to-indigo-600/20 border border-white/30 flex items-center justify-center text-white shadow-[0_8px_16px_rgba(225,29,72,0.25)] backdrop-blur-md shrink-0">
                <svg className="w-7 h-7 filter drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                  <path d="M9 9l6 6" />
                  <path d="M15 9l-6 6" />
                </svg>
              </div>

              <div className="text-left">
                <p className="text-[10px] tracking-[0.2em] font-extrabold text-red-400 uppercase leading-none drop-shadow">
                  UNIVERSIDAD
                </p>
                <h1 className="text-lg font-black text-white leading-tight font-sans tracking-tight drop-shadow-md">
                  Univalle Device Controller
                </h1>
              </div>
            </div>

            {/* Divider line under logo */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-1" />

            {/* Welcome title & subtitle */}
            <div className="space-y-1 pt-1">
              <h2 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
                Bienvenido de vuelta
              </h2>
              <p className="text-xs text-slate-200/90 max-w-xs mx-auto leading-relaxed font-normal">
                Inicia sesión para continuar con el sistema de gestión de dispositivos.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="mt-6">
            <LoginForm />
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-[11px] text-slate-300/80 mt-6 font-medium tracking-wide drop-shadow">
          © 2026 Universidad del Valle. Todos los derechos reservados.
        </p>
      </motion.div>
    </div>
  );
}
