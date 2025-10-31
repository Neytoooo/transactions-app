import { useMemo, useState, useCallback } from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HistoryHeader from './components/transactions/HistoryHeader';
import SearchBar from './components/transactions/SearchBar';
import WeekGroup from './components/transactions/WeekGroup';
import TransactionModal from './components/transactions/TransactionModal';
import data from './data/transactions.json';
import type { Tx } from './components/transactions/TransactionCard';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';

function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Tx | null>(null);
  const [visible, setVisible] = useState(6);        // taille de page
  const [loading, setLoading] = useState(false);

  const list = data as Tx[];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter((t) =>
      [t.label, t.from, t.to, (t.amountCents / 100).toFixed(2)]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [list, query]);

  const hasMore = visible < filtered.length;

  // Quand la recherche change, on repart de zéro
  const onSearch = (v: string) => { setQuery(v); setVisible(6); };

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    // on simule une latence pour montrer les squelettes
    setTimeout(() => {
      setVisible((n) => Math.min(n + 6, filtered.length));
      setLoading(false);
    }, 500);
  }, [hasMore, loading, filtered.length]);

  const sentinelRef = useInfiniteScroll(loadMore);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero />

        <section className="mx-auto mt-8 w-11/12 max-w-4xl">
          <HistoryHeader count={filtered.length} />
          <div className="mt-4">
            <SearchBar value={query} onChange={onSearch} />
          </div>
        </section>

        <WeekGroup
          items={filtered.slice(0, visible)}
          onOpen={setSelected}
          loading={loading}
          sentinelRef={sentinelRef}
        />
      </main>

      <TransactionModal tx={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
