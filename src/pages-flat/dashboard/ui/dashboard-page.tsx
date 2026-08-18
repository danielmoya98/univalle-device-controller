'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  DonutChart,
  AreaChart,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '@tremor/react';
import {
  Monitor,
  CheckCircle2,
  Wrench,
  AlertTriangle,
  Plus,
  Eye,
  Edit,
  MoreVertical,
  ArrowUpRight,
  ShieldAlert,
  Clock,
  Printer,
  Laptop,
  Tv,
} from 'lucide-react';
import { AppShell } from '@/widgets/app-shell/ui/app-shell';

interface DashboardPageProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
}

const categoryData = [
  { name: 'Portátiles', count: 542 },
  { name: 'Escritorio', count: 328 },
  { name: 'Monitores', count: 186 },
  { name: 'Impresoras', count: 98 },
  { name: 'Proyectores', count: 54 },
  { name: 'Otros', count: 40 },
];

const chartColors = ['indigo', 'cyan', 'blue', 'amber', 'rose', 'slate'];

const areaChartData = [
  { date: '13 May', Activos: 990, Mantenimiento: 135, 'Fuera de servicio': 95 },
  { date: '14 May', Activos: 1005, Mantenimiento: 130, 'Fuera de servicio': 90 },
  { date: '15 May', Activos: 1018, Mantenimiento: 125, 'Fuera de servicio': 88 },
  { date: '16 May', Activos: 1012, Mantenimiento: 121, 'Fuera de servicio': 85 },
  { date: '17 May', Activos: 1025, Mantenimiento: 124, 'Fuera de servicio': 86 },
  { date: '18 May', Activos: 1030, Mantenimiento: 126, 'Fuera de servicio': 86 },
  { date: '19 May', Activos: 1034, Mantenimiento: 127, 'Fuera de servicio': 87 },
];

const recentDevices = [
  {
    id: '1',
    name: 'Dell Latitude 5430',
    type: 'Portátil',
    icon: Laptop,
    user: 'María González',
    email: 'mgonzalez@univalle.edu.bo',
    location: 'Facultad de Ingeniería - Lab. Computación 1',
    status: 'operational',
    statusText: 'Activo',
    lastActivity: 'Hace 2 horas',
  },
  {
    id: '2',
    name: 'HP LaserJet Pro M404',
    type: 'Impresora',
    icon: Printer,
    user: 'Juan Pérez',
    email: 'jperez@univalle.edu.bo',
    location: 'Biblioteca Central - Área de Impresiones',
    status: 'under_maintenance',
    statusText: 'Mantenimiento',
    lastActivity: 'Hace 5 horas',
  },
  {
    id: '3',
    name: 'iMac 24" M1',
    type: 'Escritorio',
    icon: Monitor,
    user: 'Ana Rodríguez',
    email: 'arodriguez@univalle.edu.bo',
    location: 'Facultad de Diseño - Lab. Multimedia',
    status: 'operational',
    statusText: 'Activo',
    lastActivity: 'Hace 1 hora',
  },
  {
    id: '4',
    name: 'Epson Proyector X41',
    type: 'Proyector',
    icon: Tv,
    user: 'Carlos Lima',
    email: 'clima@univalle.edu.bo',
    location: 'Aula Magna - Sala de Conferencias',
    status: 'damaged',
    statusText: 'Fuera de servicio',
    lastActivity: 'Hace 1 día',
  },
  {
    id: '5',
    name: 'Lenovo ThinkPad E14',
    type: 'Portátil',
    icon: Laptop,
    user: 'Luis Fernández',
    email: 'lfernandez@univalle.edu.bo',
    location: 'Facultad de Derecho - Oficina 302',
    status: 'operational',
    statusText: 'Activo',
    lastActivity: 'Hace 30 min',
  },
];

