import React from "react";
export default function Careers(){
  const roles = [
    {t:"Founding Engineer, Frontend", l:"Remote (US/EU)", d:"React/Tailwind; design systems; ship quickly."},
    {t:"Developer Advocate", l:"Remote", d:"Content, templates, examples, and community."},
  ];
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Careers</h1>
      <p className="mt-2 text-sm text-muted-foreground">We’re early. Join us to shape the product.</p>
      <div className="mt-6 grid gap-3">
        {roles.map((r,i)=>(
          <div key={i} className="rounded-xl border bg-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{r.t}</div>
                <div className="text-xs text-muted-foreground">{r.l}</div>
              </div>
              <a href="#/contact" className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent">Apply</a>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
