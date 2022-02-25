const { TodoListController } = require('@/components/todo-list/controller')
const { NotFoundError } = require('@/lib/errors')

class TodoListResolver {
  static resolvers () {
    return {
      Query: {
        countTodoLists: async (_, { where }) =>
          TodoListController.count(where),
        todoLists: async (_, { where, skip, limit }) =>
          TodoListController.find(where, { skip, limit }),
        todoList: async (_, { where }) => {
          const todoList = await TodoListController.findOne(where)
          if (!todoList) throw new NotFoundError('TodoList not found')

          return todoList
        }
      },
      Mutation: {
        createTodoList: async (_, { data }) => TodoListController.insert({ ...data }),
        updateTodoList: (_, { id, data }) => TodoListController.update(id, data),
        deleteTodoList: (_, { id }) => TodoListController.deleteById(id).then(() => true)
      },
      TodoList: {
        owner: async _ => await TodoListController.getOwner(_.id),
        items: async _ => await TodoListController.getItems(_.id)
      }
    }
  }
}

module.exports = TodoListResolver.resolvers()
