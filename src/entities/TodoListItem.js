const { BaseModel } = require('@/lib/classes/BaseModel')

class TodoListItem extends BaseModel {
  static schema = {
    ...super.schema,
    text: 'string|required',
    todoListId: 'integer|required'
    // if field not set in schema it won't be passed to DB
  }

  static get relationMappings () {
    const { TodoList } = require('@/entities/TodoList')
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
