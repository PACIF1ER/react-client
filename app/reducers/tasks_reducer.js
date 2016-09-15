const INITIAL_STATE = { all: [] }
const FETCH_TASKS = 'FETCH_TASKS';
const MARK_TASK = 'MARK_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CREATE_TASK = 'CREATE_TASK';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_TASKS: {
    return { ...state, all: action.payload.data }
  }
  case CREATE_TASK: {
    let tasks = state.all
    return { ...state, all: [ ...tasks, action.payload] };
  }
  case MARK_TASK: {
    let tasks = state.all.map(todo => {
      return todo.id === action.payload.id ? { ...todo, complete: action.payload.complete } : todo
    })
    return { ...state, all: tasks };
  }
  case DELETE_TASK: {
    let tasks = state.all.filter(todo => {
      return todo.id != action.payload.id
    })
    return { ...state, all: tasks };
  }
  default:
    return state;
  }
}
