import type { Metadata } from "next";
import { Nunito, Cinzel } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A colorful task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${cinzel.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-nunito)" }}>{children}</body>
    </html>
  );
}
