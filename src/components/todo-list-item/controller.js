const { TodoListItem } = require('@/entities/TodoListItem')
const { BaseController } = require('@/lib/classes/BaseController')

class TodoListItemController extends BaseController {
  static get Model () {
    return TodoListItem
  }

  static async getTodoList (id) {
    return await TodoListItem.relatedQuery('todoLists').for(id).first()
  }
}

module.exports = {
  TodoListItemController
}
