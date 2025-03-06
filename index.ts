// import { Hono } from 'hono';
import index from './public/index.html'
// import { serveStatic } from 'hono/bun'

const server = Bun.serve({
  static: {
    "/": index
  }
});

// const app = new Hono();

// app.use('./*', serveStatic({ root: './' }))
// app.get("/", serveStatic({ path: "./public/index.html" }));
// app.get('/json', (c) => c.json({ message: 'Hello, JSON!' }));

// try {
//   const server = Bun.serve({
//     fetch: app.fetch,
//     port: process.env.PORT || 3000,
//   });
//   console.log("Server started on port : ", server.port);
// } catch (e) {
//   console.error("Error occured while starting the server : ", e);
// }



