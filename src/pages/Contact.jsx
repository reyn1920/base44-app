import React from "react";

export default function Contact(){
  const [sent,setSent]=React.useState(false);
  const onSubmit=(e)=>{
    e.preventDefault();
    setSent(true); // fake submit; replace with Formspree/Email link if desired
  };
  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-sm text-muted-foreground">Say hi — we usually respond within a day.</p>
      {sent ? (
        <div className="mt-6 rounded-md border bg-card p-4 text-sm">Thanks! We’ll be in touch.</div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid gap-3">
          <input required placeholder="Your email" className="rounded-md border px-3 py-2" />
          <textarea required placeholder="Message" rows="5" className="rounded-md border px-3 py-2" />
          <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Send</button>
          <a href="mailto:hello@example.com" className="text-xs text-muted-foreground underline">Prefer email? hello@example.com</a>
        </form>
      )}
    </div>
  );
}
