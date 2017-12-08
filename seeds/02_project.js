exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "project"; ALTER SEQUENCE project_id_seq RESTART WITH 2;')
    .then(function () {
      var projects = [{
        id: 1,
        projectName: 'My First Project',
        projectUrl: 'https://www.google.com/',
        memberId: 1
      }]
      return knex('project').insert(projects);
    })
}
