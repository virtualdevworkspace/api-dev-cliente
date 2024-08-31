// middlewares/authMiddleware.js
require('dotenv').config();

function authenticateApiKey(req, res, next) {
  const apiKey = req.header('Authorization')?.replace('Bearer ', '');

  if (apiKey === process.env.API_KEY) {
    return next();
  } else {
    return res.status(403).json({ error: 'Forbidden' });
  }
}

module.exports = authenticateApiKey;
