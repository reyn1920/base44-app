import React from "react";
import { Link } from "../shared/Link.jsx";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <section className="rounded-2xl border bg-[hsl(var(--card))] p-8 md:p-12">
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
          Build apps with conversation.
        </h1>
        <p className="mt-3 text-[hsl(var(--muted-foreground))] max-w-2xl">
          Describe what you want. Base44 scaffolds UI, logic and deploy for you. Tweak with code when you want full control.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#/pricing" className="rounded-md bg-[hsl(var(--primary))] px-4 py-2 text-[hsl(var(--primary-foreground))]">Get started — free</a>
          <a href="#/features" className="rounded-md border px-4 py-2 hover:bg-[hsl(var(--accent))]">See features</a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {t:"Chat-first builder", d:"Iterate on copy, data, & behavior with natural language."},
          {t:"Production deploy", d:"CI for static assets + actions. Ship updates with one push."},
          {t:"Extend with code", d:"Drop to React/Tailwind when you need pixel precision."},
        ].map((x,i)=>(
          <div key={i} className="rounded-xl border bg-[hsl(var(--card))] p-6">
            <div className="text-base font-medium">{x.t}</div>
            <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">{x.d}</div>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-xl border bg-[hsl(var(--card))] p-6">
        <h2 className="text-lg font-semibold">Works with your stack</h2>
        <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">APIs, webhooks, CSV/Sheets, and serverless functions. Optional DB/auth later.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md border px-3 py-1.5 text-sm">GitHub Pages</span>
          <span className="rounded-md border px-3 py-1.5 text-sm">Vercel</span>
          <span className="rounded-md border px-3 py-1.5 text-sm">Netlify</span>
          <span className="rounded-md border px-3 py-1.5 text-sm">Supabase (opt-in)</span>
        </div>
      </section>
    </div>
  );
}
