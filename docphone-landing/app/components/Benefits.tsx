'use client';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users, FileCheck } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '−95%',
    label: 'Tiempo por informe',
    detail: 'De 2 horas a 5-10 minutos',
    accent: '#2563eb',
    bg: 'rgba(37,99,235,0.06)',
    border: 'rgba(37,99,235,0.14)',
  },
  {
    icon: TrendingUp,
    value: '+300%',
    label: 'Capacidad de proceso',
    detail: 'Más estudios por turno',
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.14)',
  },
  {
    icon: Users,
    value: '−40%',
    label: 'Costos operativos',
    detail: 'Optimización de recursos',
    accent: '#6366f1',
    bg: 'rgba(99,102,241,0.06)',
    border: 'rgba(99,102,241,0.14)',
  },
  {
    icon: FileCheck,
    value: '98.5%',
    label: 'Precisión clínica',
    detail: 'Realizando pruebas',
    accent: '#0284c7',
    bg: 'rgba(2,132,199,0.06)',
    border: 'rgba(2,132,199,0.14)',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white" id="beneficios">
      {/* Faint blue mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(37,99,235,0.07)',
              border: '1px solid rgba(37,99,235,0.15)',
              color: '#2563eb',
            }}
          >
            Impacto real
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Resultados que se miden
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto">
            Métricas validadas por instituciones que ya usan DocPhone en Corrientes.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col gap-4 p-6 md:p-7 rounded-2xl cursor-default"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
              }}
            >
              {/* Colored top accent bar */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 group-hover:left-4 group-hover:right-4"
                style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{ background: item.bg, border: `1px solid ${item.border}` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.accent }} />
              </div>

              {/* Value */}
              <div>
                <div
                  className="text-3xl md:text-4xl font-bold tracking-tight leading-none mb-1"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}, #0ea5e9)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {item.value}
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug">{item.label}</p>
                <p className="text-xs text-gray-400 mt-1">{item.detail}</p>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 8px 32px ${item.accent}22` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-6 md:px-10 py-5 md:py-6"
          style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)',
            border: '1px solid rgba(37,99,235,0.12)',
          }}
        >
          <div>
            <p className="font-semibold text-gray-800 text-sm md:text-base">
              Implementación rapida
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-0.5">
              Soporte prioritario · Sin costos ocultos · Capacitación incluida
            </p>
          </div>
          <a
            href="https://wa.me/5493777717778?text=Hola,%20estoy%20interesado%20en%20DocPhone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
              boxShadow: '0 2px 12px rgba(37,99,235,0.3)',
            }}
          >
            Comenzar ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
