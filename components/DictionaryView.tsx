
import React, { useState } from 'react';
import { DictionaryEntry } from '../types';

interface DictionaryViewProps {
  dictionary: DictionaryEntry[];
  onBack: () => void;
}

const DictionaryView: React.FC<DictionaryViewProps> = ({ dictionary, onBack }) => {
  const [search, setSearch] = useState('');

  const filtered = dictionary.filter(d => 
    d.command.toLowerCase().includes(search.toLowerCase()) || 
    d.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      <button onClick={onBack} className="text-green-500 text-xs">← Volver al Menú</button>
      <div className="flex justify-between items-end border-b border-green-900 pb-2">
        <h2 className="text-xl font-bold">DICCIONARIO</h2>
        <input 
          type="text" 
          placeholder="Buscar comando..."
          className="bg-black border border-gray-800 rounded px-2 py-1 text-xs focus:border-green-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filtered.map((entry, idx) => (
          <div key={idx} className="bg-[#111] border border-gray-800 p-4 rounded hover:border-gray-700">
            <div className="flex justify-between items-center mb-1">
              <code className="text-green-400 font-bold">{entry.command}</code>
              <code className="text-[10px] text-gray-600 bg-gray-900 px-1 rounded">ej: {entry.example}</code>
            </div>
            <p className="text-xs text-gray-400">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DictionaryView;
