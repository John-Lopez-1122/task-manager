'use client'

type TaskStatsProps = {  //  TypeScrip requires defined types, this defines the "title" and "done"'s types.
    total: number
    completed: number
    active: number
    onClearCompleted: () => void;
};

export default function TaskStats({ total, completed, active, onClearCompleted }: TaskStatsProps) {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <span>
        Total: {total}
      </span>
      <span>
        completed: {completed}
      </span>
      <span>
        Active: {active}
      </span>
      <button
        className="text-sm text-green-700 hover:underline"
        onClick={() => onClearCompleted()}
      >Clear Completed</button>
    </div>
  );
}