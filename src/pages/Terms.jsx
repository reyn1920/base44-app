import React from "react";
export default function Terms(){
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">By using the app, you agree to these terms.</p>
      <ul className="mt-4 list-disc pl-6 text-sm text-muted-foreground space-y-1">
        <li>Provided “as is”, without warranties.</li>
        <li>You’re responsible for content you publish and actions initiated.</li>
        <li>We may update terms with notice.</li>
      </ul>
    </div>
  );
}
