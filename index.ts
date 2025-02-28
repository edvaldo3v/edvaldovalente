import html from "./public/index.html" with { type: "text" };

Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
});
