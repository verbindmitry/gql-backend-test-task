const { TodoList } = require('./TodoList')
const { BaseModel } = require('@/lib/classes/BaseModel')

class User extends BaseModel {
  static schema = {
    ...super.schema,
    firstNamr: 'string|required',
    lastNamr: 'string|required'
    // todoLists: [TodoList]
    // if field not set in schema it won't be passed to DB
  }

  static relationMappings = {
    todoLists: {
      relation: BaseModel.HasManyRelation,
      modelClass: TodoList,
      join: {
        from: 'users.id',
        to: 'todoLists.ownerId'
      }
    }
  }
}

module.exports = {
  User
}
