import { useMemo, useState, useCallback, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HistoryHeader from './components/transactions/HistoryHeader';
import SearchBar from './components/transactions/SearchBar';
import WeekGroup from './components/transactions/WeekGroup';
import TransactionModal from './components/transactions/TransactionModal';
import ErrorBanner from './components/ErrorBanner';
import data from './data/transactions.json';
import type { Tx } from './components/transactions/TransactionCard';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { useDebounced } from './hooks/useDebounced';

function App() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounced(query, 300);

  const [selected, setSelected] = useState<Tx | null>(null);
  const [visible, setVisible] = useState(6);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const list = data as Tx[];

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return list;
    return list.filter((t) =>
      [t.label, t.from, t.to, (t.amountCents / 100).toFixed(2)]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [list, debouncedQuery]);

  const hasMore = visible < filtered.length;

  useEffect(() => { setVisible(6); }, [debouncedQuery]);

  const loadMore = useCallback(() => {
    if (loading || !hasMore || error) return;
    setLoading(true);
    setTimeout(() => {
      if (Math.random() < 0.08) {
        setError('Network error while loading more transactions.');
        setLoading(false);
        return;
      }
      setVisible((n) => Math.min(n + 6, filtered.length));
      setLoading(false);
    }, 500);
  }, [hasMore, loading, error, filtered.length]);

  const onRetry = () => { setError(null); loadMore(); };

  const sentinelRef = useInfiniteScroll(loadMore);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900
                    dark:bg-neutral-950 dark:text-neutral-50">
      <Header />
      <main>
        <Hero />

        <section className="mx-auto mt-8 w-11/12 max-w-4xl">
          <HistoryHeader count={filtered.length} />
          <div className="mt-4">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          {error && (
            <div className="mt-4">
              <ErrorBanner message={error} onRetry={onRetry} />
            </div>
          )}
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
