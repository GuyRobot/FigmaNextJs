"use client";

import Navbar from "@/components/Navbar";
import Live from "@/components/cursor/Live";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <section className="flex flex-row h-full">
        <Live />
      </section>
    </main>
  );
}
