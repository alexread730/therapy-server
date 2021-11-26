
exports.seed = function(knex) {
  return knex('clients').del()
    .then(function () {
      return knex('clients').insert([
        {id: 1, first_name: 'Jannett', last_name: 'Rockerfella', email: 'j_rocks@gmail.com'},
        {id: 2, first_name: 'Rodger', last_name: 'Tannin', email: 'tan_rodge@gmail.com'},
        {id: 3, first_name: 'Danny', last_name: 'Cordray', email: 'sales_beans@gmail.com'}
      ]);
    });
};
