import  { useState } from 'react';
import { Thermometer, Droplets, Scale, MapPin, Zap, Radio } from 'lucide-react';

export default function BeekeeperDashboard() {
  const [hiveData] = useState({
    hiveId: "HIVE-ALPHA-04",
    temp: 34.2,
    humidity: 58,
    weight: 14.5
  });

  const [harvestForm, setHarvestForm] = useState({
    flora: 'Wildflower',
    weight: '',
    gps: '22.5645° N, 72.9289° E'
  });

  const handleHarvestSubmit = (e) => {
    e.preventDefault();
    alert(`🚀 Harvest logged! Generated Batch ID & minted on ledger.`);
  };

  return (
    <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-8 bg-darkBg text-white min-h-screen font-sans">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-darkBorder pb-6">
        <div>
          <span className="bg-amber-500/10 text-honeyGlow border border-amber-500/20 text-xs font-mono font-bold px-3 py-1 rounded-full inline-block mb-3">
            ⚡ IoT Telemetry Live Feed
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white">Smart Hive Command</h2>
          <p className="text-slate-400 text-sm mt-1">Real-time telemetry & harvest proof direct from sensor node[cite: 1].</p>
        </div>
        <div className="flex items-center gap-2 bg-darkCard px-4 py-2 rounded-2xl border border-darkBorder font-mono text-xs text-slate-300">
          <Radio className="w-4 h-4 text-mintPulse animate-pulse" /> Nodes Operational: 12/12
        </div>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Sensor 1: Temperature */}
        <div className="bg-darkCard p-6 rounded-3xl border border-darkBorder hover:border-honeyGlow/50 transition duration-300 relative overflow-hidden group shadow-2xl">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-honeyGlow/10 rounded-full blur-2xl group-hover:bg-honeyGlow/20 transition" />
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-mono uppercase text-slate-400">Temperature</span>
            <div className="p-2.5 bg-honeyGlow/10 text-honeyGlow rounded-2xl">
              <Thermometer className="w-6 h-6" />
            </div>
          </div>
          <div className="text-4xl font-black font-mono text-white mb-2">{hiveData.temp} <span className="text-xl text-amber-400">°C</span></div>
          <p className="text-xs text-mintPulse font-mono">✓ Optimal brood status</p>
        </div>

        {/* Sensor 2: Humidity */}
        <div className="bg-darkCard p-6 rounded-3xl border border-darkBorder hover:border-cyan-500/50 transition duration-300 relative overflow-hidden group shadow-2xl">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition" />
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-mono uppercase text-slate-400">Humidity</span>
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-2xl">
              <Droplets className="w-6 h-6" />
            </div>
          </div>
          <div className="text-4xl font-black font-mono text-white mb-2">{hiveData.humidity} <span className="text-xl text-cyan-400">%</span></div>
          <p className="text-xs text-slate-400 font-mono">Normal hive moisture</p>
        </div>

        {/* Sensor 3: Hive Weight */}
        <div className="bg-darkCard p-6 rounded-3xl border border-darkBorder hover:border-mintPulse/50 transition duration-300 relative overflow-hidden group shadow-2xl">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-mintPulse/10 rounded-full blur-2xl group-hover:bg-mintPulse/20 transition" />
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-mono uppercase text-slate-400">Hive Load</span>
            <div className="p-2.5 bg-mintPulse/10 text-mintPulse rounded-2xl">
              <Scale className="w-6 h-6" />
            </div>
          </div>
          <div className="text-4xl font-black font-mono text-white mb-2">{hiveData.weight} <span className="text-xl text-mintPulse">kg</span></div>
          <p className="text-xs text-mintPulse font-mono">🔥 Ready for harvest</p>
        </div>

      </div>

      {/* Harvest Form Section */}
      <div className="bg-darkCard p-8 rounded-3xl border border-darkBorder shadow-2xl relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-tr from-neonAmber to-honeyGlow text-black rounded-2xl font-bold">
            <Zap className="w-5 h-5 fill-black" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white">Log Proof-of-Harvest</h3>
            <p className="text-xs text-slate-400">Generate digital twin for physical batch[cite: 1].</p>
          </div>
        </div>

        <form onSubmit={handleHarvestSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-400">Floral Source</label>
            <input 
              type="text" 
              value={harvestForm.flora} 
              onChange={(e) => setHarvestForm({...harvestForm, flora: e.target.value})}
              className="w-full bg-darkBg border border-darkBorder focus:border-honeyGlow text-white p-3.5 rounded-2xl font-mono text-sm outline-none transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-400">Yield Weight (KG)</label>
            <input 
              type="number" 
              placeholder="e.g. 25"
              onChange={(e) => setHarvestForm({...harvestForm, weight: e.target.value})}
              className="w-full bg-darkBg border border-darkBorder focus:border-honeyGlow text-white p-3.5 rounded-2xl font-mono text-sm outline-none transition"
              required
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-honeyGlow" /> Automated GPS Geotag
            </label>
            <input 
              type="text" 
              value={harvestForm.gps} 
              readOnly
              className="w-full bg-darkBg/50 border border-darkBorder text-slate-400 p-3.5 rounded-2xl font-mono text-sm cursor-not-allowed"
            />
          </div>

          <button 
            type="submit" 
            className="md:col-span-2 bg-gradient-to-r from-honeyGlow to-neonAmber hover:opacity-90 text-black font-extrabold py-4 rounded-2xl shadow-glow-amber transition transform active:scale-[0.99] text-base"
          >
            Mint Batch & Commit to Blockchain ⚡
          </button>
        </form>
      </div>

    </div>
  );
}