// ══════════════════════════════════════════════════════
// COMPONENT: TaskCard
// PURPOSE:  Displays a single task item. Receives task data
//           from TaskList via props and fires callback events
//           back up to TaskBoard when the user interacts.
//           provides the true backbone for tasks that go up to the app itself
// TYPE:     Client Component ('use client') — needs onClick and gets props
// ══════════════════════════════════════════════════════
'use client';

type TaskCardProps = {
  title: string;
  done: boolean;
  id: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

// Props:
//   id: unique task id
//   title: the task typed by the user
//   done: a boolean with true means the task is complete
//   onToggle: a callback fired with id when user clicks Done/Undo
//   onDelete: a callback fired with id when user clicks Delete
export default function TaskCard({ title, done, id, onToggle, onDelete }: TaskCardProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
      {/* The done button changes the title text to be strike through, indicating it is done */}
      <span className={done ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-100 font-medium'}>
        {title}
      </span>
      <div className="flex gap-2">
        <button
          // This callbacks to Task board wich uses a function to handle on toggle button presses.
          onClick={() => onToggle(id)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
        >
          {/* Clicking done switches the text to undo and then back if selected again */}
          {done ? 'Undo' : 'Done'}
        </button>
        <button
          // same with onDelete like with onToggle. This button calls back to Task board and then runs the neccessary function
          onClick={() => onDelete(id)}
          className="bg-red-400 hover:bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
