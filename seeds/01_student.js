const bcrypt = require('bcrypt')
require('dotenv').config()

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "student"; ALTER SEQUENCE student_id_seq RESTART WITH 2;')
    .then(function () {
      var students = [{
        id: 1,
        username: 'winzer',
        email: process.env.SEEDEMAIL,
        password: bcrypt.hashSync(process.env.SEEDPW, 10)
      }]
      return knex('student').insert(students);
    })
}
