
import React from 'react';
import { Level } from '../types';

interface ModuleMenuViewProps {
  level: Level;
  onBack: () => void;
  onSelectSection: (section: string) => void;
}

const ModuleMenuView: React.FC<ModuleMenuViewProps> = ({ level, onBack, onSelectSection }) => {
  const sections = [
    { id: 'theory', title: 'Teoría Conceptual', icon: '📖', desc: 'Aprende los fundamentos' },
    { id: 'dictionary', title: 'Diccionario Técnico', icon: '⌨️', desc: 'Comandos y parámetros' },
    { id: 'mission', title: 'Misiones de Juego', icon: '🎯', desc: 'Entrenamiento práctico' }
  ];

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-green-500 text-xs">← Volver a Niveles</button>
      <div className="pb-4 border-b border-green-900/30">
        <h2 className="text-2xl font-bold">{level.title}</h2>
        <p className="text-sm text-gray-500">Selecciona un área para comenzar.</p>
      </div>

      <div className="grid gap-4">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => onSelectSection(s.id)}
            className="flex items-center p-4 bg-[#111] border border-gray-800 rounded-lg hover:border-green-500/50 transition-colors group"
          >
            <span className="text-3xl mr-4">{s.icon}</span>
            <div className="text-left">
              <div className="font-bold group-hover:text-green-400">{s.title}</div>
              <div className="text-xs text-gray-500">{s.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleMenuView;
