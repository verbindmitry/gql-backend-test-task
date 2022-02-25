const { UserController } = require('@/components/user/controller')
const { NotFoundError } = require('@/lib/errors')

class UserResolver {
  static resolvers () {
    return {
      Query: {
        countUsers: async (_, { where }) =>
          UserController.count(where),
        users: async (_, { where, skip, limit }) =>
          UserController.find(where, { skip, limit }),
        user: async (_, { where }) => {
          const user = await UserController.findOne(where)
          if (!user) throw new NotFoundError('User not found')

          return user
        }
      },
      Mutation: {
        createUser: async (_, { data }) => UserController.insert({ ...data }),
        updateUser: (_, { id, data }) => UserController.update(id, data),
        deleteUser: (_, { id }) => UserController.deleteById(id).then(() => true)
      },
      User: {
        todoLists: async _ => await UserController.getTodoLists(_.id)
      }
    }
  }
}

module.exports = UserResolver.resolvers()
