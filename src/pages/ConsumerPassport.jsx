import  { useState } from 'react';
import { mockBatches } from '../data/mockData';
import { CheckCircle2, Shield, MapPin, TestTube, Cpu, Sparkles } from 'lucide-react';

export default function ConsumerPassport() {
  const [batch] = useState(mockBatches[0]);

  return (
    <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto space-y-8 bg-darkBg text-white min-h-screen font-sans">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="bg-mintPulse/10 text-mintPulse border border-mintPulse/30 text-xs font-mono font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> 100% On-Chain Verified
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight">Honey Digital Passport</h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">Scan the jar's QR code to view the verifiable origin and quality journey[cite: 1].</p>
      </div>

      {/* Verified Header Box */}
      <div className="bg-darkCard border border-darkBorder p-6 rounded-3xl flex justify-between items-center shadow-2xl relative overflow-hidden">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Active Batch Twin</span>
          <h3 className="text-2xl font-black font-mono text-honeyGlow">{batch.id}</h3>
        </div>
        <div className="bg-mintPulse/10 text-mintPulse border border-mintPulse/30 text-xs font-mono font-bold px-4 py-2 rounded-2xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> Passed Quality Audit[cite: 1]
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-darkCard p-8 rounded-3xl border border-darkBorder space-y-8">
        <h3 className="text-lg font-bold text-slate-200 border-b border-darkBorder pb-4">Provenance Timeline</h3>

        <div className="border-l-2 border-honeyGlow/40 pl-8 space-y-10 relative">
          
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-0 bg-honeyGlow text-black p-2 rounded-2xl font-bold shadow-glow-amber">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-white text-lg">1. Apiary Harvest</h4>
            <p className="text-sm text-slate-300 mt-1">Hive ID: <span className="font-mono text-honeyGlow">{batch.hiveId}</span> • Beekeeper: {batch.beekeeper}</p>
            <p className="text-xs font-mono text-slate-400 mt-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-neonAmber" /> {batch.location}
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-0 bg-cyan-400 text-black p-2 rounded-2xl font-bold">
              <TestTube className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-white text-lg">2. Lab Quality Screening</h4>
            <p className="text-sm text-slate-300 mt-1">Purity Score: <span className="text-mintPulse font-mono font-bold">{batch.labResult.purityScore}</span> • Moisture: {batch.labResult.moistureContent}</p>
            <p className="text-xs font-mono text-slate-400 mt-2">Cert Hash: {batch.labResult.certificateHash}</p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-0 bg-mintPulse text-black p-2 rounded-2xl font-bold shadow-glow-mint">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-white text-lg">3. Immutable Ledger Immutable Anchor</h4>
            <p className="text-sm text-slate-300 mt-1">Hyperledger Fabric Smart Contract Execution[cite: 1]</p>
            <p className="text-xs font-mono text-slate-400 mt-2">TX Hash: {batch.blockchainTx}</p>
          </div>

        </div>
      </div>

    </div>
  );
}