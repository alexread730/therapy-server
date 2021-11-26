
exports.up = function(knex) {
  return knex.schema.createTable('clients', table => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('clients');
};
