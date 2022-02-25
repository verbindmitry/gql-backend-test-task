
exports.up = function (knex) {
  return knex.schema
    .createTable('todo_list_items', function (table) {
      table.increments('id')

      table.string('text', 64).notNullable().index()

      table.integer('todo_list_id').references('todo_lists.id').onDelete('CASCADE')

      table.timestamps(true, true)
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('todo_list_items')
}
