const loggerWithLevel = (level = 'info') => {
    return (req, res, next) => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${req.method} ${req.originalUrl} - IP: ${req.ip}`;
      
      if (level === 'debug') {
        console.debug(logMessage);
      } else {
        console.log(logMessage);
      }
  
      next();
    };
  };
  
  module.exports = loggerWithLevel;
  