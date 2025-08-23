import React from "react";

function parseYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const m = u.pathname.match(/\/embed\/([^/?#]+)/);
    return m ? m[1] : "";
  } catch {
    return "";
  }
}

export default function YouTubePage() {
  const [url, setUrl] = React.useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const id = parseYouTubeId(url);
  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-xl font-semibold">YouTube Embed</h1>
      <input
        className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        placeholder="Paste a YouTube URL…"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border bg-black">
        {id ? (
          <iframe
            title="YouTube player"
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Enter a valid YouTube URL
          </div>
        )}
      </div>
    </div>
  );
}
