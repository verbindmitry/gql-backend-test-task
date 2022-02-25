const { User } = require('@/entities/User')
const { BaseController } = require('@/lib/classes/BaseController')

class UserController extends BaseController {
  static get Model () {
    return User
  }

  static async getTodoLists (id) {
    return await User.relatedQuery('todoLists').for(id)
  }
}

module.exports = {
  UserController
}
