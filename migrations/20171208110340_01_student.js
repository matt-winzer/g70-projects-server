exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', (table) =>{
    table.increments()
    table.text('fullName')
    table.text('firstName')
    table.text('lastName')
    table.text('email').notNullable().unique()
    table.text('code')
    table.text('gradebook')
    table.text('studentSlackName')
    table.text('githubUsername')
    table.boolean('isActive')
    table.text('role')
    table.text('cohort')
  })
}

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student')
}
