import React from "react";

export default function Docs() {
  const items = [
    {t:"Quickstart", d:"Create, preview, and deploy your first app."},
    {t:"Prompting tips", d:"Structure requests for predictable changes."},
    {t:"Styling", d:"Tailwind tokens, dark mode, and custom components."},
    {t:"Deploy", d:"GitHub Pages workflow & custom domains."},
  ];
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Documentation</h1>
      <div className="mt-6 grid gap-4">
        {items.map((x,i)=>(
          <div key={i} className="rounded-xl border bg-card p-6">
            <div className="font-medium">{x.t}</div>
            <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
