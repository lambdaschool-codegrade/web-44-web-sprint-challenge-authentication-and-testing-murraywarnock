exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('users')
      .truncate()
      .then(function() {
        return knex('users').insert([
          { username: 'first', password: "1234"},
          { username: 'second', password: "1234" },
          { username: 'third', password: "1234"},
        ]);
      });
  };