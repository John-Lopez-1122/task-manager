// ══════════════════════════════════════════════════════
// COMPONENT: TaskBoard
// PURPOSE:  The biggest part of the app, it saves the local storage
//           and passes it down to TaskList which is passed down to TaskCard
//           which comes back to TaskBoard. This also has multiple functions
//           such as handleToggle, handleDelete, handleAdd and more.
// TYPE:     Client Component — needs useState + useEffect
// ══════════════════════════════════════════════════════
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

  // ── STATE ──
  // tasks are kept in state so that they are rendered and saved in local storage
  // The Lazy initializer checks once on mount and thats it
  // typeof is used to prevent critical hydration errors
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Filter is independant from tasks and shouldnt trigger tasks to update.
  const [filter, setFilter] = useState('all');

  // ── EFFECTS ──
  // useEffect syncs tasks to localstorage
  // It uses tasks to check if they are synced.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // useEffect syncs with document title to change it
  // Tasks are kept in a dependency array because they need to be counted to reflect in the return function
  // The return file changes the document title to reflect how many tasks are left
  useEffect(() => {
    const active = tasks.filter((t) => !t.done).length;
    document.title = `${active} tasks remaining`;
    return () => { document.title = 'Task Manager'; };
  }, [tasks]);

  // ── DERIVED VALUES ──
  // They arent kept in state because they can be calculated in tasks
  // if they were stored in state then they would have to be updated every time
  const completed = tasks.filter((t) => t.done).length;
  const active    = tasks.length - completed;
  const visible   =
    filter === 'all'    ? tasks :
    filter === 'done'   ? tasks.filter((t) => t.done) :
                           tasks.filter((t) => !t.done);

  // ── HANDLERS ──

  // Using map returns a new array and react would notice the change and rerender than if the array was mutated
  function handleToggle(id: string) {
    setTasks(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  }

  // Filter returns a new array and then react updates and rerenders the page
  function handleDelete(id: string) { setTasks(tasks.filter((t) => t.id !== id)); }

  // task.push() would mutate the array but spread would create a new one forcing rerender
  function handleAdd(title: string) {
    setTasks([...tasks, { id: crypto.randomUUID(), title, done: false }]);
  }

  // filter returns a new array with only active tasks, if it was set to [] it would wipe every task
  function handleClearDone() { setTasks(tasks.filter((t) => !t.done)); }

  // ── RENDER ──
  return (
    <div className="flex gap-6 p-8 min-h-screen">
      {/* Sidebar card — stats and clear button */}
      <div className="w-56 shrink-0 bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 flex flex-col gap-4 border border-slate-200 dark:border-slate-700 h-fit">
        <TaskStats
          total={tasks.length} completed={completed} active={active}
          onClearCompleted={handleClearDone}
        />
      </div>

      {/* Main card — task list, filter, add form */}
      <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
        {/* Header with title, theme toggle, and filter dropdown */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          <h1 style={{ fontFamily: "var(--font-manrope)" }} className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Task Manager
          </h1>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            >
              <option value="all" className="bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200">All</option>
              <option value="active" className="bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200">Active</option>
              <option value="done" className="bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200">Done</option>
            </select>
          </div>
        </div>

        {/* Scrollable task list */}
        <div className="flex-1 overflow-y-auto">
          <TaskList tasks={visible} onToggle={handleToggle} onDelete={handleDelete} />
        </div>

        {/* Add form pinned to bottom */}
        <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-4">
          <AddTaskForm onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}
