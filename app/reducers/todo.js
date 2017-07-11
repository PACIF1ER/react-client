import {
  FETCH_TODOS,
  RECEIVE_TODOS,
  ADD_TODO,
  ADD_TODO_COMPLETE,
  DELETE_TODO,
  SELECT_TODO,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  UPDATE_TODO
} from "../actions/todoActions"

// TODO replace to immutable.js
let initialState = {
  editingId: '',
  initialized: false,
  isFetching: false,
  items: [],
  selectingId: -1,
  isUploading: false
}


const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        isFetching: true,
        initialized: true
      }

    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        items: action.todos
      }

    case ADD_TODO:
      return {
        ...state,
        isUploading: true
      }
    case ADD_TODO_COMPLETE:
      return {
        ...state,
        isUploading: false,
        items: [action.todo, ...state.items]
      }

    case UPDATE_TODO:
      return {
        ...state,
        editingId: '',
        selectingId: -1,
        items: state.items.map((todo) => {
          if(todo.id === action.todo.id){
            return action.todo
          } else {
            return todo
          }
        })
      }

    case DELETE_TODO:
      let todos = state.items.filter((todo) => {
        return todo.id !== action.todoId
      })

      return {
        ...state,
        items: todos
      }

    case SELECT_TODO:
      return {
        ...state,
        selectingId: action.todoId
      }

    case EDIT_TODO:
      return {
        ...state,
        editingId: action.todo.id
      }

    case CANCEL_EDIT_TODO:
      return {
        ...state,
        editingId: ''
      }

    default:
      return state
  }
}

export default todos
