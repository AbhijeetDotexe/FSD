const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Send a response to the client
  res.end('Hello, World!');
});

// Set the port number
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
