'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@tremor/react';
import { Laptop, Printer, Headphones, Smartphone } from 'lucide-react';
import { ThemeToggle } from '@/shared/ui/theme-toggle';
import { LoginForm } from '@/features/auth/ui/login-form';

export function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#F4F6F9] dark:bg-[#0B0F19] transition-colors duration-500 overflow-hidden font-sans">
      {/* Background Architectural & Tech Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-20">
        {/* Left Architectural Building Graphic Simulation */}
        <div className="absolute -left-12 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent dark:from-indigo-900/30" />
        
        {/* Floating Line Device Icons on the Right */}
        <div className="hidden lg:block absolute right-24 top-1/4 text-indigo-400/40 dark:text-indigo-400/20">
          <Laptop className="w-12 h-12 stroke-[1.5]" />
        </div>
        <div className="hidden lg:block absolute right-16 top-2/5 text-indigo-400/40 dark:text-indigo-400/20">
          <Printer className="w-10 h-10 stroke-[1.5]" />
        </div>
        <div className="hidden lg:block absolute right-28 top-3/5 text-indigo-400/40 dark:text-indigo-400/20">
          <Headphones className="w-10 h-10 stroke-[1.5]" />
        </div>
        <div className="hidden lg:block absolute right-20 bottom-1/4 text-indigo-400/40 dark:text-indigo-400/20">
          <Smartphone className="w-9 h-9 stroke-[1.5]" />
        </div>
      </div>

      {/* Floating Theme Toggle Top Right */}
      <div className="absolute top-6 right-6 z-30">
        <ThemeToggle />
      </div>

      {/* Login Container */}
      <div className="w-full max-w-[460px] z-10 my-auto">
        <Card className="p-8 md:p-10 rounded-[28px] border border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#111726]/95 backdrop-blur-xl shadow-2xl shadow-slate-200/70 dark:shadow-none transition-all duration-300">
          {/* Institution Header & Logo */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center space-x-3">
              {/* Shield Logo Emblem */}
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                  <path d="M9 9l6 6" />
                  <path d="M15 9l-6 6" />
                </svg>
              </div>

              <div className="text-left">
                <p className="text-[10px] tracking-widest font-extrabold text-slate-400 dark:text-slate-500 uppercase leading-none">
                  UNIVERSIDAD
                </p>
                <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight font-sans">
                  Univalle Device Controller
                </h1>
              </div>
            </div>

            {/* Divider line under logo */}
            <div className="w-full border-t border-slate-100 dark:border-slate-800/80 my-1" />

            {/* Welcome title & subtitle */}
            <div className="space-y-1 pt-1">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Bienvenido de vuelta
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
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
        <p className="text-center text-[11px] text-slate-400 dark:text-slate-600 mt-6 font-medium">
          © 2026 Universidad del Valle. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
