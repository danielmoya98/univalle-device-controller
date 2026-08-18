import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { DashboardPage } from '@/pages-flat/dashboard/ui/dashboard-page';

export const metadata = {
  title: 'Dashboard | Univalle Device Controller',
  description: 'Resumen general del sistema de dispositivos Univalle',
};

export default async function Page() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('univalle_session');

  if (!sessionCookie) {
    redirect('/login');
  }

  let sessionUser = { name: 'Administrador Univalle', email: 'admin@univalle.edu.bo', role: 'admin' };
  try {
    sessionUser = JSON.parse(sessionCookie.value);
  } catch {}

  return <DashboardPage user={sessionUser} />;
}
