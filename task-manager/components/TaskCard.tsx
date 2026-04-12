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
    <div className="flex items-center justify-between p-3 border-b">
      <span className={done ? 'line-through text-gray-400' : ''}>
        {title}
      </span>
      <button
        className="text-sm text-green-700 hover:underline"
        onClick={() => onToggle(id)}
      >Toggle</button>
      <button
        className="text-sm text-red-700 hover:underline"
        onClick={() => onDelete(id)}
      >Delete</button>
    </div>
  );
}