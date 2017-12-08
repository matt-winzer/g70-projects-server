var bcrypt = require('bcrypt')
require('dotenv').config()

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "member"; ALTER SEQUENCE member_id_seq RESTART WITH 2;')
    .then(function () {
      var members = [{
        id: 1,
        username: 'winzer',
        email: process.env.SEEDEMAIL,
        password: bcrypt.hashSync(process.env.SEEDPW, 10)
      }]
      return knex('member').insert(members);
    })
}
