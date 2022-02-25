const { TodoList } = require('@/entities/TodoList')
const { BaseController } = require('@/lib/classes/BaseController')

class TodoListController extends BaseController {
  static get Model () {
    return TodoList
  }

  static async getOwner (id) {
    return await TodoList.relatedQuery('owner').for(id).first()
  }

  static async getItems (id) {
    return await TodoList.relatedQuery('todoListItems').for(id)
  }
}

module.exports = {
  TodoListController
}
