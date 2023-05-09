const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define a route handler for the root URL
  server.get('/', async (req, res) => {
    // Render your React component server-side
    const html = await app.renderToHTML(req, res, '/index', req.query);

    // Return the HTML to the client
    res.send(html);
  });

  // Define a route handler for all other URLs
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});