'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Monitor } from 'lucide-react';
import { Card } from '@/shared/ui/card';
import { ThemeToggle } from '@/shared/ui/theme-toggle';
import { LoginForm } from '@/features/auth/ui/login-form';

export function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/15 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/15 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar with Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Main Login Container */}
      <div className="w-full max-w-md z-10 space-y-6">
        {/* Logo & Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600 text-white shadow-xl shadow-red-600/30 ring-4 ring-red-600/10 mb-1">
            <Monitor className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Univalle Device Controller
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Gestión e Inspección de Dispositivos Universitarios
            </p>
          </div>
        </motion.div>

        {/* Login Card */}
        <Card className="shadow-2xl">
          <div className="space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Iniciar Sesión
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Ingresa con tus credenciales institucionales de soporte técnico.
              </p>
            </div>

            <LoginForm />
          </div>
        </Card>

        {/* Footer info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-[11px] text-slate-400 dark:text-slate-600"
        >
          © 2026 Universidad del Valle. Todos los derechos reservados.
        </motion.p>
      </div>
    </div>
  );
}
