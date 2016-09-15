const FETCH_TASKS = 'FETCH_TASKS';
const MARK_TASK = 'MARK_TASK';
const DELETE_TASK = 'DELETE_TASK';
const INITIAL_STATE = { all: [] }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_TASKS: {
    return { ...state, all: action.payload.data }
  }
  case MARK_TASK: {
    let tasks = state.all.map(todo => {
      return todo.id === action.payload.id ? { ...todo, complete: action.payload.complete } : todo
    })
    return { ...state, all: tasks };
  }
  case DELETE_TASK: {
    let tasks = state.all.filter(todo => {
      todo.id === action.payload.id
    })
    return { ...state, all: tasks };
  }
  default:
    return state;
  }
}
