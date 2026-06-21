import type { DayEntry, Status, Assignee } from '../data/days';

interface Props {
  entry: DayEntry;
  onClose: () => void;
  onUpdate: (day: number, updates: Partial<DayEntry>) => void;
}

export function DayDetail({ entry, onClose, onUpdate }: Props) {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const fullScript = entry.scenes.map(s => `[${s.id} — ${s.title} — ${s.timingSec}s]\n${s.direction ? s.direction + '\n' : ''}${s.text}`).join('\n\n');

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto p-4">
      <div className="bg-white rounded-xl w-full max-w-3xl my-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div>
            <span className="font-mono text-4xl font-bold text-border">{String(entry.day).padStart(2, '0')}</span>
            <h2 className="text-lg font-bold mt-1">{entry.subtitle}</h2>
            <p className="text-sm text-muted mt-1">{entry.hook}</p>
          </div>
          <button onClick={onClose} className="text-2xl text-muted hover:text-black">&times;</button>
        </div>

        {/* Controls */}
        <div className="p-6 border-b border-border grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label className="text-[10px] font-bold tracking-wider uppercase text-muted block mb-1">Status</label>
            <select
              value={entry.status}
              onChange={e => onUpdate(entry.day, { status: e.target.value as Status })}
              className="w-full px-2 py-1.5 text-sm rounded border border-border"
            >
              <option value="not_started">Not Started</option>
              <option value="filming">Filming</option>
              <option value="editing">Editing</option>
              <option value="posted">Posted</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold tracking-wider uppercase text-muted block mb-1">Assignee</label>
            <select
              value={entry.assignee ?? ''}
              onChange={e => onUpdate(entry.day, { assignee: (e.target.value || undefined) as Assignee | undefined })}
              className="w-full px-2 py-1.5 text-sm rounded border border-border"
            >
              <option value="">Unassigned</option>
              <option value="You">You</option>
              <option value="Ayoub">Ayoub</option>
              <option value="Mohamed">Mohamed</option>
              <option value="Imad">Imad</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold tracking-wider uppercase text-muted block mb-1">Revenue (DZD)</label>
            <input
              type="number"
              value={entry.actualDzd ?? ''}
              onChange={e => onUpdate(entry.day, { actualDzd: parseInt(e.target.value) || 0 })}
              className="w-full px-2 py-1.5 text-sm rounded border border-border font-mono"
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold tracking-wider uppercase text-muted block mb-1">Post Date</label>
            <input
              type="date"
              value={entry.actualPostDate ?? ''}
              onChange={e => onUpdate(entry.day, { actualPostDate: e.target.value || undefined })}
              className="w-full px-2 py-1.5 text-sm rounded border border-border"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="p-6 border-b border-border">
          <label className="text-[10px] font-bold tracking-wider uppercase text-muted block mb-1">Notes</label>
          <textarea
            value={entry.notes ?? ''}
            onChange={e => onUpdate(entry.day, { notes: e.target.value || undefined })}
            className="w-full px-3 py-2 text-sm rounded border border-border resize-y min-h-[60px]"
            placeholder="Team notes..."
            rows={2}
          />
        </div>

        {/* Script */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted">Full Script</h3>
            <div className="flex gap-2">
              <button onClick={() => copyText(fullScript)} className="px-3 py-1 text-xs font-medium bg-black text-white rounded hover:bg-black/80">
                Copy Script
              </button>
              <button onClick={() => copyText(entry.caption)} className="px-3 py-1 text-xs font-medium bg-off text-black border border-border rounded hover:bg-border">
                Copy Caption
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {entry.scenes.map(scene => (
              <div key={scene.id} className="border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold bg-off px-2 py-0.5 rounded">{scene.id}</span>
                  <span className="text-sm font-semibold">{scene.title}</span>
                  <span className="text-xs text-muted ml-auto font-mono">{scene.timingSec}s</span>
                </div>
                {scene.direction && <p className="text-xs text-muted italic mb-2">{scene.direction}</p>}
                <p className="text-sm whitespace-pre-wrap">{scene.text}</p>
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="mt-6 border-t border-border pt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Caption</h4>
            <p className="text-sm whitespace-pre-wrap bg-off rounded-lg p-4">{entry.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
