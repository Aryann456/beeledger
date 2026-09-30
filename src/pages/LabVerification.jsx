import { useState } from 'react';
import {  FileCheck, Sparkles } from 'lucide-react';

export default function LabVerification() {
  const [batchId, setBatchId] = useState('BATCH-2026-8891');
  const [labData, setLabData] = useState({
    purityScore: '99.4',
    moisture: '17.2',
    hmfContent: '12',
    labStatus: 'PASSED'
  });

  const handleLabSubmit = (e) => {
    e.preventDefault();
    alert(`🧪 Lab Verification for ${batchId} saved! Certificate hash anchored on blockchain[cite: 1].`);
  };

  return (
    <div className="pt-28 pb-16 px-6 max-w-5xl mx-auto space-y-8 bg-darkBg text-white min-h-screen font-sans">
      
      {/* Header Banner */}
      <div className="border-b border-darkBorder pb-6">
        <span className="bg-mintPulse/10 text-mintPulse border border-mintPulse/30 text-xs font-mono font-bold px-3 py-1 rounded-full inline-block mb-3">
          🔬 Quality Control & Testing Portal
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight">Lab Verification & Integrity</h2>
        <p className="text-slate-400 text-sm mt-1">
          Digitally sign and link lab quality certificates directly to batch identities on-chain[cite: 1].
        </p>
      </div>

      {/* Main Dark Card Form */}
      <form onSubmit={handleLabSubmit} className="bg-darkCard p-8 rounded-3xl border border-darkBorder space-y-8 shadow-2xl">
        
        {/* Target Batch ID Input */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase text-slate-400">Target Honey Batch ID</label>
          <input 
            type="text" 
            value={batchId} 
            onChange={(e) => setBatchId(e.target.value)}
            className="w-full bg-darkBg border border-darkBorder focus:border-mintPulse text-honeyGlow font-mono text-lg font-bold p-4 rounded-2xl outline-none transition"
            required
          />
        </div>

        {/* Input Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-darkBg p-5 rounded-2xl border border-darkBorder space-y-2">
            <span className="text-xs font-mono uppercase text-slate-400">Purity Score (%)</span>
            <input 
              type="text" 
              value={labData.purityScore} 
              onChange={(e) => setLabData({...labData, purityScore: e.target.value})}
              className="w-full bg-transparent text-2xl font-black font-mono text-mintPulse outline-none"
            />
            <p className="text-[10px] text-slate-400 font-mono">Standard: &gt; 98%</p>
          </div>

          <div className="bg-darkBg p-5 rounded-2xl border border-darkBorder space-y-2">
            <span className="text-xs font-mono uppercase text-slate-400">Moisture Content (%)</span>
            <input 
              type="text" 
              value={labData.moisture} 
              onChange={(e) => setLabData({...labData, moisture: e.target.value})}
              className="w-full bg-transparent text-2xl font-black font-mono text-cyan-400 outline-none"
            />
            <p className="text-[10px] text-slate-400 font-mono">Max Permissible: 20%</p>
          </div>

          <div className="bg-darkBg p-5 rounded-2xl border border-darkBorder space-y-2">
            <span className="text-xs font-mono uppercase text-slate-400">HMF Level (mg/kg)</span>
            <input 
              type="text" 
              value={labData.hmfContent} 
              onChange={(e) => setLabData({...labData, hmfContent: e.target.value})}
              className="w-full bg-transparent text-2xl font-black font-mono text-honeyGlow outline-none"
            />
            <p className="text-[10px] text-slate-400 font-mono">Freshness Limit: 40 mg/kg</p>
          </div>

        </div>

        {/* Audit Status Dropdown */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase text-slate-400">Overall Testing Decision</label>
          <select 
            value={labData.labStatus}
            onChange={(e) => setLabData({...labData, labStatus: e.target.value})}
            className="w-full bg-darkBg border border-darkBorder text-white p-4 rounded-2xl font-mono text-sm outline-none cursor-pointer"
          >
            <option value="PASSED" className="bg-darkCard text-white">✅ PASSED (Certified Pure)</option>
            <option value="FLAGGED" className="bg-darkCard text-white">⚠️ FLAGGED (Adulteration Risk Detected)</option>
            <option value="REJECTED" className="bg-darkCard text-white">❌ REJECTED (Substandard Quality)</option>
          </select>
        </div>

        {/* Cryptographic Hash Bar */}
        <div className="bg-darkBg p-5 rounded-2xl border border-darkBorder flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-mintPulse/10 text-mintPulse rounded-xl">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-300">Document SHA-256 Hash</p>
              <p className="text-xs font-mono text-slate-400">0x7f8a9b2c3d4e5f6a89c0d1e2f3a4b5c6</p>
            </div>
          </div>
          <span className="text-xs bg-mintPulse/10 text-mintPulse border border-mintPulse/30 px-3.5 py-1.5 rounded-full font-mono font-bold flex items-center gap-1 shadow-glow-mint">
            <Sparkles className="w-3.5 h-3.5" /> Ready to Anchor
          </span>
        </div>

        {/* Action Button */}
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-mintPulse to-emerald-500 hover:opacity-90 text-black font-extrabold py-4 rounded-2xl shadow-glow-mint transition transform active:scale-[0.99] text-base"
        >
          Sign Certificate & Push to Ledger 🧪
        </button>

      </form>

    </div>
  );
}