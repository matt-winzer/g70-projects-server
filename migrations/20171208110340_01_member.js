exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', (table) =>{
    table.increments()
    table.text('username').notNullable().unique()
    table.text('email').notNullable().unique()
    table.text('password').notNullable()
    table.text('bio')
  })
}

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('member')
}
