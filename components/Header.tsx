
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-green-900/50 p-4 flex justify-between items-center bg-[#111]">
      <div className="flex items-center space-x-2">
        <span className="text-green-500 font-bold tracking-tighter text-xl">LINUX_MASTER</span>
        <span className="text-[10px] bg-green-900/40 text-green-400 px-2 py-0.5 rounded border border-green-800/50 uppercase font-bold">Terminal</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-[10px] text-green-500 font-bold tracking-widest">ONLINE</span>
      </div>
    </header>
  );
};

export default Header;
