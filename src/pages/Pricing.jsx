import React from "react";

function Plan({name, price, cta, features=[]}) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="text-lg font-semibold">{name}</div>
      <div className="mt-1 text-3xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f,i)=><li key={i} className="flex items-start gap-2"><span>•</span><span>{f}</span></li>)}
      </ul>
      <a href="#/uikit" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground">{cta}</a>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-semibold">Pricing</h1>
      <p className="mt-2 text-sm text-muted-foreground">Start free. Upgrade when your team grows.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Plan name="Free" price="$0" cta="Start building"
          features={["Unlimited previews","GitHub Pages deploy","UI kit + tokens"]} />
        <Plan name="Builder" price="$50/mo" cta="Choose Builder"
          features={["Team collaboration","Advanced actions","Custom domains"]} />
        <Plan name="Enterprise" price="Contact" cta="Contact sales"
          features={["SSO & SAML","Security reviews","Priority support"]} />
      </div>
    </div>
  );
}
