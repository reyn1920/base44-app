import React from "react";

export default function Enterprise() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-semibold">Enterprise</h1>
      <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
        Empower domain experts to create internal tools quickly while your engineers focus on core systems.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <div className="font-medium">Security</div>
          <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
            <li>Least-privilege tokens</li>
            <li>Audit-friendly deploys</li>
            <li>Custom domain + HTTPS</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="font-medium">Controls</div>
          <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
            <li>Role-based access</li>
            <li>Env separation</li>
            <li>Observability hooks</li>
          </ul>
        </div>
      </div>
      <a href="#/pricing" className="mt-8 inline-block rounded-md border px-4 py-2 hover:bg-accent">Talk to sales</a>
    </div>
  );
}
