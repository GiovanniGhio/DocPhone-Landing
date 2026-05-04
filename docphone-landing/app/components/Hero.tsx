'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight, PlayCircle, MessageSquare, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const whatsappUrl = 'https://wa.me/5493777717778?text=Hola,%20estoy%20interesado%20en%20DocPhone';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-white" id="inicio">
      
      {/* FONDO */}
      {isMobile ? (

        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero/doctorRadio.png"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
      ) : (
        // ✅ DESKTOP → podés mantener el fixed
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: "url('/images/hero/doctorRadio.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }} 
        />
      )}

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-120 via-blue-250 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/50 via-transparent to-blue-100" />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8"
          >
            <ShieldCheck className="w-4 h-4" />
            Innovación Médica en Corrientes
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-6 leading-[1.05]"
          >
            Informes Radiológicos <br />
            <span className="text-blue-600">
              con Inteligencia Artificial
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
          >
            Optimice su práctica médica con reportes precisos generados por voz. 
            <span className="text-blue-700 font-semibold block mt-2">
              Tecnología diseñada para radiólogos.
            </span>
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Contactar
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#demo"
              className="group bg-white border-2 border-blue-100 text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:border-blue-600 hover:bg-blue-50 transition flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              Ver Demo
            </a>
          </motion.div>

        </div>
      </div>

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl z-0 hidden md:block" />
    </section>
  );
}