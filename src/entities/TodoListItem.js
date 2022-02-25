const { BaseModel } = require('@/lib/classes/BaseModel')

class TodoListItem extends BaseModel {
  static schema = {
    ...super.schema,
    text: 'string|required',
    todo_list_id: 'integer|required'
    // if field not set in schema it won't be passed to DB
  }

  static get relationMappings () {
    const { TodoList } = require('./TodoList')
    return {
      todoLists: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: TodoList,
        join: {
          from: 'todoListItems.todoListId',
          to: 'todoLists.id'
        }
      }
    }
  }
}

module.exports = {
  TodoListItem
}
