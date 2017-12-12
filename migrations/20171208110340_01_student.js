exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', (table) =>{
    table.increments()
    table.text('name').notNullable().unique()
    table.text('email').notNullable().unique()
    table.text('password').notNullable()
    table.text('bio')
  })
}

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student')
}
