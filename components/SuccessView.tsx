
import React from 'react';

interface SuccessViewProps {
  onNext: () => void;
  onHome: () => void;
}

const SuccessView: React.FC<SuccessViewProps> = ({ onNext, onHome }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
      <div className="w-24 h-24 bg-green-900/30 rounded-full flex items-center justify-center border-4 border-green-500 mb-6">
        <span className="text-5xl">✓</span>
      </div>
      
      <h2 className="text-3xl font-bold text-green-500 mb-2">ACCESO CONCEDIDO</h2>
      <p className="text-gray-400 mb-8 max-w-[250px]">Comando ejecutado con éxito. El estado del entorno ha sido actualizado.</p>

      <div className="space-y-3 w-full">
        <button
          onClick={onNext}
          className="w-full bg-white text-black font-bold py-3 rounded-md uppercase hover:bg-gray-200 transition-colors"
        >
          Siguiente Módulo
        </button>
        <button
          onClick={onHome}
          className="w-full border border-gray-700 py-3 rounded-md uppercase hover:bg-gray-900 transition-colors"
        >
          Volver al Panel
        </button>
      </div>
    </div>
  );
};

export default SuccessView;
