import React from "react";
import { site } from "../shared/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        <div className="col-span-2">
          <div className="text-base font-semibold">{site.name}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Build apps with conversation. Extend with code when you want full control.
          </p>
        </div>
        <div>
          <div className="text-sm font-medium">Product</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {site.nav.slice(0,6).map(l=>(
              <li key={l.to}><a href={`#${l.to}`} className="hover:underline">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium">Company</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {[{to:"/enterprise",label:"Enterprise"},{to:"/careers",label:"Careers"},{to:"/contact",label:"Contact"},...site.legal].map(l=>(
              <li key={l.to}><a href={`#${l.to}`} className="hover:underline">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
