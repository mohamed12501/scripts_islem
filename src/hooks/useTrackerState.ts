import { useState, useEffect, useCallback, useRef } from 'react';
import type { DayEntry } from '../data/days';
import { SEED_DAYS } from '../data/days';

const STORAGE_KEY = 'content-market-tracker-state';

interface TrackerState {
  days: DayEntry[];
  currentDay: number;
  counters: {
    dmsSent: number;
    clientsSigned: number;
    callsBooked: number;
  };
}

function loadState(): TrackerState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return { days: SEED_DAYS, currentDay: 10, counters: { dmsSent: 0, clientsSigned: 0, callsBooked: 0 } };
}

export function useTrackerState() {
  const [state, setState] = useState<TrackerState>(() => loadState());
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, 300);
  }, [state]);

  const updateDay = useCallback((day: number, updates: Partial<DayEntry>) => {
    setState(prev => ({
      ...prev,
      days: prev.days.map(d => d.day === day ? { ...d, ...updates } : d)
    }));
  }, []);

  const setCurrentDay = useCallback((day: number) => {
    setState(prev => ({ ...prev, currentDay: day }));
  }, []);

  const updateCounter = useCallback((key: keyof TrackerState['counters'], value: number) => {
    setState(prev => ({ ...prev, counters: { ...prev.counters, [key]: value } }));
  }, []);

  const exportState = useCallback(() => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tracker-state-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [state]);

  const importState = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string) as TrackerState;
        if (imported.days && imported.days.length === 30) {
          setState(imported);
        }
      } catch {}
    };
    reader.readAsText(file);
  }, []);

  const resetState = useCallback(() => {
    setState({ days: SEED_DAYS, currentDay: 10, counters: { dmsSent: 0, clientsSigned: 0, callsBooked: 0 } });
  }, []);

  const totalRevenue = state.days.reduce((sum, d) => sum + (d.actualDzd || 0), 0);
  const daysPosted = state.days.filter(d => d.status === 'posted').length;

  return {
    days: state.days,
    currentDay: state.currentDay,
    counters: state.counters,
    totalRevenue,
    daysPosted,
    updateDay,
    setCurrentDay,
    updateCounter,
    exportState,
    importState,
    resetState,
  };
}
