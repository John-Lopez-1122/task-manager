// ══════════════════════════════════════════════════════
// COMPONENT: TaskList
// PURPOSE:  Container for TaskCard that maps task arrays and renders a task
//           card per per task provided
// TYPE:     Client Component ('use client') — gives callbacks to TaskCard
// ══════════════════════════════════════════════════════
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

// Props:
//   tasks: filtered array of task objects passed down from TaskBoard
//   onToggle: callback fired with id when a task is toggled
//   onDelete: callback fired with id when a task is deleted
export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  // This is a condition made for if there is no tasks. It will display No tasks yet!
  if (tasks.length === 0) {
    return <p className="text-slate-400 dark:text-slate-500 p-6 text-sm">No tasks yet!</p>;
  }
  return (
    <ul className="divide-y">
      {tasks.map((task) => (
        <li key={task.id}>
          {/* TaskCard gives callbacks about onToggle and onDelete to TaskBoard to handle. This passes it on to TaskCard */}
          <TaskCard title={task.title} done={task.done} id={task.id} onToggle={onToggle} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
}