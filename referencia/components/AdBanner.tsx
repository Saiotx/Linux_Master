
import React from 'react';

const AdBanner: React.FC = () => {
  return (
    <div className="bg-[#111] border-t border-gray-800 w-full h-16 flex items-center justify-center p-2">
      <div className="w-full h-full bg-[#1a1a1a] border border-dashed border-gray-700 rounded flex flex-col items-center justify-center text-[10px] text-gray-500 uppercase tracking-widest font-bold text-center">
        <span>Zona de Publicidad</span>
        <span className="text-[8px] opacity-50">Marcador de AdMob - Listo para integración SDK</span>
      </div>
    </div>
  );
};

export default AdBanner;
