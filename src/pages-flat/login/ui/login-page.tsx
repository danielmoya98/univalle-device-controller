'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@tremor/react';
import { ThemeToggle } from '@/shared/ui/theme-toggle';
import { LoginForm } from '@/features/auth/ui/login-form';

export function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 transition-colors duration-500 overflow-hidden font-sans selection:bg-indigo-500 selection:text-white">
      {/* Unsplash Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* Dark Transparent Overlay Filter */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/75 to-indigo-950/80 backdrop-blur-[2px] transition-colors duration-500" />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Right Theme Toggle */}
      <div className="absolute top-6 right-6 z-30">
        <ThemeToggle />
      </div>

      {/* Glassmorphism Login Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-[450px] z-10 my-auto"
      >
        <Card className="p-8 md:p-10 rounded-[32px] border border-white/20 dark:border-white/10 bg-white/20 dark:bg-slate-900/40 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300">
          {/* Institution Header & Logo */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center space-x-3">
              {/* Shield Logo Emblem */}
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shadow-inner backdrop-blur-md">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                  <path d="M9 9l6 6" />
                  <path d="M15 9l-6 6" />
                </svg>
              </div>

              <div className="text-left">
                <p className="text-[10px] tracking-widest font-extrabold text-indigo-200 uppercase leading-none">
                  UNIVERSIDAD
                </p>
                <h1 className="text-base font-bold text-white leading-tight font-sans drop-shadow-sm">
                  Univalle Device Controller
                </h1>
              </div>
            </div>

            {/* Divider line under logo */}
            <div className="w-full border-t border-white/15 dark:border-white/10 my-1" />

            {/* Welcome title & subtitle */}
            <div className="space-y-1 pt-1">
              <h2 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
                Bienvenido de vuelta
              </h2>
              <p className="text-xs text-slate-200/90 dark:text-slate-300/80 max-w-xs mx-auto leading-relaxed">
                Inicia sesión para continuar con el sistema de gestión de dispositivos.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="mt-6">
            <LoginForm />
          </div>
        </Card>

        {/* Footer info */}
        <p className="text-center text-[11px] text-slate-300/80 dark:text-slate-400/70 mt-6 font-medium tracking-wide drop-shadow-sm">
          © 2026 Universidad del Valle. Todos los derechos reservados.
        </p>
      </motion.div>
    </div>
  );
}