export function DashboardPage({ user }: DashboardPageProps) {
  return (
    <AppShell user={user} title="Dashboard" subtitle="Resumen general del sistema de dispositivos Univalle">
      {/* Top 4 KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Metric 1 */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card className="p-5 rounded-3xl border border-white/15 bg-white/[0.06] dark:bg-slate-900/[0.45] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">Total Dispositivos</p>
                <h3 className="text-2xl font-black text-white mt-0.5">1,248</h3>
                <p className="text-[11px] text-emerald-400 font-bold flex items-center mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                  +12.5% vs semana anterior
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Metric 2 */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 }}>
          <Card className="p-5 rounded-3xl border border-white/15 bg-white/[0.06] dark:bg-slate-900/[0.45] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">Dispositivos Activos</p>
                <h3 className="text-2xl font-black text-white mt-0.5">1,034</h3>
                <p className="text-[11px] text-slate-300 font-medium mt-1">
                  <span className="text-emerald-400 font-bold">82.9%</span> del total
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Metric 3 */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
          <Card className="p-5 rounded-3xl border border-white/15 bg-white/[0.06] dark:bg-slate-900/[0.45] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">En Mantenimiento</p>
                <h3 className="text-2xl font-black text-white mt-0.5">127</h3>
                <p className="text-[11px] text-slate-300 font-medium mt-1">
                  <span className="text-amber-400 font-bold">10.2%</span> del total
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Metric 4 */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 }}>
          <Card className="p-5 rounded-3xl border border-white/15 bg-white/[0.06] dark:bg-slate-900/[0.45] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-rose-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">Fuera de Servicio</p>
                <h3 className="text-2xl font-black text-white mt-0.5">87</h3>
                <p className="text-[11px] text-slate-300 font-medium mt-1">
                  <span className="text-rose-400 font-bold">7.0%</span> del total
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Donut Chart */}
        <Card className="p-6 rounded-3xl border border-white/15 bg-white/[0.06] dark:bg-slate-900/[0.45] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="text-sm font-bold text-white">Dispositivos por Categoría</h3>
            <span className="text-xs font-semibold text-slate-400 bg-white/10 px-2.5 py-1 rounded-xl">
              Esta semana
            </span>
          </div>

          <div className="pt-4 flex flex-col items-center">
            <DonutChart
              className="h-44"
              data={categoryData}
              category="count"
              index="name"
              colors={chartColors}
              variant="donut"
              showAnimation
            />

            <div className="w-full space-y-2 mt-4 text-xs">
              {categoryData.map((cat, i) => (
                <div key={cat.name} className="flex items-center justify-between text-slate-300">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span>{cat.name}</span>
                  </div>
                  <span className="font-bold text-white">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Device Status Area Chart */}
        <Card className="p-6 rounded-3xl border border-white/15 bg-white/[0.06] dark:bg-slate-900/[0.45] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="text-sm font-bold text-white">Estado de Dispositivos</h3>
            <span className="text-xs font-semibold text-slate-400 bg-white/10 px-2.5 py-1 rounded-xl">
              Esta semana
            </span>
          </div>

          <div className="pt-4">
            {/* Custom Clean Legend Row */}
            <div className="flex items-center justify-around text-xs pb-3 border-b border-white/5">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-300 font-semibold">Activos</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-slate-300 font-semibold">Mantenimiento</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-slate-300 font-semibold">Fuera de servicio</span>
              </div>
            </div>

            <AreaChart
              className="h-44 mt-3"
              data={areaChartData}
              index="date"
              categories={['Activos', 'Mantenimiento', 'Fuera de servicio']}
              colors={['emerald', 'amber', 'rose']}
              showLegend={false}
              showAnimation
              showGridLines={false}
              curveType="natural"
            />
          </div>
        </Card>

        {/* Recent Alerts List */}
        <Card className="p-6 rounded-3xl border border-white/15 bg-white/[0.06] dark:bg-slate-900/[0.45] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-sm font-bold text-white">Alertas Recientes</h3>
              <button className="text-xs font-semibold text-red-400 hover:underline">Ver todas</button>
            </div>

            <div className="space-y-3 pt-4">
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-start space-x-3">
                <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Impresora HP LaserJet 402</p>
                  <p className="text-slate-300">Fuera de servicio • 1er Piso, Lab. 2</p>
                  <span className="text-[10px] text-slate-400 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" /> Hace 15 min
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start space-x-3">
                <Wrench className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Portátil Dell Latitude 5420</p>
                  <p className="text-slate-300">Mantenimiento requerido</p>
                  <span className="text-[10px] text-slate-400 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" /> Hace 1 hora
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-start space-x-3">
                <Monitor className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Actualización de firmware</p>
                  <p className="text-slate-300">15 dispositivos pendientes</p>
                  <span className="text-[10px] text-slate-400 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" /> Hace 3 horas
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full text-center text-xs font-semibold text-red-400 hover:text-red-300 pt-4 border-t border-white/10 mt-3">
            Ver todas las alertas →
          </button>
        </Card>
      </div>

      {/* Dispositivos Recientes Table */}
      <Card className="p-6 rounded-3xl border border-white/15 bg-white/[0.06] dark:bg-slate-900/[0.45] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-base font-bold text-white">Dispositivos Recientes</h3>
            <p className="text-xs text-slate-400">Últimos equipos registrados e inspeccionados en la plataforma</p>
          </div>

          <button
            type="button"
            onClick={() => alert('Función de agregar dispositivo')}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#7A001E] via-[#990024] to-[#7A001E] hover:from-[#600018] hover:to-[#800020] text-white font-bold text-xs shadow-lg shadow-red-900/40 flex items-center space-x-1.5 transition-all border border-white/20"
          >
            <Plus className="w-4 h-4" />
            <span>Agregar dispositivo</span>
          </button>
        </div>

        <div className="overflow-x-auto pt-2">
          <Table>
            <TableHead>
              <TableRow className="border-b border-white/10">
                <TableHeaderCell className="text-slate-400 text-xs font-bold">Dispositivo</TableHeaderCell>
                <TableHeaderCell className="text-slate-400 text-xs font-bold">Tipo</TableHeaderCell>
                <TableHeaderCell className="text-slate-400 text-xs font-bold">Usuario</TableHeaderCell>
                <TableHeaderCell className="text-slate-400 text-xs font-bold">Ubicación</TableHeaderCell>
                <TableHeaderCell className="text-slate-400 text-xs font-bold">Estado</TableHeaderCell>
                <TableHeaderCell className="text-slate-400 text-xs font-bold">Última actividad</TableHeaderCell>
                <TableHeaderCell className="text-slate-400 text-xs font-bold text-right">Acciones</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentDevices.map((item) => {
                const DeviceIcon = item.icon;
                return (
                  <TableRow key={item.id} className="border-b border-white/5 hover:bg-white/[0.04] transition-colors">
                    <TableCell className="font-semibold text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-red-400">
                          <DeviceIcon className="w-4 h-4" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                    </TableCell>

                    <TableCell className="text-slate-300 text-xs">{item.type}</TableCell>

                    <TableCell className="text-slate-300 text-xs">
                      <div>
                        <p className="font-semibold text-white">{item.user}</p>
                        <p className="text-[10px] text-slate-400">{item.email}</p>
                      </div>
                    </TableCell>

                    <TableCell className="text-slate-300 text-xs">{item.location}</TableCell>

                    <TableCell>
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          item.status === 'operational'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : item.status === 'under_maintenance'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        {item.statusText}
                      </span>
                    </TableCell>

                    <TableCell className="text-slate-400 text-xs">{item.lastActivity}</TableCell>

                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Card>
    </AppShell>
  );
}
