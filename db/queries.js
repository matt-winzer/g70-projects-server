const knex = require('./connection')

function getAllProjects() {
  return knex('project')
}

module.exports = {
  getAllProjects
}
