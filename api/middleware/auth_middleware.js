const { findBy } = require('../auth/auth-model');

async function validateUsername(req, res, next) {
    try {
      const { username } = req.body;
      const user = await findBy({ username: username }); 
      if (user.length) {
        req.user = user[0];
        next();
      } else {
        next({ 
          status: 401, 
          message: "invalid credentials1" 
        });
      }
    } catch (err) {
      next(err);
    }
  }

  module.exports = { validateUsername };