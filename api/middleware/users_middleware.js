// const { findBy } = require('../users/users-model');

async function checkUsernameExists(req, res, next) {
    try {
    //   const { username } = req.body;
    //   const user = await findBy({ username: username }); 
    //   if (user.length) {
    //     req.user = user[0];
        next();
    //   } else {
    //     next({ 
    //       status: 401, 
    //       message: "Invalid credentials" 
    //     });
    //   }
    } catch (err) {
      next(err);
    }
  }
  
  const validateBody = (req, res, next) => {
    try {
        next();
    } catch (error) {
        next(error);
    }
  };
  
  module.exports = {
    checkUsernameExists,
    validateBody,
  };