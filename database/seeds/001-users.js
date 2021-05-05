
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username: 'jamcoding', password: 'password', department: 'hr'},
        {username: 'jamcoding2', password: 'password', department: 'accounting'},
        {username: 'jamcoding3', password: 'password', department: 'marketing'}
      ]);
    });
};
