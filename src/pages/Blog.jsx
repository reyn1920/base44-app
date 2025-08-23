import React from "react";
export default function Blog(){
  const posts = [
    {t:"Launching Base44 UI Kit", d:"Tokens + components + dark mode.", date:"2025-08-23"},
    {t:"Hash routing for GH Pages", d:"Client-only routes that work on Pages.", date:"2025-08-23"},
  ];
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <div className="mt-6 grid gap-4">
        {posts.map((p,i)=>(
          <article key={i} className="rounded-xl border bg-card p-6">
            <div className="text-sm text-muted-foreground">{p.date}</div>
            <h2 className="mt-1 text-base font-medium">{p.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
