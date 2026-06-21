import type { DayEntry, Status, ContentType } from '../data/days';

interface Props {
  entry: DayEntry;
  onClick: () => void;
}

const statusColors: Record<Status, string> = {
  posted: 'bg-status-posted',
  filming: 'bg-status-filming',
  editing: 'bg-status-editing',
  not_started: 'bg-status-not-started',
};

const statusLabels: Record<Status, string> = {
  posted: 'Posted',
  filming: 'Filming',
  editing: 'Editing',
  not_started: 'Not Started',
};

const typeColors: Record<ContentType, string> = {
  lesson: 'text-type-lesson border-type-lesson',
  raw: 'text-type-raw border-type-raw',
  proof: 'text-type-proof border-type-proof',
};

const typeLabels: Record<ContentType, string> = {
  lesson: 'Lesson',
  raw: 'Raw',
  proof: 'Proof',
};

export function DayCard({ entry, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-border rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-2">
        <span className="font-mono text-2xl font-semibold text-border">{String(entry.day).padStart(2, '0')}</span>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border-l-2 rounded-sm ${typeColors[entry.type]}`}>
            {typeLabels[entry.type]}
          </span>
          <span className={`w-2 h-2 rounded-full ${statusColors[entry.status]}`} />
        </div>
      </div>
      <p className="text-sm font-medium line-clamp-2 mb-2">{entry.hook}</p>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>{statusLabels[entry.status]}</span>
        {entry.assignee && <span className="bg-off px-2 py-0.5 rounded">{entry.assignee}</span>}
      </div>
    </div>
  );
}
