const express = require('express');
const requestLogger = require('./middleware/requestlogger');
const loggerWithLevel = require('./middleware/loggerlvel');
const morgan = require('morgan');

const app = express();
const PORT = 3005;
// Optional: Use Morgan for advanced logging
app.use(morgan('dev'));

// Custom request logging middleware
app.use(requestLogger);
app.use(loggerWithLevel('debug'));

// Test Route
app.get('/', (req, res) => {
  res.send('Hello, Request Logger!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});