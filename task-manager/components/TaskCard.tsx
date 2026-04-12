// src/components/TaskCard.js — Server Component (no interactivity yet)
type TaskCardProps = {  //  TypeScrip requires defined types, this defines the "title" and "done"'s types.
  title: string;
  done: boolean;
};

export default function TaskCard({ title, done }: TaskCardProps) { // : TaskCardProps uses the first snippet and applies it to the title and done parts
  return (
    <div className="flex items-center gap-2 p-3 border-b">
      <span
        className={done ? 'line-through text-gray-400' : 'text-gray-900'}
      >
        {title}                       {/* {} escapes into JS */}
      </span>
      {done && <span className="text-green-600 text-xs font-bold">Done</span>}
    </div>
  );
}