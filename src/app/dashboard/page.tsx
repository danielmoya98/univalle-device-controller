import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ShieldCheck, LogOut, LayoutDashboard, Monitor, MapPin, ClipboardList, PackageCheck } from 'lucide-react';
import { ThemeToggle } from '@/shared/ui/theme-toggle';
import { logoutAction } from '@/features/auth/api/login-action';

export const metadata = {
  title: 'Panel de Control | Univalle Device Controller',
  description: 'Gestión e Inspección de Equipos y Aulas',
};

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('univalle_session');

  if (!sessionCookie) {
    redirect('/login');
  }

  let sessionUser = { name: 'Usuario', role: 'tech_support', email: 'admin@univalle.edu.bo' };
  try {
    sessionUser = JSON.parse(sessionCookie.value);
  } catch {}

  const handleLogout = async () => {
    'use server';
    await logoutAction();
    redirect('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold shadow-md shadow-red-600/30">
            <Monitor className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold leading-none text-slate-900 dark:text-white">
              Univalle Device Controller
            </h1>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Sistema de Inspección & Recambios
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <div className="hidden sm:flex items-center space-x-2.5 pl-3 border-l border-slate-200 dark:border-slate-800">
            <div className="text-right">
              <p className="text-xs font-semibold">{sessionUser.name}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                {sessionUser.role}
              </p>
            </div>
          </div>

          <form action={handleLogout}>
            <button
              type="submit"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors focus:outline-none"
              title="Cerrar sesión"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </form>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto p-6 md:p-8 space-y-8">
        {/* Welcome banner */}
        <div className="rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 p-6 md:p-8 text-white shadow-xl shadow-red-600/15 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Sesión Activa - {sessionUser.role}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Bienvenido, {sessionUser.name}
            </h2>
            <p className="text-red-100 text-xs md:text-sm max-w-xl">
              Panel principal de administración e inspección técnica de equipos multimedia y recambios en aulas Univalle.
            </p>
          </div>
        </div>

        {/* Quick modules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Bloques y Aulas</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Gestión de ubicaciones físicas
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Inventario de Equipos</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Proyectores, Smart TVs y Audio
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <ClipboardList className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Rondas del Viernes</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Inspecciones periódicas de aulas
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Registro de Recambios</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Control de cables, pilas y lámparas
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
