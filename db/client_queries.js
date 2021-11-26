const connection = require('../knexfile')[process.env.NODE_ENV || 'development'];
const database = require('knex')(connection);

module.exports = {
  getAll: user_id => {
    return database('clients');
  }
};
