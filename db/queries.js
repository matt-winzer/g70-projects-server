const knex = require('./connection')

function getAllProjects() {
  return knex('project')
}

function getOneProject(id) {
  return knex('project').where('id', id).first()
}

function postProject(project) {
  return knex('project').insert(project).returning('*')
}

module.exports = {
  getAllProjects,
  getOneProject,
  postProject
}
