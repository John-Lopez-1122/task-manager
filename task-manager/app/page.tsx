// src/app/page.js — Server Component (default, no directive needed)
import TaskBoard from '@/components/TaskBoard';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <TaskBoard />
    </main>
  );
}
