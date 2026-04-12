'use client'

type TaskStatsProps = {
    total: number
    completed: number
    active: number
    onClearCompleted: () => void;
};

export default function TaskStats({ total, completed, active, onClearCompleted }: TaskStatsProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 style={{ fontFamily: "var(--font-manrope)" }} className="text-base font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
        Stats
      </h2>
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl px-4 py-2 text-blue-700 dark:text-blue-300 text-sm font-semibold">
        Total: {total}
      </div>
      <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl px-4 py-2 text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
        Completed: {completed}
      </div>
      <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl px-4 py-2 text-violet-700 dark:text-violet-300 text-sm font-semibold">
        Active: {active}
      </div>
      <button
        onClick={() => onClearCompleted()}
        className="mt-2 bg-slate-700 dark:bg-slate-600 hover:bg-slate-800 dark:hover:bg-slate-500 text-white font-semibold rounded-xl px-4 py-2 text-sm transition-colors"
      >
        Clear Completed
      </button>
    </div>
  );
}
