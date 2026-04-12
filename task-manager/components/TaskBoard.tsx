// src/components/TaskBoard.js — 'use client' needed for interactivity
'use client';

import { useState, useEffect } from 'react';
import TaskStats   from './TaskStats';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

type Task = {
  id: string;
  title: string;
  done: boolean;
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window === 'undefined') return []; //guard typeof window: Next.js SSR has no window
    const saved = localStorage.getItem('tasks'); //Lazy initializer reading once
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

useEffect(() => { //writes to localstorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);         // dependency array — re-runs when tasks changes

  const completed = tasks.filter((t) => t.done).length;
  const active    = tasks.length - completed;
  const visible   =
    filter === 'all'    ? tasks :
    filter === 'done'   ? tasks.filter((t) => t.done) :
                           tasks.filter((t) => !t.done);


useEffect(() => { //updates browser title with task count
    const active = tasks.filter((t) => !t.done).length;
    document.title = `${active} tasks remaining`;
    return () => { document.title = 'Task Manager'; }; // cleanup
  }, [tasks]);


function handleToggle(id: string) {
    setTasks(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  }

function handleDelete(id: string) { setTasks(tasks.filter((t) => t.id !== id)); }

function handleAdd(title: string) {
   setTasks([...tasks, { id: crypto.randomUUID(), title, done: false }]);
  }

function handleClearDone() { setTasks(tasks.filter((t) => !t.done)); }



  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <div className="max-w-lg mx-auto p-6">
    <TaskStats                       /* sibling 1: reads counts */
        total={tasks.length} completed={completed} active={active}
        onClearCompleted={handleClearDone}
      />
      <AddTaskForm onAdd={handleAdd} />
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'done'].map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded text-sm
              ${filter === f ? 'bg-green-700 text-white' : 'border'}`}
          >{f}</button>
        ))}
      </div>
      <TaskList                        /* sibling 2: reads + updates */
        tasks={visible}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}