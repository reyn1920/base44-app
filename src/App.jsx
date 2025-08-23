import React from "react";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, UIKitDemo } from "@/components/UIKit";

function useHashRoute() {
  const [path, setPath] = React.useState(() => window.location.hash.slice(1) || "/");
  React.useEffect(() => {
    const on = () => setPath(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const push = (to) => { if (to !== path) window.location.hash = to; };
  return { path, push };
}

function Sidebar({ navigate, current }) {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/uikit", label: "UI Kit Demo" }
  ];
  return (
    <aside className="border-r border-border bg-card text-card-foreground w-64 hidden md:block">
      <nav className="p-3 space-y-1">
        {links.map(l => (
          <button key={l.to} onClick={() => navigate(l.to)}
            className={["w-full text-left px-3 py-2 rounded-md transition-colors", current===l.to?"bg-primary text-primary-foreground":"hover:bg-muted"].join(" ")}>{l.label}</button>
        ))}
      </nav>
    </aside>
  );
}

function Container({ children }) { return <div className="p-4 md:p-6 lg:p-8">{children}</div>; }

function Dashboard() {
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Quick Actions</CardTitle><CardDescription>Use themed components.</CardDescription></CardHeader>
          <CardContent className="flex flex-wrap gap-2"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="destructive">Delete</Button></CardContent>
          <CardFooter><span className="text-sm text-muted-foreground">Tokens applied.</span></CardFooter>
        </Card>
      </div>
    </Container>
  );
}

export default function App() {
  const { path, push } = useHashRoute();
  let Page = Dashboard;
  if (path === "/uikit") Page = () => <Container><UIKitDemo/></Container>;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
          <span className="text-base font-semibold">Base44 UI</span>
          <Button variant="outline" size="sm" onClick={() => push("/uikit")}>UI Kit Demo</Button>
        </div>
      </header>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-[16rem_1fr]">
        <Sidebar navigate={push} current={path} />
        <main className="min-h-[calc(100vh-3.5rem)]">
          <Page />
        </main>
      </div>
      <footer className="border-t border-border bg-card"><div className="mx-auto max-w-screen-2xl px-4 py-4 text-sm text-muted-foreground">Tailwind tokens · Light/Dark ready</div></footer>
    </div>
  );
}
