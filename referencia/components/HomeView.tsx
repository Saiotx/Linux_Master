
import React from 'react';
import { Section } from '../types';

interface HomeViewProps {
  sections: Section[];
  unlockedSection: number;
  onSelectSection: (section: Section) => void;
  username?: string;
}

const HomeView: React.FC<HomeViewProps> = ({ sections, unlockedSection, onSelectSection, username }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-2">
          <p className="text-[9px] text-green-500 font-bold uppercase tracking-widest">Bienvenido, {username || 'Root'}</p>
        </div>
        <h1 className="text-3xl font-black text-green-500 tracking-tighter uppercase">Linux Academy</h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em]">Curriculum Profesional v2.0</p>
      </div>

      <div className="grid gap-6">
        {sections.map(section => {
          const isUnlocked = section.id <= unlockedSection;
          return (
            <button
              key={section.id}
              disabled={!isUnlocked}
              onClick={() => onSelectSection(section)}
              className={`group relative overflow-hidden p-6 rounded-2xl border-2 text-left transition-all active:scale-95 ${
                isUnlocked 
                  ? 'border-green-600/30 bg-[#111] hover:border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.05)]' 
                  : 'border-gray-900 bg-gray-900/10 opacity-50'
              }`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity">
                <span className="text-6xl font-black italic">0{section.id}</span>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                  <span className="text-[10px] font-bold text-green-500 tracking-widest uppercase">Módulo Certificado</span>
                </div>
                
                <h3 className="text-2xl font-black mb-2 leading-tight uppercase tracking-tight">{section.title}</h3>
                <p className="text-xs text-gray-500 mb-4 font-sans line-clamp-2">{section.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[1,2,3,4].map(i => <div key={i} className="w-4 h-1 bg-green-900/50 rounded"></div>)}
                  </div>
                  <span className="text-[10px] font-bold text-green-500 uppercase border border-green-500/30 px-2 py-1 rounded">Explorar Módulo</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-xl">
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-xl">🎓</span>
          <span className="text-xs font-bold text-yellow-500 uppercase">Hoja de Ruta</span>
        </div>
        <p className="text-[10px] text-gray-400 font-sans italic leading-relaxed">
          "Completa todos los niveles de una sección para desbloquear el Examen de Certificación. Solo los administradores con certificación 'Legión del Kernel' podrán acceder a los niveles de redes avanzadas."
        </p>
      </div>
    </div>
  );
};

export default HomeView;
