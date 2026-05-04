'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Upload, Mic, Cpu, FileCheck, ChevronRight, ChevronLeft,
  Image as ImageIcon, FileText, Sparkles, CheckCircle,
  Loader2, Volume2, Edit3, Download, Brain, AlertCircle, XCircle, Activity
} from 'lucide-react';

const SAMPLE_XRAY = '/images/demo/xray-sample-1.jpg';

const steps = [
  { number: 1, label: 'Imagen', sublabel: 'Estudio radiológico' },
  { number: 2, label: 'Dictado', sublabel: 'Grabá tu diagnóstico' },
  { number: 3, label: 'Análisis IA', sublabel: 'Procesamiento' },
  { number: 4, label: 'Informe', sublabel: 'Documento final' },
];

export default function WizardFlow() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [reportId, setReportId] = useState('');

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [aiFindings, setAiFindings] = useState('');
  const [showFindings, setShowFindings] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const [dictatedText, setDictatedText] = useState('');


  const [isEditingReport, setIsEditingReport] = useState(false);
  const [finalReport, setFinalReport] = useState({ hallazgos: '', impresion: '', recomendaciones: '' });

  const recordingInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setReportId(`INF-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`);
  }, []);

  useEffect(() => {
    if (selectedImage === null && !isImageLoading) {
      setIsImageLoading(true);
      const t = setTimeout(() => {
        setSelectedImage(SAMPLE_XRAY);
        setIsImageLoading(false);
      }, 1600);
      return () => clearTimeout(t);
    }
  }, []);

  const handleNext = () => {
    if (step === 3) {
      startProcessing();
    } else if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const startProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setAiFindings('Opacidad en lóbulo inferior derecho • Bordes espiculados sugestivos de neoplasia • Leve derrame pleural • Sin compromiso mediastinal • Densidad heterogénea perihiliar');
      setShowFindings(true);
    }, 2200);
    setTimeout(() => {
      setFinalReport({
        hallazgos: dictatedText,
        impresion: 'Hallazgos compatibles con proceso neoproliferativo pulmonar. Se recomienda correlación clínica y TAC de tórax con contraste endovenoso para mejor caracterización de la lesión.',
        recomendaciones: '1. TAC de tórax con contraste endovenoso\n2. Evaluación por servicio de neumonología\n3. Control clínico en 30 días\n4. Considerar biopsia guiada por imágenes',
      });
      setIsProcessing(false);
      setStep(4);
    }, 5200);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setSelectedImage(ev.target?.result as string);
        setShowFindings(false);
        setAiFindings('');
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    setSelectedImage(null);
    setShowFindings(false);
    setAiFindings('');
    setIsImageLoading(true);
    setTimeout(() => {
      setSelectedImage(SAMPLE_XRAY);
      setIsImageLoading(false);
    }, 1200);
  };

  const toggleRecording = () => {
    if (isRecording) {
      if (recordingInterval.current) clearInterval(recordingInterval.current);
      setIsRecording(false);
      setRecordingProgress(0);
      return;
    }
    setIsRecording(true);
    setRecordingProgress(0);
    let p = 0;
    recordingInterval.current = setInterval(() => {
      p += 2.2;
      setRecordingProgress(Math.min(p, 100));
      if (p >= 100) {
        if (recordingInterval.current) clearInterval(recordingInterval.current);
        setIsRecording(false);
        setRecordingProgress(0);
        setDictatedText(
          'Paciente presenta opacidad en lóbulo inferior derecho de bordes espiculados. Se observa leve derrame pleural asociado. No se evidencian adenopatías mediastinales. El resto del parénquima pulmonar presenta expansibilidad conservada. Sugiero realizar TAC de tórax contrastado para mejor caracterización de la lesión y descartar compromiso extrapulmonar.'
        );
      }
    }, 65);
  };

  const canProceed =
    (step === 1 && !!selectedImage) ||
    (step === 2 && !!dictatedText) ||
    (step === 3 && !isProcessing) ||
    step === 4;

  return (
    // CAMBIO: Fondo de sección ahora es un gris azulado muy suave para que el blanco destaque
    <section id="demo" className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
      {/* Ambient grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border text-xs font-bold uppercase bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200">
            <Activity className="w-3 h-3" />
            Demo interactiva en vivo
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Probá DocPhone en acción</h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-slate-600 font-medium">Desde la imagen hasta el informe PDF — todo en segundos</p>
        </motion.div>

        {/* Step tracker */}
        <div className="flex items-start justify-center gap-0 mb-10 max-w-3xl mx-auto">
          {steps.map((s, idx) => (
            <div key={s.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center text-center flex-1">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={
                    `relative w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-500 shadow-sm border-2 ` +
                    (step > s.number
                      ? 'bg-emerald-500 border-emerald-500'
                      : step === s.number
                      ? 'bg-blue-600 border-blue-600 shadow-blue-200 shadow-lg'
                      : 'bg-white border-slate-200')
                  }
                >
                  {step > s.number ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span className={`text-sm font-bold ${step >= s.number ? 'text-white' : 'text-slate-400'}`}>
                      {s.number}
                    </span>
                  )}
                </motion.div>
                <p className={`text-[11px] md:text-xs font-bold transition-colors ${step >= s.number ? 'text-slate-900' : 'text-slate-400'}`}>
                  {s.label}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-[2px] mx-2 mb-8 transition-all duration-700 ${step > s.number ? 'bg-emerald-400' : 'bg-slate-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Main card - CAMBIO: Sombras más profundas y borde azulado sutil */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          {/* Card header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {['#ff5f57','#ffbd2e','#28c940'].map(c => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">docphone // v1.0.4</span>
            </div>
            <div className="bg-blue-100 px-3 py-1 rounded-lg">
              <span className="font-mono text-xs text-blue-700 font-bold">PASO {step}/4</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 md:p-12"
            >

              {/* ── PASO 1: IMAGEN ── */}
              {step === 1 && (
                <div className="space-y-8">
                  <StepHeading
                    icon={<ImageIcon className="w-5 h-5" />}
                    title="Estudio radiológico"
                    description="Subí o usá nuestra imagen de ejemplo para comenzar el análisis."
                  />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 bg-slate-50 p-2">
                    {isImageLoading ? (
                      <div className="flex flex-col items-center justify-center py-24 gap-4">
                        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                        <p className="font-mono text-sm text-slate-500">Cargando visualizador...</p>
                      </div>
                    ) : selectedImage ? (
                      <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={selectedImage}
                          alt="Radiografía"
                          width={900}
                          height={600}
                          className="w-full object-contain max-h-72 md:max-h-[28rem] bg-black"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button onClick={resetImage} className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-lg border border-slate-200 flex items-center gap-2 hover:bg-white transition-colors">
                            <XCircle className="w-4 h-4" /> Resetear
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {/* ── PASO 2: DICTADO ── */}
              {step === 2 && (
                <div className="space-y-8">
                  <StepHeading
                    icon={<Mic className="w-5 h-5" />}
                    title="Dictado del profesional"
                    description="Grabá tu diagnóstico con lenguaje natural médico."
                  />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div
                      className={`flex flex-col items-center justify-center rounded-2xl p-10 gap-6 cursor-pointer transition-all border-2 ${isRecording ? 'bg-red-50 border-red-200 shadow-inner' : 'bg-blue-50 border-blue-100 hover:border-blue-300 shadow-sm'}`}
                      onClick={toggleRecording}
                    >
                      {isRecording ? (
                        <div className="flex flex-col items-center gap-4">
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-200">
                                <div className="w-6 h-6 bg-white rounded-sm" />
                            </motion.div>
                            <span className="text-red-600 font-bold animate-pulse uppercase tracking-widest text-sm">Grabando...</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                                <Mic className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-blue-700 font-bold uppercase tracking-widest text-sm">Tocar para iniciar</span>
                        </div>
                      )}
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                      <div className="flex justify-between mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Transcripción real-time</span>
                      </div>
                      <div className="text-slate-700 font-medium leading-relaxed min-h-[150px]">
                        {dictatedText || "El dictado aparecerá aquí una vez que termines de hablar..."}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── PASO 4: INFORME FINAL (Donde estaba el error) ── */}
              {step === 4 && (
                <div className="space-y-8">
                  <StepHeading
                    icon={<FileCheck className="w-5 h-5" />}
                    title="Informe estructurado"
                    description="Revisá y personalizá el resultado final generado por la IA."
                  />

                  {/* Document Container - CAMBIO: Simula una hoja de papel real */}
                  <div className="rounded-2xl border border-slate-200 shadow-xl bg-white overflow-hidden">
                    <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                        <div>
                            <h4 className="text-xl font-bold tracking-tight">DOCPHONE REPORT</h4>
                            <p className="text-xs font-mono opacity-60 uppercase">{reportId}</p>
                        </div>
                        <FileText className="w-8 h-8 opacity-20" />
                    </div>

                    <div className="p-8 space-y-8">
                      {[
                        { key: 'hallazgos', label: 'Hallazgos encontrados', color: 'border-blue-500 bg-blue-50/50' },
                        { key: 'impresion', label: 'Impresión Diagnóstica', color: 'border-indigo-500 bg-indigo-50/50' },
                        { key: 'recomendaciones', label: 'Plan y Recomendaciones', color: 'border-emerald-500 bg-emerald-50/50' },
                      ].map((section) => (
                        <div key={section.key} className="space-y-3">
                          <div className={`inline-block px-3 py-1 rounded-md border-l-4 ${section.color}`}>
                            <span className="text-xs font-black uppercase text-slate-700 tracking-wider">
                              {section.label}
                            </span>
                          </div>
                          
                          {isEditingReport ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                              <textarea
                                value={finalReport[section.key as keyof typeof finalReport]}
                                onChange={(e) => setFinalReport({ ...finalReport, [section.key]: e.target.value })}
                                // CAMBIO: Estilos corregidos para edición clara
                                className="w-full rounded-xl p-4 text-sm font-medium leading-relaxed bg-white border-2 border-blue-500 text-slate-900 shadow-inner focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                                rows={4}
                              />
                            </motion.div>
                          ) : (
                            <div className="text-base text-slate-700 leading-relaxed pl-4 border-l border-slate-100">
                              {finalReport[section.key as keyof typeof finalReport]}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Paso 4 */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setIsEditingReport(!isEditingReport)}
                      className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl text-sm font-bold transition-all border-2 ${isEditingReport ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                    >
                      <Edit3 className="w-5 h-5" />
                      {isEditingReport ? 'Guardar Cambios' : 'Editar Informe'}
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl text-sm font-bold bg-slate-900 text-white hover:bg-black transition-all shadow-lg">
                      <Download className="w-5 h-5" />
                      Descargar PDF
                    </button>
                  </div>
                </div>
              )}

              {/* ... Los otros pasos (3) siguen igual pero con los estilos de StepHeading mejorados ... */}
              {step === 3 && (
                <div className="flex flex-col items-center justify-center py-20 gap-6">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-3xl bg-blue-100 flex items-center justify-center">
                            <Brain className="w-12 h-12 text-blue-600 animate-pulse" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg">
                            <Sparkles className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900">Analizando con IA</h3>
                        <p className="text-slate-500 font-medium">Cruzando dictado con imagen radiológica...</p>
                    </div>
                    <div className="w-full max-w-xs h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 5 }}
                            className="h-full bg-blue-600"
                        />
                    </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Navigation Footer */}
          <div className="flex items-center justify-between px-8 py-6 border-t bg-slate-50/50">
            <button
              onClick={handleBack}
              disabled={step === 1 || isProcessing}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all disabled:opacity-30 bg-white border border-slate-200 text-slate-600 hover:bg-white"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>

            {step < 4 && (
              <button
                onClick={handleNext}
                disabled={!canProceed || isProcessing}
                className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all disabled:opacity-50 bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
              >
                {step === 3 ? 'Generar Informe' : 'Continuar'}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {step === 4 && (
              <button
                onClick={() => {
                  setStep(1);
                  setSelectedImage(null);
                  setDictatedText('');
                  setAiFindings('');
                  setShowFindings(false);
                  setFinalReport({ hallazgos: '', impresion: '', recomendaciones: '' });
                  setIsEditingReport(false);
                  setIsImageLoading(true);
                  setTimeout(() => {
                    setSelectedImage(SAMPLE_XRAY);
                    setIsImageLoading(false);
                  }, 1200);
                }}
                className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100"
              >
                <Sparkles className="w-4 h-4" />
                Nuevo Informe
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepHeading({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-600 text-white shadow-lg shadow-blue-100">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm font-medium text-slate-500">{description}</p>
      </div>
    </div>
  );
}