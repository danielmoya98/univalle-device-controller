'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { loginSchema, LoginInput } from '../model/login-schema';
import { loginAction } from '../api/login-action';

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
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
    <div className="w-full space-y-6">
      {/* Test user quick autofill badge */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={fillTestUser}
        className="w-full flex items-center justify-between p-3 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/80 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 text-xs font-medium backdrop-blur-sm transition-all hover:bg-amber-100 dark:hover:bg-amber-900/40"
      >
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>Llenar credenciales de usuario de prueba</span>
        </div>
        <span className="font-semibold text-amber-700 dark:text-amber-300 underline">
          admin@univalle.edu.bo
        </span>
      </motion.button>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AnimatePresence mode="wait">
          {serverError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-2.5 p-3.5 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/90 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 text-xs font-medium"
            >
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{serverError}</span>
            </motion.div>
          )}

          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-2.5 p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 text-xs font-medium"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>¡Autenticado con éxito! Redirigiendo...</span>
            </motion.div>
          )}
        </AnimatePresence>

        <Input
          label="Correo Electrónico"
          type="email"
          placeholder="ejemplo@univalle.edu.bo"
          leftIcon={<Mail className="w-4 h-4" />}
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••••••••"
          leftIcon={<Lock className="w-4 h-4" />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-slate-700 dark:hover:text-slate-200 focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          }
          error={errors.password?.message}
          {...register('password')}
        />

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            className="w-full font-semibold tracking-wide"
          >
            Iniciar Sesión
          </Button>
        </div>
      </form>
    </div>
  );
}
