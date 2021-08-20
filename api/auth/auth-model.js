const db = require('../../data/dbConfig');

function findById(id) {
return db("users")
.where("id", id)
.select("username", "password").first();
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
    findById,
};