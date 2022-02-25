const { TodoListItem } = require('@/entities/TodoListItem')
const { BaseController } = require('@/lib/classes/BaseController')

class TodoListItemController extends BaseController {
  static get Model () {
    return TodoListItem
  }

  static async getItem (id) {
    const todoList = await TodoListItem.relatedQuery('todoLists').for(id).first()
    return todoList
  }
}

module.exports = {
  TodoListItemController
}
