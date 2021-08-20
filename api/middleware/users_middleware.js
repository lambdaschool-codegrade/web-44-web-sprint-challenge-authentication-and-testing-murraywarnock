const { findBy } = require('../auth/auth-model');

async function checkUsernameExists(req, res, next) {
    try {
      const { username } = req.body;
      const user = await findBy({ username: username }); 
      if (!user.length) {
        next();
      } else {
        next({ 
          status: 401, 
          message: "username taken" 
        });
      }
    } catch (err) {
      next(err);
    }
  }
  
  const validateBody = (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        next({
          status: 401,
          message: "username and password required"
        });
      }
        next();
    } catch (error) {
        next(error);
    }
  };
  
  module.exports = {
    checkUsernameExists,
    validateBody,
  };