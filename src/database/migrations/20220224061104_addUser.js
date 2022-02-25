
exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id')

      table.string('first_namr', 64).notNullable().index()

      table.string('last_namr', 64).notNullable().index()

      table.timestamps(true, true)
    })
    .alterTable('todo_lists', function (table) {
      table.integer('owner_id').references('users.id').onDelete('CASCADE')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('users')
    .alterTable('todo_lists', function (table) {
      table.dropColumn('owner_id')
    })
}
