'use client'

type TaskStatsProps = {  //  TypeScrip requires defined types, this defines the "title" and "done"'s types.
    total: number
    completed: number
    active: number
    onClearCompleted: () => void;
};

export default function TaskStats({ total, completed, active, onClearCompleted }: TaskStatsProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 style={{ fontFamily: "var(--font-cinzel)" }} className="text-xl font-semibold text-[#8b1fa8] dark:text-[#b5c6e0]">
        Stats
      </h2>
      <div className="bg-[#51c3e5]/20 dark:bg-[#1c4cbf]/40 rounded-2xl px-4 py-2 text-[#1a6b8a] dark:text-[#b5c6e0] text-sm font-semibold">
        Total: {total}
      </div>
      <div className="bg-[#f6a1ff]/25 dark:bg-[#38b9c6]/25 rounded-2xl px-4 py-2 text-[#8b1fa8] dark:text-[#b5c6e0] text-sm font-semibold">
        Completed: {completed}
      </div>
      <div className="bg-[#88ebb5]/35 dark:bg-[#2c3e77] rounded-2xl px-4 py-2 text-[#0f7052] dark:text-[#b5c6e0] text-sm font-semibold">
        Active: {active}
      </div>
      <button
        onClick={() => onClearCompleted()}
        className="mt-2 bg-[#fbe995] dark:bg-[#1c4cbf] hover:bg-[#f5d93a] dark:hover:bg-[#2c3e77] text-[#854d0e] dark:text-[#b5c6e0] font-bold rounded-2xl px-4 py-2 text-sm transition-colors"
      >
        Clear Completed
      </button>
    </div>
  );
}