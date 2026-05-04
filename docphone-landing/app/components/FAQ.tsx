'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-white" id="faq">
      
      {/* BACKGROUND (optimizado) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-50 rounded-full blur-[60px] opacity-50" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-50 rounded-full blur-[60px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <HelpCircle className="w-3 h-3 text-blue-400" />
            Centro de Ayuda
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Preguntas <span className="text-blue-600">Frecuentes</span>
          </h2>

          <p className="text-lg text-slate-500">
            Despejá tus dudas técnicas y empezá a optimizar tus informes hoy mismo.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full flex flex-col p-6 rounded-2xl border transition-all duration-200 text-left ${
                  openIndex === idx 
                    ? 'bg-white border-blue-600 shadow-md md:shadow-xl' 
                    : 'bg-slate-50 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className={`text-base font-bold pr-6 ${
                    openIndex === idx ? 'text-blue-600' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </h3>

                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${
                    openIndex === idx 
                      ? 'bg-blue-600 text-white rotate-180' 
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* RESPUESTA */}
                <AnimatePresence>
                  {openIndex === idx && (
                    isMobile ? (
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <p className="text-slate-600 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-slate-100">
                          <p className="text-slate-600 text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-slate-900 text-white text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            ¿Todavía tenés dudas?
          </h3>

          <p className="text-slate-400 mb-8">
            Nuestro equipo técnico está disponible para asesorarte por WhatsApp.
          </p>

          <a
            href="https://wa.me/5493777717778"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar
          </a>
        </div>

        <div className="h-20 md:h-32" />
      </div>
    </section>
  );
}