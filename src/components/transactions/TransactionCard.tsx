import { CheckCircle2, Clock3, XCircle } from 'lucide-react';
import { EUR, formatDate } from '../../lib/format';

export type Tx = {
  id: string;
  label: string;
  from: string;
  to: string;
  date: string;
  amountCents: number;
  currency: 'EUR';
  status: 'completed' | 'pending' | 'failed';
};

function StatusIcon({ s }: { s: Tx['status'] }) {
  if (s === 'completed') return <CheckCircle2 className="text-emerald-600" size={16} aria-hidden />;
  if (s === 'pending') return <Clock3 className="text-amber-600" size={16} aria-hidden />;
  return <XCircle className="text-rose-600" size={16} aria-hidden />;
}

export default function TransactionCard({ tx, onClick }: { tx: Tx; onClick?: (t: Tx) => void }) {
  return (
    <button
      onClick={() => onClick?.(tx)}
      aria-label={`Open details for ${tx.label}`}
      className="w-full rounded-xl border border-neutral-200 bg-white p-4 text-left shadow-sm
                 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500
                 transition-transform hover:scale-[1.01]
                 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">{tx.label}</h4>
          <p className="text-xs text-neutral-500">
            {tx.from} — {tx.to}
          </p>
          <p className="mt-1 text-xs text-neutral-500">{formatDate(tx.date)}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-bold">{EUR.format(tx.amountCents / 100)}</div>
          <StatusIcon s={tx.status} />
        </div>
      </div>
    </button>
  );
}

