// src/components/TaskList.js — Server Component
'use client';

import TaskCard from './TaskCard';

type TaskListProps = {  //  TypeScript requires defined types, this is a copy/paste from TaskCard.tsx. this defines "tasks" as an array.
  tasks: {
    id:string;
    title: string;
    done: boolean }[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-slate-400 dark:text-slate-500 p-6 text-sm">No tasks yet!</p>;
  }
  return (
    <ul className="divide-y">
      {tasks.map((task) => (          // key on the outermost element
        <li key={task.id}>
          <TaskCard title={task.title} done={task.done} id={task.id} onToggle={onToggle} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
}