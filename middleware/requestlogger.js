const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const ip = req.ip;
  
    console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
  
    next(); // Pass control to the next middleware
  };
  
  module.exports = requestLogger;
  