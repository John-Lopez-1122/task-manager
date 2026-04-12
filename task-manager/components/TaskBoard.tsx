// src/components/TaskBoard.js — 'use client' needed for interactivity
'use client';

import { useState, useEffect } from 'react';
import TaskStats   from './TaskStats';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import ThemeToggle from './ThemeToggle';

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
    <div className="flex gap-6 p-8 min-h-screen">
      {/* Sidebar card — stats and clear button */}
      <div className="w-56 shrink-0 bg-white dark:bg-[#2c3e77] rounded-3xl shadow-md p-6 flex flex-col gap-4 border-2 border-[#f6a1ff]/50 dark:border-[#1c4cbf] h-fit">
        <TaskStats
          total={tasks.length} completed={completed} active={active}
          onClearCompleted={handleClearDone}
        />
      </div>

      {/* Main card — task list, filter, add form */}
      <div className="flex-1 bg-white dark:bg-[#2c3e77] rounded-3xl shadow-md border-2 border-[#f6a1ff]/50 dark:border-[#1c4cbf] flex flex-col overflow-hidden">
        {/* Header with title and filter dropdown */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#f6a1ff]/30 dark:border-[#1c4cbf]/50">
          <h1 style={{ fontFamily: "var(--font-cinzel)" }} className="text-2xl font-semibold text-[#8b1fa8] dark:text-[#b5c6e0]">
            Task Manager
          </h1>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border-2 border-[#51c3e5]/60 dark:border-[#38b9c6]/60 rounded-xl px-3 py-1 text-sm font-semibold text-[#1a6b8a] dark:text-[#b5c6e0] bg-[#51c3e5]/10 dark:bg-[#1c4cbf]/30 focus:outline-none focus:border-[#51c3e5] dark:focus:border-[#38b9c6]"
            >
              <option value="all" className="bg-white dark:bg-[#2c3e77] text-gray-800 dark:text-[#b5c6e0]">All</option>
              <option value="active" className="bg-white dark:bg-[#2c3e77] text-gray-800 dark:text-[#b5c6e0]">Active</option>
              <option value="done" className="bg-white dark:bg-[#2c3e77] text-gray-800 dark:text-[#b5c6e0]">Done</option>
            </select>
          </div>
        </div>

        {/* Scrollable task list */}
        <div className="flex-1 overflow-y-auto">
          <TaskList tasks={visible} onToggle={handleToggle} onDelete={handleDelete} />
        </div>

        {/* Add form pinned to bottom */}
        <div className="border-t-2 border-[#f6a1ff]/30 dark:border-[#1c4cbf]/50 px-6 py-4">
          <AddTaskForm onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}