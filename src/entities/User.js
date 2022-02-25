const { BaseModel } = require('@/lib/classes/BaseModel')

class User extends BaseModel {
  static schema = {
    ...super.schema,
    firstName: 'string|required',
    lastName: 'string|required'
    // if field not set in schema it won't be passed to DB
  }

  static get relationMappings () {
    const { TodoList } = require('@/entities/TodoList')
    return {
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
}

module.exports = {
  User
}
