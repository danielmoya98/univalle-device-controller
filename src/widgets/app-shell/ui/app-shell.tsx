'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from './sidebar';
import { Topbar } from './topbar';

interface AppShellProps {
  children: React.ReactNode;
  user?: {
    name: string;
    email: string;
    role: string;
  };
  title?: string;
  subtitle?: string;
}

export function AppShell({
  children,
  user = { name: 'Administrador Univalle', email: 'admin@univalle.edu.bo', role: 'admin' },
  title,
  subtitle,
}: AppShellProps) {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-red-500 selection:text-white">
      {/* Background Ambient Glow Orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Sidebar Navigation */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        user={user}
      />

      {/* Main Content Area (Fluid Framer Motion Padding Animation on Desktop) */}
      <motion.div
        animate={{
          paddingLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 ? (isCollapsed ? 80 : 280) : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 32,
          mass: 0.8,
        }}
        className="flex flex-col min-h-screen transition-all duration-300"
      >
        {/* Topbar */}
        <Topbar
          onMobileMenuClick={() => setIsMobileOpen(true)}
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          title={title}
          subtitle={subtitle}
        />

        {/* Page Main Content */}
        <main className="flex-1 p-4 md:p-8 space-y-8 z-10 max-w-[1600px] w-full mx-auto">
          {children}
        </main>

        {/* Footer info */}
        <footer className="px-6 py-4 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 z-10">
          <p>© 2026 Universidad del Valle. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white transition-colors cursor-pointer">Soporte Técnico</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Sistema v2.1.0</span>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
