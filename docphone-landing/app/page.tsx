'use client';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import WizardFlow from './components/WizardFlow';
import Modules from './components/Modules';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <ProblemSolution />
      <WizardFlow />
      <Modules />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  );
}