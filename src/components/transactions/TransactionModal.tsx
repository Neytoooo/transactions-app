import { useEffect, useCallback, useRef } from 'react';
import { X, CheckCircle2, Clock3, XCircle, Hash, Calendar, User2, BadgeInfo } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { EUR, formatDate } from '../../lib/format';
import type { Tx } from './TransactionCard';

function Status({ s }: { s: Tx['status'] }) {
  const map = {
    completed: { icon: <CheckCircle2 className="text-emerald-600" size={16} />, label: 'Completed' },
    pending:   { icon: <Clock3 className="text-amber-600" size={16} />, label: 'Pending'   },
    failed:    { icon: <XCircle className="text-rose-600" size={16} />, label: 'Failed'    },
  } as const;
  const v = map[s];
  return <div className="flex items-center gap-1 text-sm text-neutral-600">{v.icon}<span>{v.label}</span></div>;
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3">
      <div className="text-neutral-500">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs text-neutral-500">{label}</p>
        <p className="truncate text-sm font-medium text-neutral-900">{value}</p>
      </div>
    </div>
  );
}

export default function TransactionModal({ tx, onClose }: { tx: Tx | null; onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const onEsc = useCallback((e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); }, [onClose]);

  useEffect(() => {
    if (!tx) return;
    document.addEventListener('keydown', onEsc);
    // Focus le bouton Fermer à l’ouverture (focus trap light)
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => document.removeEventListener('keydown', onEsc);
  }, [tx, onEsc]);

  return (
    <AnimatePresence>
      {tx && (
        <motion.div className="fixed inset-0 z-50"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {/* overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          {/* dialog */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              role="dialog" aria-modal="true" aria-labelledby="tx-title"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-lg rounded-xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <h3 id="tx-title" className="text-base font-semibold">Transaction Details</h3>
                <button
                  ref={closeBtnRef}
                  aria-label="Close"
                  onClick={onClose}
                  className="rounded p-1 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-6 pb-6 pt-5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-900">{EUR.format(tx.amountCents / 100)}</div>
                  <div className="mt-1 flex items-center justify-center"><Status s={tx.status} /></div>
                </div>

                <hr className="my-5 border-neutral-200" />

                <div className="grid gap-3">
                  <Row icon={<Hash size={16} />} label="Transaction ID" value={<code className="text-xs">{tx.id}</code>} />
                  <Row icon={<BadgeInfo size={16} />} label="Label" value={tx.label} />
                  <Row icon={<User2 size={16} />} label="From" value={tx.from} />
                  <Row icon={<User2 size={16} />} label="To" value={tx.to} />
                  <Row icon={<Calendar size={16} />} label="Date" value={formatDate(tx.date)} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
