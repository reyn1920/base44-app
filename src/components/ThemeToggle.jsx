import React from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <button
      onClick={toggle}
      className="rounded-md border px-3 py-1.5 text-sm hover:bg-[hsl(var(--accent))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
