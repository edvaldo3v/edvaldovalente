import index from './public/index.html'
const server = Bun.serve({
  static: {
    "/": index
  }
});


console.log(`Listening localhost:${server.port}`);

