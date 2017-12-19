const knex = require('./connection')

function getAllStudents() {
  return knex('student')
}

function getUniqueCohorts() {
  return knex('student').distinct('cohort')
}

function getStudentsByCohort(cohort) {
  return knex('student').where('cohort', cohort)
}

function getOneStudent(id) {
  return knex('student').where('id', id)
}

module.exports = {
  getAllStudents,
  getUniqueCohorts,
  getStudentsByCohort,
  getOneStudent
}