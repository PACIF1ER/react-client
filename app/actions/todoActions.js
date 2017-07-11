import axios from 'axios'

export const FETCH_TODOS = 'FETCH_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_COMPLETE = 'ADD_TODO_COMPLETE'
export const EDIT_TODO = 'EDIT_TODO'
export const UPDATE_TODO= 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const SELECT_TODO = 'SELECT_TODO'
export const SET_ALERT = 'SET_ALERT'
export const CANCEL_EDIT_TODO = 'CANCEL_EDIT_TODO'

export const fetchTodos = () => {

  return (dispatch) => {
  const headers = {
      Authorization: localStorage.auth_token
}
    dispatch({type: FETCH_TODOS})

    setTimeout(() => {
    
      axios.get('http://localhost:3000/api/v1/tasks', { headers: headers })

        .then(res => {
        dispatch({
            type: RECEIVE_TODOS,
            todos: res.data
          })
        })
    }, 2000)
  }
}

export const selectTodo = (todoId) => ({
  type: SELECT_TODO,
  todoId
})

export const addTodo = (body) => {
  return (dispatch) => {
    const headers = {
      Authorization: localStorage.auth_token
}
    dispatch({type: ADD_TODO})
    axios.post('http://localhost:3000/api/v1/tasks', {task: {body}}, { headers: headers})
    .then(res => {
      dispatch({
        type: ADD_TODO_COMPLETE,
        todo: res.data
      })
    })
  }
}

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  todo
})

export const updateTodo = (todoId, params) => {
  return (dispatch) => {
    const headers = {
      Authorization: localStorage.auth_token
}
    return new Promise((resolve, reject) => {
      axios.put(`http://localhost:3000/api/v1/tasks/${todoId}`, {task: params}, { headers: headers})
      .then(res => {
        dispatch({
          type: UPDATE_TODO,
          todo: res.data
        })
        resolve('Your Todo is updated.')
      })
    })
  }
}

export const deleteTodo = (todoId) => {
  const headers = {
      Authorization: localStorage.auth_token
}
  return (dispatch) => {
    axios.delete(`http://localhost:3000/api/v1/tasks/${todoId}`, { headers: headers})
    .then(res => {
      dispatch({
        type: DELETE_TODO,
        todoId
      })
    })
  }
}

export const cancelEdit = () => ({
  type: CANCEL_EDIT_TODO
})
