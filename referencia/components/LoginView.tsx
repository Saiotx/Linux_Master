
import React, { useState, useEffect } from 'react';

interface LoginViewProps {
  onLogin: (username: string) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('ERROR: CREDENTIALS_REQUIRED');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Simulación de delay de arranque de kernel
    setTimeout(() => {
      onLogin(username);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 animate-in fade-in duration-1000 font-mono">
      <div className="w-full max-w-xs space-y-8">
        <div className="text-center space-y-4">
          <pre className="text-[8px] text-green-500 font-bold leading-[1] inline-block text-left mb-4">
{`   _      _____ _   _ _    _______  __
  | |    |_   _| \\ | | |  | \\ \\ / / |  |
  | |      | | |  \\| | |  | |\\ V /  |  |
  | |      | | | |\\  | |  | | > <   |  |
  | |____ _| |_| | \\ | |__| |/ . \\  |__|
  |______|_____|_|  \\_\\____//_/ \\_\\ (_)`}
          </pre>
          <div className="h-0.5 w-full bg-green-900/30 relative">
            <div className="absolute top-0 left-0 h-full bg-green-500 animate-[loading_2s_infinite]"></div>
          </div>
          <p className="text-[10px] text-green-700 uppercase tracking-[0.3em]">Secure Terminal Access v4.0</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-black/40 border border-green-900/30 p-6 rounded-lg shadow-[0_0_30px_rgba(34,197,94,0.05)]">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] text-green-600 font-bold uppercase tracking-wider block">login_user:</label>
              <div className="flex items-center space-x-2 border-b border-green-900/50 pb-1 group focus-within:border-green-500 transition-colors">
                <span className="text-green-500 text-sm opacity-50">@</span>
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-green-900"
                  placeholder="username"
                  autoFocus
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-green-600 font-bold uppercase tracking-wider block">access_token:</label>
              <div className="flex items-center space-x-2 border-b border-green-900/50 pb-1 group focus-within:border-green-500 transition-colors">
                <span className="text-green-500 text-sm opacity-50">#</span>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-green-900"
                  placeholder="********"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="text-[9px] text-red-500 animate-pulse font-bold bg-red-500/5 p-2 rounded border border-red-500/20">
              {error}
            </div>
          )}

          <button 
            disabled={loading}
            className={`w-full py-3 rounded text-[11px] font-black uppercase tracking-widest transition-all ${
              loading 
                ? 'bg-green-900/20 text-green-800 border border-green-900/50' 
                : 'bg-green-600 hover:bg-green-500 text-black shadow-[0_4px_0_rgba(22,101,52,1)] active:translate-y-1 active:shadow-none'
            }`}
          >
            {loading ? 'Booting Kernel...' : 'Initialize Session'}
          </button>
        </form>

        <div className="text-center opacity-30 text-[8px] uppercase tracking-tighter text-gray-500">
          SYSTEM_ID: 0x{Math.random().toString(16).substr(2, 8).toUpperCase()} | KERNEL_STATUS: OPTIMIZED
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { width: 0; left: 0; }
          50% { width: 40%; left: 30%; }
          100% { width: 0; left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoginView;
