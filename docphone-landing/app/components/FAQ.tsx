'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "¿Cómo funciona DocPhone?",
    answer: "Grabás o subes un audio con tu voz. La IA transcribe automáticamente el contenido a texto que puedes editar. Luego genera un informe radiológico formal en PDF listo para descargar."
  },
  {
    question: "¿Qué formatos de audio acepta?",
    answer: "Aceptamos MP3, WAV, M4A y otros formatos comunes. También puedes grabar directo en la app o enviar audios por WhatsApp."
  },
  {
    question: "¿Cuánto tiempo tarda en generar el informe?",
    answer: "La transcripción y generación del informe toma entre 5 a 10 minutos según la extensión del audio. Mucho más rápido que los métodos tradicionales."
  },
  {
    question: "¿Es seguro subir datos médicos?",
    answer: "Sí. Todos los datos están encriptados de extremo a extremo. Cumplimos con normativas de privacidad y seguridad de datos médicos."
  },
  {
    question: "¿Necesito instalar software especial?",
    answer: "No. DocPhone funciona por web desde cualquier navegador. Solo necesitas acceso a internet o usar nuestra app móvil."
  },
  {
    question: "¿Puedo editar el texto antes de generar el informe?",
    answer: "Claro. Después de la transcripción automática, tienes un editor donde puedes revisar, corregir y ajustar el texto como necesites."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-white" id="faq">
      
      {/* BACKGROUND DECORATION - Más sutil y profesional */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER CON MEJOR JERARQUÍA */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 shadow-xl shadow-slate-200"
          >
            <HelpCircle className="w-3 h-3 text-blue-400" />
            Centro de Ayuda
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Preguntas <span className="text-blue-600 font-extrabold">Frecuentes</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Despejá tus dudas técnicas y empezá a optimizar tus informes hoy mismo.
          </p>
        </div>

        {/* GRID DE PREGUNTAS - Dos columnas para que no quede pegado abajo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="h-fit">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full flex flex-col p-6 rounded-[24px] border-2 transition-all duration-300 text-left ${
                  openIndex === idx 
                    ? 'bg-white border-blue-600 shadow-2xl shadow-blue-100 scale-[1.02]' 
                    : 'bg-slate-50/50 border-slate-100 hover:border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className={`text-base font-bold pr-8 ${openIndex === idx ? 'text-blue-600' : 'text-slate-800'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-200 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          ))}
        </div>

        {/* CTA CARD - Actúa como espaciador visual antes del footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-8 md:p-12 rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center shadow-2xl shadow-blue-200 relative overflow-hidden"
        >
          {/* Decoración interna del CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">¿Todavía tenés dudas?</h3>
            <p className="text-slate-400 font-medium mb-8">
              Nuestro equipo técnico está disponible para asesorarte de forma personalizada por WhatsApp.
            </p>
            <a
              href="https://wa.me/5493777717778"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar
            </a>
          </div>
        </motion.div>

        {/* ESPACIADOR FINAL - Evita que se pegue al footer */}
        <div className="h-24 md:h-32" />
      </div>
    </section>
  );
}