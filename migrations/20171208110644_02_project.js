exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', (table) =>{
    table.increments()
    table.text('name').notNullable()
    table.text('description')
    table.text('imageUrl')
    table.text('deployedUrl').notNullable()
    table.text('gitUrl')
    table.integer('studentId').references('student.id').unsigned().onDelete('cascade')
  })
}

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
}
