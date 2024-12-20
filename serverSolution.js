const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle the request here
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Add a process event listener for unhandled exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

// Add a process event listener for unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
