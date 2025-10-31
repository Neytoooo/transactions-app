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

export default function TransactionCard({ tx }: { tx: Tx }) {
  return (
    <div
      role="listitem"
      className="flex items-start justify-between rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <div>
        <h4 className="font-semibold text-neutral-900">{tx.label}</h4>
        <p className="text-xs text-neutral-500">
          {tx.from} → {tx.to}
        </p>
        <p className="mt-1 text-xs text-neutral-500">{formatDate(tx.date)}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm font-bold">{EUR.format(tx.amountCents / 100)}</div>
        <StatusIcon s={tx.status} />
      </div>
    </div>
  );
}
