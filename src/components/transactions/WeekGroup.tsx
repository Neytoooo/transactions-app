import { AnimatePresence, motion } from 'framer-motion';
import TransactionCard, { type Tx } from './TransactionCard';

const item = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 }
};

export default function WeekGroup({ items, onOpen }: { items: Tx[]; onOpen: (t: Tx) => void }) {
  return (
    <section className="mx-auto mt-8 w-11/12 max-w-4xl">
      <p className="mb-3 text-sm font-medium text-neutral-600">Week of August 14</p>
      <div role="list" className="space-y-3">
        <AnimatePresence initial={false}>
          {items.map((t) => (
            <motion.div
              key={t.id}
              layout
              variants={item}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.18 }}
            >
              <TransactionCard tx={t} onClick={onOpen} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

