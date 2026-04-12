// src/app/page.js — Server Component (default, no directive needed)
import TaskBoard from '@/components/TaskBoard';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ede8f0] dark:bg-[#000000]">
      <TaskBoard />
    </main>
  );
}
