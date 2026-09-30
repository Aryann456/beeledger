
import { QRCodeSVG } from 'qrcode.react';
import { X, Sparkles, Smartphone } from 'lucide-react';

export default function QRModal({ isOpen, onClose, batchId = "BATCH-2026-8891" }) {
  if (!isOpen) return null;

  const verifyUrl = `${window.location.origin}/verify?batchId=${batchId}`;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-darkCard border border-darkBorder p-8 rounded-3xl max-w-sm w-full text-center space-y-6 shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-darkBg rounded-full border border-darkBorder transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="space-y-1">
          <span className="bg-honeyGlow/10 text-honeyGlow border border-honeyGlow/20 text-[10px] font-mono px-3 py-1 rounded-full inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> SIH Live Demo
          </span>
          <h3 className="text-xl font-black text-white">Scan Honey Passport</h3>
          <p className="text-xs font-mono text-slate-400">{batchId}</p>
        </div>

        {/* QR Display */}
        <div className="bg-white p-5 rounded-2xl inline-block shadow-glow-amber">
          <QRCodeSVG value={verifyUrl} size={180} level="H" includeMargin={true} />
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <Smartphone className="w-4 h-4 text-mintPulse" /> Scan with mobile camera
        </div>

      </div>
    </div>
  );
}