const db = require('../../data/dbConfig');

function findById(id) {
return db("users")
.where("id", id)
.select("id", "username", "password").first();
}

function findBy(filter) {
    return db("users")
    .where(filter)
    .select("*");
  }

async function add({ username, password }) { 
    const [id] = await db('users')
    .insert({
        username, 
        password 
    });
    return findById(id);
}

module.exports = {
    add,
    findBy,
    findById,
};