const { TodoList } = require('@/entities/TodoList')
const { BaseController } = require('@/lib/classes/BaseController')

class TodoListController extends BaseController {
  static get Model () {
    return TodoList
  }

  static async getOwner (id) {
    const owner = await TodoList.relatedQuery('owner').for(id).first()
    return owner
  }
}

module.exports = {
  TodoListController
}
