const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    let token = req.headers['authorization'].split(' ')[2];
    const decoded = jwt.decode(token, process.env.APP_SECRET);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({Message: 'Not authorized'});
  }
}