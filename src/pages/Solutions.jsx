import React from "react";
export default function Solutions(){
  const items = [
    {t:"Internal tools", d:"CRUD dashboards, approvals, inventory, and reports."},
    {t:"Ops automations", d:"Button-click actions that call APIs and webhooks."},
    {t:"Data portals", d:"Read-only or role-gated views for partners and teams."},
    {t:"Marketing sites", d:"Ship fast with tokens and components."},
  ];
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">Solutions</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((x,i)=>(
          <div key={i} className="rounded-xl border bg-card p-6">
            <div className="font-medium">{x.t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
