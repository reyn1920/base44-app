import React from "react";
export default function Privacy(){
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">We collect the minimum data necessary to provide the service.</p>
      <ul className="mt-4 list-disc pl-6 text-sm text-muted-foreground space-y-1">
        <li>No sale of personal data.</li>
        <li>Cookies used only for essential functionality and analytics (if enabled).</li>
        <li>Contact us for data access or deletion.</li>
      </ul>
    </div>
  );
}
