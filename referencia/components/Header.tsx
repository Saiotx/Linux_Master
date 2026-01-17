
import React from 'react';

interface HeaderProps {
  onLogout?: () => void;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ onLogout, username }) => {
  return (
    <header className="border-b border-green-900/50 p-4 flex flex-col space-y-2 bg-[#111]">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-green-500 font-bold tracking-tighter text-xl">LINUX_MASTER</span>
          <span className="text-[10px] bg-green-900/40 text-green-400 px-2 py-0.5 rounded border border-green-800/50 uppercase font-bold">Terminal</span>
        </div>
        
        {onLogout && (
          <button 
            onClick={onLogout}
            className="text-[9px] text-gray-500 hover:text-red-500 border border-gray-800 px-2 py-1 rounded transition-colors uppercase font-bold"
          >
            [ Logout ]
          </button>
        )}
      </div>

      <div className="flex justify-between items-center pt-1 border-t border-green-900/20">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[9px] text-green-500 font-bold tracking-widest uppercase">
            User: {username || 'Guest'}
          </span>
        </div>
        <span className="text-[8px] text-green-900 font-bold uppercase tracking-widest">
          Auth_Secure_V4
        </span>
      </div>
    </header>
  );
};

export default Header;
