'use client';

type TaskCardProps = {
  title: string;
  done: boolean;
  id: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskCard({ title, done, id, onToggle, onDelete }: TaskCardProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
      <span className={done ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-100 font-medium'}>
        {title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(id)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
        >
          {done ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-400 hover:bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
