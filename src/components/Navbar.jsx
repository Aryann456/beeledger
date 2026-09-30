
import { Link, useLocation } from 'react-router-dom';
import { Cpu, ShieldCheck, TestTube, QrCode, Sparkles } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path 
    ? 'bg-honeyGlow text-black font-extrabold shadow-glow-amber' 
    : 'text-slate-400 hover:text-white hover:bg-white/5';

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
      <nav className="bg-darkCard/80 backdrop-blur-xl border border-darkBorder p-3 rounded-full flex justify-between items-center shadow-2xl">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 pl-3">
          <div className="bg-gradient-to-tr from-neonAmber to-honeyGlow p-2 rounded-2xl text-black font-black flex items-center justify-center text-xl shadow-glow-amber">
            🐝
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
              BeeLedger <Sparkles className="w-4 h-4 text-honeyGlow animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">SIH 2026 • Verified Drop</span>
          </div>
        </div>

        {/* Navigation Pills */}
        <div className="hidden md:flex gap-1.5 bg-darkBg/60 p-1.5 rounded-full border border-darkBorder">
          <Link to="/beekeeper" className={`px-4 py-2 rounded-full text-xs transition-all flex items-center gap-2 ${isActive('/beekeeper')}`}>
            <Cpu className="w-3.5 h-3.5" /> Hive IoT
          </Link>
          <Link to="/processor" className={`px-4 py-2 rounded-full text-xs transition-all flex items-center gap-2 ${isActive('/processor')}`}>
            <ShieldCheck className="w-3.5 h-3.5" /> Lineage
          </Link>
          <Link to="/lab" className={`px-4 py-2 rounded-full text-xs transition-all flex items-center gap-2 ${isActive('/lab')}`}>
            <TestTube className="w-3.5 h-3.5" /> Lab Quality
          </Link>
          <Link to="/verify" className={`px-4 py-2 rounded-full text-xs transition-all flex items-center gap-2 ${isActive('/verify')}`}>
            <QrCode className="w-3.5 h-3.5" /> Passport
          </Link>
        </div>

        {/* Live Network Badge */}
        <div className="pr-2">
          <span className="bg-mintPulse/10 text-mintPulse border border-mintPulse/30 text-[11px] font-mono px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-glow-mint">
            <span className="w-2 h-2 rounded-full bg-mintPulse animate-ping" />
            Mainnet Active
          </span>
        </div>
      </nav>
    </div>
  );
}