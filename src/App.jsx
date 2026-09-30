import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BeekeeperDashboard from './pages/BeekeeperDashboard';
import ProcessorGenealogy from './pages/ProcessorGenealogy';
import LabVerification from './pages/LabVerification';
import ConsumerPassport from './pages/ConsumerPassport';
import QRModal from './components/QRModal';
import { QrCode } from 'lucide-react';

export default function App() {
  const [isQrOpen, setIsQrOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-darkBg text-white font-sans selection:bg-honeyGlow selection:text-black">
        {/* Floating Glass Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<Navigate to="/beekeeper" replace />} />
          <Route path="/beekeeper" element={<BeekeeperDashboard />} />
          <Route path="/processor" element={<ProcessorGenealogy />} />
          <Route path="/lab" element={<LabVerification />} />
          <Route path="/lab-quality" element={<LabVerification />} />
          <Route path="/verify" element={<ConsumerPassport />} />
        </Routes>

        {/* Floating Quick QR Code Trigger for Live SIH Presentation */}
        <button 
          onClick={() => setIsQrOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-tr from-neonAmber to-honeyGlow text-black p-4 rounded-2xl shadow-glow-amber hover:scale-105 active:scale-95 transition flex items-center gap-2 font-black z-40"
          title="Open Live QR Code for Judges"
        >
          <QrCode className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-mono uppercase tracking-wider">Demo QR</span>
        </button>

        {/* Interactive QR Modal */}
        <QRModal 
          isOpen={isQrOpen} 
          onClose={() => setIsQrOpen(false)} 
          batchId="BATCH-2026-8891" 
        />
      </div>
    </Router>
  );
}