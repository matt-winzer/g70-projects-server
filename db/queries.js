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

function deleteProject(id) {
  return knex('project').where('id', id).del()
}

module.exports = {
  getAllProjects,
  getOneProject,
  postProject,
  deleteProject
}
