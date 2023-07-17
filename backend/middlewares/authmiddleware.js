const jwt = require('jsonwebtoken');
function authentication (req,res , next){
    const token = req.headers.authorization;
    jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    // Attach the decoded data to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  });
}


module.exports = {
    authentication
}