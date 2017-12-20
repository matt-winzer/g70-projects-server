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
  return knex('student')
    // .where('fullname', 'like', `%${name}%`)
    .whereRaw("LOWER(fullname) LIKE '%' || LOWER(?) || '%'", name.toLowerCase()) 
}

module.exports = {
  getAllStudents,
  getUniqueCohorts,
  getStudentsByCohort,
  getStudentById,
  getProjectsByStudentId,
  searchStudentsByName
}