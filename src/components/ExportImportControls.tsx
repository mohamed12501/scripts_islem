import { useRef, useState } from 'react';

interface Props {
  onExport: () => void;
  onImport: (file: File) => void;
  onReset: () => void;
}

export function ExportImportControls({ onExport, onImport, onReset }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <button onClick={onExport} className="px-3 py-1.5 text-xs font-medium bg-black text-white rounded-lg hover:bg-black/80">
        Export JSON
      </button>
      <button onClick={() => fileRef.current?.click()} className="px-3 py-1.5 text-xs font-medium bg-white border border-border text-black rounded-lg hover:bg-off">
        Import JSON
      </button>
      <input ref={fileRef} type="file" accept=".json" className="hidden" onChange={e => { if (e.target.files?.[0]) onImport(e.target.files[0]); }} />

      {confirmReset ? (
        <div className="flex gap-1 items-center">
          <span className="text-xs text-accent font-medium">Reset all data?</span>
          <button onClick={() => { onReset(); setConfirmReset(false); }} className="px-2 py-1 text-xs bg-accent text-white rounded">Yes</button>
          <button onClick={() => setConfirmReset(false)} className="px-2 py-1 text-xs bg-off border border-border rounded">No</button>
        </div>
      ) : (
        <button onClick={() => setConfirmReset(true)} className="px-3 py-1.5 text-xs font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/5">
          Reset
        </button>
      )}
    </div>
  );
}
