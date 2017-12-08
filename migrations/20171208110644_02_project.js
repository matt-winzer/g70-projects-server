exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', (table) =>{
    table.increments()
    table.text('projectName').notNullable()
    table.text('projectUrl').notNullable()
    table.text('projectGit')
    table.integer('memberId').references('member.id').unsigned().onDelete('cascade')
  })
}

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
}
