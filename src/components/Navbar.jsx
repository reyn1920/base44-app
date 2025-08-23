import React from "react";
import { Link } from "../shared/Link.jsx";
import { site } from "../shared/site.js";

export default function Navbar({ current, navigate }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#/" className="text-base font-semibold">{site.name}</a>
        <nav className="hidden gap-4 md:flex">
          {site.nav.slice(0,6).map((l)=>(
            <a key={l.to} href={`#${l.to}`} className={`text-sm ${current===l.to?"underline":""}`}>{l.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href="#/uikit" className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent">UI Kit</a>
          <a href="#/pricing" className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground">Get started</a>
        </div>
        <button className="md:hidden rounded-md border px-3 py-1.5 text-sm" onClick={()=>setOpen(v=>!v)}>Menu</button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto grid max-w-6xl gap-2 px-4 py-3">
            {site.nav.map((l)=>(
              <a key={l.to} href={`#${l.to}`} className="text-sm">{l.label}</a>
            ))}
            <a href="#/uikit" className="text-sm">UI Kit</a>
          </nav>
        </div>
      )}
    </header>
  );
}
