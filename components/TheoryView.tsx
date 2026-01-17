
import React from 'react';
import { TheorySection } from '../types';

interface TheoryViewProps {
  theory: TheorySection[];
  onBack: () => void;
}

const TheoryView: React.FC<TheoryViewProps> = ({ theory, onBack }) => {
  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-500">
      <button onClick={onBack} className="text-green-500 text-xs hover:underline">← Volver al Menú Principal</button>
      
      <div className="border-l-4 border-green-600 pl-4 py-2 bg-green-900/5">
        <h2 className="text-2xl font-bold tracking-tight">MANUAL DE REFERENCIA</h2>
        <p className="text-[10px] text-green-500 font-bold tracking-[0.3em] uppercase opacity-70">Documentación del Sistema v1.0.2</p>
      </div>
      
      <div className="space-y-8">
        {theory.map((section, idx) => (
          <section key={idx} className="relative">
            <div className="flex items-center mb-4">
              <span className="bg-green-600 text-black text-[10px] font-black px-2 py-0.5 rounded mr-3">SEC_0{idx + 1}</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">{section.title}</h3>
            </div>
            <div className="bg-[#111] p-6 rounded-lg border border-gray-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
                <span className="text-6xl font-black">0{idx + 1}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
                {section.content}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="p-5 bg-blue-900/10 border border-blue-900/30 rounded-lg flex items-start space-x-4">
        <span className="text-2xl">💡</span>
        <div>
          <p className="text-[10px] text-blue-400 font-bold uppercase mb-1 tracking-widest">Nota del Administrador</p>
          <p className="text-xs text-gray-400 italic">"La terminal no es solo texto; es control total. Lee con calma, cada detalle en el prompt tiene un significado profundo sobre tu identidad en el sistema."</p>
        </div>
      </div>
    </div>
  );
};

export default TheoryView;
