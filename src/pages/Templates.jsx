import React from "react";
export default function Templates(){
  const items=[
    {t:"Starter dashboard", d:"Nav, cards, charts placeholders, dark-mode."},
    {t:"Landing page", d:"Hero, features, logos, FAQ, CTA sections."},
    {t:"Forms & CRUD", d:"Table, edit dialog, optimistic updates (client-only)."},
    {t:"Docs", d:"Two-column layout, headings, sidenav."},
  ];
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">Templates</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((x,i)=>(
          <div key={i} className="rounded-xl border bg-card p-6">
            <div className="font-medium">{x.t}</div>
            <div className="mt-2 text-sm text-muted-foreground">{x.d}</div>
            <a href="#/uikit" className="mt-4 inline-block rounded-md border px-3 py-1.5 text-sm hover:bg-accent">Preview</a>
          </div>
        ))}
      </div>
    </div>
  );
}
