import React from "react";

export default function Features() {
  const items = [
    {t:"UI from prompts", d:"Generate pages, forms, and flows from a spec. Refine in chat."},
    {t:"Design tokens", d:"Light/dark ready. Tokens power consistent theming across components."},
    {t:"Actions & logic", d:"Wire button clicks, API calls, and transforms — no backend required."},
    {t:"Live preview", d:"Hot reload locally; automatic deploys on push."},
    {t:"Code escape hatch", d:"Edit the generated React/Tailwind when needed."},
    {t:"Integrations", d:"Add webhooks, Sheets, or REST endpoints. DB/auth optional."},
  ];
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-semibold">Features</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((x,i)=>(
          <div key={i} className="rounded-xl border bg-card p-6">
            <div className="font-medium">{x.t}</div>
            <div className="mt-2 text-sm text-muted-foreground">{x.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
