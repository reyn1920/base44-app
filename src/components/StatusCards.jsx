import React from "react";

export default function StatusCards({ stats = [] }) {
  const items = stats.length
    ? stats
    : [
        { label: "Ideas", value: (JSON.parse(localStorage.getItem("ideas") || "[]")).length },
        { label: "Projects", value: (JSON.parse(localStorage.getItem("projects") || "[]")).length },
        { label: "Renders", value: (JSON.parse(localStorage.getItem("renders") || "[]")).length },
        { label: "Uploads", value: (JSON.parse(localStorage.getItem("uploads") || "[]")).length },
      ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <div key={i} className="rounded-2xl border p-4 bg-card">
          <div className="text-sm text-muted-foreground">{it.label}</div>
          <div className="text-2xl font-semibold">{it.value}</div>
        </div>
      ))}
    </div>
  );
}
