
import { QRCodeSVG } from 'qrcode.react';

export default function BatchQRCode({ batchId }) {
  const verifyUrl = `${window.location.origin}/verify?batchId=${batchId}`;

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 inline-block text-center shadow-sm">
      <QRCodeSVG value={verifyUrl} size={150} level="H" includeMargin={true} />
      <p className="mt-2 text-xs font-mono font-bold text-slate-700">{batchId}</p>
      <p className="text-[10px] text-slate-400">Scan to view Honey Passport</p>
    </div>
  );
}