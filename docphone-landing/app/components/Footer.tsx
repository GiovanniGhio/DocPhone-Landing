'use client';
import { MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Demo', href: '#demo' },
  { name: 'Módulos', href: '#modulos' },
  { name: 'Beneficios', href: '#beneficios' },

];

export default function Footer() {
  return (
    <footer id="precios" className="relative overflow-hidden">
      {/* Fondo: continúa el gradiente azul-blanco del resto de la landing */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #f0f7ff 0%, #e8f4fe 40%, #dbeafe 100%)',
        }}
      />

      {/* Blobs decorativos — mismo lenguaje que Hero y Modules */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Línea separadora superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(37,99,235,0.2) 30%, rgba(6,182,212,0.2) 70%, transparent)',
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Contenido principal */}
        <div className="pt-14 pb-10 flex flex-col md:flex-row justify-between gap-10 md:gap-6">

          {/* Marca */}
          <div className="flex flex-col gap-5 max-w-xs">
            <a href="#inicio" className="flex items-center gap-3 group w-fit">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 60%, #eff6ff)',
                  boxShadow: '0 0 0 1.5px rgba(37,99,235,0.18), 0 2px 10px rgba(37,99,235,0.10)',
                }}
              >
                <Image
                  src="/images/icons/logoDocphonee.png"
                  alt="DocPhone"
                  width={34}
                  height={34}
                  style={{ width: 'auto', height: 'auto' }}
                  className="object-contain"
                />
              </div>
              <div className="leading-none">
                <span
                  className="block text-[17px] font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  DocPhone
                </span>
                <span
                  className="block text-[10px] font-medium tracking-widest uppercase mt-0.5"
                  style={{ color: '#93c5fd' }}
                >
                  by MedBot
                </span>
              </div>
            </a>

            <p className="text-sm leading-relaxed text-gray-500">
              Inteligencia artificial para informes radiológicos. Transformamos el flujo de
              trabajo médico en instituciones de Argentina.
            </p>

            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl w-fit"
              style={{
                background: 'rgba(37,99,235,0.08)',
                border: '1px solid rgba(37,99,235,0.15)',
              }}
            >
              <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
              <span className="text-xs font-medium text-blue-600">
                Corrientes Capital, Argentina
              </span>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: 'rgba(37,99,235,0.4)' }}
            >
              Navegación
            </p>
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-150 w-fit"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Card MedBot */}
          <div className="flex flex-col gap-4 max-w-[220px]">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'rgba(37,99,235,0.4)' }}
            >
              Desarrollado por
            </p>
            <a
              href="https://medbot.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-4 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(37,99,235,0.12)',
                boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.95)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(37,99,235,0.14)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.7)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(37,99,235,0.06)';
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-base font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8, #0ea5e9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  MedBot
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs leading-relaxed text-gray-500">
                Soluciones tecnológicas para el sector salud en Argentina.
              </p>
              <span className="text-xs font-medium text-blue-500">
                medbot.com.ar →
              </span>
            </a>
          </div>
        </div>

        {/* Barra inferior */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400"
          style={{ borderTop: '1px solid rgba(37,99,235,0.1)' }}
        >
          <span>© {new Date().getFullYear()} DocPhone · MedBot. Todos los derechos reservados.</span>
          
        </div>
      </div>
    </footer>
  );
}
