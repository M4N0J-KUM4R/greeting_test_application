const express = require('express');
const app = express();
const port = 3000;

// Testable function
function greet(name) {
  return `Hello, ${name}!`;
}

app.get('/', (req, res) => {
  res.send('Hello World! This is our CI/CD deployed application.');
});

app.get('/greet/:name', (req, res) => {
  res.send(greet(req.params.name));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = { greet }; // Export for testing
