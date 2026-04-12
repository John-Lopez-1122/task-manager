// src/components/TaskCard.js — Server Component (no interactivity yet) UPDATE!!!!: receives data AND callback
'use client';

type TaskCardProps = {  //  TypeScrip requires defined types, this defines the "title" and "done"'s types.
  title: string;
  done: boolean;
  id: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskCard({ title, done, id, onToggle, onDelete }: TaskCardProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-[#f6a1ff]/15 dark:border-[#1c4cbf]/40 hover:bg-[#f6a1ff]/8 dark:hover:bg-[#1c4cbf]/20 transition-colors">
      <span className={done ? 'line-through text-gray-400 dark:text-[#b5c6e0]/40' : 'text-gray-800 dark:text-[#b5c6e0] font-medium'}>
        {title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(id)}
          className="bg-[#88ebb5] dark:bg-[#38b9c6] hover:bg-[#5dd4a0] dark:hover:bg-[#2aadb9] text-gray-700 dark:text-[#000000] text-xs font-bold px-3 py-1 rounded-full transition-colors"
        >
          {done ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-[#f6a1ff] dark:bg-[#1c4cbf] hover:bg-[#ed7aff] dark:hover:bg-[#2c3e77] text-gray-700 dark:text-[#b5c6e0] text-xs font-bold px-3 py-1 rounded-full transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}