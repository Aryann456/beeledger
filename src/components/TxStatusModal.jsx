
import { Loader2, CheckCircle,  } from 'lucide-react';

export default function TxStatusModal({ isOpen, status, txHash, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl text-center space-y-4">
        {status === 'MINING' && (
          <div className="space-y-3">
            <Loader2 className="w-12 h-12 text-amber-500 animate-spin mx-auto" />
            <h3 className="font-bold text-slate-800">Committing Block to Hyperledger...</h3>
            <p className="text-xs text-slate-500">Hashing batch identity & sensor data onto the ledger[cite: 1]</p>
          </div>
        )}

        {status === 'SUCCESS' && (
          <div className="space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="font-bold text-slate-800">Transaction Confirmed</h3>
            <div className="bg-slate-100 p-2 rounded text-[11px] font-mono text-slate-600 break-all">
              {txHash}
            </div>
            <button 
              onClick={onClose}
              className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}