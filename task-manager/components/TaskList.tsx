// src/components/TaskList.js — Server Component
import TaskCard from './TaskCard';

type TaskListProps = {  //  TypeScript requires defined types, this is a copy/paste from TaskCard.tsx. this defines "tasks" as an array.
  tasks: {
    id:number; 
    title: string; 
    done: boolean }[];
};

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-400 p-4">No tasks yet!</p>;
  }
  return (
    <ul className="divide-y">
      {tasks.map((task) => (          // key on the outermost element
        <li key={task.id}>
          <TaskCard title={task.title} done={task.done} />
        </li>
      ))}
    </ul>
  );
}