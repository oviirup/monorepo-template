"use client";
import { Button } from "@repo/ui/components/button";
import { ThemeToggle } from "@/components/theme";

export default function HomePage() {
  return (
    <main className="flex h-svh grow flex-col items-center justify-center gap-6">
      <h1 className="flex gap-3">
        <span className="font-bold font-inter text-3xl">Next.js Template</span>
        <span className="rounded-full bg-input px-4 py-2 text-muted-fg text-xl uppercase leading-none">
          BETA
        </span>
      </h1>
      <div>
        <ThemeToggle render={<Button />}>Toggle Theme</ThemeToggle>
      </div>
    </main>
  );
}
