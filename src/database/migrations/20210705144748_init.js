exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id')
      table.string('first_name', 64).notNullable().index()
      table.string('last_name', 64).notNullable().index()
      table.timestamps(true, true)
    })
    .createTable('todo_lists', function (table) {
      table.increments('id')
      table.string('title', 64).notNullable().index().unique()
      table.integer('owner_id').references('users.id').onDelete('CASCADE')
      table.timestamps(true, true)
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('todo_lists')
    .dropTableIfExists('users')
}
