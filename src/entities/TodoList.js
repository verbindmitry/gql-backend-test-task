const { BaseModel } = require('@/lib/classes/BaseModel')

class TodoList extends BaseModel {
  static schema = {
    ...super.schema,
    title: 'string|required',
    owner_id: 'integer|required'
    // owner: User
    // if field not set in schema it won't be passed to DB
  }

  static get relationMappings () {
    const { User } = require('./User')
    return {
      owner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'todoLists.ownerId',
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = {
  TodoList
}
