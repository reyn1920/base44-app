import React from "react";
import ThemeToggle from "./components/ThemeToggle.jsx";

function useHashRoute() {
  // default to "/"
  const [path, setPath] = React.useState(() => window.location.hash.slice(1) || "/");
  React.useEffect(() => {
    const on = () => setPath(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const push = (to) => { if (to !== path) window.location.hash = to; };
  return { path, push };
}

function Sidebar({ navigate, current }) {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/uikit", label: "UI Kit Demo" },
    { to: "/youtube", label: "YouTube" },
  ];
  return (
    <nav className="w-56 shrink-0 border-r bg-card">
      <div className="p-4 font-semibold">Base44</div>
      <ul className="px-2 pb-4 space-y-1">
        {links.map((l) => (
          <li key={l.to}>
            <a
              href={`#${l.to}`}
              onClick={(e) => { e.preventDefault(); navigate(l.to); }}
              className={`block rounded-md px-3 py-2 hover:bg-accent ${current === l.to ? "bg-accent" : ""}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Dashboard() {
  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="rounded-xl border bg-card p-4">
        <p className="text-sm text-muted-foreground">Quick Actions</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Primary</button>
          <button className="rounded-md border px-3 py-1.5">Secondary</button>
          <button className="rounded-md border px-3 py-1.5 hover:bg-accent">Outline</button>
          <button className="rounded-md px-3 py-1.5 hover:bg-accent">Ghost</button>
          <button className="rounded-md bg-destructive px-3 py-1.5 text-destructive-foreground">Delete</button>
        </div>
      </div>
      <div className="rounded-xl border bg-card p-4 text-sm text-muted-foreground">Tokens applied.</div>
    </div>
  );
}

function UIKit() {
  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-semibold">UI Kit Demo</h2>
      <div className="rounded-xl border bg-card p-4">
        <div className="grid grid-cols-2 gap-3 max-w-lg">
          <label className="text-sm text-muted-foreground">Input</label>
          <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Type here…" />
          <label className="text-sm text-muted-foreground">Select</label>
          <select className="w-full rounded-md border bg-background px-3 py-2 text-sm">
            <option>First</option><option>Second</option>
          </select>
          <label className="text-sm text-muted-foreground">Button</label>
          <div className="flex gap-2">
            <button className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Primary</button>
            <button className="rounded-md border px-3 py-1.5">Secondary</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function YouTubeFallback() {
  return (
    <div className="rounded-xl border bg-card p-6 text-sm">
      <p className="mb-2">YouTube page placeholder.</p>
      <p>To enable the full page, create <code>src/pages/YouTube.jsx</code> (I can paste it for you).</p>
    </div>
  );
}

import YouTubePage from "./pages/YouTube.jsx";

export default function App() {
  const { path, push } = useHashRoute();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">Base44 UI</span>
            <span className="hidden text-sm text-muted-foreground sm:inline">UI Kit Demo</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-[14rem_1fr]">
        <Sidebar navigate={push} current={path} />
        <main className="min-h-[70dvh] p-4">
          {path === "/" && <Dashboard />}
          {path === "/uikit" && <UIKit />}
          {path === "/youtube" && <YouTubePage />}
        </main>
      </div>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-screen-2xl px-4 py-4 text-sm text-muted-foreground">
          Tailwind tokens · Light/Dark ready
        </div>
      </footer>
    </div>
  );
}
