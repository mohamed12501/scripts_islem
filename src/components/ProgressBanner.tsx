
interface Props {
  currentDay: number;
  totalRevenue: number;
  daysPosted: number;
  counters: { dmsSent: number; clientsSigned: number; callsBooked: number };
  onSetCurrentDay: (day: number) => void;
  onUpdateCounter: (key: 'dmsSent' | 'clientsSigned' | 'callsBooked', value: number) => void;
}

export function ProgressBanner({ currentDay, totalRevenue, daysPosted, counters, onSetCurrentDay, onUpdateCounter }: Props) {
  const goal = 40_000_000;
  const pct = Math.min((totalRevenue / goal) * 100, 100);

  return (
    <div className="bg-black text-white rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div>
          <div className="text-xs font-bold tracking-widest uppercase text-muted mb-1">Current Day</div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-3xl font-bold">{currentDay}</span>
            <span className="text-muted text-sm">/ 30</span>
            <div className="flex gap-1 ml-2">
              <button onClick={() => onSetCurrentDay(Math.max(1, currentDay - 1))} className="px-2 py-0.5 text-xs bg-white/10 rounded hover:bg-white/20">-</button>
              <button onClick={() => onSetCurrentDay(Math.min(30, currentDay + 1))} className="px-2 py-0.5 text-xs bg-white/10 rounded hover:bg-white/20">+</button>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold tracking-widest uppercase text-muted mb-1">Days Posted</div>
          <span className="font-mono text-2xl font-bold">{daysPosted}</span>
          <span className="text-muted text-sm"> / 30</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-white/70">Revenue</span>
          <span className="font-mono font-bold">{totalRevenue.toLocaleString()} <span className="text-muted text-xs">/ 40,000,000 DZD</span></span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <div className="text-right text-xs text-muted mt-1">{pct.toFixed(1)}%</div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {([['dmsSent', 'DMs Sent'], ['clientsSigned', 'Clients'], ['callsBooked', 'Calls']] as const).map(([key, label]) => (
          <div key={key} className="bg-white/5 rounded-lg p-3">
            <div className="text-[10px] font-bold tracking-wider uppercase text-muted mb-1">{label}</div>
            <input
              type="number"
              value={counters[key]}
              onChange={e => onUpdateCounter(key, parseInt(e.target.value) || 0)}
              className="w-full bg-transparent font-mono text-xl font-bold text-white border-none outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
