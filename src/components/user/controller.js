const { User } = require('@/entities/User')
const { BaseController } = require('@/lib/classes/BaseController')

class UserController extends BaseController {
  static get Model () {
    return User
  }

  static async getTodoLists (id) {
    const todoLists = await User.relatedQuery('todoLists').for(id)
    return todoLists
  }
}

module.exports = {
  UserController
}
