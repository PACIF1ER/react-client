import { createSelector } from 'reselect'

const todoSelector = (state) => state.todos.items

export const getActiveTodos = createSelector(
  todoSelector,
  (items) => items.filter((item) => !item.completed)
)

export const getCompletedTodos = createSelector(
  todoSelector,
  (items) => items.filter((item) => item.completed)
)

export const getEditingTodo = (state) => (
  state.todos.items.find((todo) => todo.id === state.todos.editingId)
)
