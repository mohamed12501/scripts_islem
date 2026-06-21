import { useState, useMemo } from 'react';
import { useTrackerState } from './hooks/useTrackerState';
import { ProgressBanner } from './components/ProgressBanner';
import { FilterBar } from './components/FilterBar';
import { DayCard } from './components/DayCard';
import { DayDetail } from './components/DayDetail';
import { ExportImportControls } from './components/ExportImportControls';
import type { ContentType, Status, Assignee } from './data/days';

function App() {
  const tracker = useTrackerState();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [filters, setFilters] = useState<{
    week: number | null;
    status: Status | null;
    type: ContentType | null;
    assignee: Assignee | null;
  }>({ week: null, status: null, type: null, assignee: null });

  const filteredDays = useMemo(() => {
    return tracker.days.filter(d => {
      if (filters.week && d.week !== filters.week) return false;
      if (filters.status && d.status !== filters.status) return false;
      if (filters.type && d.type !== filters.type) return false;
      if (filters.assignee && d.assignee !== filters.assignee) return false;
      return true;
    });
  }, [tracker.days, filters]);

  const selectedEntry = selectedDay !== null ? tracker.days.find(d => d.day === selectedDay) : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div>
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-muted">Content Strategy Tracker</div>
            <h1 className="text-2xl font-black tracking-tight">The Content Market <span className="text-accent">30-Day Challenge</span></h1>
          </div>
          <ExportImportControls
            onExport={tracker.exportState}
            onImport={tracker.importState}
            onReset={tracker.resetState}
          />
        </div>
      </header>

      <ProgressBanner
        currentDay={tracker.currentDay}
        totalRevenue={tracker.totalRevenue}
        daysPosted={tracker.daysPosted}
        counters={tracker.counters}
        onSetCurrentDay={tracker.setCurrentDay}
        onUpdateCounter={tracker.updateCounter}
      />

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDays.map(day => (
          <DayCard key={day.day} entry={day} onClick={() => setSelectedDay(day.day)} />
        ))}
      </div>

      {filteredDays.length === 0 && (
        <div className="text-center text-muted py-12">No days match the current filters.</div>
      )}

      {selectedEntry && (
        <DayDetail
          entry={selectedEntry}
          onClose={() => setSelectedDay(null)}
          onUpdate={tracker.updateDay}
        />
      )}
    </div>
  );
}

export default App;
