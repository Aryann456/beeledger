import  { useState } from 'react';
import { GitFork, Layers, ArrowDown, Plus, Sparkles, Check } from 'lucide-react';

export default function ProcessorGenealogy() {
  const [parentBatches, setParentBatches] = useState(['BATCH-2026-8891', 'BATCH-2026-9012']);
  const [newParentInput, setNewParentInput] = useState('');
  const [blendedBatchId] = useState('BLENDED-2026-0042');

  const handleAddParent = () => {
    if (newParentInput.trim()) {
      setParentBatches([...parentBatches, newParentInput.trim()]);
      setNewParentInput('');
    }
  };

  const handleCreateBlend = (e) => {
    e.preventDefault();
    alert(`🔥 Blended Batch ${blendedBatchId} created! Parent-child batch relationships committed to ledger.`);
  };

  return (
    <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-8 bg-darkBg text-white min-h-screen font-sans">
      
      {/* Page Header */}
      <div className="border-b border-darkBorder pb-6">
        <span className="bg-neonAmber/10 text-neonAmber border border-neonAmber/20 text-xs font-mono font-bold px-3 py-1 rounded-full inline-block mb-3">
          🧬 Parent-Child Genealogy Mapping
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight">Batch Blending Hub</h2>
        <p className="text-slate-400 text-sm mt-1">
          Maintain strict trace genealogy when combining or processing multiple raw honey harvests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Blending Form */}
        <div className="bg-darkCard p-8 rounded-3xl border border-darkBorder space-y-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-neonAmber/10 text-neonAmber rounded-2xl">
              <GitFork className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold">Mix Harvest Batches</h3>
              <p className="text-xs text-slate-400">Link multiple source batch IDs</p>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-mono uppercase text-slate-400">Add Parent Harvest Batch ID</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={newParentInput}
                onChange={(e) => setNewParentInput(e.target.value)}
                placeholder="e.g. BATCH-2026-1102"
                className="flex-1 bg-darkBg border border-darkBorder focus:border-honeyGlow text-white p-3.5 rounded-2xl font-mono text-sm outline-none transition"
              />
              <button 
                onClick={handleAddParent}
                type="button" 
                className="bg-darkBorder hover:bg-slate-700 text-white px-5 rounded-2xl font-bold flex items-center gap-1.5 transition text-sm"
              >
                <Plus className="w-4 h-4" /> Add
              </button>
            </div>
          </div>

          {/* Parent list */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-400">Selected Source Batches ({parentBatches.length})</label>
            <div className="space-y-2">
              {parentBatches.map((id, index) => (
                <div key={index} className="bg-darkBg border border-darkBorder px-4 py-3 rounded-2xl text-sm font-mono flex justify-between items-center">
                  <span className="text-honeyGlow font-bold">{id}</span>
                  <span className="text-[10px] bg-honeyGlow/10 text-honeyGlow border border-honeyGlow/20 px-2.5 py-1 rounded-full font-mono">
                    Parent #{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleCreateBlend}
            className="w-full bg-gradient-to-r from-neonAmber to-honeyGlow hover:opacity-90 text-black font-extrabold py-4 rounded-2xl shadow-glow-amber transition transform active:scale-[0.99] text-base"
          >
            Mint Parent-Child Blend Record ⚡
          </button>
        </div>

        {/* Dynamic Lineage Node Diagram */}
        <div className="bg-darkCard p-8 rounded-3xl border border-darkBorder flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold flex items-center gap-2 text-white">
              <Layers className="w-5 h-5 text-honeyGlow" /> Visual Lineage Tree
            </h3>
            <span className="text-xs font-mono text-mintPulse flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Real-Time Graph
            </span>
          </div>

          {/* Flow visualizer */}
          <div className="my-8 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {parentBatches.map((id, idx) => (
                <div key={idx} className="bg-darkBg border border-darkBorder p-3.5 rounded-2xl text-center space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Input Node #{idx + 1}</span>
                  <p className="font-mono text-xs font-bold text-slate-200">{id}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center my-2">
              <div className="p-2 bg-darkBorder text-honeyGlow rounded-full animate-bounce">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-honeyGlow/10 to-neonAmber/10 border border-honeyGlow/40 p-5 rounded-2xl text-center space-y-2 shadow-glow-amber">
              <span className="text-xs font-mono uppercase text-honeyGlow font-bold">New Blended Digital Twin</span>
              <p className="font-mono text-xl font-black text-white">{blendedBatchId}</p>
              <div className="text-[11px] font-mono text-mintPulse flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5" /> Bidirectional Lineage Linked
              </div>
            </div>
          </div>

          <div className="p-3 bg-darkBg/60 rounded-xl border border-darkBorder text-[11px] font-mono text-slate-400 text-center">
            Recall Graph ID: <span className="text-slate-200">0x9a8f...772b</span>
          </div>
        </div>

      </div>

    </div>
  );
}