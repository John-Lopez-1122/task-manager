// ══════════════════════════════════════════════════════
// COMPONENT: Layout
// PURPOSE:  Wraps pages in shared structures (such as fonts, HTML and body tags) for consistency
// TYPE:     Server Component — used for shared page formatting
// ══════════════════════════════════════════════════════

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

// The fonts are stored for easier use and page consistency
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A task management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      {/* childeren represents the currently visited page and is wrapped automatically */}
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter)" }}>{children}</body>
    </html>
  );
}
