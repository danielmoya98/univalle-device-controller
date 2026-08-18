'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, AlertCircle, Sparkles, CheckCircle2, LogIn, ShieldCheck } from 'lucide-react';
import { loginSchema, LoginInput } from '../model/login-schema';
import { loginAction } from '../api/login-action';

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(true);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginInput) => {
    setServerError(null);
    try {
      const res = await loginAction(data);
      if (!res.success) {
        setServerError(res.error || 'Ocurrió un error al iniciar sesión.');
        return;
      }
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/dashboard');
        router.refresh();
      }, 800);
    } catch {
      setServerError('Error de conexión con el servidor.');
    }
  };

  const fillTestUser = () => {
    setValue('email', 'admin@univalle.edu.bo');
    setValue('password', 'Univalle2026!');
    setServerError(null);
  };

  return (
    <div className="w-full space-y-5">
      {/* Test User Quick Autofill Badge */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={fillTestUser}
        className="w-full flex items-center justify-between p-2.5 px-3.5 rounded-2xl border border-red-400/35 bg-red-500/15 text-red-100 text-xs font-medium backdrop-blur-xl transition-all hover:bg-red-500/25 shadow-sm"
      >
        <div className="flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
          <span>Usuario de prueba:</span>
        </div>
        <span className="font-bold text-white underline decoration-red-400 underline-offset-2">
          admin@univalle.edu.bo
        </span>
      </motion.button>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AnimatePresence mode="wait">
          {serverError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center space-x-2.5 p-3 rounded-2xl border border-rose-400/50 bg-rose-950/70 text-rose-100 text-xs font-medium backdrop-blur-md shadow-lg"
            >
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{serverError}</span>
            </motion.div>
          )}

          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-2.5 p-3 rounded-2xl border border-emerald-400/50 bg-emerald-950/70 text-emerald-100 text-xs font-medium backdrop-blur-md shadow-lg"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>¡Autenticado con éxito! Redirigiendo...</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Email Input */}
        <div className="space-y-1.5 text-left">
          <label className="block text-xs font-semibold text-slate-200 tracking-wide">
            Correo institucional
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-slate-400 pointer-events-none">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              placeholder="usuario@univalle.edu.bo"
              className={`w-full rounded-2xl border bg-slate-950/45 backdrop-blur-xl px-4 py-3 pl-10 text-sm text-white placeholder-slate-400/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-inner ${
                errors.email
                  ? 'border-rose-500 focus:ring-rose-500/50'
                  : 'border-white/15 hover:border-white/30 focus:border-red-500'
              }`}
              {...register('email')}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-rose-400 font-medium pl-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="space-y-1.5 text-left">
          <label className="block text-xs font-semibold text-slate-200 tracking-wide">
            Contraseña
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-slate-400 pointer-events-none">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••••"
              className={`w-full rounded-2xl border bg-slate-950/45 backdrop-blur-xl px-4 py-3 pl-10 pr-10 text-sm text-white placeholder-slate-400/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-inner ${
                errors.password
                  ? 'border-rose-500 focus:ring-rose-500/50'
                  : 'border-white/15 hover:border-white/30 focus:border-red-500'
              }`}
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-slate-400 hover:text-white transition-colors focus:outline-none"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-rose-400 font-medium pl-1">{errors.password.message}</p>
          )}
        </div>

        {/* Remember me & Forgot Password */}
        <div className="flex items-center justify-between pt-1 text-xs">
          <label className="flex items-center space-x-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded-md border-white/20 text-red-600 focus:ring-red-500 bg-slate-950/50 transition-colors cursor-pointer"
            />
            <span className="text-slate-200 font-medium">Recordarme</span>
          </label>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('Contacta al administrador para restablecer tu contraseña.');
            }}
            className="text-red-300 hover:text-white hover:underline font-semibold transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Primary Submit Button */}
        <div className="pt-2">
          <motion.button
            type="submit"
            whileHover={{ scale: isSubmitting ? 1 : 1.015 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-sm shadow-[0_4px_25px_rgba(225,29,72,0.45)] flex items-center justify-center space-x-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Iniciando sesión...</span>
              </div>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Iniciar sesión</span>
              </>
            )}
          </motion.button>
        </div>
      </form>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-5">
        <div className="w-full border-t border-white/15" />
        <span className="absolute bg-slate-950/70 backdrop-blur-xl px-3 py-0.5 text-[11px] font-medium text-slate-300 rounded-full border border-white/10">
          o continúa con
        </span>
      </div>

      {/* Google Login Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => alert('Autenticación con Google disponible para dominio @univalle.edu.bo')}
        className="w-full py-3 px-4 rounded-2xl border border-white/20 bg-white/[0.07] hover:bg-white/[0.14] backdrop-blur-xl text-white font-semibold text-sm flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-md focus:outline-none"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
        <span>Iniciar sesión con Google</span>
      </motion.button>

      {/* Security badge at bottom */}
      <div className="pt-2 flex items-center justify-center space-x-1.5 text-[11px] font-medium text-slate-300">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>Sistema seguro y protegido</span>
      </div>
    </div>
  );
}
