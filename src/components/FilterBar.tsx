import type { ContentType, Status, Assignee } from '../data/days';

interface Props {
  filters: {
    week: number | null;
    status: Status | null;
    type: ContentType | null;
    assignee: Assignee | null;
  };
  onFilterChange: (filters: Props['filters']) => void;
}

export function FilterBar({ filters, onFilterChange }: Props) {
  const set = (key: string, value: any) => {
    onFilterChange({ ...filters, [key]: value || null });
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <select
        value={filters.week ?? ''}
        onChange={e => set('week', e.target.value ? parseInt(e.target.value) : null)}
        className="px-3 py-1.5 text-sm rounded-lg border border-border bg-white"
      >
        <option value="">All Weeks</option>
        <option value="1">Week 1</option>
        <option value="2">Week 2</option>
        <option value="3">Week 3</option>
        <option value="4">Week 4</option>
      </select>

      <select
        value={filters.status ?? ''}
        onChange={e => set('status', e.target.value || null)}
        className="px-3 py-1.5 text-sm rounded-lg border border-border bg-white"
      >
        <option value="">All Status</option>
        <option value="not_started">Not Started</option>
        <option value="filming">Filming</option>
        <option value="editing">Editing</option>
        <option value="posted">Posted</option>
      </select>

      <select
        value={filters.type ?? ''}
        onChange={e => set('type', e.target.value || null)}
        className="px-3 py-1.5 text-sm rounded-lg border border-border bg-white"
      >
        <option value="">All Types</option>
        <option value="lesson">Lesson</option>
        <option value="raw">Raw Reality</option>
        <option value="proof">Proof & Numbers</option>
      </select>

      <select
        value={filters.assignee ?? ''}
        onChange={e => set('assignee', e.target.value || null)}
        className="px-3 py-1.5 text-sm rounded-lg border border-border bg-white"
      >
        <option value="">All Assignees</option>
        <option value="You">You</option>
        <option value="Ayoub">Ayoub</option>
        <option value="Mohamed">Mohamed</option>
        <option value="Imad">Imad</option>
      </select>
    </div>
  );
}
