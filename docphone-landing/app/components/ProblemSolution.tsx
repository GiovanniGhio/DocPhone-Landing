'use client';
import { motion } from 'framer-motion';
import { Mic, FileText, Download, Clock, DollarSign, CheckCircle, ArrowRight, Sparkles, Shield, Zap, XCircle, TrendingDown } from 'lucide-react';


export default function ProblemSolution() {
  const workflowSteps = [
    {
      icon: Mic,
      title: "Dictado por voz",
      description: "Sube audio grabado en directo, descargado o recibido por WhatsApp. DocPhone procesa cualquier fuente de audio con tu voz.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Transcripción editable",
      description: "Tu audio se convierte automáticamente en texto estructurado. Revisá, editá y ajustá lo que necesites antes de generar el informe.",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: Download,
      title: "Informe formal con IA",
      description: "La IA genera un informe radiológico profesional basado en tu texto. Descargá en PDF listo para firmar y archivar.",
      gradient: "from-teal-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Reducción de tiempo",
      metric: "90%",
      description: "Menos tiempo por informe",
      detail: "De 2 horas a 5 minutos"
    },
    {
      icon: DollarSign,
      title: "Ahorro operativo",
      metric: "70%",
      description: "Menos costo por estudio",
      detail: "Optimización de recursos"
    },
    {
      icon: Shield,
      title: "Precisión documental",
      metric: "99%",
      description: "Estandarización asegurada",
      detail: "Sin errores de transcripción"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white" id="problema-solucion">
      {/* Separador visual del Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/30 via-white to-white"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado - Más claro y directo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />

          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            De la voz al informe PDF
            <br />
            <span className="text-blue-600">en minutos</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            DocPhone transforma tu flujo de trabajo: dictá, procesamos con IA y generamos 
            informes profesionales listos para descargar. Sin pasos intermedios, sin complicaciones.
          </p>
        </motion.div>

        {/* Workflow central - El corazón de la solución */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ delay: 0.2 }}
          className="relative mb-28"
        >
          {/* Línea de conexión entre pasos (solo desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-emerald-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                transition={{ delay: 0.3 + idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                {/* Número de paso */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-2 border-blue-100">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {idx + 1}
                  </span>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  {/* Indicador visual de avance */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beneficios clave - Métricas reales para hospitales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Impacto real en tu institución
            </h3>
            <p className="text-lg text-gray-600">
              Métricas validadas por hospitales que ya confían en DocPhone
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {benefit.metric}
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
                <p className="text-sm text-blue-600 mt-3 font-semibold">{benefit.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparativa simple y efectiva */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Antes */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Clock className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Flujo tradicional</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  "Dictado manual → grabadora",
                  "Trascripción externa (24-48hs)",
                  "Corrección manual del texto",
                  "Formateo del documento",
                  "Firma y escaneo",
                  "Archivo físico o digital desordenado"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
      
            </div>
            
            {/* Después */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Con DocPhone</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  "Dictado por voz → App DocPhone",
                  "Transcripción IA instantánea",
                  "Estructuración automática",
                  "Informe formateado listo",
                  "Descarga PDF con 1 clic",
                  "Historial digital organizado"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="text-2xl font-bold text-green-400">5-10 minutos</div>
                <div className="text-sm text-gray-400">tiempo total por informe</div>
              </div>
            </div>
          </div>
          
          {/* Badge de ahorro */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <TrendingDown className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">90% menos de tiempo operativo</span>
              <span className="text-green-400">•</span>
              <span className="text-gray-300 text-sm">70% reducción de costos</span>
            </div>
          </div>
        </motion.div>

  
      </div>

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
      `}</style>
    </section>
  );
}