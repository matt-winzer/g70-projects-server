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

function getStudentById(id) {
  return knex('student').where('id', id)
}

function getProjectsByStudentId(id) {
  return knex('project').where('studentId', id)
}

function searchStudentsByName(name) {

}

module.exports = {
  getAllStudents,
  getUniqueCohorts,
  getStudentsByCohort,
  getStudentById,
  getProjectsByStudentId,
  searchStudentsByName
}