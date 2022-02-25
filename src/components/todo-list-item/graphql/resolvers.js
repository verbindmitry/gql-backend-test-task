const { TodoListItemController } = require('@/components/todo-list-item/controller')
const { NotFoundError } = require('@/lib/errors')

class TodoListItemResolver {
  static resolvers () {
    return {
      Query: {
        countTodoListItems: async (_, { where }) =>
          TodoListItemController.count(where),
        todoListItems: async (_, { where, skip, limit }) =>
          TodoListItemController.find(where, { skip, limit }),
        todoListItem: async (_, { where }) => {
          const todoList = await TodoListItemController.findOne(where)
          if (!todoList) throw new NotFoundError('TodoList Item not found')

          return todoList
        }
      },
      Mutation: {
        createTodoListItem: async (_, { data }) => TodoListItemController.insert({ ...data }),
        updateTodoListItem: (_, { id, data }) => TodoListItemController.update(id, data),
        deleteTodoListItem: (_, { id }) => TodoListItemController.deleteById(id).then(() => true)
      },
      TodoListItem: {
        todoList: async _ => await TodoListItemController.getTodoList(_.id)
      }
    }
  }
}

module.exports = TodoListItemResolver.resolvers()
