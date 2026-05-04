'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mic, FileText, Brain, ArrowRight, } from 'lucide-react';

const modules = [
  {
    title: 'Transcripción Automática',
    description: 'Convertí dictados médicos en texto en tiempo real con precisión superior al 95%.',
    image: '/images/modules/transcription.jpg',
    alt: 'Transcripción médica por IA',
    icon: Mic,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Reconocimiento médico especializado', 'Tiempo real', 'Precisión >95%'],
    stat: '95%',
    statLabel: 'Precisión en transcripción',
  },
  {
    title: 'Generación de Informes',
    description: 'Estructura automática de informes radiológicos con formato profesional y personalizable.',
    image: '/images/modules/reports.jpg',
    alt: 'Informe médico estructurado',
    icon: FileText,
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Formato profesional', 'Estructura automática', 'Personalizable'],
    stat: '5-10 min',
    statLabel: 'Tiempo de generación',
  },
  {
    title: 'Segunda Opinión IA',
    description: 'Detección asistida de hallazgos clínicos mediante visión computacional avanzada.',
    image: '/images/modules/ai-analysis.jpg',
    alt: 'Análisis de imágenes por IA',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    features: ['Visión computacional', 'Detección asistida', 'Soporte diagnóstico'],
    stat: '99%',
    statLabel: 'Exactitud en detección',
  }
];

export default function Modules() {
  return (
    <section className="py-32 relative overflow-hidden" id="modulos">
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
        
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Tres módulos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Potenciá tu práctica médica con herramientas diseñadas específicamente para profesionales de la salud
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              {/* Tarjeta principal */}
              <div className="relative bg-white rounded-2xl overflow-visible shadow-xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
                {/* Contenedor de imagen */}
                <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-t ${mod.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                  <Image
                    src={mod.image}
                    alt={mod.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                </div>
                
                {/* Icono flotante - AHORA COMPLETAMENTE VISIBLE */}
                <div className="relative px-6">
                  <div className="absolute -top-7 left-6 z-20">
                    <div className={`w-14 h-14 bg-gradient-to-br ${mod.gradient} rounded-xl flex items-center justify-center shadow-xl ring-4 ring-white hover:scale-110 transition-transform duration-300`}>
                      <mod.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="p-6 pt-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                    {mod.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {mod.description}
                  </p>
                  
                  {/* Características */}
                  <div className="space-y-2 mb-6">
                    {mod.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${mod.gradient}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Estadística */}
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${mod.gradient} bg-clip-text text-transparent`}>
                          {mod.stat}
                        </div>
                        <div className="text-xs text-gray-400">{mod.statLabel}</div>
                      </div>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                {/* Borde animado al hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${mod.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Llamada a la acción al final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold">
              ¿Listo para transformar tu práctica?
            </div>
       
          </div>
        </motion.div>
      </div>

      {/* Estilos personalizados para animaciones */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}