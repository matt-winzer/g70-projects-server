const knex = require('./connection')

function getAllProjects() {
  return knex('project')
}

function getOneProject(id) {
  return knex('project').where('id', id).first()
}

module.exports = {
  getAllProjects,
  getOneProject
}
